import React from "react";

export const FeatureSection = () => {
  return (
    <div className=" bg-gradient-to-bl from-black to-[#121212]">
      <div className=" bg-transparent text-black w-full flex justify-center py-20  gap-28">
        <div className=" text-white p-10  max-w-[400px] flex flex-col justify-between gap-2 feature-sec   items-center">
          <h2>Window Tinting</h2>
          <div className="feature1"></div>

          <button className="border p-4 rounded-full justify-end">
            Learn More
          </button>
        </div>
        <div className=" text-white p-10  max-w-[400px] flex flex-col justify-between gap-2 ">
          <h2>Paint Protection</h2>

          <div className="feature2"></div>

          <button className="border p-4 rounded-full justify-end">
            Learn More
          </button>
        </div>
        <div className=" text-white p-10  max-w-[400px] flex flex-col justify-between gap-2">
          <h2>Fast Delivery</h2>

          <div className="feature3"></div>

          <button className="border p-4 rounded-full justify-end">
            Learn More
          </button>
        </div>
        <div className=" text-white p-10  max-w-[400px] flex flex-col justify-between gap-2">
          <h2>Vinyl Wrap</h2>

          <div className="feature4"></div>

          <button className="border p-4 rounded-full justify-end">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
