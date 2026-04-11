import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <PageTemplate 
      title="Research at LGIHE" 
      subtitle="Advancing knowledge and innovation through institutional and student research"
    >
      <div className="space-y-12">
        {/* Overview */}
        <section>
          <p className="text-lg text-gray-700 mb-8">
            LGIHE is committed to conducting high-quality research that addresses real-world 
            challenges and contributes to the advancement of knowledge across disciplines.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#3d4d6f] mb-2">50+</p>
              <p className="text-gray-700">Active Research Projects</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#3d4d6f] mb-2">200+</p>
              <p className="text-gray-700">Publications Annually</p>
            </div>
          </div>
        </section>

        {/* Institute Research */}
        <section className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Institute Research</h2>
          <p className="text-lg mb-8 text-white/90">
            Our faculty and research staff conduct cutting-edge research across multiple disciplines, 
            contributing to academic knowledge and practical solutions for societal challenges.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Education & Pedagogy",
                description: "Innovative teaching methodologies and educational policy research",
                projects: 12,
              },
              {
                title: "Social Sciences & Community Development",
                description: "Research addressing social challenges and community transformation",
                projects: 8,
              },
              {
                title: "Science, Technology & Innovation",
                description: "Applied research in STEM education and technology integration",
                projects: 10,
              },
              {
                title: "Educational Leadership & Management",
                description: "Research on institutional governance and educational administration",
                projects: 6,
              },
            ].map((area) => (
              <div key={area.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-white/90 text-sm mb-3">{area.description}</p>
                <p className="text-sm font-semibold">{area.projects} Active Projects</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Link 
              href="/research/projects" 
              className="inline-block bg-white text-[#3d4d6f] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              View Research Projects
            </Link>
            <Link 
              href="/research/publications" 
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/30"
            >
              Browse Publications
            </Link>
          </div>
        </section>

        {/* Student Research */}
        <section>
          <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">Student Research</h2>
          <p className="text-lg text-gray-700 mb-8">
            We encourage and support student-led research initiatives, providing opportunities for 
            undergraduate and postgraduate students to engage in meaningful research projects.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-[#3d4d6f]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#3d4d6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">Undergraduate Research</h3>
              <p className="text-gray-700 text-sm mb-4">
                Final year projects and research assignments supervised by experienced faculty members.
              </p>
              <Link href="#" className="text-[#3d4d6f] font-semibold text-sm hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-[#3d4d6f]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#3d4d6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">Postgraduate Research</h3>
              <p className="text-gray-700 text-sm mb-4">
                Master's theses and doctoral dissertations contributing to academic knowledge.
              </p>
              <Link href="#" className="text-[#3d4d6f] font-semibold text-sm hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-[#3d4d6f]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#3d4d6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">Research Groups</h3>
              <p className="text-gray-700 text-sm mb-4">
                Student-led research groups and collaborative projects across disciplines.
              </p>
              <Link href="#" className="text-[#3d4d6f] font-semibold text-sm hover:underline">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Student Research Highlights */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#3d4d6f] mb-6">Recent Student Research Highlights</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Impact of Technology on Early Childhood Education",
                  author: "Sarah Nakato, Bachelor of Pre-Primary Education",
                  year: "2026",
                },
                {
                  title: "Teacher Motivation and Student Performance in Rural Schools",
                  author: "James Okello, Postgraduate Diploma in Educational Leadership",
                  year: "2026",
                },
                {
                  title: "Integrating Indigenous Knowledge in Science Curriculum",
                  author: "Grace Atim, Bachelor of Science Education",
                  year: "2025",
                },
              ].map((research, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{research.title}</h4>
                  <p className="text-sm text-gray-600">{research.author} • {research.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Support */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-[#3d4d6f] mb-6">Research Support & Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">For Faculty & Staff</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#3d4d6f] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Research funding opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#3d4d6f] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ethics approval and compliance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#3d4d6f] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Research collaboration networks</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">For Students</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#3d4d6f] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Research methodology workshops</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#3d4d6f] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Supervisor matching and guidance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#3d4d6f] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Access to research databases and tools</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
