import Link from "next/link";
import React from "react";

export const FeatureSection = () => {
  return (
    <div className=" bg-gradient-to-bl from-black to-[#121212] flex flex-col justify-center items-center">
      <h3 className="text-white flex w-full justify-center items-center pt-20  text-4xl font-bold">
        Services
      </h3>

      <div className=" bg-transparent text-black w-full  justify-center py-10 items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div className=" text-white p-10  flex flex-col justify-center items-center gap-2  w-full">
          <h2 className=" font-bold text-xl pb-4">Window Tinting</h2>
          <div className="feature1"></div>
          <p className=" text-center px-16 py-4 h-[200px]">
            {` Enhance your vehicle's aesthetics and privacy with our premium
            window tinting service that blocks UV rays and reduces glare.`}
          </p>
        </div>
        <div className=" text-white p-10  flex flex-col justify-center items-center gap-2  w-full">
          <h2 className=" font-bold text-xl pb-4">Paint Protection</h2>

          <div className="feature2"></div>
          <p className=" text-center px-16 py-4 h-[200px]">
            {`Safeguard your car's paint from scratches, dirt, and weathering with
            our durable paint protection solutions.`}
          </p>
        </div>

        <div className=" text-white p-10  flex flex-col justify-center items-center gap-2 w-full">
          <h2 className=" font-bold text-xl pb-4">Vinyl Wrap</h2>

          <div className="feature4"></div>
          <p className=" text-center px-16 py-4 h-[200px]">
            {` Customize your vehicle's appearance with our high-quality vinyl
            wraps, available in a variety of colors and finishes.`}
          </p>
        </div>
        <div className=" text-white p-10  flex flex-col justify-center items-center gap-2 w-full">
          <h2 className=" font-bold text-xl pb-4">Fast Delivery</h2>

          <div className="feature3"></div>
          <p className=" text-center px-16 py-4 h-[200px]">
            {`Experience rapid service delivery, ensuring your vehicle returns to
            you swiftly and ready to impress.`}
          </p>
        </div>
      </div>
      <Link href="/services">
        <button className="border p-4 rounded-full justify-center w-[200px] mb-20 hover:bg-gray-950 text-white">
          Learn More
        </button>
      </Link>
    </div>
  );
};
