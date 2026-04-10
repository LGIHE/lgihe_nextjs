"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const menuData = {
  "About Us": {
    items: [
      { label: "History of LGIHE", href: "/about/history" },
      { label: "About LGIHE", href: "/about" },
      { label: "Governance Structure", href: "/about/governance" },
      { label: "Board of Directors", href: "/about/board" },
      { label: "Council", href: "/about/council" },
      { label: "Principal", href: "/about/principal" },
    ],
  },
  Academics: {
    columns: [
      {
        title: "Programmes",
        items: [
          { label: "All Programmes", href: "/academics/programmes" },
          { label: "Certificate Programmes", href: "/academics/certificate" },
          { label: "Diploma Programmes", href: "/academics/diploma" },
          { label: "Undergraduate", href: "/academics/undergraduate" },
          { label: "Postgraduate", href: "/academics/postgraduate" },
        ],
      },
      {
        title: "Schools",
        items: [
          { label: "All Schools", href: "/academics/schools" },
          { label: "School of Education", href: "/academics/schools/education" },
          { label: "Arts & Humanities Education", href: "/academics/schools/arts" },
          { label: "Science & Mathematics Education", href: "/academics/schools/science" },
          { label: "Educational Leadership & Management", href: "/academics/schools/business" },
        ],
      },
    ],
  },
  Admissions: {
    columns: [
      {
        title: "About Admissions",
        items: [
          { label: "Apply Now", href: "/admissions/apply" },
          { label: "How to Apply", href: "/admissions/how-to-apply" },
          { label: "Entry Requirements", href: "/admissions/requirements" },
          { label: "Tuition & Fees", href: "/admissions/fees" },
        ],
      },
      {
        title: "By Programme Level",
        items: [
          { label: "Certificate Programmes", href: "/admissions/certificate" },
          { label: "Diploma Programmes", href: "/admissions/diploma" },
          { label: "Bachelor's Programmes", href: "/admissions/undergraduate" },
          { label: "Postgraduate Programmes", href: "/admissions/postgraduate" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Application Portal", href: "/admissions/portal" },
          { label: "Prospectus", href: "/admissions/prospectus" },
          { label: "FAQs", href: "/admissions/faqs" },
          { label: "Contact Admissions", href: "/admissions/contact" },
        ],
      },
    ],
  },
  "Student Life": {
    columns: [
      {
        title: "About Student Life",
        items: [
          { label: "Campus Life", href: "/student-life/campus" },
          { label: "Accommodation", href: "/student-life/accommodation" },
          { label: "Student Support", href: "/student-life/support" },
          { label: "Health & Wellbeing", href: "/student-life/health" },
        ],
      },
      {
        title: "In This Section",
        items: [
          { label: "Clubs & Societies", href: "/student-life/clubs" },
          { label: "Sports & Recreation", href: "/student-life/sports" },
          { label: "Events & Activities", href: "/student-life/events" },
          { label: "Student Union", href: "/student-life/union" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Student Portal", href: "/student-life/portal" },
          { label: "Library Services", href: "/student-life/library" },
          { label: "Career Services", href: "/student-life/careers" },
          { label: "Student Handbook", href: "/student-life/handbook" },
        ],
      },
    ],
  },
  Staff: {
    columns: [
      {
        title: "Administrative Staff",
        items: [
          { label: "Administration Directory", href: "/staff/administrative" },
          { label: "Departments", href: "/staff/departments" },
        ],
      },
      {
        title: "Academic Staff",
        items: [
          { label: "Faculty Directory", href: "/staff/academic" },
          { label: "Research Staff", href: "/staff/research" },
        ],
      },
    ],
  },
  Research: {
    items: [
      { label: "Research Overview", href: "/research" },
      { label: "Research Centers", href: "/research/centers" },
      { label: "Publications", href: "/research/publications" },
      { label: "Research Projects", href: "/research/projects" },
    ],
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = (menu: string) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Top Navigation Bar - Visible when not scrolling, hidden when scrolling */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#5B6F8C] text-white transition-transform duration-300 ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-10">
          {/* Left Side - Quick Links */}
          <div className="flex items-center gap-6">
            <Link href="/admissions/fees" className="text-xs hover:text-white/80 transition-colors">
              Fees & Tuition
            </Link>
            <Link href="/news" className="text-xs hover:text-white/80 transition-colors">
              Campus News
            </Link>
            <Link href="/opportunities" className="text-xs hover:text-white/80 transition-colors">
              Opportunities
            </Link>
          </div>

          {/* Right Side - Search & Social Media */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-white/80 transition-colors"
              aria-label="Search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
              <a 
                href="https://www.facebook.com/LGIHE/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/LGIHE1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="http://ug.linkedin.com/company/luigi-giussani-institute-of-higher-education" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@lgihe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar (Expandable) */}
      {searchOpen && (
        <div className={`fixed left-0 right-0 z-50 bg-white border-b border-[#5B6F8C]/10 transition-all duration-300 ${
          scrolled ? "top-0" : "top-10"
        }`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search LGIHE..."
                className="flex-1 px-4 py-2 border border-[#5B6F8C]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B6F8C]/30"
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-[#5B6F8C] hover:text-[#4a5a70] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation - Sticky, adjusts position based on scroll */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-sm"
            : "top-10 bg-white/90 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20 border-b border-[#5B6F8C]/10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="LGIHE Logo" 
            width={150} 
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {Object.keys(menuData).map((menuKey) => (
            <li
              key={menuKey}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menuKey)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-sm font-medium text-[#5B6F8C]/80 hover:text-[#5B6F8C] transition-colors duration-200 px-3 py-2 flex items-center gap-1">
                {menuKey}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === menuKey ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === menuKey && (
                <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                  <div className="bg-white rounded-lg shadow-xl border border-[#5B6F8C]/10 py-4 px-2">
                    {'columns' in menuData[menuKey as keyof typeof menuData] ? (
                      <div className={`grid gap-6 ${
                        (menuData[menuKey as keyof typeof menuData] as any).columns.length === 2 ? "grid-cols-2" : "grid-cols-3"
                      } min-w-[500px]`}>
                        {(menuData[menuKey as keyof typeof menuData] as any).columns.map((column: any, idx: number) => (
                          <div key={idx} className="px-3">
                            <h3 className="text-xs font-semibold text-[#5B6F8C] uppercase tracking-wider mb-3">
                              {column.title}
                            </h3>
                            <ul className="space-y-2">
                              {column.items.map((item: any) => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    className="block text-sm text-[#5B6F8C]/70 hover:text-[#5B6F8C] hover:bg-[#5B6F8C]/5 px-2 py-1.5 rounded transition-colors duration-150"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-1 px-2">
                        {(menuData[menuKey as keyof typeof menuData] as any).items.map((item: any) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-sm text-[#5B6F8C]/70 hover:text-[#5B6F8C] hover:bg-[#5B6F8C]/5 px-3 py-2 rounded transition-colors duration-150"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#5B6F8C]/80 hover:text-[#5B6F8C] transition-colors duration-200 px-3 py-2"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/admissions/apply"
            className="text-sm font-medium px-6 py-2.5 rounded-full bg-[#5B6F8C] text-white hover:bg-[#4A5D75] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#5B6F8C] transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#5B6F8C] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#5B6F8C] transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#5B6F8C]/10 px-6 py-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {Object.keys(menuData).map((menuKey) => (
            <div key={menuKey} className="border-b border-[#5B6F8C]/10 py-3">
              <button
                onClick={() => toggleMobileMenu(menuKey)}
                className="w-full flex items-center justify-between text-base font-medium text-[#5B6F8C] py-2"
              >
                {menuKey}
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileActiveMenu === menuKey ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileActiveMenu === menuKey && (
                <div className="mt-2 pl-4">
                  {'columns' in menuData[menuKey as keyof typeof menuData] ? (
                    <div className="space-y-4">
                      {(menuData[menuKey as keyof typeof menuData] as any).columns.map((column: any, idx: number) => (
                        <div key={idx}>
                          <h3 className="text-xs font-semibold text-[#5B6F8C] uppercase tracking-wider mb-2">
                            {column.title}
                          </h3>
                          <ul className="space-y-2">
                            {column.items.map((item: any) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block text-sm text-[#5B6F8C]/70 hover:text-[#5B6F8C] py-1"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {(menuData[menuKey as keyof typeof menuData] as any).items.map((item: any) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm text-[#5B6F8C]/70 hover:text-[#5B6F8C] py-1"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
          <div className="py-3">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-base font-medium text-[#5B6F8C] py-2"
            >
              Contact Us
            </Link>
          </div>
          <Link
            href="/admissions/apply"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-sm font-medium px-5 py-2.5 rounded-full bg-[#5B6F8C] text-white text-center hover:bg-[#4A5D75] transition-all duration-200"
          >
            Apply Now
          </Link>
        </div>
      )}
      </header>
    </>
  );
}
