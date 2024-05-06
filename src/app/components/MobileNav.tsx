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
        <nav className="bg-black  right-0 mt-2 p-5 flex flex-col items-start z-60 gap-3 w-[150px] absolute top-5 z-auto">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav>
      ) : null}
    </div>
  );
};

export default MobileNav;
