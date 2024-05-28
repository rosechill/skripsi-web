import React from "react";
import Banner from "@/components/organisms/Banner";
import ListTour from "@/components/atoms/ListTour";
import satellite from "@/services/satellite";

export const metadata = {
  title: "Tour",
};

export default async function Tour() {
  const response = await satellite.get(
    "https://www.travelxism.com/api/8633445279-tourApi"
  );

  return (
    <section className="min-h-screen lg:mt-0 py-[9vh]  overflow-x-hidden">
      <Banner
        title="Keep Exploring, Stay Ahead: Your Gateway to Timely Travel News and Insights."
        caption="Uncover essential insights to guide your travel decisions and stay ahead of the curve in the dynamic world of tours and travel."
        color="#DE4C47"
        showButton={false}
      />
      <ListTour data={response.data} />
    </section>
  );
}
