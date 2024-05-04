import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex w-full h-[550px] overflow-hidden relative bg-black z-0">
      <div className=" absolute bg-black h-[100px] bg-opacity-75  bottom-0 p-10 w-full">
        <h1 className=" text-4xl font-bold">
          Welcome to The Ohio Tint & Vinyl Company
        </h1>
      </div>
      <div className=" absolute w-full h-[10px] bottom-0 "></div>

      <Image
        src="/pic2.png"
        width={1200}
        height={200}
        alt="Vinyl Decal SUV with Tint"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
        className="hero-banner"
      />
    </div>
  );
};

export default Hero;
