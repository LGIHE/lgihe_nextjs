import PageTemplate from "@/components/PageTemplate";

export default function CertificateECCEPage() {
  return (
    <PageTemplate 
      title="Certificate in Early Childhood Care and Education (CECE)" 
      subtitle="Nurturing the next generation of early childhood educators"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-6 mb-8">
          <p className="text-sm font-semibold text-[#3d4d6f] mb-2">Programme Status</p>
          <p className="text-gray-700">Approved by the Ministry of Education and Sports (MoES)</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Programme Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Certificate in Early Childhood Care and Education (CECE) is designed to equip students 
            with comprehensive knowledge and practical skills necessary for working with young children 
            in various early childhood settings. The programme emphasizes child development, learning 
            methodologies, and creating nurturing environments for children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Programme Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#3d4d6f] mb-2">Duration</h3>
              <p className="text-gray-700">2 Years</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#3d4d6f] mb-2">Cohort Type</h3>
              <p className="text-gray-700">Termly (Enrollment in February)</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Entry Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Uganda Certificate of Education (UCE) with six passes</li>
            <li>Must have passed Mathematics and English Language</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Career Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Graduates can work as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Early childhood educators</li>
            <li>Pre-school teachers</li>
            <li>Child care center coordinators</li>
            <li>Early learning program facilitators</li>
          </ul>
        </section>

        <div className="bg-[#3d4d6f] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="mb-6">Start your career in early childhood education with LGIHE.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#3d4d6f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
