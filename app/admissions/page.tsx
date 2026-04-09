import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <PageTemplate 
      title="Admissions" 
      subtitle="Begin your journey to academic excellence at LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          We welcome applications from talented and motivated students who are ready to 
          challenge themselves and make a difference in the world.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/admissions/undergraduate" className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Undergraduate</h3>
            <p className="text-white/90 text-sm">Bachelor's degree programs</p>
          </Link>

          <Link href="/admissions/postgraduate" className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Postgraduate</h3>
            <p className="text-white/90 text-sm">Master's and PhD programs</p>
          </Link>

          <Link href="/admissions/international" className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">International</h3>
            <p className="text-white/90 text-sm">Information for international students</p>
          </Link>
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
            <Link key={link.title} href={link.href} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors flex justify-between items-center">
              <span className="font-medium text-[#5B6F8C]">{link.title}</span>
              <span className="text-[#5B6F8C]">→</span>
            </Link>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
