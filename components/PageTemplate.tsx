import { ReactNode } from "react";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function PageTemplate({ title, subtitle, children }: PageTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#5B6F8C] to-[#4A5D75] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-white/90 max-w-3xl">{subtitle}</p>}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {children}
      </div>
    </div>
  );
}
