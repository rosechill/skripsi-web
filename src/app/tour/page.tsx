import React from "react";
import Banner from "@/components/Banner";
import ListTour from "@/components/ListTour";

export const metadata = {
    title: "Tour",
};

export default function Tour() {
    return (
      <section className="min-h-screen lg:mt-0 lg:py-[9vh] py-[11vh] overflow-x-hidden">
        <Banner 
          title="Keep Exploring, Stay Ahead: Your Gateway to Timely Travel News and Insights." 
          caption="Uncover essential insights to guide your travel decisions and stay ahead of the curve in the dynamic world of tours and travel." 
          color="#DE4C47"
          showButton={false}
        />
        <ListTour/>
      </section>
    );
  }