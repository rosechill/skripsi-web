"use client";
import { DataTour } from "@/interfaces/tourInterface";
import satellite from "@/services/satellite";
import { formatCurrency, getImageTour } from "@/utils/constant";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MyButton } from "../MyButton";

export default function TourSection() {
  const [tourData, setTourData] = useState<DataTour[]>([]);

  useEffect(() => {
    async function fetchTourData() {
      try {
        const response = await satellite.get(
          "https://www.travelxism.com/api/8633445279-apiTourPackageLimit"
        );
        setTourData(response.data);
      } catch (error) {
        console.log("Fail", error);
      }
    }

    fetchTourData();

    return () => {};
  }, []);
  return (
    <section className="relative bg-[#F4F3FF] py-16 flex flex-col gap-12 justify-center items-center">
      <h1 className="lg:text-3xl text-2xl text-[#2E3E78] font-bold ">
        Paket Tur
      </h1>

      <div className="flex flex-wrap justify-center gap-12">
        {tourData.map((item: DataTour, index: number) => (
          <Link href={`/tour/${item.id_tour_package}`} key={index}>
            <div className="w-[300px] h-[500px] shadow-lg rounded-xl flex flex-col  gap-4 will-change-transform transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-102 duration-300 ...">
              <Image
                src={getImageTour(item.main_image)}
                alt="gallery"
                width={1200}
                height={800}
                className="w-full h-[250px] object-cover rounded-t-xl"
              />
              <p
                className="text-white rounded-lg p-2 mx-8 font-semibold text-center  line-clamp-1"
                style={{ backgroundColor: item.bg_color }}
              >
                {item.duration}
              </p>
              <div className="flex flex-col  gap-4 min-h-[115px]">
                <Tooltip
                  showArrow={true}
                  content={item.nama_paket}
                  className="p-4 w-[280px] bg-[#F4F3FF] text-[#2E3E78]"
                >
                  <p className="text-[#2E3E78] mx-4 font-semibold  line-clamp-1">
                    {item.nama_paket}
                  </p>
                </Tooltip>
                <Tooltip
                  showArrow={true}
                  content={item.quotes}
                  className="p-4 w-[280px] bg-[#F4F3FF] text-[#2E3E78]"
                >
                  <p className="text-[#6D78A1] mx-4  line-clamp-3">
                    {item.quotes}
                  </p>
                </Tooltip>
              </div>
              <p className="text-[#2E3E78] mx-4 mb-4 font-semibold  line-clamp-1">
                {formatCurrency(item.harga)}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link href={"/tour"}>
          <MyButton color="primary"> Lihat Detail </MyButton>
      </Link>
    </section>
  );
}
