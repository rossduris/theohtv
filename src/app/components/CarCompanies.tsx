"use client";
import React, { useEffect, useState } from "react";

const CarCompanies = () => {
  const [position, setPosition] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPosition((prevPosition) => prevPosition + 10);
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="relative overflow-hidden">
      <h2 className="text-center m-4">Brands </h2>
      <div
        className="car-companies"
        style={{
          position: "relative",
          left: `${position}px`,
        }}
      >
        <div className="tesla"></div>
        <div className="lexus"></div>
        <div className="subaru"></div>
        <div className="dodge"></div>
      </div>
    </section>
  );
};

export default CarCompanies;
