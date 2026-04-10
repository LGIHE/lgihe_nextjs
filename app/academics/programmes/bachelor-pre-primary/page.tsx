import PageTemplate from "@/components/PageTemplate";

export default function BachelorPrePrimaryPage() {
  return (
    <PageTemplate 
      title="Bachelor of Education (Pre-Primary)" 
      subtitle="Professional degree for early childhood education specialists"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <p className="text-sm font-semibold text-[#5B6F8C] mb-2">Programme Status</p>
          <p className="text-gray-700">Accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Bachelor of Education (Pre-Primary) programme is designed to develop highly qualified 
            early childhood education professionals. This degree programme provides advanced knowledge 
            in child development, early learning pedagogies, and educational leadership in pre-primary 
            settings, preparing graduates for leadership roles in early childhood education.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#5B6F8C] mb-2">Duration</h3>
              <p className="text-gray-700">2 Years</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#5B6F8C] mb-2">Cohort Type</h3>
              <p className="text-gray-700">Session/Semester (Holiday/Weekend)</p>
              <p className="text-sm text-gray-600 mt-2">
                Session: January, May, or August<br/>
                Semester: February or August
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Entry Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Uganda Certificate of Education (UCE)</li>
            <li>Certificate in Early Childhood Care and Education (CECE)</li>
            <li>Diploma in Education Pre-Primary (DEPP)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Career Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Graduates can pursue advanced roles including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Pre-primary school head teachers</li>
            <li>Early childhood education coordinators</li>
            <li>Curriculum developers for early learning</li>
            <li>Educational consultants in early childhood development</li>
            <li>Teacher trainers in pre-primary education</li>
            <li>Progression to postgraduate studies</li>
          </ul>
        </section>

        <div className="bg-[#5B6F8C] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="mb-6">Elevate your career in early childhood education with LGIHE.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#5B6F8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
