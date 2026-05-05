"use client";

import { useEffect, useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import { tendersApi, type Tender } from "@/lib/api-client";
import { renderContent, isHtmlContent } from "@/lib/html-utils";

export default function TendersPage() {
  const [tenderListings, setTenderListings] = useState<Tender[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTenders() {
      try {
        setLoading(true);
        const data = await tendersApi.getAll(1, 20);
        // Filter only open tenders
        const openTenders = data.data.filter(tender => tender.status === 'open');
        setTenderListings(openTenders);
      } catch (error) {
        console.error('Failed to fetch tenders:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTenders();
  }, []);

  return (
    <PageTemplate 
      title="Tender Opportunities" 
      subtitle="Current procurement and tender notices"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The Luigi Giussani Institute of Higher Education invites qualified businesses and service 
          providers to participate in our procurement processes. All tenders are conducted in accordance 
          with transparent and fair procurement practices.
        </p>

        <div className="bg-[#3d4d6f]/5 border-l-4 border-[#3d4d6f] p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">Tender Guidelines</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• All bids must be submitted before the specified deadline</li>
            <li>• Bidders must meet the minimum qualification requirements</li>
            <li>• Tender documents can be obtained from the procurement office</li>
            <li>• Late submissions will not be accepted</li>
            <li>• LGIHE reserves the right to accept or reject any bid</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">Active Tenders</h2>

        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-white border border-gray-200 rounded-lg p-6">
                <div className="bg-gray-200 h-4 rounded w-1/4 mb-3"></div>
                <div className="bg-gray-200 h-6 rounded w-2/3 mb-4"></div>
                <div className="bg-gray-200 h-4 rounded w-full mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : tenderListings.length > 0 ? (
          <div className="space-y-6">
            {tenderListings.map((tender) => (
              <div key={tender.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {tender.reference_number && (
                        <span className="text-sm text-gray-500">Ref: {tender.reference_number}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tender.title}</h3>
                    {isHtmlContent(tender.description) ? (
                      <div 
                        className="text-gray-700 mb-4 line-clamp-3 prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={renderContent(tender.description)}
                      />
                    ) : (
                      <p className="text-gray-700 mb-4 line-clamp-3">{tender.description}</p>
                    )}
                    {tender.deadline && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">
                          Deadline: {new Date(tender.deadline).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link 
                      href={`/tenders/${tender.id}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors text-sm font-medium"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    {/* Show download button if documents are available */}
                    {/* {(tender.has_rfp_document && tender.rfp_download_url) || 
                     (tender.has_tor_document && tender.tor_download_url) || 
                     (tender.documents && tender.documents.length > 0) || 
                     tender.document_url ? (
                      <a 
                        href={
                          tender.rfp_download_url || 
                          tender.tor_download_url || 
                          (tender.documents && tender.documents.length > 0 ? tender.documents[0].url : tender.document_url)
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#3d4d6f] text-[#3d4d6f] rounded-lg hover:bg-[#3d4d6f]/5 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </a>
                    ) : null} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-600 text-lg mb-2">No active tenders at this time</p>
            <p className="text-gray-500 text-sm">Check back soon for new procurement opportunities!</p>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">Procurement Office Contact</h3>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#3d4d6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email: procurement@lgihe.ac.ug</span>
            </p>
            <p className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#3d4d6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Phone: (+256) 764 078712</span>
            </p>
            <p className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#3d4d6f] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Sentamu Road 822 – 829, Luzira, Along Port Bell Road, Kampala, Uganda</span>
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
