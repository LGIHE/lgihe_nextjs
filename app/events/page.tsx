"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";
import { eventsApi, type Event } from "@/lib/api-client";

export default function EventsPage() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const data = await eventsApi.getAll(1, 20);
        
        // Separate upcoming and past events
        const now = new Date();
        const upcoming = data.data.filter(event => 
          new Date(event.start_date) >= now && event.status === 'upcoming'
        );
        const past = data.data.filter(event => 
          new Date(event.start_date) < now || event.status === 'completed'
        );
        
        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <PageTemplate 
      title="Events at LGIHE" 
      subtitle="Stay connected with campus activities and important dates"
    >
      <div className="space-y-12">
        {/* Upcoming Events */}
        <section>
          <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">Upcoming Events</h2>
          
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-32 rounded-t-lg"></div>
                  <div className="bg-white border border-gray-200 rounded-b-lg p-6">
                    <div className="bg-gray-200 h-4 rounded w-2/3 mb-4"></div>
                    <div className="bg-gray-200 h-4 rounded w-full mb-2"></div>
                    <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {event.category || 'Event'}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">
                          {new Date(event.start_date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      {event.end_date && (
                        <div className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">
                            Until {new Date(event.end_date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm">{event.location}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{event.description}</p>
                    <Link 
                      href={`/events/${event.id}`}
                      className="block w-full bg-[#3d4d6f] text-white py-2 rounded-lg hover:bg-[#2f3d57] transition-colors text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-600">No upcoming events at this time. Check back soon!</p>
            </div>
          )}
        </section>

        {/* Academic Calendar */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">Academic Calendar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">Semester 1, 2026</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-700">Registration Opens</span>
                  <span className="font-semibold text-[#3d4d6f]">Aug 1</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Classes Begin</span>
                  <span className="font-semibold text-[#3d4d6f]">Aug 15</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Mid-term Break</span>
                  <span className="font-semibold text-[#3d4d6f]">Oct 10-14</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Exams</span>
                  <span className="font-semibold text-[#3d4d6f]">Dec 5-16</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">Semester 2, 2027</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-700">Registration Opens</span>
                  <span className="font-semibold text-[#3d4d6f]">Jan 5</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Classes Begin</span>
                  <span className="font-semibold text-[#3d4d6f]">Jan 20</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Mid-term Break</span>
                  <span className="font-semibold text-[#3d4d6f]">Mar 15-19</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Exams</span>
                  <span className="font-semibold text-[#3d4d6f]">May 10-21</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">Past Events</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pastEvents.slice(0, 8).map((event) => (
                <div 
                  key={event.id} 
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <span className="text-xs font-semibold text-[#3d4d6f] uppercase tracking-wider">
                    {event.category || 'Event'}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mt-2 line-clamp-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {new Date(event.start_date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Subscribe to Events */}
        <section className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">
              Subscribe to our events newsletter to receive updates about upcoming events, 
              important dates, and campus activities.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#3d4d6f] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
