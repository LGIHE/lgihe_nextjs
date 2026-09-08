"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import { eventsApi, type Event, getMediaUrl } from "@/lib/api-client";
import Image from "next/image";

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvent() {
      try {
        setLoading(true);
        setError(null);
        const data = await eventsApi.getById(params.id as string);
        console.log('Event data:', data);
        console.log('Featured image URL:', getMediaUrl(data.featured_image));
        setEvent(data);
      } catch (err) {
        console.error('Failed to fetch event:', err);
        setError('Failed to load event details. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchEvent();
    }
  }, [params.id]);

  if (loading) {
    return (
      <PageTemplate title="Loading..." subtitle="">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="bg-gray-200 h-64 rounded-lg"></div>
            <div className="bg-gray-200 h-8 rounded w-3/4"></div>
            <div className="bg-gray-200 h-4 rounded w-1/2"></div>
            <div className="space-y-3">
              <div className="bg-gray-200 h-4 rounded"></div>
              <div className="bg-gray-200 h-4 rounded"></div>
              <div className="bg-gray-200 h-4 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </PageTemplate>
    );
  }

  if (error || !event) {
    return (
      <PageTemplate title="Event Not Found" subtitle="">
        <div className="max-w-4xl mx-auto text-center py-12">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The event you are looking for does not exist.'}</p>
          <button
            onClick={() => router.push('/events')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Events
          </button>
        </div>
      </PageTemplate>
    );
  }

  const eventDate = new Date(event.start_date);
  const endDate = event.end_date ? new Date(event.end_date) : null;
  const isUpcoming = eventDate >= new Date();

  return (
    <PageTemplate 
      title={event.title} 
      subtitle={event.category || 'Event'}
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push('/events')}
          className="inline-flex items-center gap-2 text-[#3d4d6f] hover:text-[#2f3d57] mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Events
        </button>

        {/* Featured Image */}
        {event.featured_image && (
          <div className="relative h-96 rounded-lg overflow-hidden mb-8 bg-gray-200">
            <Image
              src={getMediaUrl(event.featured_image)}
              alt={event.title}
              fill
              className="object-cover"
              priority
              onError={(e) => {
                console.error('Image failed to load:', getMediaUrl(event.featured_image));
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Event Status Badge */}
        <div className="mb-6">
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
            event.status === 'upcoming' ? 'bg-green-100 text-green-800' :
            event.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
            event.status === 'completed' ? 'bg-gray-100 text-gray-800' :
            'bg-red-100 text-red-800'
          }`}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
        </div>

        {/* Event Details Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-[#3d4d6f] mb-4">Event Details</h3>
          <div className="space-y-4">
            {/* Date */}
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">Date</p>
                <p className="text-gray-700">
                  {eventDate.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  {endDate && (
                    <span className="text-gray-600">
                      {' '}- {endDate.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Location */}
            {event.location && (
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-700">{event.location}</p>
                </div>
              </div>
            )}

            {/* Category */}
            {event.category && (
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Category</p>
                  <p className="text-gray-700">{event.category}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Event Description */}
        <div className="prose prose-lg max-w-none mb-8">
          <h3 className="text-2xl font-bold text-[#3d4d6f] mb-4">About This Event</h3>
          <div 
            className="text-gray-700 whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ 
              __html: event.description?.replace(/<[^>]*>/g, '') || '' 
            }}
          />
        </div>

        {/* Call to Action */}
        {isUpcoming && (
          <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">Interested in Attending?</h3>
            <p className="mb-6">
              For more information or to register for this event, please contact us.
            </p>
            <button
              onClick={() => router.push('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#3d4d6f] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </PageTemplate>
  );
}
