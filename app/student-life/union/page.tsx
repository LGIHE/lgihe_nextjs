"use client";

import PageTemplate from "@/components/PageTemplate";
import { Users, Vote, Megaphone, Calendar, Heart, Shield } from "lucide-react";

export default function StudentGuildPage() {
  return (
    <PageTemplate 
      title="Student Guild" 
      subtitle="Your voice, your representation, your community"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The LGIHE Student Guild serves as the official representative body for all students, 
          acting as a vital link between the student community and university administration. 
          The Guild Government advocates for student rights, organizes campus activities, and 
          works to enhance the overall student experience at LGIHE.
        </p>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">Guild Structure</h2>
        <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Guild President</h3>
              <p className="text-sm text-white/90">Chief executive of the Guild Government</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Guild Cabinet</h3>
              <p className="text-sm text-white/90">Ministers overseeing various portfolios</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Vote className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Guild Representative Council</h3>
              <p className="text-sm text-white/90">Student representatives from all programs</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Roles & Responsibilities</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            {
              icon: <Megaphone className="w-6 h-6" />,
              title: "Student Advocacy",
              desc: "Representing student interests and concerns to university management and administration"
            },
            {
              icon: <Calendar className="w-6 h-6" />,
              title: "Events & Activities",
              desc: "Organizing social, cultural, and academic events that enrich campus life"
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Student Welfare",
              desc: "Addressing student welfare issues including accommodation, health, and safety"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Clubs & Societies",
              desc: "Supporting and coordinating student clubs, societies, and special interest groups"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Rights Protection",
              desc: "Ensuring student rights are upheld and providing support in disciplinary matters"
            },
            {
              icon: <Vote className="w-6 h-6" />,
              title: "Democratic Governance",
              desc: "Conducting free and fair elections for Guild leadership positions annually"
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#3d4d6f]/10 rounded-lg text-[#3d4d6f] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#3d4d6f] mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Guild Cabinet 2024/2025</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 mb-4">
            The Guild Cabinet consists of elected and appointed student leaders who oversee 
            various aspects of student life and welfare. Cabinet positions include:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Guild President",
              "Vice President",
              "Prime Minister",
              "Minister of Finance",
              "Minister of Information & Communication",
              "Minister of Sports & Recreation",
              "Minister of Gender & Social Affairs",
              "Minister of Academic Affairs",
              "Minister of Health & Welfare",
              "Guild Representative Councilors",
            ].map((position) => (
              <div key={position} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                <div className="w-10 h-10 bg-[#3d4d6f]/10 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{position}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-4">Guild Services</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "Student Representation",
              desc: "The Guild represents students in university committees and decision-making bodies, ensuring student voices are heard on matters affecting campus life."
            },
            {
              title: "Grievance Handling",
              desc: "Students can report concerns and grievances to the Guild, which works with administration to find solutions and ensure fair treatment."
            },
            {
              title: "Campus Events",
              desc: "The Guild organizes orientation programs, cultural festivals, sports competitions, and social events throughout the academic year."
            },
            {
              title: "Student Support",
              desc: "Providing guidance and support to students on academic, social, and personal matters through peer counseling and referrals."
            },
          ].map((service) => (
            <div key={service.title} className="bg-white border-l-4 border-[#3d4d6f] p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-[#3d4d6f] mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
          <p className="mb-6 text-white/90">
            Guild elections are held annually, providing opportunities for students to participate 
            in democratic governance. Whether you want to run for office, volunteer with the Guild, 
            or simply stay informed about student issues, your participation matters.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Run for Office</h4>
              <p className="text-sm text-white/80">
                Eligible students can contest for Guild positions during annual elections
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Join Committees</h4>
              <p className="text-sm text-white/80">
                Volunteer to serve on Guild committees and contribute to student initiatives
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm text-white/80">
              For more information about the Student Guild, contact the Dean of Students office 
              or visit the Guild office on campus.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
