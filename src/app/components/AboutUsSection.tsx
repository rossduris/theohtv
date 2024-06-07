import React from "react";
import CarCompanies from "./CarCompanies";
import Link from "next/link";
import Reviews from "./Reviews";

const AboutUsSection = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col min-h-screen justify-around   relative w-full overflow-hidden bg-black"
    >
      <div className=" grid md:grid-cols-2 grid-cols-1 sm:p-20 p-8 z-10">
        <div className="  bg-black  bg-opacity-75  bottom-0 pb-10 w-full">
          <h1 className="sm:text-7xl text-5xl font-bold  sm:mt-20 mt-20 sm:p-10 p-4 text-center sm:text-left">
            About us
          </h1>
          <p className=" font-light text-lg p-10">
            {`Welcome to The Ohio Tint & Vinyl Company, your go-to destination for premium vinyl tinting and coating services. Located in the heart of Lancaster, Ohio, we are committed to delivering unmatched quality and expert craftsmanship in every project we undertake. Our team of professionals merges cutting-edge technology with personalized service to cater to your unique requirements, guaranteeing impeccable results with every finish.`}
          </p>
        </div>
        <div></div>
        <div></div>
        <div className=" bg-slate-700 bg-opacity-40 rounded-[40px] p-10 flex flex-col justify-center items-center w-full">
          <span className="text-6xl font-bold text-center">
            {`10+ Years Experience`}
          </span>
        </div>
        <Reviews />
        <div className="car-bg"></div>
      </div>
    </section>
  );
};

export default AboutUsSection;
