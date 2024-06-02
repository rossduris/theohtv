"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Bars3Icon, BeakerIcon } from "@heroicons/react/24/solid";
import MobileNav from "./MobileNav";
const Header = () => {
  const [isStatic, setIsStatic] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const serviceLinkRef = useRef<HTMLAnchorElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isOverServiceLink, setIsOverServiceLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isShrunk ? "shrunk-header " : ""}>
      <header className="   h-[80px] md:h-[100px]  flex w-full flex-col justify-center z-50  fixed">
        <div className="text-black flex justify-center">
          <div className="flex z-10 w-full flex-row justify-between items-center ">
            <div className="  flex h-full w-[300px] ">
              <Link href="/">
                <div className="header-logo"></div>
              </Link>
            </div>

            <MobileNav />
            <nav className="gap-10 z-100  justify-end pr-5 text-white hidden md:flex">
              <Link href="/#">Home</Link>
              <Link href="/#about-us">About Us</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#gallery">Gallery</Link>
              <Link href="/#contact-us">Contact Us</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
