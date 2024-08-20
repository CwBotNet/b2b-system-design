
import HomeNav from "@/components/Nav/HomeNav";
import HeroSection from "@/components/HeroSection";
import CategorySeection from "@/components/Category";

import WebMarketingSection from "@/components/WebMarketingSection";
import StatsSection from "@/components/Stats";
import TestimonialSection from "@/components/Testimonails";
export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-gray-50">
        <main className=" flex flex-col items-center justify-center h-full gap-y-8 space-y-56">
          <HeroSection />
          <WebMarketingSection />
          <CategorySeection />
          <StatsSection />
          <TestimonialSection />
        </main>
      </section >



    </>
  );
}
