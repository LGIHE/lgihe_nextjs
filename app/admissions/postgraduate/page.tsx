import PageTemplate from "@/components/PageTemplate";

export default function PostgraduateAdmissionsPage() {
  return (
    <PageTemplate 
      title="Postgraduate Admissions" 
      subtitle="Advance your career with a master's or doctoral degree"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our postgraduate programs are designed for professionals and scholars seeking to 
          deepen their expertise and make significant contributions to their fields.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Application Requirements</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Completed application form</li>
            <li>Bachelor's degree transcript</li>
            <li>Statement of purpose</li>
            <li>Two academic references</li>
            <li>CV/Resume</li>
            <li>Research proposal (for PhD applicants)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Rolling Admissions</h2>
        <p className="text-gray-700 mb-8">
          We accept postgraduate applications year-round. Applications are reviewed on a 
          rolling basis, and we recommend applying at least 3 months before your intended start date.
        </p>

        <a href="/admissions/portal" className="inline-block bg-[#5B6F8C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#4A5D75] transition-colors">
          Submit Application
        </a>
      </div>
    </PageTemplate>
  );
}
