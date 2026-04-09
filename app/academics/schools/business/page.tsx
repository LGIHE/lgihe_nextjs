import PageTemplate from "@/components/PageTemplate";

export default function BusinessSchoolPage() {
  return (
    <PageTemplate 
      title="School of Business" 
      subtitle="Developing future business leaders and entrepreneurs"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our School of Business prepares students for successful careers in the dynamic world 
          of business through innovative programs and industry partnerships.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programs Offered</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Bachelor of Business Administration (BBA)</li>
          <li>Master of Business Administration (MBA)</li>
          <li>Accounting & Finance</li>
          <li>Marketing & Sales</li>
          <li>Entrepreneurship</li>
          <li>International Business</li>
        </ul>

        <div className="bg-[#5B6F8C]/5 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Industry Connections</h3>
          <p className="text-gray-700">
            Strong partnerships with leading companies provide internship opportunities, 
            guest lectures, and career placement support.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
