import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";

// Lazy load below-the-fold components
const NewsSection = dynamic(() => import("@/components/NewsSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

const EventsSection = dynamic(() => import("@/components/EventsSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

const CampusGallery = dynamic(() => import("@/components/CampusGallery"), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <NewsSection />
      <EventsSection />
      <CampusGallery />
    </main>
  );
}
