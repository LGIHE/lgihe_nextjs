import PageTemplate from "@/components/PageTemplate";

export default function DiplomaPage() {
  return (
    <PageTemplate 
      title="Diploma Programmes" 
      subtitle="Professional qualifications for career advancement"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our diploma programs provide practical skills and knowledge for immediate application 
          in the workplace, with flexible study options for working professionals.
        </p>

        <div className="space-y-4">
          {["Business Management", "Information Technology", "Education", "Healthcare Management", 
            "Project Management"].map((program) => (
            <div key={program} className="bg-white border border-gray-200 rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-[#5B6F8C] mb-1">Diploma in {program}</h3>
                <p className="text-sm text-gray-600">Duration: 1 year | Evening & Weekend classes available</p>
              </div>
              <a href="#" className="text-[#5B6F8C] font-medium hover:underline whitespace-nowrap">Apply Now →</a>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
