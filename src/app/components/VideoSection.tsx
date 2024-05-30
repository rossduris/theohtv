import Link from "next/link";
import React from "react";

const VideoSection = () => {
  return (
    <section className="relative min-h-screen flex items-center border-t border-black border-b w-full h-full">
      <div className="absolute flex justify-center items-center text-white top-0 w-full h-full z-10 flex-col">
        <h1 className="font-bold text-8xl max-w-[400px] my-20">
          NEXT-LEVEL PAINT PROTECTION
        </h1>

        <Link href="#services">
          <button className="bg-white text-black border border-black py-4 px-10 rounded-md  text-2xl hover:bg-gray-200 transition-all duration-100">
            Get A Quote
          </button>
        </Link>
      </div>
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
          <source src="/local/carvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
