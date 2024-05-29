"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon, BeakerIcon } from "@heroicons/react/24/solid";
import MobileNav from "./MobileNav";
const Header = () => {
  const [isStatic, setIsStatic] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Adjust the scroll position threshold as needed
        setIsStatic(true);
        setIsShrunk(true);
      } else {
        setIsStatic(false);
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`floatnav ${isStatic ? "static" : ""} ${
        isShrunk ? "shrink" : ""
      }`}
    >
      <header className=" bg-black shadow-sm  h-[80px] md:h-[110px]  flex w-full flex-col justify-center z-50  ">
        <div className=" overflow-hidden h-[80px] md:h-[110px] w-full flex absolute ">
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
            <nav className="gap-10 z-100  justify-end pr-5 text-white hidden md:flex">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/gallery">Gallery</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
