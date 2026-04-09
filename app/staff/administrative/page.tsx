import PageTemplate from "@/components/PageTemplate";

export default function AdministrativeStaffPage() {
  return (
    <PageTemplate 
      title="Administrative Staff" 
      subtitle="Supporting excellence in education and operations"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our administrative team ensures smooth operations and provides essential support 
          services to students, faculty, and the institution.
        </p>

        <div className="space-y-8">
          {[
            { dept: "Office of the Principal", staff: ["Principal", "Deputy Principal", "Executive Assistant"] },
            { dept: "Admissions Office", staff: ["Director of Admissions", "Admissions Officers", "International Student Coordinator"] },
            { dept: "Student Services", staff: ["Dean of Students", "Student Counselors", "Accommodation Manager"] },
            { dept: "Finance Office", staff: ["Finance Director", "Accountants", "Bursary Staff"] },
            { dept: "Human Resources", staff: ["HR Director", "HR Officers", "Recruitment Coordinator"] },
            { dept: "IT Services", staff: ["IT Director", "Systems Administrators", "Help Desk Support"] },
            { dept: "Library Services", staff: ["Chief Librarian", "Reference Librarians", "Library Assistants"] },
            { dept: "Facilities Management", staff: ["Facilities Manager", "Maintenance Staff", "Security Team"] },
          ].map((department) => (
            <div key={department.dept} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#5B6F8C] mb-4">{department.dept}</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {department.staff.map((role) => (
                  <div key={role} className="bg-gray-50 p-3 rounded">
                    <p className="text-gray-700 text-sm font-medium">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
