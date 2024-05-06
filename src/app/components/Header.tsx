import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Bars3Icon, BeakerIcon } from "@heroicons/react/24/solid";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className=" bg-white shadow-sm fixed overflow-hidden  flex w-full flex-col justify-center z-50  ">
      <Image
        src="/bg2.jpg"
        width={850}
        height={100}
        alt="banner"
        style={{
          width: "100%",
          position: "absolute",
          overflow: "hidden",
        }}
      />

      {/* <span className="text-white text-xs p-1 justify-center w-full flex  bg-black z-20 relative">
        Header banner 555-555-5555
      </span> */}
      <div className="text-black flex justify-center">
        <div className="flex z-10 w-full flex-row justify-between items-center ">
          <div className="  flex h-full w-[300px] ">
            <Link href="/">
              <Image
                src="/logo-white-slim.png"
                width={300}
                height={100}
                alt="logo"
                style={{
                  zIndex: 10,
                  position: "relative",
                  paddingLeft: 10,
                  width: "auto",
                }}
                className=" h-[75px] md:h-[auto]"
              />
            </Link>
          </div>

          <MobileNav />
          <nav className="gap-10 z-10  justify-end pr-5 text-white hidden md:flex">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
            {/* <Link href="/gallery">Gallery</Link> */}
          </nav>
        </div>

        <div className="bg-gradient-to-tr from-black to-transparent h-full w-full absolute"></div>
      </div>
    </header>
  );
};

export default Header;
