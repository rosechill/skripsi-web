import React from "react";
import Image from "next/image";
import ServiceHeroSection from "@/components/molecules/ServiceHeroSection";
import ServiceBodySection from "@/components/molecules/ServiceBodySection";
import FaqSection from "@/components/molecules/FaqSection";

export const metadata = {
    title: "Service",
};

export default function Services() {
    return (
      <section className="min-h-screen">
        <ServiceHeroSection/>
        <ServiceBodySection/>
        <FaqSection/>
      </section>
    );
  }