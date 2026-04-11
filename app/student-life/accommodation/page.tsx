import PageTemplate from "@/components/PageTemplate";

export default function AccommodationPage() {
  return (
    <PageTemplate 
      title="Accommodation" 
      subtitle="Comfortable and convenient on-campus housing"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE offers a variety of accommodation options to suit different preferences and budgets. 
          All residences are within walking distance of academic buildings and campus facilities.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">Standard Rooms</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Shared rooms (2-4 students)</li>
              <li>Common bathrooms</li>
              <li>Study areas</li>
              <li>Wi-Fi included</li>
            </ul>
            <p className="text-2xl font-bold text-[#3d4d6f]">$3,000/year</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">En-suite Rooms</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Single or double rooms</li>
              <li>Private bathroom</li>
              <li>Desk and storage</li>
              <li>Wi-Fi included</li>
            </ul>
            <p className="text-2xl font-bold text-[#3d4d6f]">$5,000/year</p>
          </div>
        </div>

        <div className="bg-[#3d4d6f]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Application Process</h3>
          <p className="text-gray-700">
            Housing applications open in March for the following academic year. Priority is given 
            to first-year students and those applying early.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
