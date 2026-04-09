import PageTemplate from "@/components/PageTemplate";

export default function ProspectusPage() {
  return (
    <PageTemplate 
      title="Prospectus" 
      subtitle="Comprehensive guide to LGIHE programs and opportunities"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Download our prospectus to learn more about our programs, campus life, and the 
          opportunities available at LGIHE.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Undergraduate Prospectus</h3>
            <p className="mb-6">Complete guide to our bachelor's degree programs</p>
            <button className="bg-white text-[#5B6F8C] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Download PDF
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Postgraduate Prospectus</h3>
            <p className="mb-6">Information on master's and doctoral programs</p>
            <button className="bg-white text-[#5B6F8C] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Download PDF
            </button>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Request a Physical Copy</h3>
          <p className="text-gray-700 mb-4">
            Would you like a printed prospectus delivered to your address? Fill out the form below 
            and we'll send one to you free of charge.
          </p>
          <button className="bg-[#5B6F8C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#4A5D75] transition-colors">
            Request Prospectus
          </button>
        </div>
      </div>
    </PageTemplate>
  );
}
