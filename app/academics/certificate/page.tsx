import PageTemplate from "@/components/PageTemplate";

export default function CertificatePage() {
  return (
    <PageTemplate 
      title="Certificate Programmes" 
      subtitle="Short courses for skill development and professional growth"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our certificate programs offer focused training in specific areas, perfect for 
          professionals looking to upskill or explore new fields.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {["Digital Marketing", "Data Analytics", "Leadership", "Financial Management", 
            "Human Resources", "Entrepreneurship", "Cybersecurity", "Teaching Methods", 
            "Public Speaking"].map((program) => (
            <div key={program} className="bg-gradient-to-br from-[#5B6F8C]/5 to-[#5B6F8C]/10 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{program}</h3>
              <p className="text-sm text-gray-600 mb-3">3-6 months</p>
              <a href="#" className="text-[#5B6F8C] text-sm font-medium hover:underline">View details →</a>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
