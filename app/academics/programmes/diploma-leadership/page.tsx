import PageTemplate from "@/components/PageTemplate";

export default function DiplomaLeadershipPage() {
  return (
    <PageTemplate 
      title="Diploma in School Leadership and Management" 
      subtitle="Developing effective educational leaders"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <p className="text-sm font-semibold text-[#5B6F8C] mb-2">Programme Status</p>
          <p className="text-gray-700">Accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Diploma in School Leadership and Management equips current and aspiring educational leaders 
            with the knowledge, skills, and competencies required to effectively manage educational institutions. 
            The programme covers strategic planning, resource management, instructional leadership, and 
            organizational development in educational contexts.
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
            <li>Uganda Certificate of Education (UCE) with at least six subjects passed at credit level or better</li>
            <li>Must have passed Mathematics and English Language</li>
            <li>Uganda Advanced Certificate of Education (UACE) or equivalent with at least two (2) principal passes from the same sitting</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Career Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Graduates can pursue roles such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>School administrators and headteachers</li>
            <li>Deputy headteachers</li>
            <li>Department heads</li>
            <li>Educational coordinators</li>
            <li>School management consultants</li>
          </ul>
        </section>

        <div className="bg-[#5B6F8C] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="mb-6">Become an effective educational leader with LGIHE.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#5B6F8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
