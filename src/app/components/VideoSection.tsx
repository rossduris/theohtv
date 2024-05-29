import Link from "next/link";
import React from "react";

const VideoSection = () => {
  return (
    <section className=" relative overflow-hidden max-h-[800px] flex items-center border-t border-black border-b w-full">
      <div className=" absolute flex justify-center items-center text-white top-0 w-full h-full z-10 flex-col">
        <h1 className=" font-bold text-4xl">The Ohio Tint & Vinyl Co.</h1>

        <div className="flex gap-10 mt-20">
          <button className=" bg-black py-4 px-10 rounded-full opacity-80">
            (614) 496-7840
          </button>
          <Link href="#services">
            <button className=" bg-black py-4 px-10 rounded-full opacity-80">
              Send a Message
            </button>
          </Link>
        </div>
      </div>
      <div
        style={{
          opacity: 0.3,
          width: "100%",
        }}
      >
        <video width="100%" height="315" autoPlay muted loop>
          <source src="/local/carvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
