import PageTemplate from "@/components/PageTemplate";

export default function BusinessSchoolPage() {
  return (
    <PageTemplate 
      title="Educational Leadership & Management" 
      subtitle="Developing strategic leaders for educational institutions"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The Educational Leadership & Management stream at LGIHE prepares current and aspiring 
          educational leaders with the knowledge, skills, and competencies required to effectively 
          manage and lead educational institutions. Our programmes address critical topics in 
          educational planning, management, and leadership from both Ugandan and international 
          perspectives.
        </p>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#5B6F8C] mb-2">Our Programmes</h3>
          <div className="space-y-3 mt-4">
            <div>
              <p className="font-semibold text-gray-800">Diploma in School Leadership and Management</p>
              <p className="text-sm text-gray-600">2-year programme for aspiring school leaders</p>
              <a href="/academics/programmes/diploma-leadership" className="text-[#5B6F8C] text-sm hover:underline">
                View Details →
              </a>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <p className="font-semibold text-gray-800">Post-Graduate Diploma in Educational Leadership and Management (PELM)</p>
              <p className="text-sm text-gray-600">1-year professional programme for degree holders</p>
              <a href="/academics/programmes/pgd-leadership" className="text-[#5B6F8C] text-sm hover:underline">
                View Details →
              </a>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Programme Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">Strategic Planning</h3>
              <p className="text-sm text-gray-700">
                Developing vision, mission, and strategic direction for educational institutions
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">Resource Management</h3>
              <p className="text-sm text-gray-700">
                Effective allocation and management of human, financial, and physical resources
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">Instructional Leadership</h3>
              <p className="text-sm text-gray-700">
                Leading teaching and learning processes for improved student outcomes
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">Quality Assurance</h3>
              <p className="text-sm text-gray-700">
                Implementing systems for monitoring and improving educational quality
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">Community Partnerships</h3>
              <p className="text-sm text-gray-700">
                Building and maintaining relationships with stakeholders and communities
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">Policy & Governance</h3>
              <p className="text-sm text-gray-700">
                Understanding educational policies, regulations, and governance structures
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Who Should Enroll</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Current educators seeking leadership positions</li>
            <li>School administrators and headteachers</li>
            <li>Deputy headteachers and department heads</li>
            <li>Educational coordinators and supervisors</li>
            <li>Entrepreneurs in the education sector</li>
            <li>Policy-makers and education officials</li>
            <li>Anyone aspiring to educational leadership roles</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Career Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Graduates are equipped to pursue roles such as:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>School headteachers and principals</li>
              <li>Deputy headteachers</li>
              <li>Educational administrators</li>
              <li>District education officers</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Educational policy advisors</li>
              <li>School management consultants</li>
              <li>Educational project managers</li>
              <li>Quality assurance officers</li>
            </ul>
          </div>
        </section>

        <div className="bg-gray-50 p-8 rounded-lg mb-10">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-4">Programme Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Practical Approach</h4>
              <p className="text-gray-700 text-sm">
                Pragmatic approaches to address real challenges in school management and leadership
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Action Research</h4>
              <p className="text-gray-700 text-sm">
                Conduct action research projects addressing actual issues in educational settings
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Flexible Learning</h4>
              <p className="text-gray-700 text-sm">
                Session/trimester basis with face-to-face and self-paced learning components
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Experienced Faculty</h4>
              <p className="text-gray-700 text-sm">
                Learn from experts in educational leadership, management, and policy
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#5B6F8C] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Become an Educational Leader</h3>
          <p className="mb-6">Lead educational transformation and make a lasting impact.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#5B6F8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors no-underline">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
