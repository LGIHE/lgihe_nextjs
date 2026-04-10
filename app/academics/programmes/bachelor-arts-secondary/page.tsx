import PageTemplate from "@/components/PageTemplate";

export default function BachelorArtsSecondaryPage() {
  return (
    <PageTemplate 
      title="Bachelor of Arts with Education (Secondary)" 
      subtitle="Comprehensive teacher training for secondary education in arts and humanities"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <p className="text-sm font-semibold text-[#5B6F8C] mb-2">Programme Status</p>
          <p className="text-gray-700">Accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Bachelor of Arts with Education (Secondary) programme prepares graduates to teach arts 
            and humanities subjects at secondary school level. This comprehensive programme combines 
            subject specialization with pedagogical training, ensuring graduates are well-equipped to 
            deliver quality education in their chosen teaching subjects.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#5B6F8C] mb-2">Duration</h3>
              <p className="text-gray-700">3 Years</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#5B6F8C] mb-2">Cohort Type</h3>
              <p className="text-gray-700">Semester (Day/Weekend)</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Entry Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Uganda Advanced Certificate of Education (UACE)</li>
            <li>Diploma in Education Secondary (Arts/Humanities)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Teaching Subjects</h2>
          <p className="text-gray-700 mb-4">
            Students specialize in teaching subjects such as:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>English Language</li>
              <li>Literature</li>
              <li>History</li>
              <li>Geography</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Religious Education</li>
              <li>Fine Art</li>
              <li>Music</li>
              <li>Languages</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Career Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Graduates are qualified to work as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Secondary school teachers</li>
            <li>Subject department heads</li>
            <li>Educational coordinators</li>
            <li>Curriculum developers</li>
            <li>Educational consultants</li>
          </ul>
        </section>

        <div className="bg-[#5B6F8C] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="mb-6">Begin your journey as a secondary school educator with LGIHE.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#5B6F8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
