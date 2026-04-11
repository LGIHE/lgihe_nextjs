import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function StaffPage() {
  return (
    <PageTemplate 
      title="Staff Directory" 
      subtitle="Meet our dedicated team of professionals"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE is proud to have a team of experienced and dedicated professionals committed 
          to supporting student success and institutional excellence.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/staff/academic" className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-3">Academic Staff</h3>
            <p className="text-white/90 mb-4">
              Faculty members, lecturers, and research staff across all schools and departments
            </p>
            <span className="text-white font-medium">View Directory →</span>
          </Link>

          <Link href="/staff/administrative" className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-3">Administrative Staff</h3>
            <p className="text-white/90 mb-4">
              Support staff in administration, student services, and operations
            </p>
            <span className="text-white font-medium">View Directory →</span>
          </Link>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Contact Information</h3>
          <p className="text-gray-700">
            For general inquiries, contact our main office at info@lgihe.edu or call +123 456 7890.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
