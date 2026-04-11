'use client';

import { useState, useEffect } from 'react';
import PageTemplate from "@/components/PageTemplate";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <PageTemplate 
      title="Apply to LGIHE" 
      subtitle="Start your application journey"
    >
      <div className="max-w-4xl mx-auto">
        {!showForm ? (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-6">
              <h3 className="text-lg font-semibold text-[#3d4d6f] mb-2">Application Options</h3>
              <p className="text-gray-700">
                Choose how you would like to apply to LGIHE. You can either fill out the online 
                application form or download the PDF form to complete manually.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#3d4d6f] rounded-lg p-6">
                <div className="text-center mb-4">
                  <svg className="w-16 h-16 mx-auto text-[#3d4d6f] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">Online Application</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Fill out the application form online. Your progress will be saved automatically.
                  </p>
                </div>
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-[#3d4d6f] text-white py-3 px-6 rounded-lg hover:bg-[#2f3d57] transition-colors font-semibold"
                >
                  Start Online Application
                </button>
                <div className="mt-3 text-xs text-gray-500 text-center">
                  ✓ Auto-save feature<br />
                  ✓ Works offline<br />
                  ✓ Submit when ready
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <div className="text-center mb-4">
                  <svg className="w-16 h-16 mx-auto text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Download PDF Form</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Download the application form to fill out manually and submit in person or by email.
                  </p>
                </div>
                <a
                  href="/resources/LGIHE APPLICATION FORM 2026.pdf"
                  download
                  className="block w-full bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors font-semibold text-center"
                >
                  Download PDF Form
                </a>
                <div className="mt-3 text-xs text-gray-500 text-center">
                  ✓ Print and fill manually<br />
                  ✓ Submit by email or in person<br />
                  ✓ Traditional application method
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#3d4d6f] mb-3">Before You Apply</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-semibold">Please have the following documents ready:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Recent passport-size photograph</li>
                  <li>Copies of academic certificates and transcripts</li>
                  <li>National ID or passport copy</li>
                  <li>Birth certificate</li>
                  <li>Recommendation letters (if applicable)</li>
                  <li>Proof of payment for application fee</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Application fee is required before submission. 
                Visit our <a href="/admissions/fees" className="text-[#3d4d6f] underline">fees page</a> for payment details.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setShowForm(false)}
              className="mb-4 text-[#3d4d6f] hover:text-[#2f3d57] flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to application options
            </button>
            <ApplicationForm />
          </div>
        )}
      </div>
    </PageTemplate>
  );
}
