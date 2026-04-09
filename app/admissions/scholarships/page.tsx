import PageTemplate from "@/components/PageTemplate";

export default function ScholarshipsPage() {
  return (
    <PageTemplate 
      title="Scholarships & Financial Aid" 
      subtitle="Making education accessible to all deserving students"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE offers a range of scholarships and financial aid options to support talented 
          students in achieving their educational goals.
        </p>

        <div className="space-y-6">
          {[
            { name: "Merit Scholarship", amount: "Up to 100% tuition", desc: "For students with exceptional academic achievement" },
            { name: "Need-Based Grant", amount: "Varies", desc: "Financial assistance based on demonstrated need" },
            { name: "Sports Scholarship", amount: "Up to 50% tuition", desc: "For outstanding athletes representing LGIHE" },
            { name: "Community Service Award", amount: "$2,000 - $5,000", desc: "Recognizing students with significant community impact" },
            { name: "International Student Scholarship", amount: "Up to 30% tuition", desc: "Supporting international students" },
          ].map((scholarship) => (
            <div key={scholarship.name} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-[#5B6F8C]">{scholarship.name}</h3>
                <span className="bg-[#5B6F8C]/10 text-[#5B6F8C] px-3 py-1 rounded-full text-sm font-medium">
                  {scholarship.amount}
                </span>
              </div>
              <p className="text-gray-700">{scholarship.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#5B6F8C] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">How to Apply for Scholarships</h3>
          <p className="mb-4">
            Complete the scholarship application form along with your admission application. 
            Most scholarships are awarded automatically based on your application materials.
          </p>
          <a href="/admissions/portal" className="inline-block bg-white text-[#5B6F8C] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
