import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function PoliciesPage() {
  const policyCategories = [
    {
      title: "Academic Policies",
      policies: [
        { name: "Academic Integrity Policy", updated: "March 2026" },
        { name: "Examination Regulations", updated: "February 2026" },
        { name: "Grading and Assessment Policy", updated: "January 2026" },
        { name: "Academic Appeals Procedure", updated: "December 2025" },
        { name: "Programme Regulations", updated: "November 2025" },
      ],
    },
    {
      title: "Student Policies",
      policies: [
        { name: "Student Code of Conduct", updated: "March 2026" },
        { name: "Disciplinary Procedures", updated: "February 2026" },
        { name: "Student Complaints Procedure", updated: "January 2026" },
        { name: "Student Welfare Policy", updated: "December 2025" },
        { name: "Accommodation Policy", updated: "November 2025" },
      ],
    },
    {
      title: "Admissions Policies",
      policies: [
        { name: "Admissions Policy", updated: "April 2026" },
        { name: "Recognition of Prior Learning", updated: "March 2026" },
        { name: "International Student Admissions", updated: "February 2026" },
        { name: "Scholarships and Financial Aid", updated: "January 2026" },
      ],
    },
    {
      title: "Institutional Policies",
      policies: [
        { name: "Equal Opportunities Policy", updated: "March 2026" },
        { name: "Data Protection and Privacy Policy", updated: "February 2026" },
        { name: "Health and Safety Policy", updated: "January 2026" },
        { name: "Safeguarding Policy", updated: "December 2025" },
        { name: "Environmental Sustainability Policy", updated: "November 2025" },
      ],
    },
  ];

  return (
    <PageTemplate 
      title="Policies and Procedures" 
      subtitle="Official policies governing academic and institutional operations"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <p className="text-lg text-gray-700">
            LGIHE is committed to maintaining high standards of academic excellence, integrity, 
            and fairness. Our policies and procedures ensure a safe, supportive, and equitable 
            environment for all members of our community.
          </p>
        </section>

        {/* Policy Categories */}
        {policyCategories.map((category, index) => (
          <section key={index}>
            <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">{category.title}</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {category.policies.map((policy, policyIndex) => (
                <div 
                  key={policyIndex}
                  className={`flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${
                    policyIndex !== category.policies.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{policy.name}</h3>
                    <p className="text-sm text-gray-500">Last updated: {policy.updated}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-[#3d4d6f] hover:text-[#2f3d57] font-semibold text-sm">
                      View PDF
                    </button>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Quick Links */}
        <section className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/student-life/handbook" 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <h3 className="font-bold mb-2">Student Handbook</h3>
              <p className="text-sm text-white/90">Comprehensive guide for students</p>
            </Link>
            <Link 
              href="/admissions/faqs" 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <h3 className="font-bold mb-2">FAQs</h3>
              <p className="text-sm text-white/90">Frequently asked questions</p>
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p className="text-sm text-white/90">Get in touch with our team</p>
            </Link>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Policy Updates</h2>
          <p className="text-gray-700 mb-4">
            Policies are reviewed regularly to ensure they remain current and effective. 
            Subscribe to receive notifications when policies are updated.
          </p>
          <div className="flex gap-3 max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3d4d6f]"
            />
            <button className="bg-[#3d4d6f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2f3d57] transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
