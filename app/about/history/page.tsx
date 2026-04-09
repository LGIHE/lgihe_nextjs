import PageTemplate from "@/components/PageTemplate";

export default function HistoryPage() {
  return (
    <PageTemplate 
      title="History of LGIHE" 
      subtitle="Our journey of excellence and growth"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Founded with a vision to transform higher education, LGIHE has grown from humble beginnings 
          to become a respected institution of learning.
        </p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">The Beginning</h3>
            <p className="text-gray-700">
              LGIHE was established to provide quality education and foster academic excellence. 
              Our founders envisioned an institution that would nurture minds and shape futures.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Growth and Development</h3>
            <p className="text-gray-700">
              Over the years, we have expanded our academic programs, enhanced our facilities, 
              and built a strong community of scholars, researchers, and students.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">Today</h3>
            <p className="text-gray-700">
              Today, LGIHE stands as a beacon of educational excellence, continuing to innovate 
              and adapt to meet the evolving needs of our students and society.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
