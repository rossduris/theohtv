"use client";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

const ImageSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleSlideChange = () => {
      if (activeSlide === images.length - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide(activeSlide + 1);
      }
    };
    const debounceSlideChange = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleSlideChange, 4200);
    };
    timeout = setTimeout(handleSlideChange, 4200);
    return () => clearTimeout(timeout);
  }, [activeSlide]);

  return (
    <div>
      <div className="h-[300px] md:h-[450px] lg:h-[650px] z-50 transition-all duration-100">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-fade ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <button className="absolute z-0 top-[50%]" onClick={prevSlide}>
        <ArrowLeftCircleIcon className="size-10 mr-6 text-white opacity-60 " />
      </button>
      <button className="absolute z-0 top-[50%] right-0" onClick={nextSlide}>
        <ArrowRightCircleIcon className="size-10 ml-6 text-white opacity-60 " />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 flex gap-4 p-4">
        <Link href="/gallery">
          <button
            className=" z-20  bg-black  text-white p-5 rounded-full opacity-85 text-sm md:text-lg  hover:opacity-100"
            onClick={nextSlide}
          >
            View The Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImageSlider;
