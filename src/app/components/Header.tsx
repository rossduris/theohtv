import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" bg-white shadow-sm relative overflow-hidden  flex w-full flex-col justify-center">
      <Image
        src="/bg2.jpg"
        width={850}
        height={100}
        alt="logo"
        style={{
          width: "100%",
          position: "absolute",
          overflow: "hidden",
          zIndex: 0,
        }}
      />

      {/* <span className="text-white text-xs p-1 justify-center w-full flex  bg-black z-20 relative">
        Header banner 555-555-5555
      </span> */}
      <div className="text-black flex justify-center">
        <div className="flex z-10 w-full flex-row justify-center items-center ">
          <div className="  flex h-full w-[300px] z-20  ">
            <Image
              src="/logo-white-slim.png"
              width={300}
              height={100}
              alt="logo"
              style={{ zIndex: 10, position: "relative", paddingLeft: 10 }}
            />
          </div>
          <nav className="flex gap-10 z-10 w-[100%] justify-end pr-5 text-white">
            <Link className=" underline" href="/">
              Home
            </Link>
            <Link href="/">Services</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">Gallery</Link>
          </nav>
        </div>

        <div className="bg-gradient-to-tr from-black to-transparent h-full w-full absolute"></div>
      </div>
    </header>
  );
};

export default Header;
