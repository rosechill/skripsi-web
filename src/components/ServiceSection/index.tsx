import React from "react";
import { dataService } from "@/utils/dataService";
import Image from "next/image";

export default function index() {
  return (
    <section className="h-fit bg-[#FDFDFD]">
      <div className="lg:mx-24 flex flex-col lg:gap-12  py-14  items-center">
        <h1 className="lg:text-4xl text-2xl text-[#2E3E78] font-bold lg:pb-0 pb-8">
          Layanan
        </h1>
        <div className="flex flex-col lg:flex-row gap-4">
          {dataService.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <h2 className="text-lg font-semibold text-[#2E3E78]">
                {item.title}
              </h2>
              <Image
                src={item.imgPath}
                alt="service"
                width={200}
                height={200}
                className="w-auto "
              />
              <p className="w-[60%] lg:w-[80%] text-[#2E3E78] text-center ">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
        <button className=" z-10 bg-[#2E3E78] text-white  px-4 py-2 rounded-lg lg:h-12 w-40 mt-8 ">
          Lihat Detail
        </button>
      </div>
    </section>
  );
}
