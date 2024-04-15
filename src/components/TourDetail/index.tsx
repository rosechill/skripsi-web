'use client'
import React, { useEffect, useState } from "react";
import satellite from "@/services/satellite";
import Image from "next/image";
import { getImageTour } from "@/utils/constant";

type SlugType = {
  params: { slug: string };
};

interface TourDetails {
  main_image: string;
  nama_paket: string;
  images?: { path: string }[];
  itineraries?: {
    day: number;
    isi_itinerary: string;
    images: { [key: string]: string };
  }[];
  sdgs?: { [key: string]: string };
}

async function getTourDetail(slug: string): Promise<TourDetails | null> {
  try {
    const response = await satellite.get<TourDetails>(
      `https://www.travelxism.com/api/8633445279-tourApiById/${slug}`
    );
    return response.data;
  } catch (error) {
    console.log("Fail", error);
    return null;
  }
}

export default function TourDetailSection({ params: { slug } }: Readonly<SlugType>) {
  const [tourDetails, setTourDetails] = useState<TourDetails | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getTourDetail(slug);
      setTourDetails(data);
    }
    fetchData();
  }, [slug]);

  if (!tourDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col min-h-screen my-[9vh] gap-8">
      <div className="flex mx-28">
        <Image
          src={getImageTour(tourDetails.main_image)}
          alt=""
          width={1200}
          height={500}
          className="rounded-xl max-h-[500px]"
        />
      </div>
      <div className="mx-56 flex flex-col gap-8">
        <h2 className="text-[#2E3E78] text-3xl font-bold ">
          {tourDetails.nama_paket}
        </h2>
      </div>
      {/* Iterate over images */}
      <div className="mx-56">
        <h3 className="text-[#2E3E78] text-2xl font-bold mb-4">Gallery</h3>
        <div className="grid grid-cols-4 gap-4">
          {tourDetails.images?.map((image, index) => (
            <div key={index}>
              <Image
                src={getImageTour(image.path)}
                alt=""
                width={300}
                height={200}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Iterate over itineraries */}
      <div className="mx-56">
        <h3 className="text-[#2E3E78] text-2xl font-bold mb-4">Itineraries</h3>
        {tourDetails.itineraries?.map((itinerary, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-[#2E3E78] text-xl font-bold mb-2">
              Day {itinerary.day}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: itinerary.isi_itinerary }} />
            {/* Iterate over images in the itinerary */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(itinerary.images).map(([destination, imagePath], index) => (
                <div key={index}>
                  <Image
                    src={getImageTour(imagePath)}
                    alt={destination}
                    width={300}
                    height={200}
                    className="rounded-xl"
                  />
                  <p>{destination}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Display SDGs */}
      <div className="mx-56">
        <h3 className="text-[#2E3E78] text-2xl font-bold mb-4">Sustainable Development Goals (SDGs)</h3>
        <ul>
          {tourDetails.sdgs &&
            Object.entries(tourDetails.sdgs).map(([description, sdgs_num], index) => (
              <li key={index}>
                <span>{description}: </span>
                <span>{sdgs_num}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
