import PageTemplate from "@/components/PageTemplate";

export default function LibraryPage() {
  return (
    <PageTemplate 
      title="Library Services" 
      subtitle="Your gateway to knowledge and research"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The LGIHE Library provides extensive resources, study spaces, and support services 
          to facilitate your academic success and research endeavors.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Collections</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-[#5B6F8C] mb-2">100,000+</p>
            <p className="text-gray-700">Physical Books</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-[#5B6F8C] mb-2">50,000+</p>
            <p className="text-gray-700">E-Books</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-[#5B6F8C] mb-2">500+</p>
            <p className="text-gray-700">Journal Subscriptions</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Services</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Book borrowing and renewals</li>
            <li>Research assistance and consultations</li>
            <li>Inter-library loan services</li>
            <li>Study rooms and quiet zones</li>
            <li>Computer workstations</li>
            <li>Printing and scanning facilities</li>
            <li>Research workshops and training</li>
          </ul>
        </div>

        <div className="bg-[#5B6F8C] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Opening Hours</h3>
          <div className="space-y-2">
            <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
            <p className="text-sm text-white/80 mt-4">Extended hours during exam periods</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
