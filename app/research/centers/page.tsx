import PageTemplate from "@/components/PageTemplate";

export default function CentersPage() {
  return (
    <PageTemplate 
      title="Research Centers" 
      subtitle="Specialized hubs of excellence and innovation"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our research centers bring together experts from various disciplines to tackle 
          complex challenges and drive innovation.
        </p>

        <div className="space-y-6">
          {[
            { 
              name: "Center for Social Research", 
              desc: "Conducting research on community development, social policy, and human rights",
              focus: ["Community Development", "Social Policy", "Human Rights", "Urban Studies"]
            },
            { 
              name: "Institute for Science & Technology", 
              desc: "Advancing scientific knowledge and technological innovation",
              focus: ["Computer Science", "Engineering", "Applied Sciences", "Innovation"]
            },
            { 
              name: "Business Research Unit", 
              desc: "Exploring entrepreneurship, economics, and business strategy",
              focus: ["Entrepreneurship", "Economics", "Business Strategy", "Market Research"]
            },
            { 
              name: "Education Research Center", 
              desc: "Improving teaching methods and educational outcomes",
              focus: ["Pedagogy", "Curriculum Development", "Educational Technology", "Assessment"]
            },
            { 
              name: "Health & Wellbeing Institute", 
              desc: "Research on public health, mental health, and wellness",
              focus: ["Public Health", "Mental Health", "Nutrition", "Health Policy"]
            },
          ].map((center) => (
            <div key={center.name} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#5B6F8C] mb-3">{center.name}</h3>
              <p className="text-gray-700 mb-4">{center.desc}</p>
              <div className="flex flex-wrap gap-2">
                {center.focus.map((area) => (
                  <span key={area} className="bg-[#5B6F8C]/10 text-[#5B6F8C] px-3 py-1 rounded-full text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
