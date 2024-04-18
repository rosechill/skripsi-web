import { AboutHero, AboutVector } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { MyButton } from "../MyButton";
import Link from "next/link";

export default function index() {
  return (
    <section className="h-fit bg-[#F4F3FF]">
      <div className="lg:mx-24 flex flex-col lg:gap-28 gap-8 py-16 items-center">
        <h1 className="lg:text-3xl text-2xl text-[#2E3E78] font-bold">
          Tentang Kami
        </h1>
        <div className="flex lg:flex-row flex-col relative lg:mx-0 mx-8 lg:justify-normal justify-center items-center lg:gap-4 gap-8">
          <div className="lg:w-1/2 flex  ">
            <Image src={AboutHero} alt="abouthero" width={550} height={550} />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center lg:gap-4 gap-8">
            <h3 className="lg:text-2xl text-xl text-[#2E3E78] font-medium z-10">
              Industri Pariwisata
            </h3>
            <p className=" text-[#2E3E78] z-10 lg:text-left text-justify">
              Travelxism yang bergerak di bidang pariwisata yang berfokus pada
              penyampaian riset potensi pariwisata yang inovatif, mengembangkan
              komunitas wisata, mengadakan berbagai workshop dan pelatihan,
              digitalisasi destinasi dan branding, serta menyediakan paket
              wisata berkelanjutan yang dipandu oleh tour guide profesional.
            </p>
            <Image
              src={AboutVector}
              alt="abouthero"
              width={700}
              height={700}
              className="absolute -right-5 max-xl:hidden w-[55%] "
            />
          </div>
        </div>
        <Link href={"/about"}>
          <MyButton color="primary">
            Lihat Detail
          </MyButton>
        </Link>
      </div>
    </section>
  );
}
