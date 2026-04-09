import PageTemplate from "@/components/PageTemplate";

export default function PortalPage() {
  return (
    <PageTemplate 
      title="Application Portal" 
      subtitle="Submit your application online"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Online Application System</h2>
          <p className="mb-6">
            Create an account or log in to continue your application
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-[#5B6F8C] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Create Account
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Log In
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Before You Begin</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 mb-4">Please have the following ready:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Personal information and contact details</li>
            <li>Academic transcripts (PDF format)</li>
            <li>Identification documents</li>
            <li>Personal statement (500-1000 words)</li>
            <li>Letters of recommendation</li>
            <li>Payment method for application fee</li>
          </ul>
        </div>

        <div className="bg-[#5B6F8C]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Need Help?</h3>
          <p className="text-gray-700">
            Contact our admissions team at <a href="mailto:admissions@lgihe.edu" className="text-[#5B6F8C] underline">admissions@lgihe.edu</a> or 
            call +123 456 7890 for assistance with your application.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
