import PageTemplate from "@/components/PageTemplate";

export default function ClubsPage() {
  return (
    <PageTemplate 
      title="Clubs & Societies" 
      subtitle="Find your community and pursue your passions"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          With over 50 student-run clubs and societies, there's something for everyone at LGIHE. 
          Join existing groups or start your own!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { category: "Academic", clubs: ["Debate Society", "Science Club", "Business Association", "Literature Circle"] },
            { category: "Cultural", clubs: ["Drama Club", "Music Society", "Art Collective", "International Students"] },
            { category: "Sports", clubs: ["Football", "Basketball", "Volleyball", "Athletics"] },
            { category: "Service", clubs: ["Community Outreach", "Environmental Club", "Peer Mentoring", "Red Cross"] },
            { category: "Special Interest", clubs: ["Photography", "Coding Club", "Entrepreneurship", "Gaming Society"] },
            { category: "Religious", clubs: ["Christian Fellowship", "Muslim Students", "Interfaith Dialogue", "Meditation Group"] },
          ].map((group) => (
            <div key={group.category} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#3d4d6f] mb-3">{group.category}</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {group.clubs.map((club) => (
                  <li key={club}>• {club}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#3d4d6f] text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-3">Start Your Own Club</h3>
          <p className="mb-4">Have an idea for a new club? We provide support and funding for student initiatives.</p>
          <button className="bg-white text-[#3d4d6f] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </PageTemplate>
  );
}
