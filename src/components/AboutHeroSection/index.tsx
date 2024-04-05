import React from "react";
import Image from "next/image";
import { AboutLanding } from "@/assets/images";

export default function index() {
  return (
    <section className="lg:flex lg:mt-0 py-[10vh] custom-bg lg:h-screen ">
      <div className=" flex flex-col justify-center items-center relative w-1/2 mx-24">
        <Image
          src={AboutLanding}
          loading="lazy"
          alt="hero"
          width={500}
          height={500}
          className="py-8"
        />
      </div>
      <div className="flex flex-col justify-center lg:items-start items-center  relative lg:w-1/2 lg:me-24 gap-8 mx-8">
        <h1 className="text-[#2E3E78] lg:text-4xl text-2xl font-bold">Tentang Kami</h1>
        <p className="text-[#2E3E78]  lg:text-start text-justify">
          Travelxism di bawah naungan PT. Gemilang Media Wisatama adalah sebuah
          yang didirikan sejak tahun 2019 dan berbasis di Yogyakarta, pusat
          kebudayaan Jawa dan menjadi mini Indonesia di mana pelajar dari
          berbagai pelosok nusantara berada di sana. Travelxism yang bergerak di
          bidang pariwisata yang berfokus pada penyampaian riset potensi
          pariwisata yang inovatif, mengembangkan komunitas wisata, mengadakan
          berbagai workshop dan pelatihan, digitalisasi destinasi dan branding,
          serta menyediakan paket wisata berkelanjutan yang dipandu oleh tour
          guide profesional.
        </p>
      </div>
    </section>
  );
}
