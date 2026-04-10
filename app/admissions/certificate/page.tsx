import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function CertificatePage() {
  const programmes = [
    {
      title: "Certificate in Early Childhood Care and Education",
      duration: "1 year",
      mode: "Day, Weekend, Holiday",
      description: "This programme prepares students to work with young children in early childhood education settings. It covers child development, early learning methodologies, and practical teaching skills.",
      requirements: [
        "Uganda Certificate of Education (UCE) or equivalent",
        "Minimum of 5 passes including English",
        "Passion for working with young children"
      ],
      careers: [
        "Early Childhood Educator",
        "Nursery School Teacher",
        "Daycare Center Staff",
        "Child Development Assistant"
      ],
      link: "/academics/programmes/certificate-ecce"
    },
    {
      title: "Certificate in Child Care and Development",
      duration: "1 year",
      mode: "Day, Weekend, Holiday",
      description: "This programme focuses on the holistic development and care of children. Students learn about child psychology, health, nutrition, and creating nurturing environments for children.",
      requirements: [
        "Uganda Certificate of Education (UCE) or equivalent",
        "Minimum of 5 passes including English",
        "Interest in child welfare and development"
      ],
      careers: [
        "Child Care Worker",
        "Child Development Officer",
        "Community Child Care Coordinator",
        "Children's Home Staff"
      ],
      link: "/academics/programmes/certificate-child-care"
    }
  ];

  return (
    <PageTemplate 
      title="Certificate Programmes" 
      subtitle="Foundation programmes in early childhood education and child care"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-gray-700 mb-8">
          Our certificate programmes provide foundational knowledge and practical skills for those 
          beginning their career in early childhood education and child care. These one-year programmes 
          are designed to be accessible and flexible, with multiple study modes available.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#5B6F8C] mb-2">Programme Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>One-year duration with flexible study modes</li>
            <li>Practical teaching experience and field placements</li>
            <li>Qualified and experienced instructors</li>
            <li>Affordable tuition fees</li>
            <li>Pathway to diploma and degree programmes</li>
          </ul>
        </div>

        <div className="space-y-8">
          {programmes.map((programme, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#5B6F8C] mb-2">{programme.title}</h2>
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
                  className="mt-4 md:mt-0 inline-block bg-[#5B6F8C] text-white px-6 py-2 rounded-lg hover:bg-[#4A5D75] transition-colors text-sm font-medium"
                >
                  View Details
                </Link>
              </div>

              <p className="text-gray-700 mb-6">{programme.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#5B6F8C] mb-3">Entry Requirements</h3>
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
                  <h3 className="font-semibold text-[#5B6F8C] mb-3">Career Opportunities</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {programme.careers.map((career, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#5B6F8C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Tuition & Fees</h3>
            <p className="text-gray-700 mb-4">
              Certificate programmes are affordable and accessible. View our detailed fee structure 
              to plan your investment in education.
            </p>
            <Link href="/admissions/fees" className="text-[#5B6F8C] font-medium hover:underline">
              View Fees →
            </Link>
          </div>

          <div className="bg-[#5B6F8C]/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Ready to Apply?</h3>
            <p className="text-gray-700 mb-4">
              Start your journey in early childhood education. Applications are open for multiple 
              intake periods throughout the year.
            </p>
            <Link 
              href="/admissions/apply" 
              className="inline-block bg-[#5B6F8C] text-white px-6 py-2 rounded-lg hover:bg-[#4A5D75] transition-colors font-medium"
            >
              Apply Now
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <h4 className="font-bold text-gray-900 mb-2">Progression Pathway</h4>
          <p className="text-gray-700">
            Certificate holders can progress to our Diploma programmes and eventually to Bachelor's 
            degree programmes. We recognize prior learning and offer credit transfers where applicable.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
