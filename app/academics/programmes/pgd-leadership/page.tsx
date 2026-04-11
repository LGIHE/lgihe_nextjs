import PageTemplate from "@/components/PageTemplate";

export default function PGDLeadershipPage() {
  return (
    <PageTemplate 
      title="Post-Graduate Diploma in Educational Leadership and Management (PELM)" 
      subtitle="Developing strategic leaders for educational institutions"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-6 mb-8">
          <p className="text-sm font-semibold text-[#3d4d6f] mb-2">Programme Status</p>
          <p className="text-gray-700">Accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Programme Description</h2>
          <p className="text-gray-700 leading-relaxed">
            The Post Graduate Diploma in Educational Leadership and Management delves into critical topics 
            concerning management and planning in today's education landscape. It offers an insightful 
            examination of these issues from diverse and pertinent viewpoints, encompassing both the 
            Ugandan and international contexts. The Programme is designed to encompass the entire spectrum 
            of education, spanning from pre-primary to higher education levels.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This programme equips prospective educational leaders with pragmatic approaches to address 
            challenges in school management. It emphasizes instructional leadership and tackles key aspects 
            such as strategic school direction, resource allocation, and student-teacher success. The 
            programme aims to tailor school leaders, implement sustainable development plans, improve 
            teacher appraisal systems, structure schools effectively, foster community partnerships, 
            ensure seamless departmental functioning, and address gender sensitivity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Programme Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#3d4d6f] mb-2">Duration</h3>
              <p className="text-gray-700">1 Year (Professional Study Programme)</p>
              <p className="text-sm text-gray-600 mt-2">9 months (Semester/Weekend mode)</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#3d4d6f] mb-2">Study Mode</h3>
              <p className="text-gray-700">Session/Trimester Basis</p>
              <p className="text-sm text-gray-600 mt-2">Three sessions per academic year</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Target Group</h2>
          <p className="text-gray-700 mb-4">
            The programme targets individuals engaged in or aspiring towards education-related roles:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Current educators and administrators</li>
            <li>Emerging educational leaders</li>
            <li>Entrepreneurs in the education sector</li>
            <li>Policy-makers in education</li>
            <li>Education enthusiasts seeking leadership roles</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Entry Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Bachelor's degree or its equivalent from a recognized institution of higher learning</li>
            <li>Institution must be recognised by the National Council for Higher Education (NCHE) of Uganda</li>
            <li>International applicants must satisfy minimum entry requirements</li>
            <li>Candidates from non-English speaking countries must provide evidence of English proficiency</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 italic">
            Note: Meeting minimum requirements does not guarantee admission. Possession of minimum 
            qualifications makes one eligible for consideration.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Programme Structure</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-[#3d4d6f] mb-3">Modular System</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Total of 22 modules across three academic sessions</li>
              <li>• Action research component after the first session</li>
              <li>• Final action research project report</li>
              <li>• 3 weeks of active face-to-face engagement per session</li>
              <li>• 9 weeks of self-paced teaching-learning</li>
              <li>• 3 weeks for assessment</li>
              <li>• Total: 15 weeks per session</li>
              <li>• Minimum 600 hours of study (20-hour week)</li>
              <li>• 60 credit units for the academic year</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4">
            <strong>Session Intakes:</strong> May and August of each academic year
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Career Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Graduates are equipped to pursue roles such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>School headteachers and principals</li>
            <li>Educational administrators</li>
            <li>District education officers</li>
            <li>Educational policy advisors</li>
            <li>School management consultants</li>
            <li>Educational project managers</li>
            <li>Institutional quality assurance officers</li>
          </ul>
        </section>

        <div className="bg-[#3d4d6f] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="mb-6">Lead educational transformation with advanced management skills.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#3d4d6f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
