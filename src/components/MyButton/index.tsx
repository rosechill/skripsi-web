'use client'
import { extendVariants, Button } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      primary: "z-10 bg-[#2E3E78] text-white px-4 py-2 rounded-lg  lg:h-12 w-40 text-[100%] ",
      secondary: "z-10 bg-[#FCFCFC] border-2 border-[#2E3E78] text-[#2E3E78]  px-4 py-2 rounded-lg lg:h-12 w-40 text-[100%]",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    color: "primary",
  },
  compoundVariants: [
    {
      isDisabled: true,
      color: "primary",
      class: "bg-[#2E3E78]/80 opacity-100",
    },
  ],
});
