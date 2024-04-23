import Banner from "@/components/organisms/Banner";
import ListGallery from "@/components/atoms/ListGallery";
import React from "react";

export const metadata = {
    title: "Gallery",
};

export default function Gallery() {
 
    return (
      <section className="min-h-screen lg:mt-0 py-[9vh] overflow-x-hidden">
        <Banner 
          title="stay ahead in the company's gallery, ensuring a competitive edge in today's evolving landscape." 
          caption="Unlock valuable insights to drive informed decisions and stay ahead of the curve in the fast-paced world of the company's gallery" 
          color="#DE4C47"
          showButton={false}
        />
        <h1 className="lg:text-4xl text-2xl text-[#2E3E78] font-bold text-center py-8 ">Gallery</h1>
        <ListGallery/>
      </section>
    );
  }