import PageTemplate from "@/components/PageTemplate";

export default function AdmissionsContactPage() {
  return (
    <PageTemplate 
      title="Contact Admissions" 
      subtitle="Get in touch with our admissions team"
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">Admissions Office</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Email:</strong> admissions@lgihe.edu</p>
              <p><strong>Phone:</strong> +123 456 7890</p>
              <p><strong>Office Hours:</strong><br />Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">International Admissions</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Email:</strong> international@lgihe.edu</p>
              <p><strong>Phone:</strong> +123 456 7891</p>
              <p><strong>Office Hours:</strong><br />Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#3d4d6f] mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border border-gray-300 rounded-lg px-4 py-3 w-full" />
              <input type="text" placeholder="Last Name" className="border border-gray-300 rounded-lg px-4 py-3 w-full" />
            </div>
            <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-lg px-4 py-3 w-full" />
            <input type="text" placeholder="Subject" className="border border-gray-300 rounded-lg px-4 py-3 w-full" />
            <textarea placeholder="Your Message" rows={6} className="border border-gray-300 rounded-lg px-4 py-3 w-full"></textarea>
            <button type="submit" className="bg-[#3d4d6f] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2f3d57] transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </PageTemplate>
  );
}
