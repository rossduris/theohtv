import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex w-full max-h-[500px] xl:max-h-[700px]  overflow-hidden relative bg-black z-0">
      <div className=" absolute w-full h-[10px] bottom-0 "></div>

      <Image
        src="/pic2.png"
        width={1200}
        height={400}
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
