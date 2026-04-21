"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import { jobsApi, type Job } from "@/lib/api-client";

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        setLoading(true);
        setError(null);
        const data = await jobsApi.getById(params.id as string);
        setJob(data);
      } catch (err) {
        console.error('Failed to fetch job:', err);
        setError('Failed to load job details. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchJob();
    }
  }, [params.id]);

  if (loading) {
    return (
      <PageTemplate title="Loading..." subtitle="">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-6">
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

  if (error || !job) {
    return (
      <PageTemplate title="Job Not Found" subtitle="">
        <div className="max-w-4xl mx-auto text-center py-12">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The job posting you are looking for does not exist or has been closed.'}</p>
          <button
            onClick={() => router.push('/jobs')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Jobs
          </button>
        </div>
      </PageTemplate>
    );
  }

  const isActive = job.status === 'active';
  const deadline = job.deadline ? new Date(job.deadline) : null;
  const isExpired = deadline && deadline < new Date();

  return (
    <PageTemplate 
      title={job.title} 
      subtitle="Career Opportunity"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push('/jobs')}
          className="inline-flex items-center gap-2 text-[#3d4d6f] hover:text-[#2f3d57] mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Jobs
        </button>

        {/* Job Status Badge */}
        <div className="mb-6">
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
            isActive && !isExpired ? 'bg-green-100 text-green-800' :
            'bg-red-100 text-red-800'
          }`}>
            {isActive && !isExpired ? 'Active' : 'Closed'}
          </span>
        </div>

        {/* Job Overview Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-[#3d4d6f] mb-4">Job Overview</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {job.department && (
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Department</p>
                  <p className="text-gray-700">{job.department}</p>
                </div>
              </div>
            )}

            {job.type && (
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Employment Type</p>
                  <p className="text-gray-700">{job.type}</p>
                </div>
              </div>
            )}

            {job.location && (
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-700">{job.location}</p>
                </div>
              </div>
            )}

            {job.salary_range && (
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Salary Range</p>
                  <p className="text-gray-700">{job.salary_range}</p>
                </div>
              </div>
            )}

            {deadline && (
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Application Deadline</p>
                  <p className={`${isExpired ? 'text-red-600 font-semibold' : 'text-gray-700'}`}>
                    {deadline.toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                    {isExpired && ' (Expired)'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Job Description */}
        <div className="prose prose-lg max-w-none mb-8">
          <h3 className="text-2xl font-bold text-[#3d4d6f] mb-4">Job Description</h3>
          <div className="text-gray-700 whitespace-pre-wrap">
            {job.description}
          </div>
        </div>

        {/* Responsibilities */}
        {job.responsibilities && (
          <div className="prose prose-lg max-w-none mb-8">
            <h3 className="text-2xl font-bold text-[#3d4d6f] mb-4">Key Responsibilities</h3>
            <div className="text-gray-700 whitespace-pre-wrap">
              {job.responsibilities}
            </div>
          </div>
        )}

        {/* Requirements */}
        {job.requirements && (
          <div className="prose prose-lg max-w-none mb-8">
            <h3 className="text-2xl font-bold text-[#3d4d6f] mb-4">Requirements</h3>
            <div className="text-gray-700 whitespace-pre-wrap">
              {job.requirements}
            </div>
          </div>
        )}

        {/* Application Section */}
        {isActive && !isExpired ? (
          <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Ready to Apply?</h3>
            <p className="mb-6">
              If you meet the requirements and are interested in this position, please submit your 
              application including your CV, cover letter, and relevant certificates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#3d4d6f] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Apply Now
              </button>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: job.title,
                      text: `Check out this job opportunity at LGIHE: ${job.title}`,
                      url: window.location.href,
                    });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Job
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 border border-gray-300 text-gray-700 p-8 rounded-lg text-center">
            <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold mb-2">This Position is Closed</h3>
            <p className="mb-4">
              Applications for this position are no longer being accepted.
            </p>
            <button
              onClick={() => router.push('/jobs')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
            >
              View Other Opportunities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </PageTemplate>
  );
}
