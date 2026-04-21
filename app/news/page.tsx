"use client";

import { useEffect, useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import Image from "next/image";
import { newsApi, type NewsItem, getMediaUrl } from "@/lib/api-client";

export default function NewsPage() {
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const data = await newsApi.getAll(1, 50);
        setAllNews(data.data);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  // Get unique categories from the news data
  const categories = ["All", ...Array.from(new Set(allNews.map(item => item.category).filter(Boolean)))];

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
                  ? "bg-[#3d4d6f] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                <div className="bg-white border border-gray-200 rounded-b-lg p-6">
                  <div className="bg-gray-200 h-4 rounded w-2/3 mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded w-full mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredNews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {item.featured_image && (
                  <div className="relative h-48 bg-[#3d4d6f]/10">
                    <Image
                      src={getMediaUrl(item.featured_image)}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    <span className="text-xs text-gray-500">
                      {new Date(item.published_at).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt || item.content.substring(0, 150) + '...'}
                  </p>
                  <Link 
                    href={`/news/${item.slug || item.id}`}
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
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p className="text-gray-600">No news articles found in this category.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-12 bg-[#3d4d6f] text-white p-8 rounded-lg">
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
                className="px-6 py-3 bg-white text-[#3d4d6f] rounded-lg font-medium hover:bg-gray-100 transition-colors"
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
