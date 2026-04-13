"use client";

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";
import { useState } from "react";

export default function BoardPage() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  return (
    <PageTemplate 
      title="Board of Directors" 
      subtitle="Our founders and distinguished board members"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Our Board of Directors brings together experienced leaders from academia, healthcare, 
          and education to guide the strategic direction of LGIHE.
        </p>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">Founders</h2>

        <div className="space-y-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-32 h-32 bg-[#3d4d6f]/10 rounded-full flex-shrink-0 overflow-hidden relative">
                {!imageErrors['rose'] && (
                  <Image
                    src="/images/rose-busingye.jpg"
                    alt="Rose Busingye"
                    fill
                    sizes="128px"
                    className="object-cover"
                    onError={() => setImageErrors(prev => ({ ...prev, rose: true }))}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center text-[#3d4d6f]/40 text-xs text-center">
                  Photo
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">Rose Busingye</h3>
                <p className="text-gray-600 font-medium mb-3">Founder & Director of Meeting Point International (MPI)</p>
                <p className="text-gray-700">
                  A nurse by profession, Rose founded Meeting Point International in June 2003 with the aim of 
                  offering HIV infected and vulnerable people a simple environment where each person can find love. 
                  Among her many achievements, she has been awarded the "Servitor Pacis" by the Holy See.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-32 h-32 bg-[#3d4d6f]/10 rounded-full flex-shrink-0 overflow-hidden relative">
                {!imageErrors['vincenzo'] && (
                  <Image
                    src="/images/vincenzo-silvano.jpg"
                    alt="Vincenzo Silvano"
                    fill
                    sizes="128px"
                    className="object-cover"
                    onError={() => setImageErrors(prev => ({ ...prev, vincenzo: true }))}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center text-[#3d4d6f]/40 text-xs text-center">
                  Photo
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">Vincenzo Silvano</h3>
                <p className="text-gray-600 font-medium mb-3">President of Villa Brea Foundation, SS. Natale Pre Primary, Primary and Secondary School</p>
                <p className="text-gray-700">
                  An educationalist by profession, and an exceptional human resource expert with remarkable 
                  experience attained from working in different organizations in Italy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-32 h-32 bg-[#3d4d6f]/10 rounded-full flex-shrink-0 overflow-hidden relative">
                {!imageErrors['george'] && (
                  <Image
                    src="/images/george-pariyo.jpg"
                    alt="Dr. George Pariyo"
                    fill
                    sizes="128px"
                    className="object-cover"
                    onError={() => setImageErrors(prev => ({ ...prev, george: true }))}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center text-[#3d4d6f]/40 text-xs text-center">
                  Photo
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">Dr. George Pariyo</h3>
                <p className="text-gray-600 font-medium mb-3">Board Member</p>
                <p className="text-gray-700">
                  A highbrow in the health sector has previously worked as an Associate Professor in Makerere University. 
                  Spearheading key assignments with the Ugandan Ministry of Health, USAID, UNICEF, GAVI, European Commission, 
                  World Health Organization and the World Bank in the areas of Health Systems Management, Public Health Policy, 
                  Health Planning and Management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
