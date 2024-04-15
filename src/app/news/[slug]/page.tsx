import React from "react";
import satellite from "@/services/satellite";
import Image from "next/image";
import { getImageNews, getImageNewsDetail } from "@/utils/constant";

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
    <section className="flex flex-col min-h-screen  my-[9vh] justify-center  gap-8">
      <div className="flex justify-center items-center mx-28">
        <Image
          src={getImageNewsDetail(newsDetails.cover)}
          alt=""
          width={1200}
          height={500}
          style={{ objectFit: "cover", width: "100%", height: "500px" }}
          className=" rounded-xl mt-[3vh] max-h-[500px]"
          unoptimized
          quality={100}
          layout="intrinsic"
        />
      </div>
      <div className="mx-56 flex flex-col gap-8">
        <h2 className="text-[#2E3E78] text-3xl font-bold ">
            {newsDetails.judul_berita}
        </h2>
        <div className="flex flex-col text-justify gap-8" dangerouslySetInnerHTML={{ __html: newsDetails.isi_berita }} />
      </div>
    </section>
  );
}
