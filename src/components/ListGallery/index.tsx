import { DataGallery } from "@/interfaces/galleryInterface";
import satellite from "@/services/satellite";
import { getImageGallery } from "@/utils/constant";
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
            width={200}
            height={200}
            className="w-full h-[300px] object-cover rounded-xl"
          />
          <p className="text-center text-[#2E3E78] font-semibold pt-4">
            {item.nama}
          </p>
        </div>
      ))}

      

    </div>
  );
}
