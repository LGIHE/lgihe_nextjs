import PageTemplate from "@/components/PageTemplate";

export default function DiplomaPage() {
  const programmes = [
    {
      name: "Diploma in Education Pre-Primary (DEPP)",
      duration: "2 Years",
      mode: "Session/Semester (Holiday/Weekend)",
      enrollment: "Session: Jan, May, Aug | Semester: Feb, Aug",
      link: "/academics/programmes/diploma-pre-primary"
    },
    {
      name: "Diploma in Education - Primary (DEP)",
      duration: "2 Years",
      mode: "Session only",
      enrollment: "January, May, and August",
      link: "/academics/programmes/diploma-primary"
    },
    {
      name: "Diploma in School Leadership and Management",
      duration: "2 Years",
      mode: "Session/Semester (Holiday/Weekend)",
      enrollment: "Session: Jan, May, Aug | Semester: Feb, Aug",
      link: "/academics/programmes/diploma-leadership"
    }
  ];

  return (
    <PageTemplate 
      title="Diploma Programmes" 
      subtitle="Professional qualifications for educators and school leaders"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our diploma programmes provide comprehensive professional training for educators at various 
          levels, with flexible study options designed for working professionals.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-6 mb-8">
          <p className="text-sm font-semibold text-[#3d4d6f] mb-2">Accreditation</p>
          <p className="text-gray-700">All diploma programmes are accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <div className="space-y-6">
          {programmes.map((program) => (
            <div key={program.name} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">{program.name}</h3>
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
              <a href={program.link} className="text-[#3d4d6f] font-medium hover:underline">
                View Programme Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
