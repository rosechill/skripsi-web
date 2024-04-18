import React from "react";
import satellite from "@/services/satellite";
import Image from "next/image";
import { formatCurrency, getImageSdgs, getImageTour } from "@/utils/constant";
import { Tooltip } from "@nextui-org/react";
import { BookTour } from "@/assets/images";
import { FaWhatsapp, FaWpforms } from "react-icons/fa";
import { MyButton } from "@/components/MyButton";
import Link from "next/link";
import { TourDetails } from "@/interfaces/tourDetail";

type SlugType = {
  params: { slug: string };
};

export function generateMetadata({ params: { slug } }: SlugType) {
  return {
    title: `Tour | ${slug}`,
  };
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

export default async function TourDetail({
  params: { slug },
}: Readonly<SlugType>) {
  const tourDetails = await getTourDetail(slug);

  if (!tourDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col min-h-screen mt-[9vh]">
      {/* header */}
      <div className="lg:mx-24 mx-8 flex lg:flex-row flex-col justify-between lg:gap-8 gap-4 my-[5vh] ">
        <h2 className="text-[#2E3E78] lg:text-3xl text-2xl font-bold ">
          {tourDetails.nama_paket}
        </h2>
        <h2 className="text-[#2E3E78] lg:text-3xl text-2xl font-bold ">
          {formatCurrency(tourDetails.harga)}
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col lg:mx-24 mx-8 lg:mb-[10vh] mb-[5vh] gap-4 ">
        <div className="lg:w-1/2 w-full">
          <Image
            src={getImageTour(tourDetails.main_image)}
            alt=""
            width={550}
            height={600}
            className="w-full rounded-xl lg:h-[500px] h-[250px] object-cover "
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full lg:h-[500px] h-fit">
          {tourDetails.images?.map((path, index: number) => (
            <Image
              key={index}
              src={getImageTour(path)}
              alt=""
              width={350}
              height={600}
              className="w-full lg:h-[240px] h-[150px] rounded-xl object-cover "
            />
          ))}
        </div>
      </div>

      {/* qoutes */}
      <div className="bg-[#2E3E78] flex justify-center items-center min-h-[160px]">
        <h2 className="text-white text-center lg:text-2xl px-8">
          {tourDetails.quotes}
        </h2>
      </div>

      {/* Itinerary */}
      <div className="bg-[#F4F3FF]">
        {tourDetails.itineraries && (
          <div className="lg:mx-24 mx-8 lg:mb-[10vh] mb-[5vh] flex flex-col gap-8">
            <h3 className="text-[#2E3E78] text-2xl text-center font-bold mt-14">
              Itineraries
            </h3>
            {tourDetails.itineraries.map(
              (itinerary: any, index: number) =>
                itinerary &&
                itinerary.day !== undefined && (
                  <div key={index} className="mb-4">
                    <h4 className="text-[#2E3E78] text-xl font-bold mb-2">
                      Day {itinerary.day}
                    </h4>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {itinerary.images &&
                        Object.entries(itinerary.images).map(
                          ([nama_destinasi, imagePath], index) => (
                            <div key={index}>
                              <Tooltip
                                showArrow={true}
                                content={nama_destinasi}
                                placement="bottom-end"
                                className="w-[250px] min-h-[50px] bg-[#2E3E78] text-white"
                              >
                                <Image
                                  src={getImageTour(imagePath as string)}
                                  alt={nama_destinasi}
                                  width={300}
                                  height={200}
                                  className="lg:w-[250px] w-[150px] lg:h-[250px] h-[150px] rounded-xl"
                                />
                              </Tooltip>
                            </div>
                          )
                        )}
                    </div>
                    <div
                      className="text-[#2E3E78] pt-4 text-justify "
                      dangerouslySetInnerHTML={{
                        __html: itinerary.isi_itinerary,
                      }}
                    />
                  </div>
                )
            )}
          </div>
        )}
      </div>

      {/* Sdgs */}
      <div className="flex flex-col lg:mx-24 mx-8 gap-8 lg:my-14 my-12">
        <h2 className="text-[#2E3E78] text-2xl text-center font-bold">
          Sustainable Development Goals (SDGs)
        </h2>
        <div className="flex lg:gap-8 gap-4 justify-center">
          {tourDetails.sdgs.map((sdg: { path_logo: string }, index: number) => (
            <div key={index}>
              <Image
                src={getImageSdgs(sdg.path_logo)}
                alt={`SDG ${index + 1}`}
                width={300}
                height={200}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* information about the tour */}
      <div className="grid sm:grid-cols-2 grid-cols-1  gap-8 bg-[#F4F3FF] py-14 lg:px-24 px-8">
          <div className="p-4 bg-white rounded-xl lg:min-h-[300px] h-fit">
            <h2 className="text-[#2E3E78] text-2xl font-bold">Include</h2>
            <div
              className="text-[#2E3E78] text-justify pt-4"
              dangerouslySetInnerHTML={{ __html: tourDetails.include }} 
            />
          </div>
          <div className="p-4 bg-white rounded-xl lg:min-h-[300px] h-fit">
            <h2 className="text-[#2E3E78] text-2xl font-bold">Exclude</h2>
            <div
              className="text-[#2E3E78] text-justify pt-4"
              dangerouslySetInnerHTML={{ __html: tourDetails.exclude }}
            />
          </div>
          <div className="p-4 bg-white rounded-xl lg:min-h-[300px] h-fit">
            <h2 className="text-[#2E3E78] text-2xl font-bold">What You Get?</h2>
            <div
              className="text-[#2E3E78] text-justify pt-4"
              dangerouslySetInnerHTML={{ __html: tourDetails.what_you_get }}
            />
          </div>
          <div className="p-4 bg-white rounded-xl lg:min-h-[300px] h-fit">
            <h2 className="text-[#2E3E78] text-2xl font-bold">
              Informasi Lainnya
            </h2>
            <div
              className="text-[#2E3E78] text-justify pt-4 overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: tourDetails.other_information,
              }}
            />
          </div>
      </div>

      {/* book */}
      <div className="lg:mx-24 mx-8 flex flex-col gap-8 py-14">
        <h2 className="text-[#2E3E78] text-2xl text-center font-bold">
          Tertarik Dengan Perjalanan Ini ?
        </h2>
        <div className="grid lg:grid-cols-2 lg:gap-0 gap-4 ">
          <div className="flex items-center lg:justify-normal justify-center ">
            <Image src={BookTour} alt="booktour" width={500} height={500} className="lg:w-[500px] w-[300px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-[#4ABD45] p-4 rounded-xl flex flex-col justify-center items-center gap-4">
              <FaWhatsapp className="text-white text-6xl" />
              <h2 className="text-white">Kontak whatsapp kami</h2>
              <Link
                target="_blank"
                href={`https://api.whatsapp.com/send/?phone=6281249605055&text=Hai%2C+saya+tertarik+dengan+paket+wisata+${encodeURIComponent(tourDetails.nama_paket)}&type=phone_number&app_absent=0`}
              >
                <MyButton color="secondary">
                  <h2>Whatsapp</h2>
                </MyButton>
              </Link>
            </div>
            <div className="bg-[#586593] p-4 rounded-xl flex flex-col justify-center items-center gap-4">
              <FaWpforms className="text-white text-6xl" />
              <h2 className="text-white">Isi form mengenai perjalanan anda</h2>
                <Link href={`/tour/${tourDetails.nama_paket}/tourForm`} >
                <MyButton color="secondary">
                  <h2>Isi Form</h2>
                </MyButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
