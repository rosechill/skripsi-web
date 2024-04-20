import React from "react";
import Menu from "../../molecules/Menu";
import Banner from "../../molecules/Banner";
import Footer from "../../molecules/Footer";
import ContainerProvider from "../ContainerProvider";
export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden">
      <ContainerProvider>
          <Menu />
          <div className="">{children}</div>
          <Banner 
            title="Explore The World with " 
            caption="Travelxism" 
            color="#2E3E78"
            showButton={true} 
            />
          <Footer/>
      </ContainerProvider>
    </div>
  );
}
