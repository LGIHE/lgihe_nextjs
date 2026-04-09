import PageTemplate from "@/components/PageTemplate";

export default function AcademicStaffPage() {
  return (
    <PageTemplate 
      title="Academic Staff" 
      subtitle="Our distinguished faculty and researchers"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our academic staff are experts in their fields, committed to excellence in teaching, 
          research, and mentorship.
        </p>

        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Search by name, department, or expertise..." 
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Faculty by School</h2>
        
        {["Arts & Humanities", "Business", "Education", "Science"].map((school) => (
          <div key={school} className="mb-8">
            <h3 className="text-xl font-bold text-[#5B6F8C] mb-4">{school}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#5B6F8C]/10 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-[#5B6F8C]">Dr. Faculty Member {i}</h4>
                    <p className="text-sm text-gray-600">Professor of [Subject]</p>
                    <p className="text-xs text-gray-500">faculty{i}@lgihe.edu</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
