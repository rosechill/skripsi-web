"use client";
import { DataGallery } from "@/interfaces/galleryInterface";
import satellite from "@/services/satellite";
import { getImageGallery } from "@/utils/constant";
import { Skeleton, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";

async function getGalleryData() {
  try {
    const response = await satellite.get(
      "https://www.travelxism.com/api/8633445279-galleryApi"
    );
    return response.data;
  } catch (error) {
    console.log("Fail", error);
    return [];
  }
}

export default function ListGallery() {
  const [galleryData, setGalleryData] = useState<DataGallery[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGalleryData() {
    const data = await getGalleryData();
    setGalleryData(data);
  }

  useEffect(() => {
    fetchGalleryData();
  }, []);

  return (
    <div className="flex flex-wrap lg:mx-24 mx-8 justify-between gap-8 relative">
      {galleryData?.map((item: DataGallery, index: number) => (
        <div key={index} className="w-[400px] ">
          {loading && (
            <Skeleton>
              <div style={{ width: "100%", height: "350px" }} />
            </Skeleton>
          )}
          <Image
            src={getImageGallery(item.url_foto)}
            alt="gallery"
            width={400}
            height={400}
            className=" h-[350px] object-cover rounded-xl"
            onLoad={() => setLoading(false)}
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
