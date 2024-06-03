"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoSection = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderTextRef = useRef(null);
  const intervalRef = useRef(null);
  const [video, setVideo] = useState("");
  const [playing, setPlaying] = useState(false);

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
    <>
      <div className=" min-h-screen flex object-contain w-full select-none relative">
        <div className=" flex w-full h-full object-cover">
          <div className="min-h-screen flex items-center justify-center w-full select-none relative bg-black overflow-hidden">
            <ReactPlayer
              url="https://theohtv.s3.amazonaws.com/carvideo.mp4"
              playing={true}
              loop
              muted
              width="200%"
              height="100%"
              playsinline
              style={{
                position: "absolute",
                top: 0,
                left: "-50%",
                translate: "0 0",
                opacity: 0.5,
              }}
              controls={false}
            />
          </div>
        </div>
        <section className="absolute top-0 min-h-screen flex border-t border-black border-b w-full h-full justify-center items-center">
          <div>
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
      </div>
    </>
  );
};

export default VideoSection;
