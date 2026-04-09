import PageTemplate from "@/components/PageTemplate";

export default function ResearchPage() {
  return (
    <PageTemplate 
      title="Research at LGIHE" 
      subtitle="Advancing knowledge and innovation"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE is committed to conducting high-quality research that addresses real-world 
          challenges and contributes to the advancement of knowledge across disciplines.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-[#5B6F8C] mb-2">50+</p>
            <p className="text-gray-700">Active Research Projects</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-[#5B6F8C] mb-2">200+</p>
            <p className="text-gray-700">Publications Annually</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-[#5B6F8C] mb-2">15+</p>
            <p className="text-gray-700">Research Centers</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Research Focus Areas</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            "Social Sciences & Community Development",
            "Science, Technology & Innovation",
            "Business & Entrepreneurship",
            "Education & Pedagogy",
            "Health & Wellbeing",
            "Environmental Sustainability",
          ].map((area) => (
            <div key={area} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{area}</h3>
              <p className="text-gray-700 text-sm">
                Cutting-edge research addressing critical challenges and opportunities
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Research Opportunities</h3>
          <p className="mb-4">
            Explore opportunities for research collaboration, funding, and postgraduate research programs.
          </p>
          <a href="/research/projects" className="inline-block bg-white text-[#5B6F8C] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
