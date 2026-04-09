import PageTemplate from "@/components/PageTemplate";

export default function RequirementsPage() {
  return (
    <PageTemplate 
      title="Entry Requirements" 
      subtitle="Academic qualifications needed for admission"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Undergraduate Programs</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>High school diploma or equivalent</li>
            <li>Minimum GPA of 3.0 (or equivalent)</li>
            <li>English language proficiency (TOEFL/IELTS for international students)</li>
            <li>Letters of recommendation</li>
            <li>Personal statement</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Postgraduate Programs</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Bachelor's degree from an accredited institution</li>
            <li>Minimum GPA of 3.5 (or equivalent)</li>
            <li>Relevant work experience (for some programs)</li>
            <li>Research proposal (for PhD programs)</li>
            <li>English language proficiency</li>
            <li>Academic references</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">International Students</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            International applicants must provide:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Certified translations of academic documents</li>
            <li>Proof of financial support</li>
            <li>Valid passport</li>
            <li>Student visa documentation</li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
