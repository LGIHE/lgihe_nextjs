import PageTemplate from "@/components/PageTemplate";

export default function SchoolsPage() {
  const schools = [
    {
      name: "School of Education",
      description: "Comprehensive teacher training programmes from early childhood to secondary education, covering all levels of professional development.",
      programmes: "11 programmes from Certificate to Postgraduate level",
      link: "/academics/schools/education",
      icon: "📚"
    },
    {
      name: "Arts & Humanities Education",
      description: "Preparing secondary school teachers in arts and humanities subjects including languages, literature, history, geography, and creative arts.",
      programmes: "Bachelor of Arts with Education (Secondary)",
      link: "/academics/schools/arts",
      icon: "🎨"
    },
    {
      name: "Science & Mathematics Education",
      description: "Training secondary school teachers in science and mathematics subjects including physics, chemistry, biology, mathematics, and computer science.",
      programmes: "Bachelor of Science in Education (Secondary)",
      link: "/academics/schools/science",
      icon: "🔬"
    },
    {
      name: "Educational Leadership & Management",
      description: "Developing strategic leaders and managers for educational institutions at all levels, from pre-primary to higher education.",
      programmes: "Diploma and Postgraduate Diploma programmes",
      link: "/academics/schools/business",
      icon: "👔"
    }
  ];

  return (
    <PageTemplate 
      title="Academic Schools" 
      subtitle="Specialized streams for comprehensive teacher education"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Luigi Giussani Institute of Higher Education organizes its academic programmes into 
          specialized schools, each focusing on specific areas of teacher education and educational 
          leadership. Our schools provide comprehensive training that combines subject expertise 
          with pedagogical excellence.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-10">
          <h3 className="text-lg font-semibold text-[#5B6F8C] mb-2">Our Approach</h3>
          <p className="text-gray-700">
            Each school offers programmes that integrate theoretical knowledge with practical 
            teaching experience, ensuring our graduates are well-prepared for the challenges 
            of modern education. All programmes are accredited by the National Council for 
            Higher Education (NCHE) or approved by the Ministry of Education and Sports (MoES).
          </p>
        </div>

        <div className="space-y-6 mb-10">
          {schools.map((school) => (
            <a
              key={school.name}
              href={school.link}
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow no-underline"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{school.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#5B6F8C] mb-2">{school.name}</h3>
                  <p className="text-gray-700 mb-3">{school.description}</p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Programmes:</strong> {school.programmes}
                  </p>
                  <span className="text-[#5B6F8C] font-medium hover:underline">
                    Explore School →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <section className="bg-gray-50 p-8 rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-6">Why Choose LGIHE?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🎓 Quality Education</h3>
              <p className="text-gray-700 text-sm">
                Accredited programmes that meet national and international standards for 
                teacher education and professional development.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">👨‍🏫 Experienced Faculty</h3>
              <p className="text-gray-700 text-sm">
                Learn from qualified educators with extensive teaching, research, and 
                practical experience in their fields.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🏫 Practical Training</h3>
              <p className="text-gray-700 text-sm">
                Supervised teaching practice in partner schools ensures graduates are 
                classroom-ready and confident.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">⏰ Flexible Options</h3>
              <p className="text-gray-700 text-sm">
                Multiple study modes including day, weekend, holiday, and session-based 
                programmes for working professionals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">📈 Career Advancement</h3>
              <p className="text-gray-700 text-sm">
                Clear pathways for professional growth from certificate to postgraduate 
                level in education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🤝 Support Services</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive student support including academic advising, career guidance, 
                and professional development.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-[#5B6F8C] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="mb-6">
            Explore our schools and find the programme that matches your career goals in education.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/academics/programmes" className="inline-block bg-white text-[#5B6F8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors no-underline">
              View All Programmes
            </a>
            <a href="/admissions/how-to-apply" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5B6F8C] transition-colors no-underline">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
