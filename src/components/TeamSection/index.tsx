import Image from "next/image";
import ListTeam from "../ListTeam";
import { TeamVectorLeft, TeamVectorRight } from "@/assets/images";

export  default function TeamSection() {
  return (
    <section className="relative">
      <ListTeam/>
      <Image
        src={TeamVectorLeft}
        alt=""
        width={80}
        height={80}
        className="absolute left-0 bottom-0"
      />
      <Image
        src={TeamVectorRight}
        alt=""
        width={80}
        height={80}
        className="absolute right-0 top-0"
      />
    </section>
  )
}
