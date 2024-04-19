'use client'
import React from "react";
import Image from "next/image";
import { Hero, LandingLeft, LandingRight, TestiLending } from "@/assets/images";
import { IconStar } from "@/assets/icons";
import { MyButton } from "../../atoms/MyButton";
import Link from "next/link";

export default function index() {
  const stars = 5;

  const starsArray = new Array(stars).fill(null);

  return (
    <section className="lg:flex lg:mt-0 mt-[10vh] custom-bg lg:h-screen ">
      <div className=" flex flex-col justify-center order-1 relative  ">
        <Image
          src={Hero}
          loading="lazy"
          alt="hero"
          width={1000}
          height={1000}
          className="z-10"
        />
        <div className="flex justify-center items-center flex-col ">
          <div className="flex w-[446px] h-[140px] p-4 rounded-3xl flex-col gap-4 bg-[#F4F3FF] shadow-lg m-0 z-[11] absolute mb-12 max-desktop:hidden">
            <div className="flex justify-between">
              <h2 className="text-[#2E3E78]">Trusted Tour</h2>
              <div className="flex gap-2">
                {starsArray.map((_, index) => (
                  <IconStar key={index} />
                ))}
              </div>
            </div>
            <div className="lg:flex lg:justify-between">
              <Image src={TestiLending} alt="testi"/>
              <div className="flex-col">
                <h2 className="text-[#2E3E78] font-bold">200 +</h2>
                <h2 className="text-[#2E3E78]">Satisfied Customer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] lg:ms-24 flex flex-col  gap-8 lg:justify-center mx-8 ">
        <div className="flex flex-col gap-4 relative z-10 ">
          <h1 className="lg:text-6xl text-4xl font-bold text-[#2E3E78]">
            SUSTAINABLE
          </h1>
          <h1 className="lg:text-6xl text-4xl font-bold text-[#2E3E78] w-fit relative">
            TOURISM
            <div className="w-[100px] h-[5px] bg-[#DE4C47] absolute right-0 lg:-bottom-4 -bottom-1 rounded-xl"></div>
          </h1>
        </div>
        <h2 className="text-[#435186] z-10 lg:text-lg ">
          Kami menyediakan jasa konsultan, pelatihan, produksi media digital,
          dan perencanaan tur wisata yang berkelanjutan.
        </h2>
        <div className="flex gap-4 lg:pb-0 pb-16">
          <Link href={"/about"}>
            <MyButton color="primary"> Get Started </MyButton>
          </Link>
          <Link href={"/about"}>
            <MyButton color="secondary"> Explore Tour </MyButton>
          </Link>
        </div>
      </div>
      <Image
        src={LandingLeft}
        alt="landing left"
        className="absolute left-0 top-[10rem] max-desktop:hidden"
      />
      <Image
        src={LandingRight}
        alt="landing right"
        className="absolute right-0 top-[10rem]  max-desktop:hidden"
      />
    </section>
  );
}
