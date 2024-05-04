import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black w-full border-t flex justify-between  bg-gradient-to-t from-black to-[#121212]">
      <Image
        alt="logo big"
        src="/logo-white.png"
        width={350}
        height={100}
        style={{
          backgroundColor: "transparent",
          width: "auto",
        }}
      />
      <div>
        <span className=" border-b w-[170px] text-gray-300 font-bold my-2 py-2 flex">
          Site Links
        </span>
        <nav className=" text-white flex flex-col">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">Gallery</Link>
        </nav>
      </div>
      <div>
        <span className=" border-b w-[170px] text-gray-300 font-bold my-2 py-2 flex">
          Social
        </span>
        <nav className=" text-white flex flex-col">
          <Link href="/">Facebook</Link>
          <Link href="/">Instgram</Link>
          <Link href="/">X</Link>
        </nav>
      </div>
      <div>
        <span className=" border-b w-[170px] text-gray-300 font-bold my-2 py-2 flex">
          Contact
        </span>
        <nav className=" text-white flex flex-col">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">Gallery</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;