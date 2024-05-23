"use client";

import { DataTestimoni } from "@/interfaces/testimoniInterface";
import { getImageTestimoni } from "@/utils/constant";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function TestimoniSection() {
  const [testimoniData, setTestimoniData] = useState<DataTestimoni[]>([]);

  useEffect(() => {
    async function fetchTestimoniData() {
      try {
        const response = await fetch(
          "https://www.travelxism.com/api/8633445279-testimoniApi"
        );
        const data = await response.json();
        setTestimoniData(data);
      } catch (error) {
        console.log("Fail", error);
        setTestimoniData([]);
      }
    }
    fetchTestimoniData();
  }, []);

  return (
    <section className="h-fit ">
      <div className="lg:mx-24 flex flex-col lg:gap-12  py-14  items-center">
        <h1 className="lg:text-3xl text-2xl text-[#2E3E78] font-bold lg:pb-0 pb-8">
          Testimoni
        </h1>
        <div className="flex lg:flex-row lg:justify-center lg:flex-wrap flex-col gap-12">
          {testimoniData.map((item: DataTestimoni, index: number) => (
            <div
              key={index}
              className="w-[400px] flex flex-col gap-2 items-center"
            >
              <div className="p-1 border-3 border-[#2E3E78] rounded-full">
                <Image
                  src={getImageTestimoni(item.url_foto)}
                  alt="gallery"
                  width={150}
                  height={150}
                  className="flex justify-center items-center rounded-full"
                />
              </div>
              <p className="text-[#2E3E78]  font-semibold h-[30px]">
                {item.nama}
              </p>
              <p className="text-[#828BAE]   h-[30px">{item.jenis}</p>
              <div
                className="flex flex-col text-center gap-8 px-4 text-[#2E3E78] "
                dangerouslySetInnerHTML={{ __html: item.deskripsi }}
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
