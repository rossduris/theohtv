import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageSlider from "./ImageSlider";
import GalleryComponent from "./GalleryComponent";
import ImageKitGallery from "./ImageKitGallery";

const GallerySection = () => {
  return (
    <section className="flex w-full   overflow-hidden relative bg-black ">
      <ImageKitGallery />
    </section>
  );
};

export default GallerySection;
