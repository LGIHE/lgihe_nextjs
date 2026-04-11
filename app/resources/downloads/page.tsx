import PageTemplate from "@/components/PageTemplate";

export default function DownloadsPage() {
  const downloadCategories = [
    {
      title: "Prospectuses & Brochures",
      items: [
        { name: "Undergraduate Prospectus 2026", size: "12.5 MB", format: "PDF" },
        { name: "Postgraduate Prospectus 2026", size: "8.3 MB", format: "PDF" },
        { name: "LGIHE General Brochure", size: "5.2 MB", format: "PDF" },
        { name: "International Students Guide", size: "3.8 MB", format: "PDF" },
      ],
    },
    {
      title: "Application Forms",
      items: [
        { name: "Undergraduate Application Form", size: "450 KB", format: "PDF" },
        { name: "Postgraduate Application Form", size: "520 KB", format: "PDF" },
        { name: "Certificate Programme Application", size: "380 KB", format: "PDF" },
        { name: "Diploma Programme Application", size: "410 KB", format: "PDF" },
      ],
    },
    {
      title: "Academic Resources",
      items: [
        { name: "Academic Calendar 2026", size: "1.2 MB", format: "PDF" },
        { name: "Student Handbook", size: "6.5 MB", format: "PDF" },
        { name: "Programme Regulations", size: "2.8 MB", format: "PDF" },
        { name: "Examination Guidelines", size: "1.5 MB", format: "PDF" },
      ],
    },
    {
      title: "Research Publications",
      items: [
        { name: "Annual Research Report 2025", size: "15.2 MB", format: "PDF" },
        { name: "Research Ethics Guidelines", size: "2.1 MB", format: "PDF" },
        { name: "Journal of Education Vol. 12", size: "18.5 MB", format: "PDF" },
        { name: "Research Proposal Template", size: "850 KB", format: "DOCX" },
      ],
    },
  ];

  return (
    <PageTemplate 
      title="Downloads" 
      subtitle="Access important documents, forms, and resources"
    >
      <div className="space-y-12">
        {/* Quick Access */}
        <section className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors text-left">
              <h3 className="font-bold mb-2">Application Forms</h3>
              <p className="text-sm text-white/90">Download admission forms</p>
            </button>
            <button className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors text-left">
              <h3 className="font-bold mb-2">Prospectuses</h3>
              <p className="text-sm text-white/90">View programme details</p>
            </button>
            <button className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors text-left">
              <h3 className="font-bold mb-2">Student Resources</h3>
              <p className="text-sm text-white/90">Access handbooks and guides</p>
            </button>
          </div>
        </section>

        {/* Download Categories */}
        {downloadCategories.map((category, index) => (
          <section key={index}>
            <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">{category.title}</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className={`flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${
                    itemIndex !== category.items.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-[#3d4d6f]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#3d4d6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.format} • {item.size}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 bg-[#3d4d6f] text-white px-6 py-2.5 rounded-lg hover:bg-[#2f3d57] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="font-semibold">Download</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Help Section */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Need Help?</h2>
          <p className="text-gray-700 mb-4">
            If you're having trouble downloading files or need a document that's not listed here, 
            please contact our support team.
          </p>
          <button className="bg-[#3d4d6f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2f3d57] transition-colors">
            Contact Support
          </button>
        </section>
      </div>
    </PageTemplate>
  );
}
