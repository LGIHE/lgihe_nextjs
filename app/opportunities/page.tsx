import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function OpportunitiesPage() {
  return (
    <PageTemplate 
      title="Opportunities" 
      subtitle="Explore career and business opportunities at LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-12">
          The Luigi Giussani Institute of Higher Education offers various opportunities for 
          professionals, businesses, and service providers to engage with our institution.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Jobs Card */}
          <Link href="/jobs" className="group">
            <div className="bg-white border-2 border-[#5B6F8C]/20 rounded-lg p-8 hover:border-[#5B6F8C] hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#5B6F8C]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#5B6F8C] transition-colors">
                <svg className="w-8 h-8 text-[#5B6F8C] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#5B6F8C] mb-3">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">
                Join our team of dedicated professionals committed to transforming education in Uganda and throughout Africa.
              </p>
              <div className="flex items-center gap-2 text-[#5B6F8C] font-medium group-hover:gap-3 transition-all">
                View Open Positions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Tenders Card */}
          <Link href="/tenders" className="group">
            <div className="bg-white border-2 border-[#5B6F8C]/20 rounded-lg p-8 hover:border-[#5B6F8C] hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#5B6F8C]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#5B6F8C] transition-colors">
                <svg className="w-8 h-8 text-[#5B6F8C] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#5B6F8C] mb-3">Tender Opportunities</h2>
              <p className="text-gray-700 mb-4">
                Explore procurement and tender opportunities for businesses and service providers interested in working with LGIHE.
              </p>
              <div className="flex items-center gap-2 text-[#5B6F8C] font-medium group-hover:gap-3 transition-all">
                View Active Tenders
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-[#5B6F8C]/5 border-l-4 border-[#5B6F8C] p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Stay Updated</h3>
          <p className="text-gray-700 mb-4">
            New opportunities are posted regularly. Check back often or subscribe to our newsletter 
            to receive notifications about new job openings and tender announcements.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 text-[#5B6F8C] hover:text-[#4a5a70] font-medium transition-colors"
          >
            Contact Us for More Information
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}
