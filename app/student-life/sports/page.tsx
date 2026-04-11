import PageTemplate from "@/components/PageTemplate";

export default function SportsPage() {
  return (
    <PageTemplate 
      title="Sports & Recreation" 
      subtitle="Stay active and healthy"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our sports complex offers world-class facilities for both competitive athletes and 
          recreational fitness enthusiasts.
        </p>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Facilities</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            "Olympic-size swimming pool",
            "Fully-equipped gymnasium",
            "Indoor sports hall",
            "Outdoor football pitch",
            "Basketball courts",
            "Tennis courts",
            "Running track",
            "Fitness studio",
          ].map((facility) => (
            <div key={facility} className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 font-medium">{facility}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Varsity Teams</h2>
        <p className="text-gray-700 mb-4">
          Represent LGIHE in inter-university competitions:
        </p>
        <div className="flex flex-wrap gap-3">
          {["Football", "Basketball", "Volleyball", "Athletics", "Swimming", "Tennis", "Rugby", "Netball"].map((sport) => (
            <span key={sport} className="bg-[#3d4d6f] text-white px-4 py-2 rounded-full text-sm">
              {sport}
            </span>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
