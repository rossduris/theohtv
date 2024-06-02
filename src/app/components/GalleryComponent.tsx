"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type ImagekitImage = {
  type: string;
  thumbnail: string;
  url: string;
  versionInfo: {
    id: string;
    name: string;
  };
};

const GalleryComponent = ({ images }: { images: ImagekitImage[] }) => {
  const [modalImage, setModalImage] = useState<ImagekitImage | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageClick = (image: ImagekitImage, index: number) => {
    setCurrentIndex(index);
    setModalImage(image);
    setModalOpen(true);
    setLoading(true); // Set loading state to true when changing images
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  const handleNextImage = () => {
    setLoading(true); // Set loading state to true when changing images
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setModalImage(images[nextIndex]);
  };

  const handlePreviousImage = () => {
    setLoading(true); // Set loading state to true when changing images
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(previousIndex);
    setModalImage(images[previousIndex]);
  };

  const handleImageLoaded = () => {
    setLoading(false); // Set loading state to false when image has finished loading
  };

  return (
    <div className="flex flex-wrap w-full justify-center select-none items-center ">
      {images.map((image, index) => {
        return (
          <div
            key={image.versionInfo.id}
            className="galleryImageWrapper flex-grow max-h-64"
            onClick={() => handleImageClick(image, index)}
          >
            <Image
              src={image.url}
              alt={image.type}
              width={480}
              height={300}
              className=" w-full flex"
            />
          </div>
        );
      })}

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50 ">
          <div className="bg-black p-2 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-black bg-white text-xl font-bold rounded-full p-2 opacity-90"
              aria-label="Close image modal"
            >
              <XMarkIcon className="h-6 w-6  text-black" />
            </button>
            {modalImage && (
              <div>
                <button
                  onClick={handlePreviousImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
                >
                  <ChevronRightIcon className="h-6 w-6 text-white" />
                </button>
                {loading && (
                  <p className="absolute flex justify-center items-center w-full h-full text-white text-2xl z-50">
                    Loading...
                  </p>
                )}
                <Link href={modalImage.url} passHref target="_blank">
                  <Image
                    key={modalImage.url}
                    src={modalImage.url}
                    alt={modalImage.type}
                    width={800}
                    height={800}
                    objectFit="fill"
                    onLoad={handleImageLoaded}
                    className="image-fade"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
