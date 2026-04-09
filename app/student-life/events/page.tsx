import PageTemplate from "@/components/PageTemplate";

export default function EventsPage() {
  return (
    <PageTemplate 
      title="Events & Activities" 
      subtitle="Experience campus life to the fullest"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Throughout the year, LGIHE hosts a diverse range of events that bring our community 
          together and create lasting memories.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Annual Events</h2>
        <div className="space-y-4 mb-8">
          {[
            { event: "Orientation Week", desc: "Welcome new students with activities, tours, and social events" },
            { event: "Cultural Festival", desc: "Celebrate diversity with performances, food, and exhibitions" },
            { event: "Sports Day", desc: "Inter-house competitions and athletic events" },
            { event: "Academic Conference", desc: "Student research presentations and guest speakers" },
            { event: "Talent Show", desc: "Showcase student talents in music, dance, and performance" },
            { event: "Graduation Ceremony", desc: "Celebrate academic achievements" },
          ].map((item) => (
            <div key={item.event} className="bg-white border-l-4 border-[#5B6F8C] p-4">
              <h3 className="font-bold text-[#5B6F8C] mb-1">{item.event}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
          <p className="mb-4">
            Check the student portal for the latest events calendar and register for upcoming activities.
          </p>
          <a href="/portal" className="inline-block bg-white text-[#5B6F8C] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            View Calendar
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
