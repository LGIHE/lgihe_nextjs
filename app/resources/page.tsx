import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Campus News",
      description: "Stay updated with the latest news, announcements, and stories from LGIHE",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      href: "/resources/campus-news",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Policies",
      description: "Access official policies, procedures, and regulations governing the institution",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      href: "/resources/policies",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Media Gallery",
      description: "Explore photos, videos, and multimedia content from campus life and events",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      href: "/resources/media",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Downloads",
      description: "Download important documents, forms, prospectuses, and academic resources",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      href: "/resources/downloads",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Events",
      description: "View upcoming events, academic calendar, and campus activities",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      href: "/events",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <PageTemplate 
      title="Resources" 
      subtitle="Access important information, documents, and campus resources"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <p className="text-lg text-gray-700">
            Welcome to the LGIHE Resources Hub. Here you'll find everything you need including 
            news, policies, media content, downloadable documents, and information about campus events.
          </p>
        </section>

        {/* Resource Categories */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <Link 
                key={index}
                href={category.href}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${category.color} p-6 text-white`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{category.description}</p>
                  <div className="mt-4 flex items-center text-[#3d4d6f] font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Explore</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link 
              href="/student-life/handbook" 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <h3 className="font-bold mb-2">Student Handbook</h3>
              <p className="text-sm text-white/90">Essential guide for students</p>
            </Link>
            <Link 
              href="/admissions/prospectus" 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <h3 className="font-bold mb-2">Prospectus</h3>
              <p className="text-sm text-white/90">Programme information</p>
            </Link>
            <Link 
              href="/research" 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <h3 className="font-bold mb-2">Research</h3>
              <p className="text-sm text-white/90">Research activities</p>
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p className="text-sm text-white/90">Get in touch</p>
            </Link>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#3d4d6f] mb-4">Need Help Finding Something?</h2>
            <p className="text-gray-700 mb-6">
              If you can't find what you're looking for, our support team is here to help. 
              Contact us and we'll assist you in finding the resources you need.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#3d4d6f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2f3d57] transition-colors"
              >
                Contact Support
              </Link>
              <button className="bg-white text-[#3d4d6f] px-8 py-3 rounded-full font-semibold border-2 border-[#3d4d6f] hover:bg-[#3d4d6f] hover:text-white transition-colors">
                Search Resources
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
