"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [reviews, setReviews] = useState([
    {
      name: "David Krupovlyanskaya",
      review: `One of the best shops in Ohio for sure, had him work on many
    of my cars( nsx, gtr ,evo). Checking them out is a must!`,
      link: "https://maps.app.goo.gl/sWgsTmph4Q3ZpkxS7",
    },
    {
      name: "Tracie Williams",
      review:
        "Great company, great work and most definitely great people! Call them for all your tint needs, you will be pleased!",
      link: "https://maps.app.goo.gl/7WxiMrUzMzEUUK3Y7",
    },
    {
      name: "Dustin Ebright",
      review:
        "By far the best around! Very polite , communicative , and does the best work!",
      link: "https://maps.app.goo.gl/bdaHMupc84gxRe1Q7",
    },
    {
      name: "Tyler Holland",
      review: `Wrapped my z06 in a forged carbon vinyl very professional looking also had him tint my vehicle looks awesome!!! I highly recommend this company and will be using them for future jobs.`,
      link: "https://maps.app.goo.gl/ZdubhREEmMoHoRXc6",
    },
    {
      name: "Nick McKean",
      review: `Chris has been and always will be the man. He has tinted all my cars, all of my family and many friends. We drive from West Columbus for him.`,
      link: "https://maps.app.goo.gl/6oG8psyyDfh7oGSE9",
    },
    {
      name: "Tracie Williams",
      review: `Great company, great work and most definitely great people! Call them for all your tint needs, you will be pleased!`,
      link: "https://maps.app.goo.gl/7WxiMrUzMzEUUK3Y7",
    },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [reviews.length]);

  return (
    <div className="bg-black bg-opacity-40 rounded-[40px] p-10 flex flex-col justify-center items-start w-full mb-20">
      <span className="text-6xl font-bold mb-6 mt-6">{`Ranked #1`}</span>
      <ul className="reviews">
        <li key={sliderIndex} className="relative  h-[120px]">
          <Link href={reviews[sliderIndex].link} passHref target="_blank">
            <div className="font-serif text-5xl absolute -left-6 opacity-40 top-9">
              {`"`}
            </div>
            <span className="py-2 pt-10">{reviews[sliderIndex].name}</span>
            <blockquote className="py-4 rounded-lg italic">
              {reviews[sliderIndex].review}
            </blockquote>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Reviews;
