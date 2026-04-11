import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function DiplomaPage() {
  const programmes = [
    {
      title: "Diploma in Pre-Primary Education",
      duration: "2 years",
      mode: "Day, Weekend, Holiday",
      description: "This programme prepares teachers to work with children aged 3-6 years in pre-primary settings. It combines theoretical knowledge with extensive practical teaching experience.",
      requirements: [
        "Uganda Certificate of Education (UCE) with at least 5 passes",
        "Certificate in Early Childhood Education (preferred)",
        "Or Uganda Advanced Certificate of Education (UACE) with at least 1 principal pass"
      ],
      careers: [
        "Pre-Primary School Teacher",
        "Nursery School Head Teacher",
        "Early Years Coordinator",
        "Educational Consultant"
      ],
      link: "/academics/programmes/diploma-pre-primary"
    },
    {
      title: "Diploma in Primary Education",
      duration: "2 years",
      mode: "Day, Weekend, Holiday, Session",
      description: "This programme equips teachers with the knowledge and skills to teach in primary schools. It covers pedagogy, curriculum development, and classroom management.",
      requirements: [
        "Uganda Certificate of Education (UCE) with at least 5 passes",
        "Or Uganda Advanced Certificate of Education (UACE) with at least 1 principal pass",
        "Teaching experience is an advantage"
      ],
      careers: [
        "Primary School Teacher",
        "Head Teacher",
        "Curriculum Developer",
        "Education Officer"
      ],
      link: "/academics/programmes/diploma-primary"
    },
    {
      title: "Diploma in Educational Leadership and Management",
      duration: "2 years",
      mode: "Weekend, Holiday, Session",
      description: "Designed for practicing teachers and education administrators, this programme develops leadership and management skills for educational institutions.",
      requirements: [
        "Certificate or Diploma in Education",
        "At least 2 years of teaching experience",
        "Currently working in an educational institution"
      ],
      careers: [
        "School Administrator",
        "Head Teacher",
        "Education Manager",
        "School Inspector",
        "Education Coordinator"
      ],
      link: "/academics/programmes/diploma-leadership"
    }
  ];

  return (
    <PageTemplate 
      title="Diploma Programmes" 
      subtitle="Professional teacher education programmes"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-gray-700 mb-8">
          Our diploma programmes provide comprehensive teacher education for pre-primary and primary 
          levels, as well as specialized training in educational leadership. These two-year programmes 
          combine academic study with practical teaching experience.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#3d4d6f] mb-2">Programme Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Two-year duration with flexible study modes</li>
            <li>Extensive teaching practice in partner schools</li>
            <li>Qualified and experienced faculty</li>
            <li>Recognized by Ministry of Education and Sports</li>
            <li>Pathway to bachelor's degree programmes</li>
            <li>Session-based options for working teachers</li>
          </ul>
        </div>

        <div className="space-y-8">
          {programmes.map((programme, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#3d4d6f] mb-2">{programme.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {programme.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {programme.mode}
                    </span>
                  </div>
                </div>
                <Link 
                  href={programme.link}
                  className="mt-4 md:mt-0 inline-block bg-[#3d4d6f] text-white px-6 py-2 rounded-lg hover:bg-[#2f3d57] transition-colors text-sm font-medium"
                >
                  View Details
                </Link>
              </div>

              <p className="text-gray-700 mb-6">{programme.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#3d4d6f] mb-3">Entry Requirements</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {programme.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#3d4d6f] mb-3">Career Opportunities</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {programme.careers.map((career, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#3d4d6f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Tuition & Fees</h3>
            <p className="text-gray-700 mb-4">
              Our diploma programmes offer excellent value for professional teacher education. 
              View our detailed fee structure and payment options.
            </p>
            <Link href="/admissions/fees" className="text-[#3d4d6f] font-medium hover:underline">
              View Fees →
            </Link>
          </div>

          <div className="bg-[#3d4d6f]/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Ready to Apply?</h3>
            <p className="text-gray-700 mb-4">
              Take the next step in your teaching career. Multiple intake periods available 
              throughout the year.
            </p>
            <Link 
              href="/admissions/apply" 
              className="inline-block bg-[#3d4d6f] text-white px-6 py-2 rounded-lg hover:bg-[#2f3d57] transition-colors font-medium"
            >
              Apply Now
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <h4 className="font-bold text-gray-900 mb-2">Progression Pathway</h4>
          <p className="text-gray-700">
            Diploma holders can progress to our Bachelor's degree programmes. We offer credit 
            transfers and recognition of prior learning, allowing you to complete your degree 
            in a shorter time frame.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
