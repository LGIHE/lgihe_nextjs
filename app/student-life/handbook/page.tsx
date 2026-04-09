import PageTemplate from "@/components/PageTemplate";

export default function HandbookPage() {
  return (
    <PageTemplate 
      title="Student Handbook" 
      subtitle="Your guide to policies, procedures, and campus life"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The Student Handbook contains important information about academic policies, student 
          conduct, campus resources, and your rights and responsibilities as an LGIHE student.
        </p>

        <div className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-8 rounded-lg text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Download the Handbook</h3>
          <p className="mb-6">Academic Year 2026-2027</p>
          <button className="bg-white text-[#5B6F8C] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Download PDF
          </button>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">What's Inside</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Academic policies and procedures",
            "Code of conduct",
            "Grading system",
            "Attendance requirements",
            "Examination regulations",
            "Student rights and responsibilities",
            "Campus facilities and services",
            "Health and safety information",
            "IT and library policies",
            "Grievance procedures",
          ].map((item) => (
            <div key={item} className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
              <span className="text-[#5B6F8C]">📄</span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
