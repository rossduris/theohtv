import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageSlider from "./ImageSlider";
import GalleryComponent from "./GalleryComponent";
import ImageKitGallery from "./ImageKitGallery";

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="flex w-full   overflow-hidden relative bg-black "
    >
      {/* <h2 className=" z-10 text-7xl font-bold gradient-text text-center py-20 w-full">
        Client Gallery
      </h2> */}
      {/* <div className="flex flex-wrap w-full">
        <ImageSlider />
        <div className=" w-[300px]">left</div>
        <div className=" w-[300px]">right</div>
        <div className=" flex-grow flex-grow-1 bg-slate-500 w-[200[px]">
          right
        </div>
        <div className=" w-[300px]">left</div>
        <div className=" w-[300px]">right</div>
        <div className=" flex-grow flex-grow-1 bg-slate-500  w-[200[px]">
          right
        </div>
      </div> */}
      <ImageKitGallery />
    </section>
  );
};

export default GallerySection;
