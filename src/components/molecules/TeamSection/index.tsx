import Image from "next/image";
import ListTeam from "../../atoms/ListTeam";
import { TeamVectorLeft, TeamVectorRight } from "@/assets/images";

export default function TeamSection() {
  return (
    <section className="relative bg-[#F4F3FF] ">
      <h1 className="lg:text-3xl text-2xl text-[#2E3E78] font-bold text-center pt-16">
        Our Team
      </h1>
      <ListTeam />
      <Image
        src={TeamVectorLeft}
        alt=""
        width={80}
        height={80}
        className="absolute left-0 bottom-0 max-desktop:hidden"
      />
      <Image
        src={TeamVectorRight}
        alt=""
        width={80}
        height={80}
        className="absolute right-0 top-0 max-desktop:hidden"
      />
    </section>
  );
}
