import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageSlider from "./ImageSlider";

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="flex w-full   overflow-hidden relative bg-black "
    >
      <h2 className=" z-10 text-7xl font-bold gradient-text text-center py-20 w-full">
        Client Gallery
      </h2>
      <ImageSlider />
    </section>
  );
};

export default GallerySection;
