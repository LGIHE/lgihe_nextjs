"use client";

import PageTemplate from "@/components/PageTemplate";
import { Clock, BookOpen, CreditCard, Mail, Calendar, FileText, Users, Settings } from "lucide-react";

export default function StudentPortalPage() {
  return (
    <PageTemplate 
      title="Student Portal" 
      subtitle="Your gateway to academic information and campus services"
    >
      <div className="prose prose-lg max-w-none">
        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-12 rounded-2xl text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Clock className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            The LGIHE Student Portal is currently under development. This comprehensive platform 
            will provide you with seamless access to all your academic information and campus services.
          </p>
          <div className="inline-block bg-white/10 px-6 py-3 rounded-full">
            <p className="text-sm font-medium">
              The administration will communicate when the portal becomes available
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">What Will Be Available</h2>
        <p className="text-gray-700 mb-8">
          Once launched, the Student Portal will be your one-stop destination for managing 
          your academic journey at LGIHE. Here's what you can expect:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Course Management",
              features: [
                "View course schedules and timetables",
                "Register for courses each semester",
                "Access course materials and resources",
                "Track course progress and attendance"
              ]
            },
            {
              icon: <FileText className="w-6 h-6" />,
              title: "Academic Records",
              features: [
                "Check grades and examination results",
                "Download transcripts and certificates",
                "View academic progress reports",
                "Access graduation requirements"
              ]
            },
            {
              icon: <CreditCard className="w-6 h-6" />,
              title: "Financial Services",
              features: [
                "View tuition fees and payment deadlines",
                "Check payment history and receipts",
                "Apply for scholarships and bursaries",
                "Manage payment plans"
              ]
            },
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Communication",
              features: [
                "Access your student email account",
                "Receive important announcements",
                "Message faculty and staff",
                "View university notifications"
              ]
            },
            {
              icon: <Calendar className="w-6 h-6" />,
              title: "Events & Calendar",
              features: [
                "View academic calendar and deadlines",
                "Register for campus events",
                "Track important dates and milestones",
                "Receive event reminders"
              ]
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Support Services",
              features: [
                "Request academic advising",
                "Access counseling services",
                "Submit maintenance requests",
                "Contact student support"
              ]
            },
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Library Access",
              features: [
                "Search library catalog",
                "Manage borrowed books",
                "Access digital resources",
                "Reserve study rooms"
              ]
            },
            {
              icon: <Settings className="w-6 h-6" />,
              title: "Personal Profile",
              features: [
                "Update contact information",
                "Manage account settings",
                "Upload required documents",
                "Set communication preferences"
              ]
            },
          ].map((section) => (
            <div key={section.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#3d4d6f]/10 rounded-lg text-[#3d4d6f]">
                  {section.icon}
                </div>
                <h3 className="text-lg font-bold text-[#3d4d6f]">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#3d4d6f] mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border-l-4 border-[#3d4d6f] p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Stay Informed</h3>
          <p className="text-gray-700 mb-4">
            We're working hard to bring you a modern, user-friendly portal that will make 
            managing your academic life easier than ever. The portal will be accessible 
            from any device - desktop, tablet, or mobile phone.
          </p>
          <p className="text-gray-700">
            <strong>Important:</strong> The university administration will send official 
            communication via email and campus announcements when the portal is ready to launch. 
            You will receive your login credentials and instructions on how to access the system.
          </p>
        </div>

        <div className="bg-[#3d4d6f] text-white p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">In the Meantime</h3>
          <p className="text-white/90 mb-6">
            While the portal is being developed, please continue to use existing channels 
            for accessing services:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Academic Matters</h4>
              <p className="text-sm text-white/80">
                Contact the Academic Registrar's office or your program coordinator
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Financial Services</h4>
              <p className="text-sm text-white/80">
                Visit the Finance office for fee payments and financial inquiries
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Student Support</h4>
              <p className="text-sm text-white/80">
                Reach out to the Dean of Students office for welfare and support services
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">General Inquiries</h4>
              <p className="text-sm text-white/80">
                Email info@lgihe.ac.ug or call (+256) 764 078712
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
