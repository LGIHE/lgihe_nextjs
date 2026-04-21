"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ImageWithLoader from "./ImageWithLoader";
import { newsApi, getMediaUrl, formatDate, type NewsItem } from "@/lib/api-client";

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const data = await newsApi.getLatest(3);
        setNews(data.data);
      } catch (err) {
        console.error('Failed to fetch news:', err);
        setError('Unable to load news at this time');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  // Don't render section if no news and not loading
  if (!loading && news.length === 0 && !error) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#3d4d6f] mb-2">Latest News</h2>
            <p className="text-gray-600">Stay updated with the latest happenings at LGIHE</p>
          </div>
          {news.length > 0 && (
            <Link 
              href="/news" 
              className="text-[#3d4d6f] hover:text-[#2f3d57] font-medium flex items-center gap-2 transition-colors"
            >
              View All News
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                <div className="bg-white border border-gray-200 rounded-b-lg p-6">
                  <div className="bg-gray-200 h-4 rounded w-1/3 mb-3"></div>
                  <div className="bg-gray-200 h-6 rounded w-full mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-full mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3"></div>
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

        {/* News Grid */}
        {!loading && !error && news.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {item.featured_image && (
                  <div className="relative h-48 bg-[#3d4d6f]/10">
                    <ImageWithLoader
                      src={getMediaUrl(item.featured_image)}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {item.category && (
                      <span className="text-xs font-semibold text-[#3d4d6f] bg-[#3d4d6f]/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">{formatDate(item.published_at)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  {item.excerpt && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                  )}
                  <Link 
                    href={`/news/${item.slug}`}
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
        )}
      </div>
    </section>
  );
}
