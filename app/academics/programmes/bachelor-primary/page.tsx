import PageTemplate from "@/components/PageTemplate";

export default function BachelorPrimaryPage() {
  return (
    <PageTemplate 
      title="Bachelor of Education (Primary)" 
      subtitle="Advanced professional qualification for primary education"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-6 mb-8">
          <p className="text-sm font-semibold text-[#3d4d6f] mb-2">Programme Status</p>
          <p className="text-gray-700">Accredited by the National Council for Higher Education (NCHE)</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Programme Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Bachelor of Education (Primary) is designed for practicing primary school teachers who wish 
            to upgrade their qualifications to degree level. This programme enhances pedagogical expertise, 
            subject mastery, and educational leadership capabilities, preparing teachers for advanced roles 
            in primary education.
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
            <li>Uganda Certificate of Education (UCE)</li>
            <li>Grade III Certificate</li>
            <li>Diploma in Education (Primary)</li>
            <li>Must be registered as a teacher with the Ministry of Education and Sports (MoES)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Career Advancement</h2>
          <p className="text-gray-700 mb-4">
            This degree opens opportunities for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Senior teaching positions in primary schools</li>
            <li>Head teacher and deputy head teacher roles</li>
            <li>Educational supervisory positions</li>
            <li>Curriculum development roles</li>
            <li>Progression to postgraduate studies</li>
          </ul>
        </section>

        <div className="bg-[#3d4d6f] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="mb-6">Advance your teaching career with a Bachelor's degree from LGIHE.</p>
          <a href="/admissions/how-to-apply" className="inline-block bg-white text-[#3d4d6f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
