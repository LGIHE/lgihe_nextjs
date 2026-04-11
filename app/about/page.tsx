import PageTemplate from "@/components/PageTemplate";

export default function AboutPage() {
  return (
    <PageTemplate 
      title="About LGIHE" 
      subtitle="Helping learners and educators discover their identity, self-worth and sense of belonging"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Luigi Giussani Institute of Higher Education (LGIHE) is an academic institution accredited by the 
          National Council for Higher Education (NCHE). Its major focus is to respond to the educational challenges 
          in the region. Since 2005, LGIHE has trained over 30,000 educators and other professionals, in over 600 
          continuous professional development training workshops held in more than 20 countries.
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
          At LGIHE to educate is not simply to train but to bring out learners’ potentialities both from their 
          point of view and that of their educators. LGIHE, therefore, uses education as a tool to help children 
          develop their identity, self-worth and sense of belonging.
        </p>

        <p>
          LGIHE also believes that every person and community represent a potential resource, no matter how vulnerable 
          they are. This means to value the tradition, experiences, and relationships of every person. This principle originates 
          from a positive approach to reality and helps individuals recognize their intrinsic value and dignity and to 
          live into their own responsibilities.
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
