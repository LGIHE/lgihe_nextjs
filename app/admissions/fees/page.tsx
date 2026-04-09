import PageTemplate from "@/components/PageTemplate";

export default function FeesPage() {
  return (
    <PageTemplate 
      title="Tuition & Fees" 
      subtitle="Investment in your future"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE is committed to making quality education accessible. Below are our tuition fees 
          and additional costs to help you plan your investment in education.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#5B6F8C] mb-4">Undergraduate Programs</h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Tuition per year:</span> $10,000</p>
              <p><span className="font-semibold">Registration fee:</span> $500</p>
              <p><span className="font-semibold">Student services:</span> $300</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#5B6F8C] mb-4">Postgraduate Programs</h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Tuition per year:</span> $15,000</p>
              <p><span className="font-semibold">Registration fee:</span> $750</p>
              <p><span className="font-semibold">Research fees:</span> $500</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Additional Costs</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Accommodation: $3,000 - $5,000 per year</li>
            <li>Books and materials: $500 - $1,000 per year</li>
            <li>Health insurance: $800 per year</li>
            <li>Living expenses: $4,000 - $6,000 per year</li>
          </ul>
        </div>

        <div className="bg-[#5B6F8C]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Financial Aid Available</h3>
          <p className="text-gray-700">
            We offer various scholarships, grants, and payment plans to help make education 
            affordable. Visit our <a href="/admissions/scholarships" className="text-[#5B6F8C] underline">scholarships page</a> to learn more.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
