import PageTemplate from "@/components/PageTemplate";

export default function InternationalPage() {
  return (
    <PageTemplate 
      title="International Students" 
      subtitle="Welcome to our global community"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE welcomes students from around the world. We provide comprehensive support to 
          help international students succeed academically and adjust to life in our community.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Additional Requirements</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>English proficiency test (TOEFL iBT 80+ or IELTS 6.5+)</li>
            <li>Certified translations of academic documents</li>
            <li>Financial support documentation</li>
            <li>Copy of passport</li>
            <li>Student visa application support</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Support Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Airport pickup", "Orientation program", "Visa assistance", "Housing support", 
            "Cultural integration", "Language support"].map((service) => (
            <div key={service} className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
