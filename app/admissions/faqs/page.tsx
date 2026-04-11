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
            { 
              q: "When is the application deadline?", 
              a: "LGIHE operates on flexible intake schedules. Session intakes are in January, May, and August. Semester intakes are in February and August. Termly intakes for certificate programmes are in February. Applications are accepted on a rolling basis until programmes are full." 
            },
            { 
              q: "What is the application fee?", 
              a: "The application fee is UGX 50,000. This is a one-time, non-refundable fee that must be paid before your application can be processed." 
            },
            { 
              q: "How much are the tuition fees?", 
              a: "Tuition fees vary by programme level. Certificate programmes: UGX 1,000,000 per year (tuition UGX 800,000 + functional fees UGX 200,000). Diploma programmes: UGX 1,500,000 - 1,750,000 per year. Undergraduate programmes: UGX 2,250,000 - 2,750,000 per year. Postgraduate programmes: UGX 3,000,000 - 3,250,000 per year. Visit our fees page for detailed breakdown." 
            },
            { 
              q: "What payment options are available?", 
              a: "We offer several payment options: full payment at the beginning of the academic year (with 5% discount), semester-based payment (50% per semester), or installment plans (contact the finance office for details)." 
            },
            { 
              q: "Can I apply to multiple programs?", 
              a: "Yes, you can apply to multiple programs. On the application form, you can select a first choice and second choice programme. However, you will only be admitted to one programme." 
            },
            { 
              q: "How long does the admissions process take?", 
              a: "Applications are reviewed on a rolling basis. You can expect to receive a decision within 2-4 weeks after submitting a complete application with all required documents." 
            },
            { 
              q: "Do you accept transfer students?", 
              a: "Yes, we welcome transfer students. You'll need to submit transcripts from all previous institutions. We offer credit transfers and recognition of prior learning where applicable." 
            },
            { 
              q: "What are the entry requirements for certificate programmes?", 
              a: "For certificate programmes, you need Uganda Certificate of Education (UCE) or equivalent with at least 5 passes including English. A passion for working with young children is essential." 
            },
            { 
              q: "What are the entry requirements for diploma programmes?", 
              a: "For diploma programmes, you need UCE with at least 5 passes, or UACE with at least 1 principal pass. For the Diploma in Educational Leadership, you need a Certificate or Diploma in Education plus at least 2 years of teaching experience." 
            },
            { 
              q: "What are the entry requirements for undergraduate programmes?", 
              a: "For undergraduate programmes, you need UACE with at least 2 principal passes, or a relevant diploma. Specific subject requirements vary by programme." 
            },
            { 
              q: "Can I defer my admission?", 
              a: "Yes, admitted students can request to defer their enrollment for up to one year. Contact the admissions office in writing to request a deferral, stating your reasons." 
            },
            { 
              q: "What study modes are available?", 
              a: "We offer flexible study modes to accommodate working professionals: Day programmes, Weekend programmes, Holiday programmes, and Session-based programmes. Availability varies by programme level." 
            },
            { 
              q: "Do I need teaching experience to apply?", 
              a: "Teaching experience is not required for most programmes. However, it is required for the Diploma in Educational Leadership and Management, and it is an advantage for other diploma and postgraduate programmes." 
            },
            { 
              q: "What documents do I need to submit?", 
              a: "Required documents include: recent passport-size photograph, copies of academic certificates and transcripts, national ID or passport copy, birth certificate, recommendation letters (if applicable), and proof of payment for application fee." 
            },
            { 
              q: "Is accommodation available on campus?", 
              a: "Yes, we have accommodation facilities on campus. Accommodation costs range from UGX 600,000 to 1,000,000 per semester. Contact the student affairs office for availability and booking." 
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#3d4d6f] mb-3">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#3d4d6f]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Still Have Questions?</h3>
          <p className="text-gray-700 mb-4">
            Our admissions team is here to help. Contact us for more information about our programmes and admissions process.
          </p>
          <a href="/admissions/contact" className="text-[#3d4d6f] font-medium hover:underline">
            Contact Admissions →
          </a>
        </div>
      </div>
    </PageTemplate>
  );
}
