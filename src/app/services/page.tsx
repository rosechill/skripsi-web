import React from "react";
import Image from "next/image";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceBodySection from "@/components/ServiceBodySection";

export const metadata = {
    title: "Service",
};

export default function Services() {
 
    return (
      <section className="min-h-screen">
        <ServiceHeroSection/>
        <ServiceBodySection/>
      </section>
    );
  }