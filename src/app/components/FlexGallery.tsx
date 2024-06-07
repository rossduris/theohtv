"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FlexGallery = () => {
  type ImageData = {
    src: string;
    alt: string;
  };

  const images: ImageData[] = [
    {
      src: "https://ik.imagekit.io/2e8fvrzss/Screenshot%202024-04-26%20at%203.40.41%E2%80%AFPM.png",
      alt: "Window Tint on Car",
    },
    {
      src: "https://ik.imagekit.io/2e8fvrzss/Screenshot%202024-04-26%20at%203.40.58%E2%80%AFPM.png",
      alt: "Vinyl Decal SUV with Tint",
    },
    {
      src: "https://ik.imagekit.io/2e8fvrzss/Screenshot%202024-04-26%20at%203.39.36%E2%80%AFPM.png",
      alt: "View of tint shop/garage",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0685.heic?updatedAt=1715434059400",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0677.heic?updatedAt=1715434059921",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0681.heic?updatedAt=1715434058260",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0696.heic?updatedAt=1715434052287",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0693.heic?updatedAt=1715434050643",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0700.heic?updatedAt=1715434039962",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0701.heic?updatedAt=1715434039669",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0607.heic?updatedAt=1715433840816",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0610.heic?updatedAt=1715434003428",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0608.heic?updatedAt=1715433790160",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0712.heic?updatedAt=1715434029808",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0731.heic?updatedAt=1715433994723",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0728.heic?updatedAt=1715433988493",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0729.heic?updatedAt=1715433987114",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0729.heic?updatedAt=1715433987114",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0443.heic?updatedAt=1715433783185",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0453.heic?updatedAt=1715433783777",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/IMG_0452.heic?updatedAt=1715433782492",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/9DE7F0A5-A404-4658-AB45-B809E44A8A68.heic?updatedAt=1715433759648",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/9F674C02-B357-459C-AD52-44B3CAFD008E.heic?updatedAt=1715433759511",
      alt: "car with tint",
    },
    {
      src: "https://ik.imagekit.io/r7xpeo7ygf/49078977-8F9A-4356-BED4-25140B271A53.heic?updatedAt=1715433759317",
      alt: "car with tint",
    },
  ];

  const [displayImages, setDisplayImages] = useState(images.slice(5, 12));

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setDisplayImages((prevDisplayImages) => {
  //       const newImages = [...prevDisplayImages];
  //       const randomIndex = Math.floor(Math.random() * newImages.length);
  //       const newRandomIndex = Math.floor(Math.random() * images.length);

  //       // Ensure the new random index is within the valid range and not the same as the current index
  //       if (
  //         newRandomIndex !== randomIndex &&
  //         newRandomIndex > 4 &&
  //         newRandomIndex < 12
  //       ) {
  //         newImages[randomIndex] = images[newRandomIndex];
  //       }

  //       return newImages;
  //     });
  //   }, 4000); // Change image every 5 seconds

  //   return () => clearInterval(intervalId);
  // }, [images]);

  return (
    <div id="gallery" className="flex-gallery relative">
      <Link
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-10 rounded-full opacity-95 hover:opacity-90"
        href="/gallery"
      >
        View The Gallery
      </Link>
      {images
        .filter((img, i) => i > 4 && i < 13)
        .map((image, i) => (
          <div key={i}>
            <Image src={image.src} alt={image.alt} width={300} height={200} />
          </div>
        ))}
    </div>
  );
};

export default FlexGallery;
