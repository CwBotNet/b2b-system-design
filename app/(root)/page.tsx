
import HomeNav from "@/components/Nav/HomeNav";
import HeroSection from "@/components/HeroSection";
import CategorySeection from "@/components/Category";

import WebMarketingSection from "@/components/WebMarketingSection";
import StatsSection from "@/components/Stats";
import TestimonialSection from "@/components/Testimonails";
import CountrySupliers from "@/components/Suppliers/CountrySupliers";
import LeadScroller from "@/components/LeadScroller/LeadScroller";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <HomeNav />
      <section className="min-h-screen bg-gray-50">
        <main className=" flex flex-col items-center justify-center h-full gap-y-8 space-y-56">
          <HeroSection />
          <WebMarketingSection />
          <CategorySeection />
          <StatsSection />
          <TestimonialSection />
          <CountrySupliers />
          <LeadScroller />
        </main>
      </section >
      <Footer />
    </>
  );
}
