import PageTemplate from "@/components/PageTemplate";

export default function PublicationsPage() {
  return (
    <PageTemplate 
      title="Publications" 
      subtitle="Sharing knowledge and research findings"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our faculty and researchers regularly publish their work in leading academic journals, 
          books, and conference proceedings.
        </p>

        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Search publications by title, author, or keyword..." 
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Recent Publications</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">
                Research Paper Title {i}: An Investigation into [Topic]
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Author Name, Co-Author Name | Published in Journal Name, 2026
              </p>
              <p className="text-gray-700 text-sm mb-3">
                Abstract: This research explores important aspects of the field and presents 
                significant findings that contribute to our understanding...
              </p>
              <a href="#" className="text-[#5B6F8C] text-sm font-medium hover:underline">
                Read Full Paper →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#5B6F8C]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">LGIHE Research Journal</h3>
          <p className="text-gray-700 mb-4">
            Our institutional journal publishes peer-reviewed research across all disciplines. 
            Submit your manuscript or access past issues.
          </p>
          <button className="bg-[#5B6F8C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#4A5D75] transition-colors">
            Visit Journal
          </button>
        </div>
      </div>
    </PageTemplate>
  );
}
