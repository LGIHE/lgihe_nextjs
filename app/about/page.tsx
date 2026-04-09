import PageTemplate from "@/components/PageTemplate";

export default function AboutPage() {
  return (
    <PageTemplate 
      title="About LGIHE" 
      subtitle="Helping learners and educators discover their identity, self-worth and sense of belonging"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          The Luigi Giussani Institute of Higher Education (LGIHE) addresses educational shortcomings in quality, 
          school management, accountability and teaching efficiency in Uganda and throughout Africa.
        </p>
        
        <h2 className="text-2xl font-bold text-[#5B6F8C] mt-8 mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-6">
          To be a leading institution of higher learning that has a transformative impact on society in Uganda 
          and throughout Africa by improving the quality of education and professional development.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          To create opportunities for professional and personal development starting with the dignity and infinite 
          value of the person, developing one's methods of personal engagement and the meaning of work, targeting 
          teachers, students, parents and other professionals.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mt-8 mb-4">Our Approach</h2>
        <p className="text-gray-700 mb-6">
          We embrace an education philosophy that seeks to help learners and educators discover their identity, 
          self-worth and sense of belonging. Exploring a child's growth in self-awareness, their understanding 
          of the world, and development of competences needed to face life's challenges.
        </p>

        <div className="bg-[#5B6F8C]/10 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Our Work</h3>
          <p className="text-gray-700">
            Grooming early childhood professionals, primary school teachers and small scale business entrepreneurs 
            through academic programs, professional development trainings, curriculum development, and comprehensive 
            monitoring and evaluation systems.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
