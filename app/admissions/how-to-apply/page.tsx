import PageTemplate from "@/components/PageTemplate";

export default function HowToApplyPage() {
  return (
    <PageTemplate 
      title="How to Apply" 
      subtitle="Your step-by-step guide to joining LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        <div className="space-y-6">
          {[
            { step: 1, title: "Choose Your Program", desc: "Browse our programs and select the one that matches your interests and career goals." },
            { step: 2, title: "Check Requirements", desc: "Review the entry requirements for your chosen program to ensure you meet the criteria." },
            { step: 3, title: "Prepare Documents", desc: "Gather all required documents including transcripts, certificates, and identification." },
            { step: 4, title: "Complete Application", desc: "Fill out the online application form and upload all required documents." },
            { step: 5, title: "Pay Application Fee", desc: "Submit the non-refundable application fee to process your application." },
            { step: 6, title: "Track Your Application", desc: "Monitor your application status through the applicant portal." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#5B6F8C] text-white rounded-full flex items-center justify-center font-bold text-xl">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5B6F8C] mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#5B6F8C] text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-3">Ready to Apply?</h3>
          <a href="/admissions/portal" className="inline-block bg-white text-[#5B6F8C] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Start Your Application
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
