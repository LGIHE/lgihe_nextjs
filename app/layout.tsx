import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Luigi Giussani Institute of Higher Education",
  description:
    "Excellence in higher education, research, and community transformation.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-paper text-navy antialiased">
        <Navbar />
        <div className="pt-[104px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
