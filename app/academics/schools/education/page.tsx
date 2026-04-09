import PageTemplate from "@/components/PageTemplate";

export default function EducationSchoolPage() {
  return (
    <PageTemplate 
      title="School of Education" 
      subtitle="Shaping the educators of tomorrow"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The School of Education is dedicated to preparing skilled, compassionate educators 
          who will inspire and empower the next generation of learners.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Teacher Training Programs</h2>
        <div className="space-y-4 mb-8">
          {["Early Childhood Education", "Primary Education", "Secondary Education", 
            "Special Education", "Educational Leadership"].map((program) => (
            <div key={program} className="bg-white border-l-4 border-[#5B6F8C] p-4">
              <h3 className="font-bold text-[#5B6F8C]">{program}</h3>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Teaching Practice</h3>
          <p className="text-gray-700">
            All programs include extensive practical teaching experience in partner schools, 
            ensuring graduates are classroom-ready.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
