import Banner from "@/components/atoms/Banner";
import ListNews from "@/components/atoms/ListNews";
import React from "react";

export const metadata = {
    title: "News",
};

export default function News() {
    return (
      <section className="min-h-screen lg:mt-0 py-[9vh] overflow-x-hidden">
        <Banner 
          title="Stay Informed, Stay Ahead: Your Source for Timely News and Insights." 
          caption="Discover actionable information to make informed decisions and stay ahead of the curve in today's fast-paced world." 
          color="#DE4C47"
          showButton={false}
        />
        <ListNews/>
      </section>
    );
  }