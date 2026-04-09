import PageTemplate from "@/components/PageTemplate";

export default function FAQsPage() {
  return (
    <PageTemplate 
      title="Frequently Asked Questions" 
      subtitle="Answers to common admissions questions"
    >
      <div className="prose prose-lg max-w-none">
        <div className="space-y-6">
          {[
            { q: "When is the application deadline?", a: "Undergraduate applications are due November 1 (early decision) or January 15 (regular decision). Postgraduate applications are accepted year-round." },
            { q: "What is the application fee?", a: "The application fee is $50 for undergraduate programs and $75 for postgraduate programs. Fee waivers are available for students with financial need." },
            { q: "Can I apply to multiple programs?", a: "Yes, you can apply to multiple programs, but you'll need to submit a separate application for each program." },
            { q: "How long does the admissions process take?", a: "Undergraduate decisions are typically released within 6-8 weeks of the deadline. Postgraduate applications are reviewed on a rolling basis and decisions are made within 4-6 weeks." },
            { q: "Do you accept transfer students?", a: "Yes, we welcome transfer students. You'll need to submit transcripts from all previous institutions and meet our transfer requirements." },
            { q: "What English language tests do you accept?", a: "We accept TOEFL iBT (minimum 80), IELTS (minimum 6.5), and Duolingo English Test (minimum 110)." },
            { q: "Is financial aid available for international students?", a: "Yes, we offer merit-based scholarships for international students. Need-based aid is limited but available in some cases." },
            { q: "Can I defer my admission?", a: "Yes, admitted students can request to defer their enrollment for up to one year. Contact the admissions office to request a deferral." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-3">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#5B6F8C]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Still Have Questions?</h3>
          <p className="text-gray-700 mb-4">
            Our admissions team is here to help. Contact us at admissions@lgihe.edu or call +123 456 7890.
          </p>
          <a href="/admissions/contact" className="text-[#5B6F8C] font-medium hover:underline">
            Contact Admissions →
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
