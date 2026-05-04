"use client";

import { useEffect, useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import { jobsApi, type Job } from "@/lib/api-client";

// Helper function to strip HTML tags and decode HTML entities
function stripHtml(html: string): string {
  if (!html) return '';
  
  // First, decode HTML entities
  const textarea = document.createElement('textarea');
  textarea.innerHTML = html;
  const decoded = textarea.value;
  
  // Strip HTML tags, replace non-breaking spaces with regular spaces, and normalize whitespace
  return decoded
    .replace(/<[^>]*>/g, ' ')
    .replace(/\u00A0/g, ' ')  // Replace non-breaking spaces (Unicode U+00A0)
    .replace(/\s+/g, ' ')
    .trim();
}

export default function JobsPage() {
  const [jobListings, setJobListings] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const data = await jobsApi.getAll(1, 20);
        // Filter only active jobs
        const activeJobs = data.data.filter(job => job.status === 'active');
        setJobListings(activeJobs);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <PageTemplate 
      title="Career Opportunities" 
      subtitle="Join our team at LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The Luigi Giussani Institute of Higher Education is committed to attracting and retaining 
          talented individuals who share our vision of transforming education in Uganda and throughout Africa.
        </p>

        <div className="bg-[#3d4d6f]/5 border-l-4 border-[#3d4d6f] p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">Why Work at LGIHE?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Be part of a mission-driven institution focused on educational transformation</li>
            <li>• Work with dedicated professionals committed to excellence</li>
            <li>• Opportunities for professional development and growth</li>
            <li>• Collaborative and supportive work environment</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">Current Openings</h2>

        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-white border border-gray-200 rounded-lg p-6">
                <div className="bg-gray-200 h-6 rounded w-2/3 mb-4"></div>
                <div className="bg-gray-200 h-4 rounded w-1/3 mb-4"></div>
                <div className="bg-gray-200 h-4 rounded w-full mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : jobListings.length > 0 ? (
          <div className="space-y-6">
            {jobListings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      {job.department && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.department}
                        </span>
                      )}
                      {job.employment_type && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="capitalize">{job.employment_type.replace('-', ' ')}</span>
                        </span>
                      )}
                      {job.location && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {job.location}
                        </span>
                      )}
                    </div>
                  </div>
                  {job.application_deadline && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#3d4d6f]/10 text-[#3d4d6f]">
                      Deadline: {new Date(job.application_deadline).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {stripHtml(job.purpose_of_role || job.description)}
                </p>
                <Link 
                  href={`/jobs/${job.id}`}
                  className="inline-flex items-center gap-2 text-[#3d4d6f] hover:text-[#2f3d57] font-medium transition-colors"
                >
                  View Details & Apply
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-600 text-lg mb-2">No current job openings</p>
            <p className="text-gray-500 text-sm">Check back soon for new opportunities!</p>
          </div>
        )}

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">Don't See a Position That Fits?</h3>
          <p className="text-gray-700 mb-4">
            We're always interested in hearing from talented individuals who are passionate about education. 
            Send us your CV and cover letter for future opportunities.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
          >
            Contact HR Department
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}
