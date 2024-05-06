import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black w-full border-t flex justify-between  bg-gradient-to-t from-black to-[#121212] flex-col lg:flex-row">
      <Image
        alt="logo big"
        src="/logo-white.png"
        width={350}
        height={100}
        style={{
          height: "300px",
          backgroundColor: "transparent",
          objectFit: "contain",
          width: "auto",
        }}
      />
      <div className=" p-10">
        <div>
          <span className=" border-b w-[170px] text-gray-300 font-bold my-4 py-2 flex">
            Site Links
          </span>
          <nav className=" text-white flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
            {/* <Link href="/gallery">Gallery</Link> */}
          </nav>
        </div>
        <div>
          <span className=" border-b w-[170px] text-gray-300 font-bold my-4 py-2 flex">
            Social
          </span>
          <nav className=" text-white flex flex-col">
            <Link href="/">Facebook</Link>
            <Link href="/">Instgram</Link>
            <Link href="/">X</Link>
          </nav>
        </div>
        <div>
          <span className=" border-b w-[170px] text-gray-300 font-bold my-4 py-2 flex">
            Contact
          </span>
          <nav className=" text-white flex flex-col gap-6">
            <p>
              <Link href="tel:(614) 496-7840">(614) 496-7840</Link>
            </p>
            <p>
              2257 W. Fair Ave. <br></br> Lancaster, OH 43130
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
