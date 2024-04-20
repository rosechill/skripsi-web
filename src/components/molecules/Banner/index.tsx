"use client";

import React from "react";
import { dataBanner } from "@/interfaces/bannerInterface";
import Image from "next/image";
import { CircleBanner } from "@/assets/images";
import { MyButton } from "../../atoms/MyButton";
import Link from "next/link";

const Banner: React.FC<dataBanner> = ({
  title,
  caption,
  color,
  showButton,
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className=" py-8 lg:px-48 px-8 text-center flex flex-col justify-center lg:gap-8 gap-4 relative min-h-[200px]"
    >
      <h2 className="text-white lg:text-3xl text-xl font-bold">{title}</h2>
      <p className="text-white lg:text-lg ">{caption}</p>
      {showButton && (
        <div className="flex justify-center">
          <Link href={"/contact"}>
            <MyButton color="secondary">
              Contact Us
            </MyButton>
          </Link>
        </div>
      )}
      <Image
        src={CircleBanner}
        alt="circleBanner"
        width={200}
        height={200}
        className="absolute lg:-left-[5rem] -left-[4rem] lg:bottom-auto lg:w-[150px] w-[90px]"
      />
      <Image
        src={CircleBanner}
        alt="circleBanner"
        width={200}
        height={200}
        className="absolute lg:-right-[5rem] -right-[4rem] lg:bottom-auto lg:w-[150px] w-[90px]"
      />
    </div>
  );
};

export default Banner;
