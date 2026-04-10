import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function PostgraduateAdmissionsPage() {
  const programmes = [
    {
      name: "Post-Graduate Diploma in Education - Primary (PDEP)",
      duration: "1-2 Years (9 months in Semester/Weekend mode)",
      description: "For graduates entering primary education teaching",
      link: "/academics/programmes/pgd-primary"
    },
    {
      name: "Post-Graduate Diploma in Educational Leadership and Management (PELM)",
      duration: "1 Year (9 months in Semester/Weekend mode)",
      description: "For educational leaders and administrators",
      link: "/academics/programmes/pgd-leadership"
    }
  ];

  return (
    <PageTemplate 
      title="Postgraduate Admissions" 
      subtitle="Advance your career in education with postgraduate qualifications"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our postgraduate programmes are designed for professionals and graduates seeking to 
          enter the teaching profession or advance their careers in educational leadership and 
          management. These programmes combine rigorous academic study with practical application.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#5B6F8C] mb-2">Intake Periods</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>PDEP:</strong> Three sessions per year (August, January, April)</p>
            <p><strong>PELM:</strong> May and August intakes</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Available Programmes</h2>
        <div className="space-y-4 mb-8">
          {programmes.map((programme) => (
            <Link
              key={programme.name}
              href={programme.link}
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow no-underline"
            >
              <h3 className="text-xl font-bold text-[#5B6F8C] mb-2">{programme.name}</h3>
              <p className="text-gray-700 mb-2">{programme.description}</p>
              <p className="text-sm text-gray-600 mb-3">Duration: {programme.duration}</p>
              <span className="text-[#5B6F8C] font-medium">View Programme Details →</span>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">General Entry Requirements</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">PDEP Requirements</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Honours degree from a recognised university in any discipline other than education</li>
                <li>Master's or PhD in a non-education field (optional)</li>
                <li>Demonstrated passion or commitment to teaching and working with children</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">PELM Requirements</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Bachelor's degree or equivalent from a recognized institution</li>
                <li>Institution must be recognised by NCHE of Uganda</li>
                <li>International applicants must provide evidence of English proficiency</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Application Process</h2>
        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3">
            <div className="bg-[#5B6F8C] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
            <div>
              <h4 className="font-semibold text-gray-800">Complete Application Form</h4>
              <p className="text-sm text-gray-600">Fill out the online application form with accurate information</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-[#5B6F8C] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
            <div>
              <h4 className="font-semibold text-gray-800">Submit Required Documents</h4>
              <p className="text-sm text-gray-600">Upload transcripts, certificates, and other supporting documents</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-[#5B6F8C] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
            <div>
              <h4 className="font-semibold text-gray-800">Application Review</h4>
              <p className="text-sm text-gray-600">Admissions team reviews your application and documents</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-[#5B6F8C] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
            <div>
              <h4 className="font-semibold text-gray-800">Admission Decision</h4>
              <p className="text-sm text-gray-600">Receive admission decision and enrollment instructions</p>
            </div>
          </div>
        </div>

        <div className="bg-[#5B6F8C] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Ready to Advance Your Career?</h3>
          <p className="mb-4">Apply now and join our community of educational professionals.</p>
          <div className="flex gap-4 flex-wrap">
            <a href="/admissions/portal" className="inline-block bg-white text-[#5B6F8C] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors no-underline">
              Submit Application
            </a>
            <a href="/admissions/requirements" className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#5B6F8C] transition-colors no-underline">
              View Requirements
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
