import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageSlider from "./ImageSlider";

const GallerySection = () => {
  return (
    <>
      <h2 className=" z-40 racer title gradient-text">Gallery</h2>
      <div className="flex w-full   overflow-hidden relative bg-black ">
        <ImageSlider />
      </div>
    </>
  );
};

export default GallerySection;
