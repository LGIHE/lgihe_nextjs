import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Lango Institute of Global Health and Education',
  description: 'Our commitment to making LGIHE website accessible to all users.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-xl text-green-100">
            Our commitment to digital accessibility for all
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Last Updated */}
          <div className="text-sm text-gray-600 border-l-4 border-green-600 pl-4">
            <p className="font-semibold">Last Updated: April 13, 2026</p>
          </div>

          {/* Commitment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              Lango Institute of Global Health and Education (LGIHE) is committed to ensuring 
              digital accessibility for people with disabilities. We are continually improving the 
              user experience for everyone and applying the relevant accessibility standards to 
              ensure we provide equal access to all of our users.
            </p>
          </section>

          {/* Standards */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Standards</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
              These guidelines explain how to make web content more accessible for people with 
              disabilities and user-friendly for everyone.
            </p>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Key Principles:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Operable:</strong> User interface components and navigation must be operable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Understandable:</strong> Information and operation of user interface must be understandable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Robust:</strong> Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website includes the following accessibility features:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Keyboard Navigation</h3>
                <p className="text-gray-700 text-sm">
                  All functionality is available using keyboard-only navigation
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Screen Reader Support</h3>
                <p className="text-gray-700 text-sm">
                  Semantic HTML and ARIA labels for assistive technologies
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Text Alternatives</h3>
                <p className="text-gray-700 text-sm">
                  Alt text provided for all meaningful images
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Color Contrast</h3>
                <p className="text-gray-700 text-sm">
                  Sufficient color contrast ratios for text readability
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Responsive Design</h3>
                <p className="text-gray-700 text-sm">
                  Mobile-friendly and works across different devices
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Clear Navigation</h3>
                <p className="text-gray-700 text-sm">
                  Consistent navigation structure throughout the site
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Readable Fonts</h3>
                <p className="text-gray-700 text-sm">
                  Clear, legible typography with adjustable text sizes
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Form Labels</h3>
                <p className="text-gray-700 text-sm">
                  Clear labels and instructions for all form fields
                </p>
              </div>
            </div>
          </section>

          {/* Browser Compatibility */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser Compatibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website is designed to work with the following assistive technologies and browsers:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Modern web browsers (Chrome, Firefox, Safari, Edge) - latest versions</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Screen readers (JAWS, NVDA, VoiceOver)</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Browser zoom and text resizing up to 200%</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Voice recognition software</span>
              </div>
            </div>
          </section>

          {/* Known Limitations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Known Limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Despite our best efforts, some limitations may exist:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-6">
              <li>Some third-party embedded content may not be fully accessible</li>
              <li>PDF documents may require additional accessibility improvements</li>
              <li>Some older content may not meet current accessibility standards</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We are actively working to address these limitations and improve accessibility across 
              all content.
            </p>
          </section>

          {/* Assistive Technology Tips */}
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Using Our Website</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">Keyboard Navigation:</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Use Tab to move forward through links and form fields</li>
                  <li>Use Shift + Tab to move backward</li>
                  <li>Use Enter to activate links and buttons</li>
                  <li>Use Arrow keys to navigate within menus</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Text Size:</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Use Ctrl + Plus (+) to increase text size</li>
                  <li>Use Ctrl + Minus (-) to decrease text size</li>
                  <li>Use Ctrl + 0 to reset to default size</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Campus Accessibility */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Physical Campus Accessibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LGIHE is committed to providing an accessible physical environment as well:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-6">
              <li>Wheelchair-accessible entrances and facilities</li>
              <li>Accessible parking spaces</li>
              <li>Elevators in multi-story buildings</li>
              <li>Accessible restrooms</li>
              <li>Assistive listening devices available upon request</li>
              <li>Sign language interpretation services (with advance notice)</li>
            </ul>
          </section>

          {/* Feedback */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback and Assistance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We welcome your feedback on the accessibility of our website. If you encounter any 
              accessibility barriers or have suggestions for improvement, please let us know:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div>
                <span className="font-semibold text-gray-900">Email:</span>
                <span className="text-gray-700 ml-2">info@lgihe.ac.ug</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Phone:</span>
                <span className="text-gray-700 ml-2">+256 (0) 123 456 789</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Subject Line:</span>
                <span className="text-gray-700 ml-2">"Website Accessibility"</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              We aim to respond to accessibility feedback within 5 business days and will work with 
              you to provide the information or service you need in an accessible format.
            </p>
          </section>

          {/* Alternative Formats */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Alternative Formats</h2>
            <p className="text-gray-700 leading-relaxed">
              If you require information from our website in an alternative format (such as large 
              print, audio, or accessible electronic format), please contact us and we will work 
              with you to provide the content in a format that meets your needs.
            </p>
          </section>

          {/* Ongoing Efforts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Efforts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Accessibility is an ongoing effort. We regularly:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-6">
              <li>Conduct accessibility audits and testing</li>
              <li>Provide accessibility training to our web team</li>
              <li>Review and update content for accessibility compliance</li>
              <li>Test with assistive technologies and real users</li>
              <li>Monitor and implement new accessibility best practices</li>
            </ul>
          </section>

          {/* Formal Complaints */}
          <section className="border-t-2 border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Formal Complaints</h2>
            <p className="text-gray-700 leading-relaxed">
              If you are not satisfied with our response to your accessibility concerns, you may 
              escalate your complaint through our formal complaints procedure by contacting our 
              administration office at info@lgihe.ac.ug.
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
            href="/terms" 
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Terms of Use
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
