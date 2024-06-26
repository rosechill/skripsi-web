"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { DataTour } from "@/interfaces/tourInterface";
import { formatCurrency, getImageTour } from "@/utils/constant";
import { MyButton } from "@/components/atoms/MyButton";
import SearchBar from "../SearchBar";
import Loading from "../Loading";

export default function ListTour({ data }: { data: DataTour[] }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [tourData] = useState<DataTour[]>(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading] = useState(false);

  function handleCategorySelect(category: number) {
    setSelectedCategory(category);
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function filterTourByCategoryAndSearch(tour: DataTour[]): DataTour[] {
    let filteredTour = tour;
    if (selectedCategory !== 0) {
      filteredTour = filteredTour.filter(
        (item) => item.total_day === selectedCategory
      );
    }
    if (searchQuery.trim() !== "") {
      filteredTour = filteredTour.filter((item) =>
        item.nama_paket.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredTour;
  }

  const filteredResults = filterTourByCategoryAndSearch(tourData);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col pt-[5vh] lg:mx-24 mx-8 justify-center gap-8 relative">
      <h1 className="text-[#2E3E78] lg:text-4xl text-2xl font-bold">Tour</h1>

      <div className="flex flex-row flex-wrap w-full gap-4 lg:justify-between justify-center">
        <div className="flex lg:flex-row flex-wrap gap-4 justify-center">
          <MyButton color="secondary" onClick={() => handleCategorySelect(0)}>
            All
          </MyButton>
          <MyButton color="secondary" onClick={() => handleCategorySelect(1)}>
            One Day
          </MyButton>
          <MyButton color="secondary" onClick={() => handleCategorySelect(2)}>
            Two Days
          </MyButton>
          <MyButton color="secondary" onClick={() => handleCategorySelect(3)}>
            Three Days
          </MyButton>
        </div>
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
      </div>

      <div className="flex flex-wrap  justify-center gap-8">
        {!Array.isArray(filteredResults) || filteredResults.length === 0 ? (
          <p className="text-[#2E3E78] mx-4 mt-4 font-semibold  line-clamp-1">
            No data found
          </p>
        ) : (
          filteredResults.map((item: DataTour, index: number) => (
            <Link href={`/tour/${item.id_tour_package}`} key={index}>
              <div className="w-[310px] h-[500px] shadow-lg rounded-xl flex flex-col  gap-4 will-change-transform transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-102 duration-300 ...">
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
          ))
        )}
      </div>
    </div>
  );
}
