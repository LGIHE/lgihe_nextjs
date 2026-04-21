"use client";

import { useEffect, useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import ImageWithLoader from "@/components/ImageWithLoader";
import { newsApi, getMediaUrl, formatDate, type NewsItem } from "@/lib/api-client";

export default function CampusNewsPage() {
  const [featuredNews, setFeaturedNews] = useState<NewsItem | null>(null);
  const [newsArticles, setNewsArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const data = await newsApi.getAll(1, 10);
        
        if (data.data.length > 0) {
          setFeaturedNews(data.data[0]); // First article as featured
          setNewsArticles(data.data.slice(1)); // Rest as regular articles
        }
      } catch (error) {
        console.error('Failed to fetch campus news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <PageTemplate 
      title="Campus News" 
      subtitle="Stay informed about the latest happenings at LGIHE"
    >
      <div className="space-y-8">
        {/* Featured News */}
        <section>
          {loading ? (
            <div className="bg-gray-200 rounded-lg overflow-hidden animate-pulse">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="bg-gray-300 h-4 rounded w-1/4 mb-4"></div>
                  <div className="bg-gray-300 h-8 rounded w-3/4 mb-4"></div>
                  <div className="bg-gray-300 h-4 rounded w-full mb-2"></div>
                  <div className="bg-gray-300 h-4 rounded w-5/6"></div>
                </div>
                <div className="h-64 md:h-auto bg-gray-300"></div>
              </div>
            </div>
          ) : featuredNews ? (
            <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-sm font-semibold uppercase tracking-wider mb-2">Featured Story</span>
                  <h2 className="text-3xl font-bold mb-4">{featuredNews.title}</h2>
                  <p className="mb-6 text-white/90 line-clamp-3">
                    {featuredNews.excerpt || featuredNews.content.substring(0, 200) + '...'}
                  </p>
                  <Link 
                    href={`/news/${featuredNews.slug}`}
                    className="inline-block bg-white text-[#3d4d6f] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit"
                  >
                    Read Full Story
                  </Link>
                </div>
                {featuredNews.featured_image ? (
                  <div className="relative h-64 md:h-auto">
                    <ImageWithLoader
                      src={getMediaUrl(featuredNews.featured_image)}
                      alt={featuredNews.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-64 md:h-auto bg-[#2f3d57]"></div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-gray-600">No featured news available at this time.</p>
            </div>
          )}
        </section>

        {/* Latest News */}
        <section>
          <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">Latest News</h2>
          
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                  <div className="bg-white border border-gray-200 rounded-b-lg p-6">
                    <div className="bg-gray-200 h-4 rounded w-1/3 mb-3"></div>
                    <div className="bg-gray-200 h-6 rounded w-full mb-3"></div>
                    <div className="bg-gray-200 h-4 rounded w-full mb-2"></div>
                    <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : newsArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <article 
                  key={article.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {article.featured_image ? (
                    <div className="relative h-48">
                      <ImageWithLoader
                        src={getMediaUrl(article.featured_image)}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-[#3d4d6f]/10"></div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      {article.category && (
                        <span className="text-xs font-semibold text-[#3d4d6f] uppercase tracking-wider">
                          {article.category}
                        </span>
                      )}
                      <span className="text-xs text-gray-500">{formatDate(article.published_at)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{article.title}</h3>
                    {article.excerpt && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    )}
                    <Link 
                      href={`/news/${article.slug}`}
                      className="text-[#3d4d6f] font-semibold text-sm hover:underline"
                    >
                      Read More →
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
              <p className="text-gray-600">No news articles available at this time. Check back soon!</p>
            </div>
          )}
        </section>

        {/* News Categories */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {["Academic", "Research", "Student Life", "Events", "Partnerships", "Awards", "Community", "Announcements"].map((category) => (
              <Link 
                key={category}
                href={`/news?category=${category.toLowerCase().replace(' ', '-')}`}
                className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:border-[#3d4d6f] hover:shadow-md transition-all"
              >
                <span className="font-semibold text-[#3d4d6f]">{category}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Campus News</h2>
            <p className="mb-6">
              Get the latest news and updates delivered directly to your inbox.
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
