import PageTemplate from "@/components/PageTemplate";

export default function ArtsSchoolPage() {
  const subjects = [
    { name: "English Language & Literature", description: "Language proficiency, literary analysis, and communication skills" },
    { name: "History", description: "Historical knowledge, critical thinking, and research methodologies" },
    { name: "Geography", description: "Physical and human geography, environmental studies, and spatial analysis" },
    { name: "Religious Education", description: "Religious studies, ethics, and moral education" },
    { name: "Fine Art", description: "Visual arts, creativity, and artistic expression" },
    { name: "Music", description: "Music theory, performance, and music education" },
    { name: "Languages", description: "Foreign language instruction and linguistic studies" }
  ];

  return (
    <PageTemplate 
      title="Arts & Humanities Education" 
      subtitle="Preparing teachers for arts and humanities subjects"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The Arts & Humanities stream at LGIHE prepares educators to teach arts and humanities 
          subjects at secondary school level. Our programmes combine deep subject knowledge with 
          effective pedagogical methods, ensuring graduates can inspire students and foster 
          critical thinking, creativity, and cultural understanding.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#5B6F8C] mb-2">Programme</h3>
          <p className="text-gray-700 mb-3">
            <strong>Bachelor of Arts with Education (Secondary)</strong>
          </p>
          <p className="text-sm text-gray-600">
            3-year degree programme combining arts and humanities subjects with professional 
            teacher training for secondary education.
          </p>
          <a href="/academics/programmes/bachelor-arts-secondary" className="inline-block mt-4 text-[#5B6F8C] font-medium hover:underline">
            View Programme Details →
          </a>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Teaching Subjects</h2>
          <p className="text-gray-700 mb-6">
            Students specialize in teaching combinations of the following subjects:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {subjects.map((subject) => (
              <div key={subject.name} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{subject.name}</h3>
                <p className="text-sm text-gray-700">{subject.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Subject Mastery</h3>
              <p className="text-gray-700 text-sm">
                In-depth study of arts and humanities subjects, developing expertise in your 
                chosen teaching areas.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Pedagogical Training</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive teacher training including lesson planning, classroom management, 
                and assessment strategies.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Teaching Practice</h3>
              <p className="text-gray-700 text-sm">
                Supervised teaching practice in secondary schools, gaining real classroom 
                experience under expert guidance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Career Preparation</h3>
              <p className="text-gray-700 text-sm">
                Preparation for professional teaching roles, including curriculum development 
                and educational leadership.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Career Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Graduates are qualified to work as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Secondary school teachers in arts and humanities subjects</li>
            <li>Subject department heads and coordinators</li>
            <li>Curriculum developers for arts education</li>
            <li>Educational consultants and advisors</li>
            <li>Teacher trainers and mentors</li>
          </ul>
        </section>

        <div className="bg-[#5B6F8C] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Become an Arts & Humanities Educator</h3>
          <p className="mb-6">Inspire the next generation through arts and humanities education.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#5B6F8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors no-underline">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
