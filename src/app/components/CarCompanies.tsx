"use client";
import React, { useEffect, useRef } from "react";

const CarCompanies = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative mb-10 bg-transparent overflow-hidden z-[10000] opacity-65">
      <div ref={containerRef} className="car-companies">
        <div className="merc"></div>
        <div className="audi"></div>
        <div className="lambo"></div>
        <div className="bently"></div>
        <div className="ford"></div>
        <div className="tesla"></div>
        <div className="lexus"></div>
        <div className="subaru"></div>
        <div className="dodge"></div>
        {/* double */}
        <div className="merc"></div>
        <div className="audi"></div>
        <div className="lambo"></div>
        <div className="bently"></div>
        <div className="ford"></div>
        <div className="tesla"></div>
        <div className="lexus"></div>
        <div className="subaru"></div>
        <div className="dodge"></div>
      </div>
    </section>
  );
};

export default CarCompanies;
