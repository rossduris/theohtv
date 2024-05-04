// 'use client';
import { google } from "googleapis";
import React from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { revalidatePath } from "next/cache";
import ContactForm from "./ContactForm";

const MessageSection = () => {
  return (
    <section className=" w-full bg-black flex justify-center border-t flex-col items-center py-20">
      <h3 className="text-4xl font-bold">Book Appointment</h3>
      <ContactForm />
    </section>
  );
};

export default MessageSection;
