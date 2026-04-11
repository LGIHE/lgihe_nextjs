import PageTemplate from "@/components/PageTemplate";

export default function ProjectsPage() {
  return (
    <PageTemplate 
      title="Research Projects" 
      subtitle="Current research initiatives and collaborations"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Explore our ongoing research projects addressing critical challenges and advancing 
          knowledge across various disciplines.
        </p>

        <div className="space-y-6">
          {[
            { 
              title: "Sustainable Urban Development Initiative",
              lead: "Dr. Research Lead",
              duration: "2024-2027",
              funding: "National Research Foundation",
              desc: "Investigating sustainable practices for urban planning and development in growing cities."
            },
            { 
              title: "Digital Learning Technologies",
              lead: "Prof. Education Expert",
              duration: "2025-2028",
              funding: "Ministry of Education",
              desc: "Developing and evaluating innovative digital tools for enhanced learning outcomes."
            },
            { 
              title: "Entrepreneurship in Emerging Markets",
              lead: "Dr. Business Scholar",
              duration: "2025-2027",
              funding: "International Development Agency",
              desc: "Studying entrepreneurial ecosystems and their impact on economic development."
            },
            { 
              title: "Community Health Interventions",
              lead: "Dr. Health Researcher",
              duration: "2026-2029",
              funding: "Health Research Council",
              desc: "Implementing and evaluating community-based health programs."
            },
          ].map((project) => (
            <div key={project.title} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">{project.title}</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                <p className="text-gray-600"><strong>Lead:</strong> {project.lead}</p>
                <p className="text-gray-600"><strong>Duration:</strong> {project.duration}</p>
                <p className="text-gray-600"><strong>Funding:</strong> {project.funding}</p>
              </div>
              <p className="text-gray-700">{project.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Research Collaboration</h3>
          <p className="mb-4">
            Interested in partnering on research projects? Contact our research office to 
            explore collaboration opportunities.
          </p>
          <a href="mailto:research@lgihe.edu" className="inline-block bg-white text-[#3d4d6f] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
