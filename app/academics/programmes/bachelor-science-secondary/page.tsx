import PageTemplate from "@/components/PageTemplate";

export default function BachelorScienceSecondaryPage() {
  return (
    <PageTemplate 
      title="Bachelor of Science in Education (Secondary)" 
      subtitle="Professional training for secondary science education"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-6 mb-8">
          <p className="text-sm font-semibold text-[#3d4d6f] mb-2">Programme Status</p>
          <p className="text-gray-700">Accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Programme Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Bachelor of Science in Education (Secondary) programme is designed to produce competent 
            science teachers for secondary schools. The programme integrates rigorous science content 
            knowledge with effective pedagogical methods, preparing graduates to inspire and educate 
            the next generation of scientists and innovators.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Programme Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#3d4d6f] mb-2">Duration</h3>
              <p className="text-gray-700">3 Years</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#3d4d6f] mb-2">Cohort Type</h3>
              <p className="text-gray-700">Semester (Day/Weekend)</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Entry Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Uganda Advanced Certificate of Education (UACE)</li>
            <li>Diploma in Education Secondary (Sciences)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Teaching Subjects</h2>
          <p className="text-gray-700 mb-4">
            Students specialize in teaching subjects including:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Computer Science</li>
              <li>Agricultural Science</li>
              <li>Technical Drawing</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Career Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Graduates can pursue careers as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Secondary school science teachers</li>
            <li>Science department heads</li>
            <li>Laboratory coordinators</li>
            <li>STEM education specialists</li>
            <li>Curriculum developers for science education</li>
            <li>Educational technology coordinators</li>
          </ul>
        </section>

        <div className="bg-[#3d4d6f] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="mb-6">Shape the future of science education with LGIHE.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#3d4d6f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
