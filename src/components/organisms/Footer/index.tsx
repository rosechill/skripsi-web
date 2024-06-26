"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Logo } from "@/assets/images";
import { usePathname } from "next/navigation";
import { dataContact } from "@/utils/dataContact";
import { dataSocmed } from "@/utils/dataSocmed";

export default function Footer() {
  const pathName = usePathname();
  return (
    <section className="bg-[#FCFCFC] my-[5vh] flex lg:flex-row flex-col lg:gap-0 gap-8 lg:mx-24 lg:px-0 px-8 justify-between">
      <div className="flex flex-col justify-center lg:w-3/12 w-full ">
        <Image src={Logo} alt="logo" width={200} height={200} />
        <p className="text-[#2E3E78] pb-4">
          Mari berkolaborasi menciptakan pariwisata berkelanjutan bersama
          Travelxism yang menyediakan jasa konsultan, pelatihan, produksi media
          digital, dan perencanaan tur wisata yang berkelanjutan.
        </p>
        <div className="h-[2px] bg-[#929292] w-[90%]"></div>
        <p className="text-[#2E3E78] text-xs pt-4">
          Copyright © 2024 PT Gemilang Media Wisatama
        </p>
      </div>

      <div className="flex flex-col gap-4 w-fit ">
        <h1 className="text-[#2E3E78] text-2xl font-bold">Menu</h1>
        <ul className="text-[#2E3E78] flex flex-col gap-4">
          <Link href={"/"}>
            <li className="hover:text-[#5D5FEF] transition-colors duration-300">
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:text-[#5D5FEF] transition-colors duration-300">
              About
            </li>
          </Link>
          <Link href={"/tour"}>
            <li className="hover:text-[#5D5FEF] transition-colors duration-300">
              Tour
            </li>
          </Link>
          <Link href={"/services"}>
            <li className="hover:text-[#5D5FEF] transition-colors duration-300">
              Services
            </li>
          </Link>
          <Link href={"/news"}>
            <li className="hover:text-[#5D5FEF] transition-colors duration-300">
              News
            </li>
          </Link>
          <Link href={"/gallery"}>
            <li className="hover:text-[#5D5FEF] transition-colors duration-300">
              Gallery
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-col gap-4 lg:w-3/12 w-fit">
        <h1 className="text-[#2E3E78] text-2xl font-bold">Contact Us</h1>
        {dataContact.map((item, index) => (
          <div key={index}>
            <Link href={item.path} className="flex gap-2 ">
              <item.icon className="min-w-[30px] text-2xl text-[#2E3E78] hover:text-[#5D5FEF] transition-colors duration-300" />
              <p className="text-[#2E3E78] hover:text-[#5D5FEF] transition-colors duration-300">
                {item.caption}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 w-fit">
        <h1 className="text-[#2E3E78] text-2xl font-bold">Follow Us</h1>
        <div className="flex gap-4">
          {dataSocmed.map((item, index) => (
            <div key={index}>
              <Link href={item.path}>
                <item.icon className="text-3xl text-[#2E3E78]  hover:text-[#5D5FEF] transition-colors duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
