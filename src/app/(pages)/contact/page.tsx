import React from "react";
import ContactBodySection from "@/components/molecules/ContactBodySection";
import ContactFaqSection from "@/components/molecules/ContactFaqSection";
import ContactHeaderSection from "@/components/organisms/ContactHeaderSection";

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
