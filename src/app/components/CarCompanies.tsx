"use client";
import React, { useEffect, useRef } from "react";

const CarCompanies = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative my-20 bg-black overflow-hidden">
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
