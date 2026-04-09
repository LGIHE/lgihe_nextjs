import PageTemplate from "@/components/PageTemplate";

export default function ResearchStaffPage() {
  return (
    <PageTemplate 
      title="Research Staff" 
      subtitle="Leading innovation and discovery"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our research staff are at the forefront of knowledge creation, conducting groundbreaking 
          research across various disciplines.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Research Centers</h2>
        <div className="space-y-6">
          {[
            { center: "Center for Social Research", lead: "Dr. Research Lead", focus: "Community development and social policy" },
            { center: "Institute for Science & Technology", lead: "Prof. Science Director", focus: "Innovation in science and engineering" },
            { center: "Business Research Unit", lead: "Dr. Business Scholar", focus: "Entrepreneurship and economic development" },
            { center: "Education Research Center", lead: "Prof. Education Expert", focus: "Pedagogy and curriculum development" },
          ].map((center) => (
            <div key={center.center} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#5B6F8C] mb-2">{center.center}</h3>
              <p className="text-gray-600 mb-2"><strong>Director:</strong> {center.lead}</p>
              <p className="text-gray-700 text-sm">{center.focus}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#5B6F8C]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Research Collaboration</h3>
          <p className="text-gray-700">
            Interested in collaborating with our research staff? Contact research@lgihe.edu 
            to explore partnership opportunities.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
