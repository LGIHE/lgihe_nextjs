"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const newsItems = [
  {
    id: 1,
    title: "LGIHE Welcomes New Cohort of Students",
    excerpt: "We are excited to welcome our newest cohort of students to LGIHE. This diverse group brings fresh perspectives and enthusiasm to our academic community.",
    date: "March 15, 2026",
    category: "Admissions",
    image: "/images/news-1.jpg",
  },
  {
    id: 2,
    title: "Research Excellence Award Announced",
    excerpt: "LGIHE faculty members have been recognized for their outstanding contributions to educational research in Uganda and East Africa.",
    date: "March 10, 2026",
    category: "Research",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    title: "New Partnership with International Universities",
    excerpt: "LGIHE has established partnerships with leading universities to enhance academic exchange and collaborative research opportunities.",
    date: "March 5, 2026",
    category: "Partnerships",
    image: "/images/news-3.jpg",
  },
];

export default function NewsSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#3d4d6f] mb-2">Latest News</h2>
            <p className="text-gray-600">Stay updated with the latest happenings at LGIHE</p>
          </div>
          <Link 
            href="/news" 
            className="text-[#3d4d6f] hover:text-[#2f3d57] font-medium flex items-center gap-2 transition-colors"
          >
            View All News
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 bg-[#3d4d6f]/10">
                {!imageErrors[item.id] && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    onError={() => setImageErrors(prev => ({ ...prev, [item.id]: true }))}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center text-[#3d4d6f]/40 text-sm">
                  News Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#3d4d6f] bg-[#3d4d6f]/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link 
                  href={`/news/${item.id}`}
                  className="text-[#3d4d6f] hover:text-[#2f3d57] font-medium text-sm flex items-center gap-1 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
