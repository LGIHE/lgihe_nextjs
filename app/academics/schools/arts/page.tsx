import PageTemplate from "@/components/PageTemplate";

export default function ArtsSchoolPage() {
  return (
    <PageTemplate 
      title="School of Arts & Humanities" 
      subtitle="Exploring human culture, creativity, and expression"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The School of Arts & Humanities fosters critical thinking, creativity, and cultural 
          understanding through diverse programs in literature, languages, history, and the arts.
        </p>

        <h2 className="text-2xl font-bold text-[#5B6F8C] mb-4">Departments</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["English Literature", "History", "Philosophy", "Modern Languages", "Fine Arts", "Music"].map((dept) => (
            <div key={dept} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#5B6F8C] mb-2">{dept}</h3>
              <p className="text-gray-700 text-sm">Undergraduate and postgraduate programs available</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
