import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function CampusNewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "LGIHE Launches New Research Center for Educational Innovation",
      date: "April 8, 2026",
      category: "Research",
      excerpt: "The institute inaugurates a state-of-the-art research center dedicated to advancing educational methodologies and technologies.",
      image: "/images/campus-1.JPG",
    },
    {
      id: 2,
      title: "Students Win National Debate Championship",
      date: "April 5, 2026",
      category: "Student Achievement",
      excerpt: "LGIHE debate team secures first place at the National Intercollegiate Debate Competition.",
      image: "/images/campus-2.JPG",
    },
    {
      id: 3,
      title: "Partnership Announced with International Universities",
      date: "April 1, 2026",
      category: "Partnerships",
      excerpt: "LGIHE signs memorandum of understanding with leading universities in Europe and Asia for student exchange programs.",
      image: "/images/campus-3.JPG",
    },
  ];

  return (
    <PageTemplate 
      title="Campus News" 
      subtitle="Stay informed about the latest happenings at LGIHE"
    >
      <div className="space-y-8">
        {/* Featured News */}
        <section>
          <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm font-semibold uppercase tracking-wider mb-2">Featured Story</span>
                <h2 className="text-3xl font-bold mb-4">LGIHE Ranked Among Top Education Institutions</h2>
                <p className="mb-6 text-white/90">
                  The institute has been recognized for excellence in teacher education and research impact in the latest national rankings.
                </p>
                <Link 
                  href="#" 
                  className="inline-block bg-white text-[#3d4d6f] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit"
                >
                  Read Full Story
                </Link>
              </div>
              <div className="h-64 md:h-auto bg-gray-300"></div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section>
          <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <article 
                key={article.id} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#3d4d6f] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <Link 
                    href="#" 
                    className="text-[#3d4d6f] font-semibold text-sm hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* News Categories */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {["Academic", "Research", "Student Life", "Events", "Partnerships", "Awards", "Community", "Announcements"].map((category) => (
              <Link 
                key={category}
                href="#"
                className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:border-[#3d4d6f] hover:shadow-md transition-all"
              >
                <span className="font-semibold text-[#3d4d6f]">{category}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Campus News</h2>
            <p className="mb-6">
              Get the latest news and updates delivered directly to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#3d4d6f] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
