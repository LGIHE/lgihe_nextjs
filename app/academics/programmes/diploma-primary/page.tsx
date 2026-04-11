import PageTemplate from "@/components/PageTemplate";

export default function DiplomaPrimaryPage() {
  return (
    <PageTemplate 
      title="Diploma in Education - Primary (DEP)" 
      subtitle="Professional teacher training for primary education"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-6 mb-8">
          <p className="text-sm font-semibold text-[#3d4d6f] mb-2">Programme Status</p>
          <p className="text-gray-700">Accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Programme Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Diploma in Education - Primary (DEP) is designed to upgrade the professional competencies 
            of primary school teachers. This programme provides advanced pedagogical skills, subject content 
            knowledge, and classroom management techniques essential for effective primary education delivery.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Programme Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#3d4d6f] mb-2">Duration</h3>
              <p className="text-gray-700">2 Years</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#3d4d6f] mb-2">Cohort Type</h3>
              <p className="text-gray-700">Session only</p>
              <p className="text-sm text-gray-600 mt-2">Enrollment: January, May, and August</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Entry Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Uganda Certificate of Education (UCE) with at least six subjects passed at credit level or better</li>
            <li>Must have passed Mathematics and English Language</li>
            <li>Grade III Certificate</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Career Advancement</h2>
          <p className="text-gray-700 mb-4">
            This diploma qualifies holders for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Enhanced teaching positions in primary schools</li>
            <li>Senior teacher roles</li>
            <li>Progression to Bachelor of Education programmes</li>
            <li>Educational leadership positions</li>
          </ul>
        </section>

        <div className="bg-[#3d4d6f] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="mb-6">Upgrade your teaching qualifications with LGIHE.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#3d4d6f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
