import React from "react";
import { DataTeam } from "@/interfaces/teamInterface";
import Image from "next/image";
import satellite from "@/services/satellite";
import { getImageTeam } from "@/utils/constant";

async function getTeamData() {
  try {
    const response = await satellite.get(
      "https://www.travelxism.com/api/8633445279-staffApi"
    );
    return response.data;
  } catch (error) {
    console.log("fail", error);
    return [];
  }
}
export default async function ListTeam() {
  const data = await getTeamData();

  return (
    <div className="flex flex-wrap lg:px-28 py-16 px-8 justify-between gap-8 bg-[#F4F3FF]">
      {data?.map((item: DataTeam, index: number) => (
        <div key={index} className="w-[300px] h-fit flex flex-col gap-4 justify-center items-center ">
          <Image
            src={getImageTeam(item.image)}
            alt="gallery"
            width={200}
            height={200}
            className="w-[180px] h-[180px] object-cover rounded-full"
          />
          <p className="text-center text-[#2E3E78] font-semibold pt-4 h-10">{item.nama}</p>
          <p className="text-center text-[#828BAE]  pt-4 ">{item.posisi}</p>
        </div>
      ))}
    </div>
  );
}
