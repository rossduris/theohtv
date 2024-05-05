// 'use client';
import React from "react";

import ContactForm from "./ContactForm";

const MessageSection = () => {
  return (
    <section className=" w-full bg-black flex justify-center border-t flex-col items-center py-20">
      <h3 className="text-4xl font-bold text-white">Book Appointment</h3>
      <ContactForm />
    </section>
  );
};

export default MessageSection;
