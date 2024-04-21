"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { dataMenu } from "@/utils/dataMenu";
import Image from "next/image";
import { Logo } from "@/assets/images";
import ListMenu from "../../atoms/ListMenu";
import { useState } from "react";
import { MyButton } from "../../atoms/MyButton";
import { Navbar } from "@nextui-org/react";

export default function Menu() {
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [closingMobileMenu, setClosingMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setClosingMobileMenu(false);
    }
  };

  const closeMobileMenu = () => {
    setClosingMobileMenu(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setClosingMobileMenu(false);
    }, 300);
  };

  return (
    <Navbar
      shouldHideOnScroll
      className="bg-[#F4F3FF] lg:w-full fixed top-0 z-50 "
    >
      {/* lg navbar */}
      <div className="flex w-full justify-between items-center max-desktop:hidden h-80px">
        <Link href={"/"}>
          <Image
            className="lg:ms-24 "
            src={Logo}
            alt="logo"
            width={200}
            height={180}
          />
        </Link>
        <ul className="flex">
          {dataMenu.map((item, index) => (
            <ListMenu
              key={index}
              index={index}
              item={item}
              pathName={pathName}
            />
          ))}
        </ul>
        <Link href={"/contact"} className="lg:me-24 ">
          <MyButton color="primary"> Contact Us</MyButton>
        </Link>
      </div>

      {/* Mobile navbar */}
      <div className=" w-full mx-8 flex justify-between items-center desktop:hidden h-[80px] ">
        <Link href={"/"}>
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
        <button
          className="block desktop:hidden focus:outline-none"
          onClick={mobileMenuOpen ? closeMobileMenu : toggleMobileMenu}
        >
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1"
              width="39"
              height="39"
              rx="19.5"
              stroke="#2E3E78"
            />
            <rect x="9" y="11" width="22" height="5" rx="2.5" fill="#2E3E78" />
            <rect x="9" y="18" width="22" height="5" rx="2.5" fill="#2E3E78" />
            <rect x="9" y="25" width="22" height="5" rx="2.5" fill="#2E3E78" />
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {closingMobileMenu && (
        <div
          className={`desktop:hidden  absolute top-[80px] left-0 w-full bg-[#F4F3FF] will-change-transform animate-fade-out-to-top`}
          onAnimationEnd={() => setClosingMobileMenu(false)}
        >
          <div className="flex flex-col ms-6 pb-10">
            <ul className="flex flex-col  ">
              {dataMenu.map((item, index) => (
                <ListMenu
                  key={index}
                  index={index}
                  item={item}
                  pathName={pathName}
                />
              ))}
              <MyButton className=" bg-[#2e3e78] text-[#FCFCFC] ms-6 px-4 py-2 rounded-lg w-40 mt-4">
                Contact Us
              </MyButton>
            </ul>
          </div>
        </div>
      )}

      {!closingMobileMenu && mobileMenuOpen && (
        <div
          className={`desktop:hidden absolute top-[80px] left-0 w-full bg-[#F4F3FF] will-change-transform animate-fade-in-from-top`}
        >
          <div className="flex flex-col ms-6 pb-10">
            <ul className="flex flex-col  ">
              {dataMenu.map((item, index) => (
                <ListMenu
                  key={index}
                  index={index}
                  item={item}
                  pathName={pathName}
                />
              ))}
              <Link href={"/contact"} className="ms-6 pt-4">
                <MyButton color="primary">Contact Us</MyButton>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </Navbar>
  );
}
