"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import { tendersApi, type Tender, type TenderDocument } from "@/lib/api-client";
import { renderContent, isHtmlContent } from "@/lib/html-utils";

export default function TenderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [tender, setTender] = useState<Tender | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTender() {
      try {
        setLoading(true);
        setError(null);
        const data = await tendersApi.getById(params.id as string);
        setTender(data);
      } catch (err) {
        console.error('Failed to fetch tender:', err);
        setError('Failed to load tender details. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchTender();
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

  if (error || !tender) {
    return (
      <PageTemplate title="Tender Not Found" subtitle="">
        <div className="max-w-4xl mx-auto text-center py-12">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Tender Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The tender you are looking for does not exist or has been closed.'}</p>
          <button
            onClick={() => router.push('/tenders')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Tenders
          </button>
        </div>
      </PageTemplate>
    );
  }

  const isOpen = tender.status === 'open';
  const deadline = new Date(tender.deadline);
  const isExpired = deadline < new Date();

  // Build documents array from backend response
  const buildDocumentsArray = (): TenderDocument[] => {
    const docs: TenderDocument[] = [];
    
    // Add RFP document if available
    if (tender.has_rfp_document && tender.rfp_download_url) {
      docs.push({
        id: 1,
        name: tender.rfp_document_name || 'RFP Document',
        type: 'rfp',
        url: tender.rfp_download_url,
        size: tender.rfp_document_size,
        created_at: tender.created_at
      });
    }
    
    // Add ToR document if available
    if (tender.has_tor_document && tender.tor_download_url) {
      docs.push({
        id: 2,
        name: tender.tor_document_name || 'ToR Document',
        type: 'tor',
        url: tender.tor_download_url,
        size: tender.tor_document_size,
        created_at: tender.created_at
      });
    }
    
    // If backend sends documents array, use that instead
    if (tender.documents && tender.documents.length > 0) {
      return tender.documents;
    }
    
    return docs;
  };

  const availableDocuments = buildDocumentsArray();
  const hasMultipleDocuments = availableDocuments.length > 1;
  const hasSingleDocument = availableDocuments.length === 1 || tender.document_url;
  const hasDocuments = availableDocuments.length > 0 || tender.document_url;

  // Helper function to get document type label
  const getDocumentTypeLabel = (type: string): string => {
    const labels: Record<string, string> = {
      'rfp': 'Request for Proposal (RFP)',
      'tor': 'Terms of Reference (ToR)',
      'specification': 'Technical Specifications',
      'other': 'Tender Document'
    };
    return labels[type.toLowerCase()] || 'Tender Document';
  };

  // Helper function to format file size
  const formatFileSize = (bytes?: number): string => {
    if (!bytes) return '';
    const kb = bytes / 1024;
    const mb = kb / 1024;
    if (mb >= 1) return `${mb.toFixed(2)} MB`;
    return `${kb.toFixed(2)} KB`;
  };

  return (
    <PageTemplate 
      title={tender.title} 
      subtitle="Tender Opportunity"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push('/tenders')}
          className="inline-flex items-center gap-2 text-[#3d4d6f] hover:text-[#2f3d57] mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Tenders
        </button>

        {/* Tender Status Badge */}
        <div className="mb-6">
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
            isOpen && !isExpired ? 'bg-green-100 text-green-800' :
            tender.status === 'awarded' ? 'bg-blue-100 text-blue-800' :
            'bg-red-100 text-red-800'
          }`}>
            {tender.status === 'open' && !isExpired ? 'Open' :
             tender.status === 'awarded' ? 'Awarded' : 'Closed'}
          </span>
        </div>

        {/* Tender Overview Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-[#3d4d6f] mb-4">Tender Information</h3>
          <div className="space-y-4">
            {tender.reference_number && (
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Reference Number</p>
                  <p className="text-gray-700 font-mono">{tender.reference_number}</p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">Submission Deadline</p>
                <p className={`${isExpired ? 'text-red-600 font-semibold' : 'text-gray-700'}`}>
                  {deadline.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  {isExpired && ' (Expired)'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">Status</p>
                <p className="text-gray-700 capitalize">{tender.status}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">Published Date</p>
                <p className="text-gray-700">
                  {new Date(tender.created_at).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tender Description */}
        <div className="prose prose-lg max-w-none mb-8">
          <h3 className="text-2xl font-bold text-[#3d4d6f] mb-4">Tender Description</h3>
          {isHtmlContent(tender.description) ? (
            <div 
              className="text-gray-700 rich-html-content"
              dangerouslySetInnerHTML={renderContent(tender.description)}
            />
          ) : (
            <div className="text-gray-700 whitespace-pre-wrap">
              {tender.description}
            </div>
          )}
        </div>

        {/* Requirements */}
        {tender.requirements && (
          <div className="prose prose-lg max-w-none mb-8">
            <h3 className="text-2xl font-bold text-[#3d4d6f] mb-4">Requirements & Qualifications</h3>
            {isHtmlContent(tender.requirements) ? (
              <div 
                className="text-gray-700 rich-html-content"
                dangerouslySetInnerHTML={renderContent(tender.requirements)}
              />
            ) : (
              <div className="text-gray-700 whitespace-pre-wrap">
                {tender.requirements}
              </div>
            )}
          </div>
        )}

        {/* Important Guidelines */}
        <div className="bg-[#3d4d6f]/5 border-l-4 border-[#3d4d6f] p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Submission Guidelines</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• All bids must be submitted before the specified deadline</li>
            <li>• Bidders must meet the minimum qualification requirements</li>
            <li>• Tender documents must be obtained from the procurement office</li>
            <li>• Late submissions will not be accepted</li>
            <li>• LGIHE reserves the right to accept or reject any bid</li>
            <li>• All submissions must be in sealed envelopes clearly marked with the tender reference number</li>
          </ul>
        </div>

        {/* Document Download Section */}
        {hasDocuments && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-[#3d4d6f] mb-4">Tender Documents</h3>
            <p className="text-gray-700 mb-6">
              Download the complete tender document package including specifications, terms, and conditions.
            </p>
            
            {/* Multiple Documents */}
            {hasMultipleDocuments && availableDocuments.length > 0 ? (
              <div className="space-y-3">
                {availableDocuments.map((doc, index) => (
                  <div 
                    key={doc.id || index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#3d4d6f] transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {getDocumentTypeLabel(doc.type)}
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          {doc.name && <span>{doc.name}</span>}
                          {doc.size && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span>{formatFileSize(doc.size)}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors text-sm font-medium flex-shrink-0"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              /* Single Document */
              <a
                href={availableDocuments.length > 0 ? availableDocuments[0].url : tender.document_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Tender Documents
              </a>
            )}
          </div>
        )}

        {/* Action Section */}
        {isOpen && !isExpired ? (
          <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Ready to Submit a Bid?</h3>
            <p className="mb-6">
              If you meet the requirements and are interested in this tender opportunity, please prepare 
              your bid according to the guidelines and submit it to our procurement office before the deadline.
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Procurement Office Contact</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email: procurement@lgihe.ac.ug
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Phone: (+256) 764 078712
                  </p>
                  <p className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Sentamu Road 822 – 829, Luzira, Along Port Bell Road, Kampala, Uganda
                  </p>
                </div>
              </div>
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#3d4d6f] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Procurement Office
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 border border-gray-300 text-gray-700 p-8 rounded-lg text-center">
            <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold mb-2">
              {tender.status === 'awarded' ? 'This Tender Has Been Awarded' : 'This Tender is Closed'}
            </h3>
            <p className="mb-4">
              {tender.status === 'awarded' 
                ? 'This tender has been awarded to a successful bidder.'
                : 'Submissions for this tender are no longer being accepted.'}
            </p>
            <button
              onClick={() => router.push('/tenders')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
            >
              View Other Tenders
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
