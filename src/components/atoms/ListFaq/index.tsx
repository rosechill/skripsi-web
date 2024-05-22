import { dataFaq } from "@/utils/dataFaq";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";

export default function ListFaq() {
  return (
    <section className=" pt-[5vh] h-[50vh]  gap-12 text-start ">
      <Accordion className="flex flex-col  text-[#2E3E78] ">
        {dataFaq.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            aria-label={item.title}
            className=""
          >
            {item.description}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
