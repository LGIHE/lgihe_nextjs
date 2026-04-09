import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import NewsSection from "@/components/NewsSection";
import EventsSection from "@/components/EventsSection";
import CampusGallery from "@/components/CampusGallery";

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
