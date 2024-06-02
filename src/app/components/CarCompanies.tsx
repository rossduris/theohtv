"use client";
import React, { useEffect, useState } from "react";

const CarCompanies = () => {
  const [position, setPosition] = useState(0);

  return (
    <section className="relative overflow-hidden my-20">
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
