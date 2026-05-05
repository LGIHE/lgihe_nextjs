import PageTemplate from "@/components/PageTemplate";

export default function AcademicStaffPage() {
  const schools = [
    {
      name: "School of Education",
      description: "Preparing transformative educators and leaders for quality education",
    },
    {
      name: "School of Arts",
      description: "Fostering creativity, critical thinking, and cultural understanding",
    },
    {
      name: "School of Science",
      description: "Advancing scientific knowledge and innovation in education",
    },
    {
      name: "School of Business",
      description: "Developing ethical business leaders and entrepreneurs",
    },
  ];

  return (
    <PageTemplate 
      title="Academic Staff" 
      subtitle="Our distinguished faculty and educators"
    >
      <div className="space-y-12">
        <section>
          <p className="text-lg text-gray-700 mb-8">
            Our academic staff are experts in their fields, committed to excellence in teaching, 
            research, and mentorship. They bring a wealth of experience in teacher education and 
            are dedicated to preparing the next generation of educators.
          </p>
        </section>

        {/* Schools */}
        <section>
          <h2 className="text-3xl font-bold text-[#3d4d6f] mb-8">Our Academic Schools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {schools.map((school, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] rounded-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold">
                    {school.name.split(' ')[2]?.[0] || school.name.split(' ')[1]?.[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">{school.name}</h3>
                    <p className="text-gray-600">{school.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Team */}
        <section className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Academic Team</h2>
            <p className="text-lg mb-6 text-white/90">
              We're always looking for passionate educators and researchers to join our faculty. 
              Explore current opportunities and become part of our mission to transform education.
            </p>
            <a 
              href="/jobs" 
              className="inline-block bg-white text-[#3d4d6f] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </section>

        {/* Contact Academic Affairs */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Contact Academic Affairs</h2>
          <p className="text-gray-700 mb-4">
            For inquiries about academic programmes, faculty collaboration, or research opportunities, 
            please contact our Academic Affairs Office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:academics@lgihe.ac.ug" 
              className="inline-flex items-center gap-2 text-[#3d4d6f] font-semibold hover:underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              academics@lgihe.ac.ug
            </a>
            <a 
              href="tel:+256764078712" 
              className="inline-flex items-center gap-2 text-[#3d4d6f] font-semibold hover:underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (+256) 764 078712
            </a>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
