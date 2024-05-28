"use client";
import { DataGallery } from "@/interfaces/galleryInterface";
import { getImageGallery } from "@/utils/constant";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Loading from "../Loading";

export default function ListGallery({ data }: { data: DataGallery[] }) {
  const [galleryData] = useState<DataGallery[]>(data);
  const [loading] = useState(false);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-wrap lg:mx-24 mx-8 lg:justify-between justify-center gap-8 relative">
      {galleryData?.map((item: DataGallery, index: number) => (
        <div key={index} className="w-[400px] ">
          <Image
            src={getImageGallery(item.url_foto)}
            alt="gallery"
            width={400}
            height={400}
            className=" h-[350px] object-cover rounded-xl"
          />
          <Tooltip
            showArrow={true}
            content={item.nama}
            className="p-4 m-4 w-[350px] bg-white text-[#2E3E78]"
          >
            <p className=" text-center text-[#2E3E78] font-semibold pt-4 line-clamp-1">
              {item.nama}
            </p>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}
