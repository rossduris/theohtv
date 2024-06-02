"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderTextRef = useRef(null);
  const intervalRef = useRef(null);
  const [textHeight, setTextHeight] = useState(300);
  const [sliderText, setSliderText] = useState([
    "WINDOW TINTING",
    "PAINT PROTECTION",
    "VINYL WRAPPING",
  ]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="relative min-h-screen flex items-center border-t border-black border-b w-full h-full">
      <div className=" min-h-screen flex object-contain w-full">
        <video
          style={{
            objectFit: "cover",
            opacity: 0.4,
          }}
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
        >
          <source
            src="https://theohtv.s3.amazonaws.com/carvideo.mp4"
            type="video/mp4"
          />
          {`Your browser does not support the video tag.`}
        </video>
      </div>
      <div className="absolute flex justify-center items-center text-white top-0 w-full h-full z-10 flex-col">
        <h1
          className={`font-bold md:text-8xl max-w-[400px] mt-20 -ml-14 sm:-ml-20 w-[300px] text-6xl relative `}
        >
          {`EXPERT-LEVEL`}
          <br></br>
          <span ref={sliderTextRef} className="slider-text ">
            <Link href="/#window-tinting">{sliderText[sliderIndex]}</Link>
          </span>
        </h1>
        <div className="slider-tabs flex justify-center gap-2 mt-6 mb-14">
          <span
            onClick={() => setSliderIndex(0)}
            className={sliderIndex === 0 ? `active-tab` : ""}
          ></span>
          <span
            onClick={() => setSliderIndex(1)}
            className={sliderIndex === 1 ? `active-tab` : ""}
          ></span>
          <span
            onClick={() => setSliderIndex(2)}
            className={sliderIndex === 2 ? `active-tab` : ""}
          ></span>
        </div>

        <Link href="#contact-us">
          <button className="bg-black text-white font-bold border border-white py-4 px-10 rounded-md  text-2xl hover:bg-[#181818] transition-all duration-100">
            {` Get A Free Quote`}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default VideoSection;
