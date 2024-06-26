import React from "react";
import FormBookTour from "@/components/molecules/FormBookTour";

export const metadata = {
  title: "Form Tour",
};

export default function TourForm({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const decodedSlug = decodeURIComponent(slug);

  return (
    <section className="flex flex-col gap-8 min-h-screen my-[9vh] lg:mx-80 mx-8">
      <h2 className="text-center text-3xl text-[#2E3E78] font-semibold pt-8 ">Tour Form</h2>
      <h2 className="text-xl text-[#2E3E78] font-semibold">{decodedSlug}</h2>
      <FormBookTour decodedSlug={decodedSlug}></FormBookTour>
    </section>
  );
}
