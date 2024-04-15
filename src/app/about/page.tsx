import React from "react";
import AboutHeroSection from "@/components/AboutHeroSection";
import VisiMisiSection from "@/components/VisiMisiSection";
import KeunggulanSection from "@/components/KeunggulanSection";
import TeamSection from "@/components/TeamSection";

export const metadata = {
    title: "About",
};

export default function About() {
 
    return (
      <section className="min-h-screen">
        <AboutHeroSection/>
        <VisiMisiSection/>
        <KeunggulanSection/>
        <TeamSection/>
      </section>
    );
  }