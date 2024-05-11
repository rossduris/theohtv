import React from "react";
import ImageKit from "imagekit";
import GalleryComponent from "./GalleryComponent";
import Image from "next/image";

type ImagekitImage = {
  type: string;
  thumbnail: string;
  url: string;
  versionInfo: {
    id: string;
    name: string;
  };
};

const ImageKitGallery = async () => {
  var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY!,
    urlEndpoint: "https://ik.imagekit.io/r7xpeo7ygf/",
  });

  const images = (await imagekit.listFiles({
    skip: 0,
    limit: 100,
  })) as ImagekitImage[];

  return (
    <>
      <GalleryComponent images={images} />
    </>
  );
};

export default ImageKitGallery;
