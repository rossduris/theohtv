import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className=" bg-gradient-to-bl from-black to-[#121212] flex flex-col justify-center items-center"
    >
      {/* <h3 className="text-7xl font-bold py-28">Our Services</h3> */}

      <div className=" relative w-full">
        <div
          id="window-tinting"
          className="grid grid-cols-1 sm:grid-cols-2 relative"
        >
          <div className=" text-white p-10  flex flex-col justify-center sm:items-start z-10 items-center md:pl-36 gap-10  w-full    absolute top-[50%] -translate-y-1/2  sm:relative">
            <h2 className="font-bold text-6xl pb-4  ">Window Tinting</h2>
            <span className="text-xl text-center bg-slate-700 bg-opacity-40 rounded-[40px] p-10 flex flex-col justify-center items-center w-full max-w-xl">
              {` Enhance your vehicle's aesthetics and privacy with our premium
            window tinting service that blocks UV rays and reduces glare.`}
            </span>
            <Link href="#contact-us">
              <button className="bg-black text-white font-bold border border-white py-4 px-10 rounded-md  text-2xl hover:bg-[#181818] transition-all duration-100">
                {` Get A Free Quote`}
              </button>
            </Link>
          </div>
          <div className=" bg-transparent text-black flex justify-center items-center md:h-[100vh] h-[100vh] ">
            <Image
              alt="window tint"
              src="https://theohtv.s3.amazonaws.com/tint.png"
              width={600}
              height={600}
              objectFit="cover"
              className="flex w-full h-full object-cover opacity-70 z-0"
            />
          </div>
        </div>

        <div
          id="paint-protection"
          className="grid grid-cols-1 sm:grid-cols-2 relative"
        >
          <div className=" bg-black text-black flex justify-center items-center md:h-[100vh] h-[100vh]  w-full">
            <Image
              alt="paint protectied car"
              src="https://theohtv.s3.amazonaws.com/paint-protection.png"
              width={600}
              height={600}
              objectFit="cover"
              className="flex w-full object-cover h-full opacity-70 z-0"
            />
          </div>

          <div className=" text-white p-10  flex flex-col justify-center sm:items-start items-center  md:pl-20 gap-10 z-10  w-full h-full absolute top-[50%] -translate-y-1/2 sm:relative">
            <h2 className=" font-bold text-6xl pb-4  ">Paint Protection</h2>

            <span className="text-xl text-center bg-slate-700 bg-opacity-40 rounded-[40px] p-10 flex flex-col justify-center items-center w-full max-w-xl">
              {`Safeguard your car's paint from scratches, dirt, and weathering with
            our durable paint protection solutions.`}
            </span>
            <Link href="#contact-us">
              <button className="bg-black text-white font-bold border border-white py-4 px-10 rounded-md  text-2xl hover:bg-[#181818] transition-all duration-100">
                {` Get A Free Quote`}
              </button>
            </Link>
          </div>
        </div>

        <div
          id="vinyl-wrap"
          className="grid grid-cols-1 sm:grid-cols-2 relative"
        >
          <div className=" text-white p-10  flex flex-col justify-center sm:items-end items-center md:pr-20 gap-10 z-10  w-full h-full absolute top-[50%] -translate-y-1/2 sm:relative">
            <h2 className=" font-bold text-6xl pb-4  ">Vinyl Wraps</h2>

            <span className="text-xl text-center bg-slate-700 bg-opacity-40 rounded-[40px] p-10 flex flex-col justify-center items-center w-full max-w-xl">
              {` Customize your vehicle's appearance with our high-quality vinyl
            wraps, available in a variety of colors and finishes.`}
            </span>
            <Link href="#contact-us">
              <button className="bg-black text-white font-bold border border-white py-4 px-10 rounded-md  text-2xl hover:bg-[#181818] transition-all duration-100">
                {` Get A Free Quote`}
              </button>
            </Link>
          </div>

          <div className=" bg-black text-black flex justify-center items-center md:h-[100vh] h-[100vh] w-full object-cover ">
            <Image
              alt="vinyl wrap"
              src="https://theohtv.s3.amazonaws.com/wrap.png"
              width={600}
              height={600}
              objectFit="cover"
              className="flex w-full object-cover h-full opacity-70 z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
