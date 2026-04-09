import PageTemplate from "@/components/PageTemplate";

export default function UndergraduateAdmissionsPage() {
  return (
    <PageTemplate 
      title="Undergraduate Admissions" 
      subtitle="Start your bachelor's degree journey"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Join our vibrant undergraduate community and pursue your passion in a supportive, 
          academically rigorous environment.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Application Timeline</h2>
        <div className="space-y-3 mb-8">
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span className="font-semibold text-[#5B6F8C]">Early Decision</span>
            <span className="text-gray-700">November 1</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span className="font-semibold text-[#5B6F8C]">Regular Decision</span>
            <span className="text-gray-700">January 15</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span className="font-semibold text-[#5B6F8C]">Late Applications</span>
            <span className="text-gray-700">March 31</span>
          </div>
        </div>

        <div className="bg-[#5B6F8C] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Ready to Begin?</h3>
          <p className="mb-4">Start your application today and take the first step toward your future.</p>
          <a href="/admissions/portal" className="inline-block bg-white text-[#5B6F8C] px-6 py-3 rounded-full font-medium">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
