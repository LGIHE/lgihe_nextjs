import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function UndergraduateAdmissionsPage() {
  const programmes = [
    { name: "Certificate in Child Care (CC)", duration: "1 Year", link: "/academics/programmes/certificate-child-care" },
    { name: "Certificate in Early Childhood Care and Education (CECE)", duration: "2 Years", link: "/academics/programmes/certificate-ecce" },
    { name: "Diploma in Education Pre-Primary (DEPP)", duration: "2 Years", link: "/academics/programmes/diploma-pre-primary" },
    { name: "Diploma in Education - Primary (DEP)", duration: "2 Years", link: "/academics/programmes/diploma-primary" },
    { name: "Diploma in School Leadership and Management", duration: "2 Years", link: "/academics/programmes/diploma-leadership" },
    { name: "Bachelor of Education (Primary)", duration: "2 Years", link: "/academics/programmes/bachelor-primary" },
    { name: "Bachelor of Education (Pre-Primary)", duration: "2 Years", link: "/academics/programmes/bachelor-pre-primary" },
    { name: "Bachelor of Arts with Education (Secondary)", duration: "3 Years", link: "/academics/programmes/bachelor-arts-secondary" },
    { name: "Bachelor of Science in Education (Secondary)", duration: "3 Years", link: "/academics/programmes/bachelor-science-secondary" }
  ];

  return (
    <PageTemplate 
      title="Certificate, Diploma & Bachelor's Admissions" 
      subtitle="Start your teaching career with LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Join our vibrant learning community and pursue your passion for education in a supportive, 
          academically rigorous environment. LGIHE offers programmes from certificate to bachelor's 
          level, with flexible study options designed for both fresh graduates and working professionals.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#3d4d6f] mb-2">Intake Periods</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Session Intakes:</strong> January, May, and August</p>
            <p><strong>Semester Intakes:</strong> February and August</p>
            <p><strong>Termly Intakes:</strong> February (Certificate programmes)</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Available Programmes</h2>
        <div className="space-y-3 mb-8">
          {programmes.map((programme) => (
            <Link
              key={programme.name}
              href={programme.link}
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow no-underline"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-[#3d4d6f] mb-1">{programme.name}</h3>
                  <p className="text-sm text-gray-600">Duration: {programme.duration}</p>
                </div>
                <span className="text-[#3d4d6f] font-medium">View Details →</span>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">General Entry Requirements</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Certificate Programmes</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>PLE or UCE certificate</li>
                <li>Specific requirements vary by programme</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Diploma Programmes</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>UCE with at least six subjects at credit level or better</li>
                <li>Must have passed Mathematics and English Language</li>
                <li>Additional requirements for specific programmes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Bachelor's Programmes</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Relevant diploma or UACE certificate</li>
                <li>Programme-specific prerequisites</li>
                <li>Some programmes require teaching registration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#3d4d6f] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Ready to Begin?</h3>
          <p className="mb-4">Start your application today and take the first step toward your teaching career.</p>
          <div className="flex gap-4 flex-wrap">
            <a href="/admissions/portal" className="inline-block bg-white text-[#3d4d6f] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors no-underline">
              Apply Now
            </a>
            <a href="/admissions/requirements" className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#3d4d6f] transition-colors no-underline">
              View Requirements
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
