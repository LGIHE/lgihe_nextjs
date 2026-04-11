import PageTemplate from "@/components/PageTemplate";

export default function CareersPage() {
  return (
    <PageTemplate 
      title="Career Services" 
      subtitle="Preparing you for professional success"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our Career Services team is dedicated to helping students and alumni achieve their 
          career goals through personalized guidance, resources, and connections with employers.
        </p>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Career Counseling", desc: "One-on-one guidance on career planning and job search strategies" },
            { title: "Resume & CV Review", desc: "Professional feedback on your application materials" },
            { title: "Interview Preparation", desc: "Mock interviews and coaching to boost your confidence" },
            { title: "Job Board", desc: "Access to exclusive job and internship postings" },
            { title: "Career Fairs", desc: "Meet employers and explore opportunities" },
            { title: "Networking Events", desc: "Connect with alumni and industry professionals" },
            { title: "Workshops", desc: "Skill-building sessions on various career topics" },
            { title: "Internship Programs", desc: "Gain practical experience in your field" },
          ].map((service) => (
            <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#3d4d6f] mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Book an Appointment</h3>
          <p className="mb-4">
            Schedule a meeting with a career counselor to discuss your goals and develop your 
            career action plan.
          </p>
          <button className="bg-white text-[#3d4d6f] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Schedule Now
          </button>
        </div>
      </div>
    </PageTemplate>
  );
}
