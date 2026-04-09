import PageTemplate from "@/components/PageTemplate";

export default function ScienceSchoolPage() {
  return (
    <PageTemplate 
      title="School of Science" 
      subtitle="Advancing knowledge through scientific inquiry and innovation"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The School of Science offers cutting-edge programs in natural sciences, mathematics, 
          and technology, with state-of-the-art laboratories and research facilities.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Departments</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {["Computer Science", "Mathematics", "Physics", "Chemistry", "Biology", "Environmental Science"].map((dept) => (
            <div key={dept} className="bg-gradient-to-br from-[#5B6F8C]/5 to-[#5B6F8C]/10 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{dept}</h3>
              <p className="text-gray-700 text-sm">Research-focused programs with modern facilities</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Research Excellence</h3>
          <p className="text-gray-700">
            Our faculty and students engage in groundbreaking research across various scientific 
            disciplines, contributing to global knowledge and innovation.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
