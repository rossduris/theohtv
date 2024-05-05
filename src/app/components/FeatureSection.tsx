import React from "react";

export const FeatureSection = () => {
  return (
    <div className=" bg-gradient-to-bl from-black to-[#121212] flex flex-col justify-center items-center">
      <h3 className="text-white flex w-full justify-center items-center pt-20  text-4xl font-bold">
        Services
      </h3>

      <div className=" bg-transparent text-black w-full flex justify-center py-10 items-center flex-wrap">
        <div className=" text-white p-10  max-w-[400px] flex flex-col justify-center items-center gap-2 ">
          <h2 className=" font-bold text-xl pb-4">Window Tinting</h2>
          <div className="feature1"></div>
          <p className=" text-center pt-4">
            {` Enhance your vehicle's aesthetics and privacy with our premium
            window tinting service that blocks UV rays and reduces glare.`}
          </p>
        </div>
        <div className=" text-white p-10  max-w-[400px] flex flex-col justify-center items-center gap-2 ">
          <h2 className=" font-bold text-xl pb-4">Paint Protection</h2>

          <div className="feature2"></div>
          <p className=" text-center pt-4">
            {`Safeguard your car's paint from scratches, dirt, and weathering with
            our durable paint protection solutions.`}
          </p>
        </div>

        <div className=" text-white p-10  max-w-[400px] flex flex-col justify-center items-center gap-2">
          <h2 className=" font-bold text-xl pb-4">Vinyl Wrap</h2>

          <div className="feature4"></div>
          <p className=" text-center pt-4">
            {` Customize your vehicle's appearance with our high-quality vinyl
            wraps, available in a variety of colors and finishes.`}
          </p>
        </div>
        <div className=" text-white p-10  max-w-[400px] flex flex-col justify-center items-center gap-2">
          <h2 className=" font-bold text-xl pb-4">Fast Delivery</h2>

          <div className="feature3"></div>
          <p className=" text-center pt-4">
            {`Experience rapid service delivery, ensuring your vehicle returns to
            you swiftly and ready to impress.`}
          </p>
        </div>
      </div>
      <button className="border p-4 rounded-full justify-center w-[200px] mb-20">
        Learn More
      </button>
    </div>
  );
};
