import React from "react";
import { DataTeam } from "@/interfaces/teamInterface";
import Image from "next/image";
import satellite from "@/services/satellite";
import { getImageTeam } from "@/utils/constant";
import { Tooltip } from "@nextui-org/react";
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
    <div className="flex flex-wrap lg:px-24 py-16 px-4  justify-center gap-8 ">
      {data?.map((item: DataTeam, index: number) => (
        <div
          key={index}
          className="w-[300px] h-fit flex flex-col gap-4 justify-center items-center "
        >
          <div className="p-1  rounded-full border-3 border-[#2E3E78] flex justify-center items-center">
            <Image
              src={getImageTeam(item.image)}
              alt="gallery"
              width={200}
              height={200}
              className="w-[180px] h-[180px] object-cover rounded-full"
            />
          </div>
          <Tooltip
            showArrow={true}
            content={item.nama}
            placement="bottom"
            className="p-4 w-[300px]  bg-[#2E3E78] text-white"
          >
            <p className="text-center text-[#2E3E78] font-semibold line-clamp-1 ">
              {item.nama}
            </p>
          </Tooltip>
          <Tooltip
            showArrow={true}
            content={item.nama}
            placement="bottom"
            className="p-4 w-[300px] bg-[#2E3E78] text-white"
          >
            <p className="text-center text-[#828BAE]  pt-4 line-clamp-1 ">
              {item.posisi}
            </p>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}
