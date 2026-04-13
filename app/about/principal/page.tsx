"use client";

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";
import { useState } from "react";

export default function PrincipalPage() {
  const [imageError, setImageError] = useState(false);

  return (
    <PageTemplate 
      title="The Principal" 
      subtitle="Leadership and vision"
    >
      <div className="prose prose-lg max-w-none">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/3">
            <div className="w-full aspect-square bg-[#3d4d6f]/10 rounded-lg overflow-hidden relative">
              {!imageError && (
                <Image
                  src="/images/principal.jpg"
                  alt="Stella Rose Akongo - Principal"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-[#3d4d6f] mb-2">Stella Rose Akongo</h2>
            <p className="text-xl text-gray-600 mb-4">Principal, LGIHE</p>
            <p className="text-gray-700 mb-4">
              Stella Rose Akongo brings extensive experience in education leadership and is 
              committed to advancing LGIHE's mission of transforming education in Uganda and throughout Africa.
            </p>
            <p className="text-gray-700">
              Under her leadership, LGIHE continues to provide quality professional development opportunities 
              for teachers, educators, and professionals, focusing on the dignity and infinite value of each person.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[#3d4d6f] mb-4">Message from the Principal</h3>
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#3d4d6f]">
          <p className="text-gray-700 italic mb-4">
            "Welcome to the Luigi Giussani Institute of Higher Education. We are committed to helping 
            learners and educators discover their identity, self-worth and sense of belonging."
          </p>
          <p className="text-gray-700 italic mb-4">
            "Our approach focuses on professional and personal development, starting with the dignity and 
            infinite value of the person, developing methods of personal engagement and the meaning of work."
          </p>
          <p className="text-gray-700 font-semibold">
            - Stella Rose Akongo, Principal
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
