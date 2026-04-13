"use client";

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    name: "John Mary Vianney Mitana",
    position: "Principal",
    image: "/images/principal.jpg",
  },
  {
    name: "John Muhangyi",
    position: "Education Program Officer",
    image: "/images/john-muhangyi.jpg",
  },
  {
    name: "Teddy Mutoni",
    position: "Communication Officer",
    image: "/images/teddy-mutoni.jpg",
  },
  {
    name: "Patrick Odoch",
    position: "Administration Officer",
    image: "/images/patrick-odoch.jpg",
  },
  {
    name: "Mauro Giacomazzi",
    position: "Institutional Development Advisor",
    image: "/images/mauro-giacomazzi.jpg",
  },
  {
    name: "Matteo Severgnini",
    position: "Education Advisor",
    image: "/images/matteo-severgnini.jpg",
  },
];

export default function TeamPage() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <PageTemplate 
      title="Our Team" 
      subtitle="Meet the dedicated professionals at LGIHE"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our team is committed to transforming education in Uganda and throughout Africa through 
          professional development, academic excellence, and innovative approaches to learning.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
              <div className="w-32 h-32 bg-[#3d4d6f]/10 rounded-full mx-auto mb-4 overflow-hidden relative">
                {!imageErrors[member.name] && (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                    onError={() => setImageErrors(prev => ({ ...prev, [member.name]: true }))}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center text-[#3d4d6f]/40 text-xs">
                  Photo
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#3d4d6f] mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
