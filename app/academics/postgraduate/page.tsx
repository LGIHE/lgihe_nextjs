import PageTemplate from "@/components/PageTemplate";

export default function PostgraduatePage() {
  const programmes = [
    {
      name: "Post-Graduate Diploma in Education - Primary (PDEP)",
      duration: "1-2 Years (9 months in Semester/Weekend mode)",
      mode: "Trimester System",
      enrollment: "Three sessions per year",
      description: "Competency-based programme for graduates entering primary education teaching",
      link: "/academics/programmes/pgd-primary"
    },
    {
      name: "Post-Graduate Diploma in Educational Leadership and Management (PELM)",
      duration: "1 Year (9 months in Semester/Weekend mode)",
      mode: "Session/Trimester Basis",
      enrollment: "May and August",
      description: "Strategic leadership and management training for educational professionals",
      link: "/academics/programmes/pgd-leadership"
    }
  ];

  return (
    <PageTemplate 
      title="Postgraduate Programmes" 
      subtitle="Advanced professional qualifications for educational excellence"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our postgraduate programmes offer advanced professional training for graduates seeking 
          to enter the teaching profession or advance their careers in educational leadership 
          and management.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <p className="text-sm font-semibold text-[#5B6F8C] mb-2">Accreditation</p>
          <p className="text-gray-700">All postgraduate programmes are accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <div className="space-y-6">
          {programmes.map((program) => (
            <div key={program.name} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">{program.name}</h3>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-gray-800">{program.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Study Mode</p>
                  <p className="font-semibold text-gray-800">{program.mode}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Enrollment</p>
                  <p className="font-semibold text-gray-800">{program.enrollment}</p>
                </div>
              </div>
              <a href={program.link} className="text-[#5B6F8C] font-medium hover:underline">
                View Programme Details →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Why Choose LGIHE Postgraduate Programmes?</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Flexible study modes designed for working professionals</li>
            <li>• Experienced faculty with expertise in education</li>
            <li>• Practical, competency-based curriculum</li>
            <li>• Strong emphasis on research and action learning</li>
            <li>• Nationally recognized qualifications</li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
