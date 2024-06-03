import Link from "next/link";
import React from "react";
import ContactForm from "../components/ContactForm";
import MapSection from "../components/MapSection";

const GetQuote = () => {
  return (
    <div className="page-details">
      <h1 className=" text-7xl font-bold mt-20">Get a Free Quote</h1>
      <ContactForm />
    </div>
  );
};

export default GetQuote;
