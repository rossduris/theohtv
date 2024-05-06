import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <div className="flex w-full max-h-[500px] xl:max-h-[700px]  overflow-hidden relative bg-black ">
      <div className=" absolute w-full h-[10px]  "></div>

      <ImageSlider />
    </div>
  );
};

export default Hero;
