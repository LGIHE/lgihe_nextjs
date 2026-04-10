import PageTemplate from "@/components/PageTemplate";

export default function ProgrammesPage() {
  const certificateProgrammes = [
    { name: "Certificate in Child Care (CC)", duration: "1 Year", link: "/academics/programmes/certificate-child-care" },
    { name: "Certificate in Early Childhood Care and Education (CECE)", duration: "2 Years", link: "/academics/programmes/certificate-ecce" }
  ];

  const diplomaProgrammes = [
    { name: "Diploma in Education Pre-Primary (DEPP)", duration: "2 Years", link: "/academics/programmes/diploma-pre-primary" },
    { name: "Diploma in Education - Primary (DEP)", duration: "2 Years", link: "/academics/programmes/diploma-primary" },
    { name: "Diploma in School Leadership and Management", duration: "2 Years", link: "/academics/programmes/diploma-leadership" }
  ];

  const bachelorProgrammes = [
    { name: "Bachelor of Education (Primary)", duration: "2 Years", link: "/academics/programmes/bachelor-primary" },
    { name: "Bachelor of Education (Pre-Primary)", duration: "2 Years", link: "/academics/programmes/bachelor-pre-primary" },
    { name: "Bachelor of Arts with Education (Secondary)", duration: "3 Years", link: "/academics/programmes/bachelor-arts-secondary" },
    { name: "Bachelor of Science in Education (Secondary)", duration: "3 Years", link: "/academics/programmes/bachelor-science-secondary" }
  ];

  const postgraduateProgrammes = [
    { name: "Post-Graduate Diploma in Education - Primary (PDEP)", duration: "1-2 Years", link: "/academics/programmes/pgd-primary" },
    { name: "Post-Graduate Diploma in Educational Leadership and Management (PELM)", duration: "1 Year", link: "/academics/programmes/pgd-leadership" }
  ];

  return (
    <PageTemplate 
      title="All Programmes" 
      subtitle="Comprehensive education programmes from certificate to postgraduate level"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Luigi Giussani Institute of Higher Education (LGIHE) offers a wide range of accredited 
          programmes in education, from foundational certificates to advanced postgraduate qualifications. 
          All our programmes are designed to meet the needs of aspiring and practicing educators.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <p className="text-sm font-semibold text-[#5B6F8C] mb-2">Accreditation</p>
          <p className="text-gray-700">
            Certificate programmes are approved by the Ministry of Education and Sports (MoES). 
            Diploma, Bachelor's, and Postgraduate programmes are accredited by the National Council 
            for Higher Education (NCHE).
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#5B6F8C] mb-6">Certificate Programmes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certificateProgrammes.map((program) => (
              <a 
                key={program.name} 
                href={program.link}
                className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow no-underline"
              >
                <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{program.name}</h3>
                <p className="text-sm text-gray-600">Duration: {program.duration}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#5B6F8C] mb-6">Diploma Programmes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {diplomaProgrammes.map((program) => (
              <a 
                key={program.name} 
                href={program.link}
                className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow no-underline"
              >
                <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{program.name}</h3>
                <p className="text-sm text-gray-600">Duration: {program.duration}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#5B6F8C] mb-6">Bachelor's Programmes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {bachelorProgrammes.map((program) => (
              <a 
                key={program.name} 
                href={program.link}
                className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow no-underline"
              >
                <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{program.name}</h3>
                <p className="text-sm text-gray-600">Duration: {program.duration}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#5B6F8C] mb-6">Postgraduate Programmes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {postgraduateProgrammes.map((program) => (
              <a 
                key={program.name} 
                href={program.link}
                className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow no-underline"
              >
                <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{program.name}</h3>
                <p className="text-sm text-gray-600">Duration: {program.duration}</p>
              </a>
            ))}
          </div>
        </section>

        <div className="bg-[#5B6F8C] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="mb-6">Explore our programmes and find the perfect fit for your educational goals.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#5B6F8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors no-underline">
              Apply Now
            </a>
            <a href="/admissions/prospectus" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5B6F8C] transition-colors no-underline">
              Download Prospectus
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
