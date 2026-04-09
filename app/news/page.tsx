"use client";

import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const allNews = [
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
  {
    id: 4,
    title: "Professional Development Workshop Series Launched",
    excerpt: "A new series of workshops for teachers and educators focusing on innovative teaching methodologies and classroom management.",
    date: "February 28, 2026",
    category: "Events",
    image: "/images/news-4.jpg",
  },
  {
    id: 5,
    title: "Student Research Symposium Success",
    excerpt: "Students presented groundbreaking research projects at the annual symposium, showcasing excellence in academic inquiry.",
    date: "February 20, 2026",
    category: "Academic",
    image: "/images/news-5.jpg",
  },
  {
    id: 6,
    title: "New Library Resources Available",
    excerpt: "The LGIHE library has expanded its collection with new digital resources and academic journals for student and faculty use.",
    date: "February 15, 2026",
    category: "Campus",
    image: "/images/news-6.jpg",
  },
];

export default function NewsPage() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Admissions", "Research", "Partnerships", "Events", "Academic", "Campus"];

  const filteredNews = selectedCategory === "All" 
    ? allNews 
    : allNews.filter(item => item.category === selectedCategory);

  return (
    <PageTemplate 
      title="Campus News" 
      subtitle="Stay updated with the latest happenings at LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-[#5B6F8C] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <article key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 bg-[#5B6F8C]/10">
                {!imageErrors[item.id] && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    onError={() => setImageErrors(prev => ({ ...prev, [item.id]: true }))}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center text-[#5B6F8C]/40 text-sm">
                  News Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#5B6F8C] bg-[#5B6F8C]/10 px-3 py-1 rounded-full">
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
                  className="text-[#5B6F8C] hover:text-[#4a5a70] font-medium text-sm flex items-center gap-1 transition-colors"
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

        {/* Newsletter Signup */}
        <div className="mt-12 bg-[#5B6F8C] text-white p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Informed</h3>
            <p className="mb-6">
              Subscribe to our newsletter to receive the latest news and updates from LGIHE directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[#5B6F8C] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
