'use client';

import { useState } from 'react';
import PageTemplate from "@/components/PageTemplate";

interface ProgrammeFees {
  name: string;
  tuition: string;
  functional: string;
  total: string;
  duration: string;
}

export default function FeesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('certificate');

  const fees: Record<string, ProgrammeFees[]> = {
    certificate: [
      {
        name: "Certificate in Early Childhood Care and Education",
        tuition: "UGX 800,000",
        functional: "UGX 200,000",
        total: "UGX 1,000,000",
        duration: "per year"
      },
      {
        name: "Certificate in Child Care and Development",
        tuition: "UGX 800,000",
        functional: "UGX 200,000",
        total: "UGX 1,000,000",
        duration: "per year"
      }
    ],
    diploma: [
      {
        name: "Diploma in Pre-Primary Education",
        tuition: "UGX 1,200,000",
        functional: "UGX 300,000",
        total: "UGX 1,500,000",
        duration: "per year"
      },
      {
        name: "Diploma in Primary Education",
        tuition: "UGX 1,200,000",
        functional: "UGX 300,000",
        total: "UGX 1,500,000",
        duration: "per year"
      },
      {
        name: "Diploma in Educational Leadership and Management",
        tuition: "UGX 1,400,000",
        functional: "UGX 350,000",
        total: "UGX 1,750,000",
        duration: "per year"
      }
    ],
    undergraduate: [
      {
        name: "Bachelor of Pre-Primary Education",
        tuition: "UGX 1,800,000",
        functional: "UGX 450,000",
        total: "UGX 2,250,000",
        duration: "per year"
      },
      {
        name: "Bachelor of Primary Education",
        tuition: "UGX 1,800,000",
        functional: "UGX 450,000",
        total: "UGX 2,250,000",
        duration: "per year"
      },
      {
        name: "Bachelor of Arts with Education (Secondary)",
        tuition: "UGX 2,000,000",
        functional: "UGX 500,000",
        total: "UGX 2,500,000",
        duration: "per year"
      },
      {
        name: "Bachelor of Science with Education (Secondary)",
        tuition: "UGX 2,200,000",
        functional: "UGX 550,000",
        total: "UGX 2,750,000",
        duration: "per year"
      }
    ],
    postgraduate: [
      {
        name: "Postgraduate Diploma in Primary Education",
        tuition: "UGX 2,400,000",
        functional: "UGX 600,000",
        total: "UGX 3,000,000",
        duration: "per year"
      },
      {
        name: "Postgraduate Diploma in Educational Leadership and Management",
        tuition: "UGX 2,600,000",
        functional: "UGX 650,000",
        total: "UGX 3,250,000",
        duration: "per year"
      }
    ]
  };

  const categories = [
    { id: 'certificate', label: 'Certificate Programmes' },
    { id: 'diploma', label: 'Diploma Programmes' },
    { id: 'undergraduate', label: 'Undergraduate Programmes' },
    { id: 'postgraduate', label: 'Postgraduate Programmes' }
  ];

  return (
    <PageTemplate 
      title="Tuition & Fees" 
      subtitle="Investment in your future"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-gray-700 mb-8">
          LGIHE is committed to making quality education accessible. Below are our tuition fees 
          and functional costs for the 2026 academic year. All fees are subject to review and may change.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                selectedCategory === category.id
                  ? 'border-[#3d4d6f] text-[#3d4d6f]'
                  : 'border-transparent text-gray-600 hover:text-[#3d4d6f]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Fee Information Notice */}
        <div className="bg-blue-50 border-l-4 border-[#3d4d6f] p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Tuition fees cover instruction and academic services. 
            Functional fees cover registration, examinations, library, ICT, and other student services.
          </p>
        </div>

        {/* Fees Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#3d4d6f] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Programme</th>
                  <th className="px-6 py-4 text-right font-semibold">Tuition</th>
                  <th className="px-6 py-4 text-right font-semibold">Functional Fees</th>
                  <th className="px-6 py-4 text-right font-semibold">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fees[selectedCategory].map((programme, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">{programme.name}</div>
                        <div className="text-sm text-gray-500">{programme.duration}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700">{programme.tuition}</td>
                    <td className="px-6 py-4 text-right text-gray-700">{programme.functional}</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#3d4d6f]">{programme.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Fees */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">One-Time Fees</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Application Fee</span>
              <span className="font-semibold">UGX 50,000</span>
            </div>
            <div className="flex justify-between">
              <span>Admission Fee</span>
              <span className="font-semibold">UGX 100,000</span>
            </div>
            <div className="flex justify-between">
              <span>Caution Fee (Refundable)</span>
              <span className="font-semibold">UGX 200,000</span>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">Payment Information</h3>
          <div className="space-y-3 text-gray-700">
            <p><strong>Payment Options:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full payment at the beginning of the academic year (5% discount)</li>
              <li>Semester-based payment (50% per semester)</li>
              <li>Installment plans available (contact finance office)</li>
            </ul>
            <p className="mt-4"><strong>Bank Details:</strong></p>
            <div className="bg-white p-4 rounded border border-gray-200 mt-2">
              <p>Bank: [Bank Name]</p>
              <p>Account Name: Luigi Giussani Institute of Higher Education</p>
              <p>Account Number: [Account Number]</p>
              <p>Branch: [Branch Name]</p>
            </div>
          </div>
        </div>

        {/* Financial Aid */}
        <div className="bg-[#3d4d6f]/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Financial Aid & Payment Plans</h3>
          <p className="text-gray-700 mb-4">
            LGIHE offers various payment plans and financial assistance options to deserving students. 
            These include installment payment plans, need-based bursaries, and special grants for students 
            from disadvantaged backgrounds.
          </p>
          <a 
            href="/admissions/contact" 
            className="inline-block bg-[#3d4d6f] text-white px-6 py-2 rounded-lg hover:bg-[#2f3d57] transition-colors"
          >
            Contact Admissions for More Info
          </a>
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <h4 className="font-bold text-gray-900 mb-2">Important Notes:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>All fees are quoted in Uganda Shillings (UGX)</li>
            <li>Fees are subject to change and should be confirmed at the time of application</li>
            <li>International students may have additional fees</li>
            <li>Late payment may attract a penalty fee</li>
            <li>Fees once paid are non-refundable except for the caution fee</li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
