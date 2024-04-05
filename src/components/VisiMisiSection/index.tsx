import React from "react";
import { FaEye, FaRocket } from "react-icons/fa";

export default function index() {
  return (
    <section className="lg:flex bg-[#F4F3FF] py-[10vh]">
      <div className="flex lg:flex-row flex-col lg:mx-24 mx-8 lg:gap-24 gap-8">
        <div className="flex flex-col justify-center lg:items-start items-center  relative lg:w-1/2 gap-8 p-8 bg-[#FCFCFC] rounded-xl">
          <div className="text-[#2E3E78] lg:text-4xl text-2xl font-bold flex gap-4">
            <h1>Visi</h1>
            <h1>|</h1>
            <FaEye />
          </div>
          <p className="text-[#2E3E78]  lg:text-start text-justify">
            Kami berharap dapat melibatkan lebih banyak pemangku kepentingan
            untuk berpartisipasi dalam mempraktikkan pariwisata berkelanjutan,
            meningkatkan kesadaran akan pentingnya pariwisata berkelanjutan
            melalui produksi media, serta memberikan pilihan yang berarti bagi
            wisatawan dan masyarakat lokal melalui paket wisata berkelanjutan
            dan virtual tour.
          </p>
        </div>
        <div className="flex flex-col lg:items-start items-center  relative lg:w-1/2 gap-8 p-8 bg-[#FCFCFC] rounded-xl">
          <div className="text-[#2E3E78] lg:text-4xl text-2xl font-bold flex gap-4">
            <h1>Misi</h1>
            <h1>|</h1>
            <FaRocket />
          </div>
          <p className="text-[#2E3E78]  lg:text-start text-justify">
            Mengubah aset pariwisata menjadi produk yang dapat dipasarkan dengan
            memaksimalkan manfaat ekonomi, sosial, budaya, dan tetap menjaga
            lingkungan.
          </p>
        </div>
      </div>
    </section>
  );
}
