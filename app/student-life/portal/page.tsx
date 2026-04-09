import PageTemplate from "@/components/PageTemplate";

export default function StudentPortalPage() {
  return (
    <PageTemplate 
      title="Student Portal" 
      subtitle="Access your academic information and campus services"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Login to Student Portal</h2>
          <p className="mb-6">Access your courses, grades, and campus services</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-[#5B6F8C] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Student Login
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Staff Login
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Portal Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Course Registration", desc: "Enroll in courses and view your schedule" },
            { title: "Grades & Transcripts", desc: "Check your academic progress" },
            { title: "Financial Information", desc: "View fees and payment history" },
            { title: "Library Account", desc: "Manage borrowed books and resources" },
            { title: "Email & Communication", desc: "Access your student email" },
            { title: "Events Calendar", desc: "Stay updated on campus activities" },
            { title: "Support Services", desc: "Request assistance and support" },
            { title: "Personal Information", desc: "Update your contact details" },
          ].map((feature) => (
            <div key={feature.title} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#5B6F8C]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Need Help?</h3>
          <p className="text-gray-700">
            Contact IT Support at itsupport@lgihe.edu or call +123 456 7895 for portal assistance.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
