import React from "react";
import satellite from "@/services/satellite";
import Image from "next/image";
import { getImageNews, getImageNewsDetail } from "@/utils/constant";
import NewsSection from "@/components/NewSection";

type SlugType = {
  params: { slug: string };
};

export function generateMetadata({ params: { slug } }: SlugType) {
  return {
    title: `News | ${slug}`,
  };
}

async function getNewsDetails(slug: string) {
    try {
        const response = await satellite.get(
        `https://www.travelxism.com/api/8633445279-beritaApibyId/${slug}`
        );
        return response.data;
      } catch (error) {
        console.log("Fail", error);
        return [];
      }
  }
export default async function NewsDetails({
  params: { slug },
}: Readonly<SlugType>) {
  const newsDetails = await getNewsDetails(slug);

  return (
    <section className="flex flex-col min-h-screen  mt-[9vh] justify-center ">
      <div className="flex justify-center items-center lg:mx-24 mx-8">
        <Image
          src={getImageNewsDetail(newsDetails.cover)}
          alt=""
          width={1200}
          height={500}
          style={{ objectFit: "cover" }}
          className="w-full rounded-xl mt-16 max-h-[500px]"
          unoptimized
          quality={100}
          layout="intrinsic"
        />
      </div>
      <div className="lg:mx-56 mx-8 flex flex-col ">
        <h2 className="text-[#2E3E78] lg:text-3xl text-2xl font-bold py-8">
            {newsDetails.judul_berita}
        </h2>
        <div className="flex flex-col text-justify lg:gap-4 gap-1" dangerouslySetInnerHTML={{ __html: newsDetails.isi_berita }} />
      </div>
      <NewsSection/>
    </section>
  );
}
