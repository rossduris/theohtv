import Link from "next/link";
import React from "react";
import ContactForm from "../components/ContactForm";
import MapSection from "../components/MapSection";

const Contact = () => {
  return (
    <div className="page-details">
      <h1>Contact Us</h1>
      <span className=" flex justify-center pt-20 text-3xl flex-col items-center gap-4 pb-20">
        <div className=" text-4xl"> Give Us a Call </div>
        <Link href="tel:(614) 496-7840">
          <span className=" hover:text-gray-200">(614) 496-7840</span>
        </Link>
      </span>
      <MapSection />
      <section className=" w-full bg-black flex justify-center bg-transparent flex-col items-center py-20">
        <h3 className="text-4xl font-bold">Book Appointment</h3>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
