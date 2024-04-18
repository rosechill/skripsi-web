"use client";

import { useState, useEffect } from "react";
import satellite from "@/services/satellite";
import { DataNews } from "@/interfaces/newsInterface";
import { getImageNews, getImageNewsDetail } from "@/utils/constant";
import Image from "next/image";
import { MyButton } from "../MyButton";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

async function getNewsData() {
  try {
    const response = await satellite.get(
      "https://www.travelxism.com/api/8633445279-beritaApi"
    );
    return response.data;
  } catch (error) {
    console.log("Fail", error);
    return [];
  }
}

export default function ListNews() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [newsData, setNewsData] = useState<DataNews[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchNewsData() {
    const data = await getNewsData();
    setNewsData(data);
  }

  function handleCategorySelect(category: string) {
    setSelectedCategory(category);
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function filterNewsByCategoryAndSearch(news: DataNews[]): DataNews[] {
    let filteredNews = news;
    if (selectedCategory !== "all") {
      filteredNews = filteredNews.filter(
        (item) => item.caption === selectedCategory
      );
    }
    if (searchQuery.trim() !== "") {
      filteredNews = filteredNews.filter((item) =>
        item.judul_berita.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredNews;
  }

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="flex flex-col pt-[5vh] lg:mx-24 mx-8 justify-center  gap-8 relative">
      <h1 className="text-[#2E3E78] lg:text-4xl text-2xl font-bold ">News</h1>

      <div className="flex flex-row flex-wrap w-full gap-4 lg:justify-between justify-center">
        <div className="flex lg:flex-row flex-wrap gap-4 justify-center">
          <MyButton
            color="secondary"
            onClick={() => handleCategorySelect("all")}
          >
            All
          </MyButton>
          <MyButton
            color="secondary"
            onClick={() => handleCategorySelect("Trivia")}
          >
            Trivia
          </MyButton>
          <MyButton
            color="secondary"
            onClick={() => handleCategorySelect("Press Release")}
          >
            Kabar Travelxism
          </MyButton>
          <MyButton
            color="secondary"
            onClick={() => handleCategorySelect("Project")}
          >
            Project Portfolio
          </MyButton>
        </div>
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border-2 border-[#2E3E78] rounded-lg lg:w-1/4 w-full lg:h-12 h-1/4"
        />  
      </div>

      <div className="flex flex-wrap justify-center gap-8 ">
        {filterNewsByCategoryAndSearch(newsData).map(
          (item: DataNews, index: number) => (
            <Link href={`/news/${item.id_berita}`} key={index}>
              <div className="w-[310px] shadow-lg rounded-xl flex flex-col justify-between will-change-transform transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-102 duration-300 ...">
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
          )
        )}
      </div>
    </div>
  );
}
