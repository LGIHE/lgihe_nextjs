import PageTemplate from "@/components/PageTemplate";

export default function ContactPage() {
  return (
    <PageTemplate 
      title="Contact Us" 
      subtitle="Get in touch with LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">General Inquiries</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#5B6F8C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6 text-[#5B6F8C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-700">Phone</p>
                  <p className="text-gray-600 text-sm">(+256) 414 222 517</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#5B6F8C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-700">Email</p>
                  <p className="text-gray-600 text-sm">info@lgihe.ac.ug</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#5B6F8C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#5B6F8C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#4A5D75] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Find Us on the Map</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7571234567!2d32.6234567!3d0.3234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTknMjQuNCJOIDMywrAzNycyNC40IkU!5e0!3m2!1sen!2sug!4v1234567890"
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

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4 mt-8">Department Contacts</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { dept: "Admissions", email: "admissions@lgihe.ac.ug", phone: "(+256) 414 222 517" },
            { dept: "Student Services", email: "studentservices@lgihe.ac.ug", phone: "(+256) 414 222 517" },
            { dept: "Finance Office", email: "finance@lgihe.ac.ug", phone: "(+256) 414 222 517" },
            { dept: "IT Support", email: "itsupport@lgihe.ac.ug", phone: "(+256) 414 222 517" },
            { dept: "Library", email: "library@lgihe.ac.ug", phone: "(+256) 414 222 517" },
            { dept: "Research Office", email: "research@lgihe.ac.ug", phone: "(+256) 414 222 517" },
          ].map((contact) => (
            <div key={contact.dept} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-[#5B6F8C] mb-2">{contact.dept}</h3>
              <p className="text-xs text-gray-600 mb-1">📧 {contact.email}</p>
              <p className="text-xs text-gray-600">📞 {contact.phone}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#5B6F8C] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Visit Our Campus</h3>
          <p className="mb-4">
            Schedule a campus tour to experience LGIHE firsthand. Our admissions team will be 
            happy to show you around and answer your questions.
          </p>
          <button className="bg-white text-[#5B6F8C] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Schedule a Tour
          </button>
        </div>
      </div>
    </PageTemplate>
  );
}
