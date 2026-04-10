import PageTemplate from "@/components/PageTemplate";

export default function CertificateChildCarePage() {
  return (
    <PageTemplate 
      title="Certificate in Child Care (CC)" 
      subtitle="Building foundations for quality child care"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <p className="text-sm font-semibold text-[#5B6F8C] mb-2">Programme Status</p>
          <p className="text-gray-700">Approved by the Ministry of Education and Sports (MoES)</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Certificate in Child Care programme provides foundational knowledge and practical skills 
            for individuals seeking to work in child care settings. This programme prepares students to 
            support the physical, emotional, and developmental needs of young children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#5B6F8C] mb-2">Duration</h3>
              <p className="text-gray-700">1 Year</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#5B6F8C] mb-2">Cohort Type</h3>
              <p className="text-gray-700">Termly (Enrollment in February)</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Entry Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Primary Leaving Examination (PLE) certificate</li>
            <li>Uganda Certificate of Education (UCE) - especially if a candidate failed Mathematics or English Language</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Career Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Graduates of this programme can pursue careers in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Child care centers</li>
            <li>Day care facilities</li>
            <li>Community child support programs</li>
            <li>Home-based child care services</li>
          </ul>
        </section>

        <div className="bg-[#5B6F8C] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="mb-6">Join our next cohort and start your journey in child care education.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#5B6F8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
