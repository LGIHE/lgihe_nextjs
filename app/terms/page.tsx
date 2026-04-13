import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Lango Institute of Global Health and Education',
  description: 'Terms and conditions for using the LGIHE website and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-xl text-blue-100">
            Please read these terms carefully before using our website
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Last Updated */}
          <div className="text-sm text-gray-600 border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">Last Updated: April 13, 2026</p>
          </div>

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to the Lango Institute of Global Health and Education (LGIHE) website. 
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provisions of this agreement. If you do not agree to these terms, please do not 
              use this website.
            </p>
          </section>

          {/* Use of Website */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Website</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                This website is provided for informational and educational purposes. You may use 
                this website for lawful purposes only.
              </p>
              <p className="font-semibold">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website in any way that violates any applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Interfere with or disrupt the website or servers connected to the website</li>
                <li>Use any automated system to access the website without permission</li>
                <li>Transmit any viruses, malware, or other harmful code</li>
                <li>Collect or harvest any information from the website without consent</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, 
                images, audio clips, digital downloads, and software, is the property of LGIHE or 
                its content suppliers and is protected by Ugandan and international copyright laws.
              </p>
              <p className="leading-relaxed">
                You may download or print content for personal, non-commercial use only, provided 
                you do not modify the content and retain all copyright and proprietary notices.
              </p>
            </div>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts and Applications</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                When you create an account or submit an application through our website, you are 
                responsible for maintaining the confidentiality of your account information and 
                password. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </div>
          </section>

          {/* Academic Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Academic Information</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to ensure that information about programmes, courses, fees, and 
              admission requirements is accurate and up-to-date, LGIHE reserves the right to make 
              changes at any time. Programme offerings, course content, fees, and policies may be 
              modified without prior notice. Always verify critical information with the admissions 
              office before making decisions.
            </p>
          </section>

          {/* Application Process */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Application and Admission</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Submission of an application does not guarantee admission. All applications are 
                subject to review and approval by LGIHE. Application fees are non-refundable.
              </p>
              <p className="leading-relaxed">
                Providing false or misleading information in your application may result in 
                rejection of your application or termination of your enrollment.
              </p>
            </div>
          </section>

          {/* Links to Third-Party Sites */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              This website may contain links to third-party websites. These links are provided for 
              your convenience only. LGIHE does not endorse or assume responsibility for the content, 
              privacy policies, or practices of any third-party websites. You access third-party 
              websites at your own risk.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                This website is provided "as is" and "as available" without any warranties of any 
                kind, either express or implied. LGIHE does not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The website will be uninterrupted, timely, secure, or error-free</li>
                <li>The results obtained from using the website will be accurate or reliable</li>
                <li>Any errors in the website will be corrected</li>
                <li>The website is free from viruses or other harmful components</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, LGIHE shall not be liable for any direct, 
              indirect, incidental, special, consequential, or punitive damages arising out of or 
              relating to your use of or inability to use this website, even if LGIHE has been 
              advised of the possibility of such damages.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of this website is also governed by our{' '}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </Link>
              . Please review our Privacy Policy to understand our practices regarding the collection 
              and use of your personal information.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              LGIHE reserves the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to the website. Your continued use of the website after changes 
              are posted constitutes your acceptance of the modified terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the 
              Republic of Uganda, without regard to its conflict of law provisions. Any disputes 
              arising from these terms shall be subject to the exclusive jurisdiction of the courts 
              of Uganda.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these terms is found to be invalid or unenforceable, the remaining 
              provisions shall continue in full force and effect.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Email:</span> info@lgihe.ac.ug</p>
              <p><span className="font-semibold">Phone:</span> +256 (0) 123 456 789</p>
              <p><span className="font-semibold">Address:</span> Lango Institute of Global Health and Education, Lira, Uganda</p>
            </div>
          </section>

          {/* Acceptance */}
          <section className="border-t-2 border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              By using this website, you acknowledge that you have read, understood, and agree to 
              be bound by these Terms of Use.
            </p>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link 
            href="/privacy" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/accessibility" 
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Accessibility Statement
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
