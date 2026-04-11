"use client";

import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Open Day 2026",
    description: "Join us for an exciting open day where prospective students can tour our campus, meet faculty, and learn about our programs.",
    date: "April 20, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "LGIHE Main Campus",
    category: "Campus Event",
  },
  {
    id: 2,
    title: "Education Leadership Conference",
    description: "Annual conference bringing together educators and leaders to discuss innovative approaches to education in Africa.",
    date: "May 5, 2026",
    time: "8:00 AM - 5:00 PM",
    location: "Conference Hall",
    category: "Conference",
  },
  {
    id: 3,
    title: "Student Research Symposium",
    description: "Students present their research projects and findings in various fields of education and professional development.",
    date: "May 15, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "Academic Building",
    category: "Academic",
  },
  {
    id: 4,
    title: "Professional Development Workshop",
    description: "Workshop series for teachers focusing on modern pedagogical approaches and classroom management techniques.",
    date: "May 25, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Training Center",
    category: "Workshop",
  },
];

export default function EventsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#3d4d6f] mb-2">Upcoming Events</h2>
            <p className="text-gray-600">Join us for these exciting events and activities</p>
          </div>
          <Link 
            href="/events" 
            className="text-[#3d4d6f] hover:text-[#2f3d57] font-medium flex items-center gap-2 transition-colors"
          >
            View All Events
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

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
                    {new Date(event.date).getDate()}
                  </span>
                  <span className="text-xs uppercase">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                  </span>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-[#3d4d6f] bg-[#3d4d6f]/10 px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="space-y-1 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
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
      </div>
    </section>
  );
}
