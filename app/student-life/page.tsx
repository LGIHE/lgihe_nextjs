import PageTemplate from "@/components/PageTemplate";

export default function StudentLifePage() {
  return (
    <PageTemplate 
      title="Student Life" 
      subtitle="Experience a vibrant campus community"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Life at LGIHE extends far beyond the classroom. Join a thriving community of students 
          engaged in clubs, sports, cultural activities, and social events.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { title: "Clubs & Societies", desc: "Over 50 student organizations", icon: "🎭" },
            { title: "Sports & Recreation", desc: "State-of-the-art facilities", icon: "⚽" },
            { title: "Cultural Events", desc: "Year-round activities", icon: "🎨" },
            { title: "Student Guild", desc: "Your voice on campus", icon: "🗣️" },
            { title: "Accommodation", desc: "Comfortable on-campus housing", icon: "🏠" },
            { title: "Health & Wellbeing", desc: "Comprehensive support services", icon: "💚" },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-[#3d4d6f] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
          <p className="mb-6">
            Discover opportunities to connect, grow, and make lasting memories at LGIHE.
          </p>
          <a href="/student-life/clubs" className="inline-block bg-white text-[#3d4d6f] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Explore Opportunities
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
