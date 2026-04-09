import PageTemplate from "@/components/PageTemplate";

export default function PostgraduatePage() {
  return (
    <PageTemplate 
      title="Postgraduate Programmes" 
      subtitle="Advanced degrees for specialized expertise and research"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our postgraduate programs offer advanced study and research opportunities for 
          professionals seeking to deepen their expertise and advance their careers.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Master's Programmes</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {["MBA", "MA in Education", "MSc in Computer Science", "MA in International Relations"].map((program) => (
            <div key={program} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{program}</h3>
              <p className="text-gray-700 text-sm">Duration: 1-2 years | Mode: Full-time/Part-time</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Doctoral Programmes</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700">
            Our PhD programs provide rigorous research training and mentorship from leading scholars 
            in your field. Contribute to knowledge creation and become an expert in your discipline.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
