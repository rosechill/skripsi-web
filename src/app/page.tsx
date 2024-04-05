import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import TeamSection from "@/components/TeamSection";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen  ">
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
    </main>
  );
}
