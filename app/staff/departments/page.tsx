import PageTemplate from "@/components/PageTemplate";

export default function DepartmentsPage() {
  return (
    <PageTemplate 
      title="Departments" 
      subtitle="Administrative departments and their functions"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE's administrative departments work together to ensure efficient operations 
          and excellent service delivery.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Admissions", desc: "Student recruitment and enrollment", contact: "admissions@lgihe.edu" },
            { name: "Finance", desc: "Financial management and student accounts", contact: "finance@lgihe.edu" },
            { name: "Human Resources", desc: "Staff recruitment and development", contact: "hr@lgihe.edu" },
            { name: "IT Services", desc: "Technology support and infrastructure", contact: "itsupport@lgihe.edu" },
            { name: "Library", desc: "Information resources and research support", contact: "library@lgihe.edu" },
            { name: "Student Services", desc: "Student support and wellbeing", contact: "studentservices@lgihe.edu" },
            { name: "Facilities", desc: "Campus maintenance and operations", contact: "facilities@lgihe.edu" },
            { name: "Marketing", desc: "Communications and public relations", contact: "marketing@lgihe.edu" },
          ].map((dept) => (
            <div key={dept.name} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{dept.name}</h3>
              <p className="text-gray-700 text-sm mb-3">{dept.desc}</p>
              <p className="text-xs text-gray-600">📧 {dept.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
