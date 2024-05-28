import React from "react";
import Banner from "@/components/organisms/Banner";
import ListNews from "@/components/atoms/ListNews";
import satellite from "@/services/satellite";

export const metadata = {
    title: "News",
};

export default async function News() {
  const response = await satellite.get(
    "https://www.travelxism.com/api/8633445279-beritaApi"
  );
    return (
      <section className="min-h-screen lg:mt-0 py-[9vh] overflow-x-hidden">
        <Banner 
          title="Stay Informed, Stay Ahead: Your Source for Timely News and Insights." 
          caption="Discover actionable information to make informed decisions and stay ahead of the curve in today's fast-paced world." 
          color="#DE4C47"
          showButton={false}
        />
        <ListNews data = {response.data}/>
      </section>
    );
  }