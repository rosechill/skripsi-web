import { DataGallery } from "@/interfaces/galleryInterface";
import satellite from "@/services/satellite";
import { getImageGallery } from "@/utils/constant";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

async function getGalleryData() {
  try {
    const response = await satellite.get(
      "https://www.travelxism.com/api/8633445279-galleryApi"
    );
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log("Fail", error);
    return [];
  }
}

export default async function ListGallery() {
  const data = await getGalleryData();

  return (
    <div className="flex flex-wrap lg:mx-28 mx-8 justify-center gap-8 relative">
      {data?.map((item: DataGallery, index: number) => (
        <div key={index} className="w-[400px]">
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
