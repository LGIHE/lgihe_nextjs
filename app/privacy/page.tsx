import PageTemplate from "@/components/PageTemplate";

export const metadata = {
  title: "Privacy Policy | LGIHE",
  description: "Privacy policy and data protection information for Luigi Giussani Institute of Higher Education website visitors.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageTemplate
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information"
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <p className="text-gray-600 mb-8">
          <strong>Last Updated:</strong> April 13, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Luigi Giussani Institute of Higher Education ("LGIHE", "we", "us", or "our") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <p className="text-gray-700">
            By using our website, you consent to the data practices described in this policy, subject to your consent preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-[#3d4d6f] mb-3">2.1 Analytics Data (Optional)</h3>
          <p className="text-gray-700 mb-4">
            With your consent, we collect anonymous analytics data to improve our website:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Page Views:</strong> Pages you visit on our website</li>
            <li><strong>Session Information:</strong> Duration of your visit and pages per session</li>
            <li><strong>Device Information:</strong> Device type (desktop, mobile, tablet) and browser type</li>
            <li><strong>Geographic Location:</strong> Country and city (not precise location)</li>
            <li><strong>Referrer Information:</strong> Website that referred you to us</li>
            <li><strong>Performance Data:</strong> Page load times and technical errors</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#3d4d6f] mb-3">2.2 Essential Data (Always Collected)</h3>
          <p className="text-gray-700 mb-4">
            Some data is necessary for the website to function properly:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Technical Logs:</strong> Server logs for security and troubleshooting</li>
            <li><strong>Error Reports:</strong> Technical errors to maintain website functionality</li>
            <li><strong>Security Data:</strong> Information to prevent abuse and ensure security</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#3d4d6f] mb-3">2.3 Form Submissions</h3>
          <p className="text-gray-700 mb-4">
            When you submit forms (contact, application), we collect:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Name and contact information</li>
            <li>Academic information (for applications)</li>
            <li>Any information you voluntarily provide</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use collected information for:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Website Improvement:</strong> Analyze usage patterns to enhance user experience</li>
            <li><strong>Performance Optimization:</strong> Identify and fix technical issues</li>
            <li><strong>Content Personalization:</strong> Understand which content is most valuable</li>
            <li><strong>Security:</strong> Protect against malicious activity</li>
            <li><strong>Communication:</strong> Respond to inquiries and applications</li>
            <li><strong>Legal Compliance:</strong> Meet legal and regulatory requirements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">4. Data Storage and Security</h2>
          <p className="text-gray-700 mb-4">
            <strong>Storage Location:</strong> Data is stored on secure servers and may be processed in Uganda or other countries 
            where our service providers operate.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Security Measures:</strong> We implement appropriate technical and organizational measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Encryption of data in transit (HTTPS)</li>
            <li>Access controls and authentication</li>
            <li>Regular security assessments</li>
            <li>Data minimization practices</li>
          </ul>
          <p className="text-gray-700">
            <strong>Retention Period:</strong> Analytics data is retained for up to 12 months. Form submissions are retained as long as 
            necessary for their intended purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">5. Your Privacy Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your data</li>
            <li><strong>Objection:</strong> Object to processing of your data</li>
            <li><strong>Portability:</strong> Request transfer of your data</li>
            <li><strong>Withdraw Consent:</strong> Change your consent preferences at any time</li>
          </ul>
          <p className="text-gray-700">
            To exercise these rights, contact us at: <a href="mailto:info@lgihe.ac.ug" className="text-[#3d4d6f] hover:underline">info@lgihe.ac.ug</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">6. Cookies and Tracking</h2>
          <p className="text-gray-700 mb-4">
            We use browser storage (localStorage/sessionStorage) instead of cookies for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Consent Preferences:</strong> Remember your privacy choices</li>
            <li><strong>Session Management:</strong> Maintain your session during your visit</li>
            <li><strong>Analytics (Optional):</strong> Track anonymous usage data with your consent</li>
          </ul>
          <p className="text-gray-700">
            You can manage your consent preferences through the cookie banner or by visiting our <a href="/privacy/preferences" className="text-[#3d4d6f] hover:underline">Privacy Preferences</a> page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">7. Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            We may use third-party services that collect information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Vercel Analytics:</strong> Website performance and visitor analytics (only with consent)</li>
            <li><strong>Email Services:</strong> For communication and application processing</li>
          </ul>
          <p className="text-gray-700">
            These services have their own privacy policies and we encourage you to review them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">8. Children's Privacy</h2>
          <p className="text-gray-700">
            Our website is not directed to children under 13. We do not knowingly collect personal information from children. 
            If you believe we have collected information from a child, please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">9. International Data Transfers</h2>
          <p className="text-gray-700">
            Your information may be transferred to and processed in countries other than Uganda. We ensure appropriate safeguards 
            are in place to protect your data in accordance with this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page 
            and updating the "Last Updated" date. Continued use of our website after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">11. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2"><strong>Luigi Giussani Institute of Higher Education</strong></p>
            <p className="text-gray-700 mb-2">Luzira, Port Bell Road</p>
            <p className="text-gray-700 mb-2">Kampala, Uganda</p>
            <p className="text-gray-700 mb-2">Email: <a href="mailto:info@lgihe.ac.ug" className="text-[#3d4d6f] hover:underline">info@lgihe.ac.ug</a></p>
            <p className="text-gray-700">Phone: +256-XXX-XXXXXX</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">12. Data Protection Officer</h2>
          <p className="text-gray-700">
            For data protection inquiries, you may contact us at: 
            <a href="mailto:info@lgihe.ac.ug" className="text-[#3d4d6f] hover:underline ml-1">info@lgihe.ac.ug</a>
          </p>
        </section>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Your Privacy Matters:</strong> We are committed to transparency and protecting your privacy. 
            You can manage your privacy preferences at any time through our <a href="/privacy/preferences" className="text-[#3d4d6f] hover:underline">Privacy Preferences</a> page.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
