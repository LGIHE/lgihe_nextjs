import PageTemplate from "@/components/PageTemplate";

export default function HistoryPage() {
  return (
    <PageTemplate 
      title="History of LGIHE" 
      subtitle="Our journey of excellence and growth"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Our Background</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our story commenced with a simple dialogue among friends in Uganda. This discussion revolved around 
          educational hurdles that faced Uganda then and possible ways on how to address them. This, later on, 
          paved way for Continuous Professional Development trainings targeting various educators and other 
          professionals informally (2002).
        </p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">2009: Formal Registration</h3>
            <p className="text-gray-700">
              In January 2009, Luigi Giussani Institute of Higher Education (LGIHE) became a fully registered 
              Social Enterprise, marking a significant milestone in our journey to formalize our commitment to 
              educational excellence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">2013: Accreditation</h3>
            <p className="text-gray-700">
              In September 2013, Luigi Giussani Institute of Higher Education (LGIHE) obtained accreditation 
              as an institution of higher learning from the National Council for Higher Education (NCHE), 
              solidifying our position as a recognized institution of higher education.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Today</h3>
            <p className="text-gray-700">
              Today, LGIHE stands as a beacon of educational excellence, continuing to innovate and adapt to 
              meet the evolving needs of our students and society, while staying true to our founding vision 
              of addressing educational challenges in Uganda and throughout Africa.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
