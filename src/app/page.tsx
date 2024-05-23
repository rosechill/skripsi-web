import React from "react";
import AboutSection from "@/components/molecules/AboutSection";
import HeroSection from "@/components/molecules/HeroSection";
import NewsSection from "@/components/molecules/NewSection";
import ServiceSection from "@/components/molecules/ServiceSection";
import TourSection from "@/components/molecules/TourSection";
import PartnerSection from "@/components/molecules/PartnerSection"
import TestimoniSection from "@/components/molecules/TestimoniSection";

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
