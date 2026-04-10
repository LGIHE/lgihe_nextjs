import PageTemplate from "@/components/PageTemplate";

export default function UndergraduatePage() {
  const programmes = [
    {
      name: "Bachelor of Education (Primary)",
      duration: "2 Years",
      mode: "Session only",
      enrollment: "January, May, and August",
      link: "/academics/programmes/bachelor-primary"
    },
    {
      name: "Bachelor of Education (Pre-Primary)",
      duration: "2 Years",
      mode: "Session/Semester (Holiday/Weekend)",
      enrollment: "Session: Jan, May, Aug | Semester: Feb, Aug",
      link: "/academics/programmes/bachelor-pre-primary"
    },
    {
      name: "Bachelor of Arts with Education (Secondary)",
      duration: "3 Years",
      mode: "Semester (Day/Weekend)",
      enrollment: "Contact admissions for intake dates",
      link: "/academics/programmes/bachelor-arts-secondary"
    },
    {
      name: "Bachelor of Science in Education (Secondary)",
      duration: "3 Years",
      mode: "Semester (Day/Weekend)",
      enrollment: "Contact admissions for intake dates",
      link: "/academics/programmes/bachelor-science-secondary"
    }
  ];

  return (
    <PageTemplate 
      title="Undergraduate Programmes" 
      subtitle="Bachelor's degree programs for professional educators"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our undergraduate programmes provide comprehensive education and professional training 
          for teachers at primary, pre-primary, and secondary levels, combining academic excellence 
          with practical teaching experience.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <p className="text-sm font-semibold text-[#5B6F8C] mb-2">Accreditation</p>
          <p className="text-gray-700">All undergraduate programmes are accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <div className="space-y-6">
          {programmes.map((program) => (
            <div key={program.name} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#5B6F8C] mb-4">{program.name}</h3>
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
      </div>
    </PageTemplate>
  );
}
