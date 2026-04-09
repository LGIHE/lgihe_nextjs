import PageTemplate from "@/components/PageTemplate";

export default function CampusPage() {
  return (
    <PageTemplate 
      title="Campus Life" 
      subtitle="Your home away from home"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our beautiful campus provides a safe, welcoming environment where students can learn, 
          grow, and thrive. Modern facilities and green spaces create the perfect setting for 
          academic and personal development.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Campus Facilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Modern lecture halls and classrooms",
            "State-of-the-art laboratories",
            "Comprehensive library with digital resources",
            "Student center and lounges",
            "Dining halls and cafeterias",
            "Sports complex and gymnasium",
            "Medical center",
            "Computer labs",
          ].map((facility) => (
            <div key={facility} className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
              <span className="text-[#5B6F8C] text-xl">✓</span>
              <span className="text-gray-700">{facility}</span>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
