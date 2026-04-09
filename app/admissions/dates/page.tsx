import PageTemplate from "@/components/PageTemplate";

export default function DatesPage() {
  return (
    <PageTemplate 
      title="Important Dates" 
      subtitle="Key deadlines and academic calendar"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Application Deadlines 2026</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-white border-l-4 border-[#5B6F8C] p-4">
            <h3 className="font-bold text-[#5B6F8C]">Undergraduate Early Decision</h3>
            <p className="text-gray-700">Deadline: November 1, 2026</p>
          </div>
          <div className="bg-white border-l-4 border-[#5B6F8C] p-4">
            <h3 className="font-bold text-[#5B6F8C]">Undergraduate Regular Decision</h3>
            <p className="text-gray-700">Deadline: January 15, 2027</p>
          </div>
          <div className="bg-white border-l-4 border-[#5B6F8C] p-4">
            <h3 className="font-bold text-[#5B6F8C]">Postgraduate Applications</h3>
            <p className="text-gray-700">Rolling admissions - Apply anytime</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Academic Calendar 2026-2027</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Semester 1 Begins</span>
              <span className="text-gray-600">September 1, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Mid-term Break</span>
              <span className="text-gray-600">October 15-22, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Semester 1 Ends</span>
              <span className="text-gray-600">December 20, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Semester 2 Begins</span>
              <span className="text-gray-600">January 10, 2027</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Semester 2 Ends</span>
              <span className="text-gray-600">May 30, 2027</span>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
