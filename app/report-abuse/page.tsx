'use client';

import { useState } from 'react';
import PageTemplate from "@/components/PageTemplate";

export default function ReportAbusePage() {
  const [formData, setFormData] = useState({
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    reporterRelationship: '',
    incidentType: '',
    incidentDate: '',
    incidentLocation: '',
    personsInvolved: '',
    detailedDescription: '',
    witnessesPresent: '',
    previouslyReported: '',
    evidenceAvailable: '',
    preferredContact: 'email',
    anonymousReport: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
      const response = await fetch(`${apiUrl}/report-abuse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setShowSuccess(true);
        setFormData({
          reporterName: '',
          reporterEmail: '',
          reporterPhone: '',
          reporterRelationship: '',
          incidentType: '',
          incidentDate: '',
          incidentLocation: '',
          personsInvolved: '',
          detailedDescription: '',
          witnessesPresent: '',
          previouslyReported: '',
          evidenceAvailable: '',
          preferredContact: 'email',
          anonymousReport: false,
        });
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error('Error submitting abuse report:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTemplate 
      title="Report Abuse" 
      subtitle="Confidential Reporting System"
    >
      <div className="prose prose-lg max-w-none">
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-green-900 font-bold text-lg mt-0 mb-1">Report Submitted Successfully</h3>
              <p className="text-green-800 text-sm mb-0">
                Thank you for reporting this incident. Your report has been received and will be handled with the utmost confidentiality. 
                Our team will review the information and take appropriate action. If you provided contact information, 
                we will reach out to you within 24-48 hours.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {showError && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-red-900 font-bold text-lg mt-0 mb-1">Submission Failed</h3>
              <p className="text-red-800 text-sm mb-0">
                We encountered an error while submitting your report. Please try again or contact us directly at 
                <a href="mailto:safeguarding@lgihe.ac.ug" className="underline ml-1">safeguarding@lgihe.ac.ug</a>
              </p>
            </div>
          </div>
        )}

        {/* Important Information */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <h3 className="text-blue-900 font-bold text-xl mt-0 mb-3 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Important Information
          </h3>
          <ul className="text-blue-900 text-sm space-y-2 mb-0">
            <li>• All reports are treated with strict confidentiality</li>
            <li>• You can choose to remain anonymous</li>
            <li>• Reports are reviewed by trained safeguarding officers</li>
            <li>• We take all reports seriously and will investigate thoroughly</li>
            <li>• If you are in immediate danger, please contact emergency services: <strong>Police 999</strong></li>
          </ul>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
          <h3 className="text-red-900 font-bold text-xl mt-0 mb-3 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Emergency Contacts
          </h3>
          <div className="text-red-900 text-sm space-y-2">
            <p className="mb-2"><strong>If you are in immediate danger, please contact:</strong></p>
            <ul className="space-y-1 mb-0">
              <li>• <strong>Police Emergency:</strong> 999 or 112</li>
              <li>• <strong>LGIHE Security:</strong> (+256) 764 078712</li>
              <li>• <strong>Safeguarding Officer:</strong> safeguarding@lgihe.ac.ug</li>
            </ul>
          </div>
        </div>

        {/* Report Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6 mt-0">Confidential Report Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Anonymous Reporting Option */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="anonymousReport"
                  checked={formData.anonymousReport}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-[#3d4d6f] border-gray-300 rounded focus:ring-[#3d4d6f]"
                />
                <div>
                  <span className="font-semibold text-gray-900">Submit this report anonymously</span>
                  <p className="text-sm text-gray-600 mt-1">
                    If checked, you can skip the contact information fields below. However, providing contact details 
                    allows us to follow up with you for additional information if needed.
                  </p>
                </div>
              </label>
            </div>

            {/* Reporter Information */}
            {!formData.anonymousReport && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#3d4d6f] mb-3">Your Information (Optional for Anonymous Reports)</h3>
                
                <div>
                  <label htmlFor="reporterName" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="reporterName"
                    name="reporterName"
                    value={formData.reporterName}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reporterEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="reporterEmail"
                      name="reporterEmail"
                      value={formData.reporterEmail}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label htmlFor="reporterPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Phone Number
                    </label>
                    <input
                      type="tel"
                      id="reporterPhone"
                      name="reporterPhone"
                      value={formData.reporterPhone}
                      onChange={handleChange}
                      placeholder="+256 XXX XXX XXX"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reporterRelationship" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Relationship to the Incident
                  </label>
                  <select
                    id="reporterRelationship"
                    name="reporterRelationship"
                    value={formData.reporterRelationship}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  >
                    <option value="">Select your relationship</option>
                    <option value="victim">I am the victim</option>
                    <option value="witness">I witnessed the incident</option>
                    <option value="third-party">I heard about it from someone else</option>
                    <option value="concerned-party">I am a concerned party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="no-contact">Do not contact me</option>
                  </select>
                </div>
              </div>
            )}

            {/* Incident Details */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-[#3d4d6f] mb-3">Incident Details</h3>

              <div>
                <label htmlFor="incidentType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Incident <span className="text-red-500">*</span>
                </label>
                <select
                  id="incidentType"
                  name="incidentType"
                  value={formData.incidentType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                >
                  <option value="">Select incident type</option>
                  <option value="physical-abuse">Physical Abuse</option>
                  <option value="sexual-harassment">Sexual Harassment</option>
                  <option value="sexual-assault">Sexual Assault</option>
                  <option value="verbal-abuse">Verbal Abuse</option>
                  <option value="bullying">Bullying</option>
                  <option value="discrimination">Discrimination</option>
                  <option value="stalking">Stalking</option>
                  <option value="emotional-abuse">Emotional/Psychological Abuse</option>
                  <option value="financial-exploitation">Financial Exploitation</option>
                  <option value="neglect">Neglect</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="incidentDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Incident <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="incidentDate"
                    name="incidentDate"
                    value={formData.incidentDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="incidentLocation" className="block text-sm font-medium text-gray-700 mb-1">
                    Location of Incident <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="incidentLocation"
                    name="incidentLocation"
                    value={formData.incidentLocation}
                    onChange={handleChange}
                    placeholder="e.g., Library, Classroom 101, Campus grounds"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="personsInvolved" className="block text-sm font-medium text-gray-700 mb-1">
                  Person(s) Involved <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="personsInvolved"
                  name="personsInvolved"
                  value={formData.personsInvolved}
                  onChange={handleChange}
                  placeholder="Please provide names, descriptions, or any identifying information about the person(s) involved"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="detailedDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Detailed Description of the Incident <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="detailedDescription"
                  name="detailedDescription"
                  value={formData.detailedDescription}
                  onChange={handleChange}
                  placeholder="Please provide as much detail as possible about what happened, including the sequence of events, what was said or done, and any other relevant information"
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Include specific details such as dates, times, locations, and any witnesses present.
                </p>
              </div>

              <div>
                <label htmlFor="witnessesPresent" className="block text-sm font-medium text-gray-700 mb-1">
                  Were There Any Witnesses?
                </label>
                <textarea
                  id="witnessesPresent"
                  name="witnessesPresent"
                  value={formData.witnessesPresent}
                  onChange={handleChange}
                  placeholder="If yes, please provide names or descriptions of witnesses"
                  rows={2}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                ></textarea>
              </div>

              <div>
                <label htmlFor="previouslyReported" className="block text-sm font-medium text-gray-700 mb-1">
                  Has This Been Reported Before?
                </label>
                <textarea
                  id="previouslyReported"
                  name="previouslyReported"
                  value={formData.previouslyReported}
                  onChange={handleChange}
                  placeholder="If yes, please provide details about when and to whom it was reported"
                  rows={2}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                ></textarea>
              </div>

              <div>
                <label htmlFor="evidenceAvailable" className="block text-sm font-medium text-gray-700 mb-1">
                  Is There Any Evidence Available?
                </label>
                <textarea
                  id="evidenceAvailable"
                  name="evidenceAvailable"
                  value={formData.evidenceAvailable}
                  onChange={handleChange}
                  placeholder="e.g., photos, videos, messages, emails, documents (please describe what evidence exists)"
                  rows={2}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Do not upload evidence here. If you have evidence, please mention it and our team will contact you about secure submission methods.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3d4d6f] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#2f3d57] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Report...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Submit Confidential Report
                  </>
                )}
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">
                By submitting this form, you acknowledge that the information provided is accurate to the best of your knowledge.
              </p>
            </div>
          </form>
        </div>

        {/* Additional Support Resources */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-4 mt-0">Support Resources</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">On-Campus Support</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Student Counseling Services</li>
                <li>• Health Center</li>
                <li>• Dean of Students Office</li>
                <li>• Campus Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">External Resources</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Uganda Police: 999 or 112</li>
                <li>• FIDA Uganda: (+256) 414 267 983</li>
                <li>• Sauti 116 Child Helpline: 116</li>
                <li>• Mental Health Uganda: (+256) 800 100 066</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Confidentiality Statement */}
        <div className="mt-6 p-4 bg-[#3d4d6f] text-white rounded-lg">
          <p className="text-sm mb-0">
            <strong>Confidentiality Commitment:</strong> All reports submitted through this form are handled with strict confidentiality. 
            Information will only be shared with authorized personnel on a need-to-know basis as part of the investigation and resolution process. 
            We are committed to protecting your privacy while ensuring a safe environment for all members of our community.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
