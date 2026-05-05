'use client';

import { useState } from 'react';
import PageTemplate from "@/components/PageTemplate";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTemplate 
      title="Contact Us" 
      subtitle="Get in touch with LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-green-900 font-bold text-lg mt-0 mb-1">Message Sent Successfully!</h3>
              <p className="text-green-800 text-sm mb-0">Thank you for contacting us. We'll get back to you within 1-2 business days.</p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">General Inquiries</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-700">Address</p>
                  <p className="text-gray-600 text-sm">
                    Luigi Giussani Institute of Higher Education<br />
                    Sentamu Road 822 – 829, Luzira<br />
                    Along Port Bell Road (Opposite the first Total Petrol Station)<br />
                    Kampala, Uganda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-700">Phone</p>
                  <p className="text-gray-600 text-sm">(+256) 764 078712</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-700">Email</p>
                  <p className="text-gray-600 text-sm">info@lgihe.ac.ug</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#3d4d6f] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-700">Office Hours</p>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                />
              </div>
              <div>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                />
              </div>
              <div>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3d4d6f] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2f3d57] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Find Us on the Map</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2012.8048418027981!2d32.64299794855396!3d0.305360678833195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbf93de39c2d9%3A0x2fc1d9ea01f13935!2sLuigi%20Giussani%20Institute%20of%20Higher%20Education!5e0!3m2!1sen!2sus!4v1775920147797!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LGIHE Location Map"
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Directions:</strong> Located along Port Bell Road in Luzira, opposite the first Total Petrol Station. 
            Easily accessible by public transport or private vehicle.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4 mt-8">Department Contacts</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { dept: "Admissions", email: "ar@lgihe.ac.ug", phone: "(+256) 764 078712" },
            { dept: "Student Services", email: "dean@lgihe.ac.ug", phone: "(+256) 764 078712" },
            { dept: "Finance Office", email: "finance@lgihe.ac.ug", phone: "(+256) 764 078712" },
            { dept: "IT Support", email: "tech@lgihe.ac.ug", phone: "(+256) 764 078712" },
            { dept: "Library", email: "library@lgihe.ac.ug", phone: "(+256) 764 078712" },
          ].map((contact) => (
            <div key={contact.dept} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-[#3d4d6f] mb-2">{contact.dept}</h3>
              <p className="text-xs text-gray-600 mb-1">📧 {contact.email}</p>
              <p className="text-xs text-gray-600">📞 {contact.phone}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#3d4d6f] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Visit Our Campus</h3>
          <p className="mb-4">
            Schedule a campus tour to experience LGIHE firsthand. Our admissions team will be 
            happy to show you around and answer your questions.
          </p>
          <button className="bg-white text-[#3d4d6f] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Schedule a Tour
          </button>
        </div>
      </div>
    </PageTemplate>
  );
}
