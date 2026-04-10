import PageTemplate from "@/components/PageTemplate";

export default function RequirementsPage() {
  return (
    <PageTemplate 
      title="Entry Requirements" 
      subtitle="Academic qualifications needed for admission"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE has specific entry requirements for each programme level. Please review the requirements 
          for your chosen programme carefully before applying.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Certificate Programmes</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-[#5B6F8C] mb-3">Certificate in Early Childhood Care and Education</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Uganda Certificate of Education (UCE) or equivalent</li>
            <li>Minimum of 5 passes including English</li>
            <li>Passion for working with young children</li>
          </ul>

          <h3 className="font-semibold text-[#5B6F8C] mb-3">Certificate in Child Care and Development</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Uganda Certificate of Education (UCE) or equivalent</li>
            <li>Minimum of 5 passes including English</li>
            <li>Interest in child welfare and development</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Diploma Programmes</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-[#5B6F8C] mb-3">Diploma in Pre-Primary Education</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Uganda Certificate of Education (UCE) with at least 5 passes</li>
            <li>Certificate in Early Childhood Education (preferred)</li>
            <li>Or Uganda Advanced Certificate of Education (UACE) with at least 1 principal pass</li>
          </ul>

          <h3 className="font-semibold text-[#5B6F8C] mb-3">Diploma in Primary Education</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Uganda Certificate of Education (UCE) with at least 5 passes</li>
            <li>Or Uganda Advanced Certificate of Education (UACE) with at least 1 principal pass</li>
            <li>Teaching experience is an advantage</li>
          </ul>

          <h3 className="font-semibold text-[#5B6F8C] mb-3">Diploma in Educational Leadership and Management</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Certificate or Diploma in Education</li>
            <li>At least 2 years of teaching experience (required)</li>
            <li>Currently working in an educational institution</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Undergraduate Programmes (Bachelor's)</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-[#5B6F8C] mb-3">Bachelor of Pre-Primary Education</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Uganda Advanced Certificate of Education (UACE) with at least 2 principal passes</li>
            <li>Or Diploma in Pre-Primary Education or related field</li>
            <li>Relevant O-Level passes including English and Mathematics</li>
          </ul>

          <h3 className="font-semibold text-[#5B6F8C] mb-3">Bachelor of Primary Education</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Uganda Advanced Certificate of Education (UACE) with at least 2 principal passes</li>
            <li>Or Diploma in Primary Education or related field</li>
            <li>Relevant O-Level passes including English and Mathematics</li>
          </ul>

          <h3 className="font-semibold text-[#5B6F8C] mb-3">Bachelor of Arts with Education (Secondary)</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Uganda Advanced Certificate of Education (UACE) with at least 2 principal passes in Arts subjects</li>
            <li>Or relevant Diploma in Education</li>
            <li>Good passes in O-Level including English</li>
          </ul>

          <h3 className="font-semibold text-[#5B6F8C] mb-3">Bachelor of Science with Education (Secondary)</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Uganda Advanced Certificate of Education (UACE) with at least 2 principal passes in Science subjects</li>
            <li>Or relevant Diploma in Education</li>
            <li>Good passes in O-Level including Mathematics and Science subjects</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Postgraduate Programmes</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-[#5B6F8C] mb-3">Postgraduate Diploma in Primary Education</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Bachelor's degree from a recognized institution</li>
            <li>Teaching experience is an advantage</li>
            <li>Minimum Second Class (Lower Division) or equivalent</li>
          </ul>

          <h3 className="font-semibold text-[#5B6F8C] mb-3">Postgraduate Diploma in Educational Leadership and Management</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Bachelor's degree in Education or related field</li>
            <li>At least 3 years of teaching or educational administration experience</li>
            <li>Currently working in an educational institution (preferred)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">General Requirements</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            All applicants must provide:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Completed application form</li>
            <li>Recent passport-size photographs</li>
            <li>Certified copies of academic certificates and transcripts</li>
            <li>Copy of National ID or passport</li>
            <li>Birth certificate</li>
            <li>Recommendation letters (where applicable)</li>
            <li>Proof of payment for application fee</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#5B6F8C] mb-2">Credit Transfer & Recognition of Prior Learning</h3>
          <p className="text-gray-700">
            LGIHE recognizes prior learning and offers credit transfers for relevant qualifications. 
            If you have completed similar courses at other recognized institutions, you may be eligible 
            for credit transfer. Contact the admissions office for more information.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Notes</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>All certificates must be from recognized institutions</li>
            <li>Mature age entry may be considered for applicants with relevant experience</li>
            <li>Meeting minimum requirements does not guarantee admission</li>
            <li>Additional requirements may apply for specific programmes</li>
            <li>Contact admissions office for clarification on any requirements</li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
