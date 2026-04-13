import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import ConsentBanner from "@/components/ConsentBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://lgihe.ac.ug'),
  title: {
    default: "Luigi Giussani Institute of Higher Education",
    template: "%s | LGIHE"
  },
  description:
    "Excellence in higher education, research, and community transformation. Offering undergraduate, diploma, and certificate programs in education.",
  keywords: ["LGIHE", "Luigi Giussani Institute", "higher education Uganda", "teacher training", "education programs", "university Uganda"],
  authors: [{ name: "LGIHE" }],
  creator: "LGIHE",
  publisher: "LGIHE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://lgihe.ac.ug",
    siteName: "Luigi Giussani Institute of Higher Education",
    title: "Luigi Giussani Institute of Higher Education",
    description: "Excellence in higher education, research, and community transformation.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LGIHE Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luigi Giussani Institute of Higher Education",
    description: "Excellence in higher education, research, and community transformation.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="canonical" href="https://lgihe.ac.ug" />
        <StructuredData />
      </head>
      <body className="bg-paper text-navy antialiased">
        <AnalyticsProvider>
          <Navbar />
          <div className="pt-[104px]">
            {children}
          </div>
          <Footer />
        </AnalyticsProvider>
        <ConsentBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
