"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Adjust imports for consistency
import Link from "next/link";
import React, { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` sm:block md:hidden text-white  relative`}>
      {isOpen ? (
        <XMarkIcon
          onClick={handleMenuToggle}
          className="h-8 w-8 mr-6 text-white cursor-pointer select-none"
        />
      ) : (
        <Bars3Icon
          onClick={handleMenuToggle}
          className="h-8 w-8 mr-6 text-white cursor-pointer select-none"
        />
      )}

      {isOpen ? (
        <nav className="bg-black  right-0 mt-2 p-5 flex flex-col items-start z-60 gap-3 w-[150px] absolute top-5 z-50">
          <Link href="/">
            <span onClick={() => setIsOpen(false)}>Home</span>
          </Link>
          <Link href="/services">
            <span onClick={() => setIsOpen(false)}>Services</span>
          </Link>
          <Link href="/about-us">
            <span onClick={() => setIsOpen(false)}> About Us</span>
          </Link>
          <Link href="/contact-us">
            <span onClick={() => setIsOpen(false)}> Contact Us</span>
          </Link>
          <Link href="/gallery">
            <span onClick={() => setIsOpen(false)}> Gallery</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
};

export default MobileNav;
