"use client";

import { useState, useEffect } from "react";
import { DataNews } from "@/interfaces/newsInterface";
import satellite from "@/services/satellite";
import { getImageNewsDetail } from "@/utils/constant";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { MyButton } from "../MyButton";

export default function NewsSection() {
  const [newsData, setNewsData] = useState<DataNews[]>([]);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        const response = await satellite.get(
          "https://www.travelxism.com/api/8633445279-apiBeritaLimit"
        );
        setNewsData(response.data);
      } catch (error) {
        console.log("Fail", error);
      }
    }

    fetchNewsData();

    return () => {};
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center py-16 gap-12">
      <h1 className="lg:text-3xl text-2xl text-[#2E3E78] font-bold text-center ">
        Berita
      </h1>
      <div className="flex lg:flex-row flex-col justify-center gap-12">
        {newsData.map((item: DataNews, index: number) => (
          <Link href={`/news/${item.id_berita}`} key={index}>
            <div className="w-[300px] shadow-lg rounded-xl flex flex-col justify-between will-change-transform transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-102 duration-300 ...">
              <Image
                src={getImageNewsDetail(item.cover)}
                alt="gallery"
                width={1200}
                height={800}
                className="w-full h-[300px] object-cover rounded-t-xl"
              />
              <Tooltip
                showArrow={true}
                content={item.judul_berita}
                className="p-4 m-4 w-[280px] bg-white text-[#2E3E78]"
              >
                <p className="text-[#2E3E78] font-semibold m-4  line-clamp-1">
                  {item.judul_berita}
                </p>
              </Tooltip>
              <p className="text-[#6D78A1] p-4 text-xs">
                {item.created_at.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
        <Link href={"/news"}>
          <MyButton color="primary"> Lihat Detail </MyButton>
        </Link>
    </section>
  );
}
