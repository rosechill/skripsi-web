"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import satellite from "@/services/satellite";
import { DataPartner } from "@/interfaces/partnerInterface";
import { getImagePartner } from "@/utils/constant";
import { Tooltip } from "@nextui-org/react";

export default function PartnerSection() {
  const [partnerData, setPartnerData] = useState<DataPartner[]>([]);

  useEffect(() => {
    async function fetchPartnerData() {
      try {
        const response = await satellite.get(
          "https://www.travelxism.com/api/8633445279-partnerApi"
        );
        setPartnerData(response.data);
      } catch (error) {
        console.log("Fail", error);
        setPartnerData([]);
      }
    }
    fetchPartnerData();
  }, []);

  return (
    <section className="h-fit bg-[#F4F3FF]">
      <div className="lg:mx-24 flex flex-col lg:gap-12  py-14  items-center">
        <h1 className="lg:text-3xl text-2xl text-[#2E3E78] font-bold lg:pb-0 pb-8">
          Partner
        </h1>
        <div className="flex gap-12">
          {partnerData.map((item: DataPartner, index: number) => (
            <div key={index} className="w-[200px] flex flex-col justify-between items-center">
              <div></div>
              <Image
                src={getImagePartner(item.icon)}
                alt="gallery"
                width={150}
                height={150}
                className="flex justify-center items-center rounded-xl"
              />
              <Tooltip 
              showArrow={true}
              placement="bottom-end"
              content={item.label}
              className="p-4 w-[200px] bg-white text-[#2E3E78]"
              >
                <p className="text-[#6D78A1] w-[200px] line-clamp-1 pt-8 text-center">
                  {item.label}
                </p>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
