"use client";
import React from "react";
import ListFaq from "../../atoms/ListFaq";

export default function FaqSection() {
  return (
    <section className="bg-[#FCFCFC] h-fit py-16 lg:px-24 px-8">
      <h2 className="text-center text-[#2E3E78] font-bold text-3xl ">
        Frequently Asked Questions
      </h2>
      <ListFaq />
    </section>
  );
}
