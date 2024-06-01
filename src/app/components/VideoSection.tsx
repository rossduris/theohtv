import Link from "next/link";
import React from "react";

const VideoSection = () => {
  return (
    <section className="relative min-h-screen flex items-center border-t border-black border-b w-full h-full">
      <div className="absolute flex justify-center items-center text-white top-0 w-full h-full z-10 flex-col">
        <h1 className="font-bold md:text-8xl max-w-[400px] my-20 w-[300px] text-6xl -ml-20 sm:ml-0 sm:w-[500px]">
          EXPERT-LEVEL WINDOW TINTING
        </h1>

        <Link href="#services">
          <button className="bg-black text-white font-bold border border-white py-4 px-10 rounded-md  text-2xl hover:bg-[#181818] transition-all duration-100">
            Get A Free Quote
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
