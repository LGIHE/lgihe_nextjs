import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <PageTemplate 
      title="Admissions" 
      subtitle="Begin your journey to becoming an exceptional educator at LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Luigi Giussani Institute of Higher Education welcomes applications from motivated 
          individuals who are passionate about education and committed to making a difference 
          in the lives of learners. We offer flexible study options and multiple intake periods 
          throughout the year.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/academics/certificate" className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-6 rounded-lg hover:shadow-lg transition-shadow no-underline">
            <h3 className="text-xl font-bold mb-2 text-white">Certificate & Diploma</h3>
            <p className="text-white/90 text-sm">Foundation and professional programmes in education</p>
          </Link>

          <Link href="/academics/undergraduate" className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-6 rounded-lg hover:shadow-lg transition-shadow no-underline">
            <h3 className="text-xl font-bold mb-2 text-white">Bachelor's Degrees</h3>
            <p className="text-white/90 text-sm">Undergraduate teacher education programmes</p>
          </Link>

          <Link href="/academics/postgraduate" className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-6 rounded-lg hover:shadow-lg transition-shadow no-underline">
            <h3 className="text-xl font-bold mb-2 text-white">Postgraduate</h3>
            <p className="text-white/90 text-sm">Advanced diplomas for educational professionals</p>
          </Link>
        </div>

        <div className="bg-blue-50 border-l-4 border-[#5B6F8C] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#5B6F8C] mb-2">Multiple Intake Periods</h3>
          <p className="text-gray-700 mb-3">
            LGIHE operates on flexible intake schedules to accommodate working professionals:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li><strong>Session Intakes:</strong> January, May, and August</li>
            <li><strong>Semester Intakes:</strong> February and August</li>
            <li><strong>Termly Intakes:</strong> February (for certificate programmes)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Quick Links</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "How to Apply", href: "/admissions/how-to-apply" },
            { title: "Entry Requirements", href: "/admissions/requirements" },
            { title: "Tuition & Fees", href: "/admissions/fees" },
            { title: "Scholarships", href: "/admissions/scholarships" },
            { title: "Important Dates", href: "/admissions/dates" },
            { title: "Application Portal", href: "/admissions/portal" },
          ].map((link) => (
            <Link key={link.title} href={link.href} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors flex justify-between items-center no-underline">
              <span className="font-medium text-[#5B6F8C]">{link.title}</span>
              <span className="text-[#5B6F8C]">→</span>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-4">Why Choose LGIHE?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-1">✓ Accredited Programmes</p>
              <p className="text-xs">All programmes accredited by NCHE or approved by MoES</p>
            </div>
            <div>
              <p className="font-semibold mb-1">✓ Flexible Study Options</p>
              <p className="text-xs">Day, weekend, holiday, and session-based programmes</p>
            </div>
            <div>
              <p className="font-semibold mb-1">✓ Practical Experience</p>
              <p className="text-xs">Supervised teaching practice in partner schools</p>
            </div>
            <div>
              <p className="font-semibold mb-1">✓ Experienced Faculty</p>
              <p className="text-xs">Learn from qualified educators with extensive experience</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
