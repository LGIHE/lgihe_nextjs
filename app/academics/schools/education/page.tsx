import PageTemplate from "@/components/PageTemplate";

export default function EducationSchoolPage() {
  const programmes = [
    {
      category: "Early Childhood Education",
      items: [
        { name: "Certificate in Child Care (CC)", level: "Certificate", link: "/academics/programmes/certificate-child-care" },
        { name: "Certificate in Early Childhood Care and Education (CECE)", level: "Certificate", link: "/academics/programmes/certificate-ecce" },
        { name: "Diploma in Education Pre-Primary (DEPP)", level: "Diploma", link: "/academics/programmes/diploma-pre-primary" },
        { name: "Bachelor of Education (Pre-Primary)", level: "Bachelor's", link: "/academics/programmes/bachelor-pre-primary" }
      ]
    },
    {
      category: "Primary Education",
      items: [
        { name: "Diploma in Education - Primary (DEP)", level: "Diploma", link: "/academics/programmes/diploma-primary" },
        { name: "Bachelor of Education (Primary)", level: "Bachelor's", link: "/academics/programmes/bachelor-primary" },
        { name: "Post-Graduate Diploma in Education - Primary (PDEP)", level: "Postgraduate", link: "/academics/programmes/pgd-primary" }
      ]
    },
    {
      category: "Secondary Education",
      items: [
        { name: "Bachelor of Arts with Education (Secondary)", level: "Bachelor's", link: "/academics/programmes/bachelor-arts-secondary" },
        { name: "Bachelor of Science in Education (Secondary)", level: "Bachelor's", link: "/academics/programmes/bachelor-science-secondary" }
      ]
    },
    {
      category: "Educational Leadership & Management",
      items: [
        { name: "Diploma in School Leadership and Management", level: "Diploma", link: "/academics/programmes/diploma-leadership" },
        { name: "Post-Graduate Diploma in Educational Leadership and Management (PELM)", level: "Postgraduate", link: "/academics/programmes/pgd-leadership" }
      ]
    }
  ];

  return (
    <PageTemplate 
      title="School of Education" 
      subtitle="Shaping the educators of tomorrow"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The School of Education at Luigi Giussani Institute of Higher Education is dedicated to 
          preparing skilled, compassionate educators who will inspire and empower the next generation 
          of learners. We offer comprehensive programmes from certificate to postgraduate level, 
          covering early childhood, primary, and secondary education, as well as educational leadership.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#3d4d6f] mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To develop competent, reflective, and innovative educators who are equipped with 
            contemporary pedagogical skills, ethical values, and a commitment to educational excellence.
          </p>
        </div>

        {programmes.map((section) => (
          <section key={section.category} className="mb-10">
            <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">{section.category}</h2>
            <div className="space-y-3">
              {section.items.map((program) => (
                <a
                  key={program.name}
                  href={program.link}
                  className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow no-underline"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-[#3d4d6f] mb-1">{program.name}</h3>
                      <p className="text-sm text-gray-600">{program.level} Programme</p>
                    </div>
                    <span className="text-[#3d4d6f] font-medium">View Details →</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-gray-50 p-8 rounded-lg mt-10">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Practical Experience</h4>
              <p className="text-gray-700 text-sm">
                All programmes include supervised teaching practice in partner schools, ensuring 
                graduates are classroom-ready and confident.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Flexible Study Options</h4>
              <p className="text-gray-700 text-sm">
                Session, semester, weekend, and holiday programmes designed to accommodate 
                working professionals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Accredited Programmes</h4>
              <p className="text-gray-700 text-sm">
                All programmes are accredited by NCHE or approved by MoES, ensuring national 
                recognition and quality standards.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Experienced Faculty</h4>
              <p className="text-gray-700 text-sm">
                Learn from qualified educators with extensive teaching and research experience 
                in their respective fields.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#3d4d6f] text-white p-8 rounded-lg text-center mt-10">
          <h3 className="text-2xl font-bold mb-4">Join Our School of Education</h3>
          <p className="mb-6">Transform lives through quality education. Start your journey today.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#3d4d6f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors no-underline">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
