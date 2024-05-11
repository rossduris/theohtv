import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Bars3Icon, BeakerIcon } from "@heroicons/react/24/solid";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className=" bg-black shadow-sm  h-[80px] md:h-[110px]  flex w-full flex-col justify-center z-50">
      <div className=" overflow-hidden h-[80px] md:h-[110px] w-full flex absolute">
        <Image
          width={800}
          height={100}
          src="https://ik.imagekit.io/2e8fvrzss/fiber.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
            overflow: "hidden",
          }}
        />
      </div>

      <div className="text-black flex justify-center">
        <div className="flex z-10 w-full flex-row justify-between items-center ">
          <div className="  flex h-full w-[300px] ">
            <Link href="/">
              <Image
                src="https://ik.imagekit.io/2e8fvrzss/logo-white-slim.png"
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
            <Link href="/gallery">Gallery</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
