import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

const jobListings = [
  {
    id: 1,
    title: "Lecturer - Education",
    department: "School of Education",
    type: "Full-time",
    deadline: "May 30, 2026",
    description: "We are seeking an experienced educator to join our School of Education faculty.",
  },
  {
    id: 2,
    title: "Administrative Officer",
    department: "Administration",
    type: "Full-time",
    deadline: "May 25, 2026",
    description: "Support the administrative operations of LGIHE with excellent organizational skills.",
  },
  {
    id: 3,
    title: "Research Assistant",
    department: "Research Department",
    type: "Part-time",
    deadline: "June 5, 2026",
    description: "Assist faculty members with ongoing research projects in education and development.",
  },
  {
    id: 4,
    title: "Library Assistant",
    department: "Library Services",
    type: "Full-time",
    deadline: "May 20, 2026",
    description: "Provide support to students and faculty in accessing library resources and services.",
  },
];

export default function JobsPage() {
  return (
    <PageTemplate 
      title="Career Opportunities" 
      subtitle="Join our team at LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The Luigi Giussani Institute of Higher Education is committed to attracting and retaining 
          talented individuals who share our vision of transforming education in Uganda and throughout Africa.
        </p>

        <div className="bg-[#3d4d6f]/5 border-l-4 border-[#3d4d6f] p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">Why Work at LGIHE?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Be part of a mission-driven institution focused on educational transformation</li>
            <li>• Work with dedicated professionals committed to excellence</li>
            <li>• Opportunities for professional development and growth</li>
            <li>• Collaborative and supportive work environment</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">Current Openings</h2>

        <div className="space-y-6">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.type}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#3d4d6f]/10 text-[#3d4d6f]">
                  Deadline: {job.deadline}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <Link 
                href={`/jobs/${job.id}`}
                className="inline-flex items-center gap-2 text-[#3d4d6f] hover:text-[#2f3d57] font-medium transition-colors"
              >
                View Details & Apply
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">Don't See a Position That Fits?</h3>
          <p className="text-gray-700 mb-4">
            We're always interested in hearing from talented individuals who are passionate about education. 
            Send us your CV and cover letter for future opportunities.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg hover:bg-[#2f3d57] transition-colors"
          >
            Contact HR Department
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}
