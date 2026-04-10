import PageTemplate from "@/components/PageTemplate";

export default function ScienceSchoolPage() {
  const subjects = [
    { name: "Mathematics", description: "Mathematical concepts, problem-solving, and analytical thinking" },
    { name: "Physics", description: "Physical principles, scientific inquiry, and experimental methods" },
    { name: "Chemistry", description: "Chemical concepts, laboratory techniques, and scientific investigation" },
    { name: "Biology", description: "Life sciences, ecology, and biological systems" },
    { name: "Computer Science", description: "Computing fundamentals, programming, and digital literacy" },
    { name: "Agricultural Science", description: "Agricultural practices, food security, and sustainable farming" },
    { name: "Technical Drawing", description: "Technical skills, design principles, and spatial reasoning" }
  ];

  return (
    <PageTemplate 
      title="Science & Mathematics Education" 
      subtitle="Preparing teachers for science and mathematics subjects"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The Science & Mathematics stream at LGIHE prepares educators to teach science and 
          mathematics subjects at secondary school level. Our programme combines rigorous scientific 
          content knowledge with effective pedagogical methods, ensuring graduates can inspire 
          students and foster scientific inquiry, critical thinking, and problem-solving skills.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#5B6F8C] mb-2">Programme</h3>
          <p className="text-gray-700 mb-3">
            <strong>Bachelor of Science in Education (Secondary)</strong>
          </p>
          <p className="text-sm text-gray-600">
            3-year degree programme combining science and mathematics subjects with professional 
            teacher training for secondary education.
          </p>
          <a href="/academics/programmes/bachelor-science-secondary" className="inline-block mt-4 text-[#5B6F8C] font-medium hover:underline">
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
              <h3 className="font-semibold text-gray-800 mb-2">Scientific Knowledge</h3>
              <p className="text-gray-700 text-sm">
                Deep understanding of scientific concepts, theories, and methodologies in your 
                chosen teaching subjects.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Laboratory Skills</h3>
              <p className="text-gray-700 text-sm">
                Hands-on experience with laboratory equipment, experiments, and safety procedures 
                essential for science teaching.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">STEM Pedagogy</h3>
              <p className="text-gray-700 text-sm">
                Specialized teaching methods for science and mathematics, including inquiry-based 
                learning and problem-solving approaches.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Teaching Practice</h3>
              <p className="text-gray-700 text-sm">
                Supervised teaching practice in secondary schools, gaining practical experience 
                in science and mathematics classrooms.
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
            <li>Secondary school science and mathematics teachers</li>
            <li>Science department heads and coordinators</li>
            <li>Laboratory coordinators and technicians</li>
            <li>STEM education specialists and coordinators</li>
            <li>Curriculum developers for science education</li>
            <li>Educational technology coordinators</li>
          </ul>
        </section>

        <div className="bg-[#5B6F8C] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Become a Science & Mathematics Educator</h3>
          <p className="mb-6">Shape the future of STEM education and inspire young scientists.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#5B6F8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors no-underline">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
