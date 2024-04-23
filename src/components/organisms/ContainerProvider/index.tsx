"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
export default function ContainerProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);
  return <NextUIProvider>{children}</NextUIProvider>;
}
