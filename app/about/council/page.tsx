import PageTemplate from "@/components/PageTemplate";

export default function CouncilPage() {
  return (
    <PageTemplate 
      title="Academic Council" 
      subtitle="Leadership in academic excellence"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The Academic Council is responsible for maintaining and enhancing the quality of 
          education and research at LGIHE.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Council Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Review and approve academic programs and curricula</li>
          <li>Establish academic standards and policies</li>
          <li>Oversee quality assurance processes</li>
          <li>Promote research and scholarly activities</li>
          <li>Advise on academic appointments and promotions</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Council Members</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
              <div className="w-16 h-16 bg-[#5B6F8C]/10 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-[#5B6F8C]">Council Member {i}</h3>
                <p className="text-sm text-gray-600">Position & Department</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
