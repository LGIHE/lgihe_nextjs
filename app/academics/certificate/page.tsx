import PageTemplate from "@/components/PageTemplate";

export default function CertificatePage() {
  const programmes = [
    {
      name: "Certificate in Child Care (CC)",
      duration: "1 Year",
      enrollment: "February",
      status: "Approved by MoES",
      link: "/academics/programmes/certificate-child-care"
    },
    {
      name: "Certificate in Early Childhood Care and Education (CECE)",
      duration: "2 Years",
      enrollment: "February",
      status: "Approved by MoES",
      link: "/academics/programmes/certificate-ecce"
    }
  ];

  return (
    <PageTemplate 
      title="Certificate Programmes" 
      subtitle="Foundation programmes for early childhood care and education"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our certificate programmes provide foundational knowledge and practical skills for 
          individuals seeking to work in child care and early childhood education settings.
        </p>

        <div className="space-y-6">
          {programmes.map((program) => (
            <div key={program.name} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">{program.name}</h3>
                  <p className="text-sm text-green-600 font-medium">{program.status}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-gray-800">{program.duration}</p>
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
