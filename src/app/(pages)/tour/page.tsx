import React from "react";
import Banner from "@/components/atoms/Banner";
import ListTour from "@/components/atoms/ListTour";

export const metadata = {
    title: "Tour",
};

export default function Tour() {
    return (
      <section className="min-h-screen lg:mt-0 py-[9vh]  overflow-x-hidden">
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