"use client";

import PageTemplate from "@/components/PageTemplate";
import { BookOpen, Monitor, Users, Clock, Wifi, Printer, Search, Mail } from "lucide-react";

export default function LibraryPage() {
  return (
    <PageTemplate 
      title="Library Services" 
      subtitle="Your gateway to knowledge and research"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          The LGIHE Library provides extensive resources, study spaces, and support services 
          to facilitate your academic success and research endeavors. Our collection includes 
          both physical and digital resources to support all academic programs.
        </p>

        {/* MyLoft Digital Library Highlight */}
        <div className="bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] text-white p-8 rounded-2xl mb-12">
          <div className="flex items-start gap-6">
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                <Monitor className="w-10 h-10" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">MyLoft Digital Library Platform</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Access thousands of digital resources through MyLoft, our comprehensive digital 
                library platform. MyLoft provides 24/7 access to e-books, academic journals, 
                research databases, and multimedia resources from anywhere with an internet connection.
              </p>
              <div className="bg-white/10 p-6 rounded-xl mb-4">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  How to Access MyLoft
                </h3>
                <p className="text-white/90 text-sm mb-3">
                  To get access to the MyLoft digital library platform, please contact the librarian:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-white/70">Email:</span>
                    <a href="mailto:library@lgihe.ac.ug" className="text-white font-medium hover:underline">
                      library@lgihe.ac.ug
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-white/70">Phone:</span>
                    <span className="text-white font-medium">(+256) 414 222 517</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-white/70">Location:</span>
                    <span className="text-white font-medium">Library Front Desk</span>
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold mb-1">24/7</p>
                  <p className="text-sm text-white/80">Access Anytime</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold mb-1">1000+</p>
                  <p className="text-sm text-white/80">Digital Resources</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold mb-1">Remote</p>
                  <p className="text-sm text-white/80">Access Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">Library Collections</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
            <BookOpen className="w-12 h-12 text-[#3d4d6f] mx-auto mb-3" />
            <p className="text-4xl font-bold text-[#3d4d6f] mb-2">10,000+</p>
            <p className="text-gray-700 font-medium">Physical Books</p>
            <p className="text-sm text-gray-600 mt-2">Textbooks, reference materials, and general reading</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
            <Monitor className="w-12 h-12 text-[#3d4d6f] mx-auto mb-3" />
            <p className="text-4xl font-bold text-[#3d4d6f] mb-2">5,000+</p>
            <p className="text-gray-700 font-medium">E-Books & Journals</p>
            <p className="text-sm text-gray-600 mt-2">Accessible through MyLoft platform</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
            <Search className="w-12 h-12 text-[#3d4d6f] mx-auto mb-3" />
            <p className="text-4xl font-bold text-[#3d4d6f] mb-2">100+</p>
            <p className="text-gray-700 font-medium">Research Databases</p>
            <p className="text-sm text-gray-600 mt-2">Academic journals and publications</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">Library Services</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Book Borrowing",
              desc: "Borrow physical books with flexible loan periods. Renewals available online or at the front desk."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Research Assistance",
              desc: "Get help from our librarians with research strategies, citation styles, and finding resources."
            },
            {
              icon: <Monitor className="w-6 h-6" />,
              title: "Digital Resources",
              desc: "Access e-books, journals, and databases through MyLoft and other online platforms."
            },
            {
              icon: <Search className="w-6 h-6" />,
              title: "Inter-Library Loans",
              desc: "Request materials from other libraries if not available in our collection."
            },
            {
              icon: <Wifi className="w-6 h-6" />,
              title: "Study Spaces",
              desc: "Quiet study areas, group discussion rooms, and computer workstations available."
            },
            {
              icon: <Printer className="w-6 h-6" />,
              title: "Printing & Scanning",
              desc: "Printing, photocopying, and scanning services available at affordable rates."
            },
          ].map((service) => (
            <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#3d4d6f]/10 rounded-lg text-[#3d4d6f] flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#3d4d6f] mb-2">{service.title}</h3>
                  <p className="text-gray-700 text-sm">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#3d4d6f] mb-6">Facilities</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-12">
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Spacious reading halls with natural lighting",
              "Individual study carrels for focused work",
              "Group study rooms (bookable)",
              "Computer workstations with internet access",
              "Free Wi-Fi throughout the library",
              "Printing and photocopying facilities",
              "Reference section with encyclopedias and dictionaries",
              "Periodicals section with current journals and magazines",
              "Audio-visual room for multimedia resources",
              "Comfortable seating areas",
            ].map((facility) => (
              <li key={facility} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#3d4d6f] mt-1 flex-shrink-0">✓</span>
                <span>{facility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#3d4d6f] text-white p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6" />
              <h3 className="text-xl font-bold">Opening Hours</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-white/90">Monday - Friday</span>
                <span className="font-bold">8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-white/90">Saturday</span>
                <span className="font-bold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/90">Sunday</span>
                <span className="font-bold">10:00 AM - 4:00 PM</span>
              </div>
              <p className="text-sm text-white/70 mt-4 pt-4 border-t border-white/20">
                * Extended hours during examination periods
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#3d4d6f] mb-4">Contact the Library</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <a href="mailto:library@lgihe.ac.ug" className="text-[#3d4d6f] font-medium hover:underline">
                  library@lgihe.ac.ug
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone</p>
                <p className="text-gray-800 font-medium">(+256) 414 222 517</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Location</p>
                <p className="text-gray-800 font-medium">Main Campus Building, Ground Floor</p>
              </div>
              <div className="pt-4 border-t border-gray-300">
                <p className="text-sm text-gray-700">
                  For MyLoft digital library access, please contact the librarian via email or visit the library front desk.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#3d4d6f]/10 border-l-4 border-[#3d4d6f] p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-[#3d4d6f] mb-3">Library Orientation</h3>
          <p className="text-gray-700">
            New students are encouraged to attend library orientation sessions at the beginning 
            of each semester. Learn how to navigate our resources, use the catalog system, and 
            make the most of library services. Contact the library to schedule a tour or orientation session.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
