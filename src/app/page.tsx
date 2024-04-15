import React from "react";

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewSection";
import ServiceSection from "@/components/ServiceSection";
import TourSection from "@/components/TourSection";
import PartnerSection from "@/components/PartnerSection"
import TestimoniSection from "@/components/TestimoniSection";

export default function Home() {
  return (
    <main className="min-h-screen  ">
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/> 
      <TourSection/>
      <NewsSection/>
      <PartnerSection/>
      <TestimoniSection/>
    </main>
  );
}
