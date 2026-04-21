"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import { newsApi, type NewsItem, getMediaUrl, formatDate } from "@/lib/api-client";
import Image from "next/image";

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        setError(null);
        // Try to fetch by slug first, fallback to ID
        const data = await newsApi.getBySlug(params.id as string);
        setNewsItem(data);
      } catch (err) {
        console.error('Failed to fetch news:', err);
        setError('Failed to load news article. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchNews();
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

  if (error || !newsItem) {
    return (
      <PageTemplate title="News Not Found" subtitle="">
        <div className="max-w-4xl mx-auto text-center py-12">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">News Article Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The news article you are looking for does not exist.'}</p>
          <button
            onClick={() => router.push('/news')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
          </button>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate 
      title={newsItem.title} 
      subtitle={newsItem.category || 'News'}
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push('/news')}
          className="inline-flex items-center gap-2 text-[#3d4d6f] hover:text-[#2f3d57] mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to News
        </button>

        {/* Featured Image */}
        {newsItem.featured_image && (
          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={getMediaUrl(newsItem.featured_image)}
              alt={newsItem.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200">
          {newsItem.category && (
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-[#3d4d6f]/10 text-[#3d4d6f]">
              {newsItem.category}
            </span>
          )}
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">
              Published on {formatDate(newsItem.published_at)}
            </span>
          </div>
          {newsItem.creator && (
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm">By {newsItem.creator.name}</span>
            </div>
          )}
        </div>

        {/* Excerpt */}
        {newsItem.excerpt && (
          <div className="bg-[#3d4d6f]/5 border-l-4 border-[#3d4d6f] p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-700 italic">{newsItem.excerpt}</p>
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-lg font-bold text-[#3d4d6f] mb-4">Share This Article</h3>
          <div className="flex gap-3">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: newsItem.title,
                    text: newsItem.excerpt || newsItem.title,
                    url: window.location.href,
                  });
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#3d4d6f] text-[#3d4d6f] rounded-lg hover:bg-[#3d4d6f]/5 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Link
            </button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="mb-6">
              Subscribe to our newsletter to receive the latest news and updates from LGIHE.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-[#3d4d6f] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
