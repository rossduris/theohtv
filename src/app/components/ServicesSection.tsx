import { Roboto } from "next/font/google";
import Link from "next/link";
import React from "react";

const ServicesSection = () => {
  return (
    <section className=" bg-gradient-to-bl from-black to-[#121212] flex flex-col justify-center items-center">
      <h3 className="racer title py-28" id="services">
        Our Services
      </h3>

      <div className=" grid grid-cols-1 sm:grid-cols-2">
        <div className=" text-white p-10  flex flex-col justify-center items-center gap-2  w-full">
          <h2 className=" font-bold text-xl pb-4">Window Tinting</h2>
          <p className=" text-center px-16 py-4 h-[200px]">
            {` Enhance your vehicle's aesthetics and privacy with our premium
            window tinting service that blocks UV rays and reduces glare.`}
          </p>
        </div>
        <div className=" bg-slate-50 text-black flex justify-center items-center opacity-55">
          Right Photo
        </div>

        <div className=" bg-slate-50 text-black flex justify-center items-center opacity-55">
          Left Photo
        </div>

        <div className=" text-white p-10  flex flex-col justify-center items-center gap-2  w-full">
          <h2 className=" font-bold text-xl pb-4">Paint Protection</h2>

          <p className=" text-center px-16 py-4 h-[200px]">
            {`Safeguard your car's paint from scratches, dirt, and weathering with
            our durable paint protection solutions.`}
          </p>
        </div>

        <div className=" text-white p-10  flex flex-col justify-center items-center gap-2 w-full">
          <h2 className=" font-bold text-xl pb-4">Vinyl Wrap</h2>

          <p className=" text-center px-16 py-4 h-[200px]">
            {` Customize your vehicle's appearance with our high-quality vinyl
            wraps, available in a variety of colors and finishes.`}
          </p>
        </div>

        <div className=" bg-slate-50 text-black flex justify-center items-center opacity-55">
          Right Photo
        </div>

        <div className=" bg-slate-50 text-black flex justify-center items-center opacity-55">
          Left Photo
        </div>

        <div className=" text-white p-10  flex flex-col justify-center items-center gap-2 w-full">
          <h2 className=" font-bold text-xl pb-4">Fast Delivery</h2>

          <p className=" text-center px-16 py-4 h-[200px]">
            {`Experience rapid service delivery, ensuring your vehicle returns to
            you swiftly and ready to impress.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
