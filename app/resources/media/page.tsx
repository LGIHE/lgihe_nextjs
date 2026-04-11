import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function MediaPage() {
  const mediaGalleries = [
    {
      title: "Campus Life",
      count: 45,
      thumbnail: "/images/campus-1.JPG",
    },
    {
      title: "Graduation 2025",
      count: 120,
      thumbnail: "/images/campus-2.JPG",
    },
    {
      title: "Research Events",
      count: 32,
      thumbnail: "/images/campus-3.JPG",
    },
    {
      title: "Sports & Recreation",
      count: 67,
      thumbnail: "/images/campus-4.JPG",
    },
  ];

  const videos = [
    {
      title: "Welcome to LGIHE",
      duration: "3:45",
      views: "12.5K",
      date: "March 2026",
    },
    {
      title: "Student Testimonials",
      duration: "5:20",
      views: "8.2K",
      date: "February 2026",
    },
    {
      title: "Campus Tour",
      duration: "10:15",
      views: "15.3K",
      date: "January 2026",
    },
  ];

  return (
    <PageTemplate 
      title="Media Gallery" 
      subtitle="Explore photos, videos, and multimedia content from LGIHE"
    >
      <div className="space-y-12">
        {/* Photo Galleries */}
        <section>
          <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">Photo Galleries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaGalleries.map((gallery, index) => (
              <Link 
                key={index}
                href="#"
                className="group relative overflow-hidden rounded-lg bg-gray-200 aspect-square hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h3 className="text-xl font-bold mb-1">{gallery.title}</h3>
                  <p className="text-sm text-white/90">{gallery.count} photos</p>
                </div>
                <div className="absolute inset-0 bg-[#3d4d6f] group-hover:scale-110 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Video Library */}
        <section>
          <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">Video Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <svg className="w-8 h-8 text-[#3d4d6f] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Feed */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">Follow Us on Social Media</h2>
          <p className="text-gray-700 mb-6">
            Stay connected with LGIHE through our social media channels for daily updates, 
            behind-the-scenes content, and community highlights.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <a 
              href="https://www.facebook.com/LGIHE/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-[#3d4d6f] hover:shadow-md transition-all"
            >
              <svg className="w-8 h-8 mx-auto mb-3 text-[#3d4d6f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="font-semibold text-[#3d4d6f]">Facebook</span>
            </a>
            <a 
              href="https://x.com/LGIHE1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-[#3d4d6f] hover:shadow-md transition-all"
            >
              <svg className="w-8 h-8 mx-auto mb-3 text-[#3d4d6f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span className="font-semibold text-[#3d4d6f]">Twitter</span>
            </a>
            <a 
              href="http://ug.linkedin.com/company/luigi-giussani-institute-of-higher-education" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-[#3d4d6f] hover:shadow-md transition-all"
            >
              <svg className="w-8 h-8 mx-auto mb-3 text-[#3d4d6f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-semibold text-[#3d4d6f]">LinkedIn</span>
            </a>
            <a 
              href="https://www.youtube.com/@lgihe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-[#3d4d6f] hover:shadow-md transition-all"
            >
              <svg className="w-8 h-8 mx-auto mb-3 text-[#3d4d6f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="font-semibold text-[#3d4d6f]">YouTube</span>
            </a>
          </div>
        </section>

        {/* Media Inquiries */}
        <section className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
            <p className="mb-6">
              For press releases, media kits, or interview requests, please contact our 
              Communications Office.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#3d4d6f] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Communications
            </Link>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
