import PageTemplate from "@/components/PageTemplate";

export default function UnionPage() {
  return (
    <PageTemplate 
      title="Student Union" 
      subtitle="Your voice, your representation"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The LGIHE Student Union represents the interests of all students and works to enhance 
          the student experience through advocacy, services, and activities.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            "Represent student interests to university administration",
            "Organize social and cultural events",
            "Provide student services and support",
            "Manage student clubs and societies",
            "Advocate for student rights and welfare",
            "Facilitate student feedback and concerns",
          ].map((item) => (
            <div key={item} className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
              <span className="text-[#5B6F8C] text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Executive Committee</h2>
        <div className="space-y-4">
          {[
            { position: "President", name: "Student Name" },
            { position: "Vice President", name: "Student Name" },
            { position: "Secretary", name: "Student Name" },
            { position: "Treasurer", name: "Student Name" },
          ].map((member) => (
            <div key={member.position} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-[#5B6F8C]/10 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-[#5B6F8C]">{member.position}</h3>
                <p className="text-gray-600">{member.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#5B6F8C]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Get Involved</h3>
          <p className="text-gray-700">
            Elections are held annually. Consider running for a position or volunteering with 
            the Student Union to make a difference on campus.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
