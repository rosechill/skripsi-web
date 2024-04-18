import { ServiceHero } from "@/assets/images";
import Image from "next/image";
import React from "react";

export default function ServiceHeroSection() {
  return (
    <section className="flex lg:flex-row flex-col lg:mt-0 py-[10vh] custom-bg lg:h-screen lg:justify-normal justify-center items-center">
      <div className=" flex flex-col justify-center items-center relative w-1/2 mx-24">
        <Image
          src={ServiceHero}
          loading="lazy"
          alt="hero"
          width={700}
          height={700}
          className="py-8"
        />
      </div>
      <div className="flex flex-col justify-center lg:items-start items-center  relative lg:w-1/2 lg:me-24 gap-8 mx-8">
        <h1 className="text-[#2E3E78] lg:text-4xl text-2xl font-bold">
          Layanan
        </h1>
        <p className="text-[#2E3E78]  lg:text-start text-justify">
          Travelxism menyediakan layanan pelatihan, konsultasi, kajian, dan
          produksi media berkualitas tinggi untuk mendukung stakeholders dalam
          industri pariwisata. Dari pelatihan oleh para profesional hingga
          konsultasi dalam aspek bisnis pariwisata berkelanjutan, kami siap
          memberikan wawasan dan rekomendasi yang efektif untuk strategi dan
          pengembangan industri pariwisata.
        </p>
      </div>
    </section>
  );
}
