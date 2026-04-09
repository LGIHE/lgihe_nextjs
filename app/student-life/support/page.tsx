import PageTemplate from "@/components/PageTemplate";

export default function SupportPage() {
  return (
    <PageTemplate 
      title="Student Support" 
      subtitle="We're here to help you succeed"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE provides comprehensive support services to ensure every student has the resources 
          they need to thrive academically, personally, and professionally.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Academic Advising", desc: "Guidance on course selection and academic planning" },
            { title: "Counseling Services", desc: "Confidential mental health support" },
            { title: "Disability Services", desc: "Accommodations and accessibility support" },
            { title: "Financial Aid Office", desc: "Assistance with scholarships and financial planning" },
            { title: "Career Services", desc: "Job search support and career counseling" },
            { title: "Tutoring Center", desc: "Free academic tutoring in all subjects" },
            { title: "Writing Center", desc: "Help with essays and research papers" },
            { title: "International Student Office", desc: "Support for international students" },
          ].map((service) => (
            <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#5B6F8C]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">24/7 Emergency Support</h3>
          <p className="text-gray-700">
            Campus security and emergency services are available around the clock. 
            Call +123 456 7899 for immediate assistance.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
