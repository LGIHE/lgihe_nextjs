import PageTemplate from "@/components/PageTemplate";

export default function HealthPage() {
  return (
    <PageTemplate 
      title="Health & Wellbeing" 
      subtitle="Your health is our priority"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE is committed to supporting the physical and mental wellbeing of all students 
          through comprehensive health services and wellness programs.
        </p>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Medical Services</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>On-campus medical center with qualified doctors and nurses</li>
            <li>General health consultations</li>
            <li>Vaccinations and health screenings</li>
            <li>Prescription services</li>
            <li>Referrals to specialists when needed</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Mental Health Support</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Confidential counseling services</li>
            <li>Stress management workshops</li>
            <li>Peer support groups</li>
            <li>Crisis intervention</li>
            <li>Mindfulness and meditation sessions</li>
          </ul>
        </div>

        <div className="bg-[#3d4d6f] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Wellness Programs</h3>
          <p className="mb-4">
            Join our wellness initiatives including yoga classes, nutrition workshops, 
            fitness challenges, and mental health awareness campaigns.
          </p>
          <button className="bg-white text-[#3d4d6f] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            View Schedule
          </button>
        </div>
      </div>
    </PageTemplate>
  );
}
