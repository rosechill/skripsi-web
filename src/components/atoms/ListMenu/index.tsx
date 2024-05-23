import Link from "next/link";
import { useState } from "react";
import { DataMenu } from "@/interfaces/menuInterface";
export default function ListMenu({
  item,
  index,
  pathName,
}: Readonly<{
  item: DataMenu;
  index: number;
  pathName: string;
}>) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      key={index}
      href={item.path}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`flex rounded-lg  ${
        isHover || pathName === item.path ? "" : ""
      } items-center flex gap-4`}
    >
      <li className="flex  font-medium text-[#2E3E78]">
        <p
          className={`${
            isHover || pathName === item.path
              ? "bg-[#e1e7ff]  px-4 py-2 mx-2 rounded-lg"
              : "px-4 py-2 mx-2"
          }`}
        >
          {item.name}
        </p>
      </li>
    </Link>
  );
}
