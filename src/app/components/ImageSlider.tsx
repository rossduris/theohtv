"use client";
import { ArrowLeftCircleIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { ArrowLeftIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
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
      timeout = setTimeout(handleSlideChange, 3600);
    };
    timeout = setTimeout(handleSlideChange, 3600);
    return () => clearTimeout(timeout);
  }, [activeSlide]);

  return (
    <div>
      <div className="h-[300px] md:h-[450px] lg:h-[650px] z-50 transition-all duration-100">
        {images.map((image, index) => (
          <div
            key={index}
            className={`ease-in-out ${
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
      <button className="absolute z-20 top-[50%]" onClick={prevSlide}>
        <ArrowLeftCircleIcon className="size-10 mr-6 text-black" />
      </button>
      <button className="absolute z-20 top-[50%] right-0" onClick={nextSlide}>
        <ArrowRightCircleIcon className="size-10 mr-6 text-black" />
      </button>
    </div>
  );
};

export default ImageSlider;
