import PageTemplate from "@/components/PageTemplate";

export default function UndergraduatePage() {
  return (
    <PageTemplate 
      title="Undergraduate Programmes" 
      subtitle="Bachelor's degree programs designed for academic excellence"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our undergraduate programs provide a solid foundation in your chosen field while 
          developing critical thinking, problem-solving, and leadership skills.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {["Arts & Humanities", "Business Administration", "Education", "Science & Technology", 
            "Social Sciences", "Health Sciences"].map((program) => (
            <div key={program} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">{program}</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive program with industry-relevant curriculum and hands-on learning opportunities.
              </p>
              <a href="#" className="text-[#5B6F8C] font-medium hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
