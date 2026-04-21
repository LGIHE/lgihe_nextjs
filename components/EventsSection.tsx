"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { eventsApi, type Event } from "@/lib/api-client";

export default function EventsSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const data = await eventsApi.getUpcoming(4);
        setEvents(data.data);
      } catch (err) {
        console.error('Failed to fetch events:', err);
        setError('Unable to load events at this time');
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // Don't render section if no events and not loading
  if (!loading && events.length === 0 && !error) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#3d4d6f] mb-2">Upcoming Events</h2>
            <p className="text-gray-600">Join us for these exciting events and activities</p>
          </div>
          {events.length > 0 && (
            <Link 
              href="/events" 
              className="text-[#3d4d6f] hover:text-[#2f3d57] font-medium flex items-center gap-2 transition-colors"
            >
              View All Events
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1 space-y-3">
                    <div className="bg-gray-200 h-4 rounded w-1/4"></div>
                    <div className="bg-gray-200 h-6 rounded w-3/4"></div>
                    <div className="bg-gray-200 h-4 rounded w-full"></div>
                    <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-500">{error}</p>
          </div>
        )}

        {/* Events Grid */}
        {!loading && !error && events.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <article 
                key={event.id} 
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-6">
                  {/* Date Box */}
                  <div className="flex-shrink-0 w-20 h-20 bg-[#3d4d6f] text-white rounded-lg flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">
                      {new Date(event.start_date).getDate()}
                    </span>
                    <span className="text-xs uppercase">
                      {new Date(event.start_date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    {event.category && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-[#3d4d6f] bg-[#3d4d6f]/10 px-3 py-1 rounded-full">
                          {event.category}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="space-y-1 text-sm text-gray-500">
                      {event.start_date && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{new Date(event.start_date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    <Link 
                      href={`/events/${event.id}`}
                      className="inline-flex items-center gap-1 text-[#3d4d6f] hover:text-[#2f3d57] font-medium text-sm mt-3 transition-colors"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
