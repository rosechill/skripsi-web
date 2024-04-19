import ContactBodySection from "@/components/molecules/ContactBodySection";
import ContactFaqSection from "@/components/molecules/ContactFaqSection";
import ContactHeaderSection from "@/components/molecules/ContactHeaderSection";
import React from "react";

export const metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <section className="lg:mt-0 pt-[9vh] overflow-x-hidden">
      <ContactHeaderSection></ContactHeaderSection>
      <ContactBodySection></ContactBodySection>
      <ContactFaqSection></ContactFaqSection>
    </section>
  );
}
