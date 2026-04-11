import PageTemplate from "@/components/PageTemplate";

export default function GovernancePage() {
  return (
    <PageTemplate 
      title="Governance Structure" 
      subtitle="Leadership and organizational framework"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE operates under a robust governance structure that ensures transparency, 
          accountability, and effective decision-making.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Board of Directors</h3>
            <p className="text-gray-700">
              Provides strategic oversight and ensures the institution fulfills its mission and vision.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Academic Council</h3>
            <p className="text-gray-700">
              Oversees academic policies, curriculum development, and quality assurance.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Executive Management</h3>
            <p className="text-gray-700">
              Manages day-to-day operations and implements strategic initiatives.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Faculty Senate</h3>
            <p className="text-gray-700">
              Represents faculty interests and contributes to academic governance.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
