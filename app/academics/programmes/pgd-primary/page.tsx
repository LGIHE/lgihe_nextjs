import PageTemplate from "@/components/PageTemplate";

export default function PGDPrimaryPage() {
  return (
    <PageTemplate 
      title="Post-Graduate Diploma in Education - Primary (PDEP)" 
      subtitle="Professional teacher training for graduates entering primary education"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <p className="text-sm font-semibold text-[#5B6F8C] mb-2">Programme Status</p>
          <p className="text-gray-700">Accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Description</h2>
          <p className="text-gray-700 leading-relaxed">
            The Post-Graduate Diploma in Education - Primary is structured around a competency-based 
            educational framework, tailored to prepare aspiring educators for the dynamic demands of 
            primary school teaching. This program equips candidates with foundational pedagogical expertise, 
            fostering reflective and informed teaching practices. It emphasizes critical engagement with 
            educational philosophies, ethical considerations, and innovative teaching methodologies.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Participants will rigorously explore strategies for assessing learner needs, contemporary 
            instructional techniques, and the integration of emerging educational technologies. By addressing 
            both theoretical and practical dimensions, the program enhances trainees' ability to navigate 
            modern classroom challenges while advancing their capacity to deliver impactful, student-centered 
            education in primary school settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#5B6F8C] mb-2">Duration</h3>
              <p className="text-gray-700">Minimum: 1 Year | Maximum: 2 Years</p>
              <p className="text-sm text-gray-600 mt-2">9 months (Semester/Weekend mode)</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#5B6F8C] mb-2">Study Mode</h3>
              <p className="text-gray-700">Trimester System</p>
              <p className="text-sm text-gray-600 mt-2">Three academic sessions per year</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Target Group</h2>
          <p className="text-gray-700 mb-4">This programme is intended for:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Graduates from recognized universities holding an honours degree in a non-education field who wish to teach in primary schools</li>
            <li>Individuals managing or working in primary education settings without formal teacher training</li>
            <li>Professionals with a Master's or PhD in a non-education discipline seeking pedagogical training</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Admission Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>An honours degree from a recognised university in any discipline other than education</li>
            <li>A Master's or PhD in a non-education field (optional)</li>
            <li>Demonstrated passion or commitment to teaching and working with children</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Structure</h2>
          <p className="text-gray-700 mb-4">
            LGIHE implements a trimester system with three academic sessions per year:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg space-y-3">
            <div>
              <h4 className="font-semibold text-[#5B6F8C]">Session I: August – December</h4>
              <p className="text-sm text-gray-600">12 weeks of lectures, continuous assessment, and practicum</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#5B6F8C]">Session II: January – March</h4>
              <p className="text-sm text-gray-600">12 weeks of lectures, continuous assessment, and practicum</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#5B6F8C]">Session III: April – July</h4>
              <p className="text-sm text-gray-600">12 weeks of lectures, continuous assessment, and examinations</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            The programme includes two blocks of supervised school-based practicum during Session I and 
            Session II, offering students valuable hands-on teaching experience in primary school settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Career Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Graduates are qualified to work as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Primary school teachers</li>
            <li>Educational coordinators in primary settings</li>
            <li>Curriculum developers</li>
            <li>Educational consultants</li>
            <li>School administrators</li>
          </ul>
        </section>

        <div className="bg-[#5B6F8C] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="mb-6">Transform your career and make a difference in primary education.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#5B6F8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
