import React from "react";
import AboutHeroSection from "@/components/molecules/AboutHeroSection";
import VisiMisiSection from "@/components/molecules/VisiMisiSection";
import KeunggulanSection from "@/components/molecules/KeunggulanSection";
import TeamSection from "@/components/molecules/TeamSection";

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