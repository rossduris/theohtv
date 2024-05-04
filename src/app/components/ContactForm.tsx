"use client";

import React, { FormEvent, useState } from "react";
import { handleSubmit } from "../../../actions";
import { useFormState } from "react-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setLoading(true);
    setTimeout(() => {
      setName("");
      setSubject("");
      setMessage("");
      setLoading(false);
    }, 1000);
  };
  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("/api/contactForm");
  //   } catch {}
  // };

  return (
    <form action={handleSubmit} className="flex flex-col w-[600px] my-10 ">
      <label className=" pt-5 pb-1">Name</label>
      <input
        placeholder="Name"
        className="text-black  w-full bg-white p-2 rounded-md"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        required
      />
      <label className=" pt-6 pb-1">Subject</label>
      <input
        placeholder="Subject"
        className="rounded-md pt-2 text-black  w-full bg-white p-2"
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <label className=" pt-6 pb-1">Message</label>
      <textarea
        placeholder="Message"
        className=" rounded-md pt-2 text-black w-full bg-white p-2 h-24"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <input
        className=" rounded-md pt-2 bg-white border text-black w-28 p-2 my-4 cursor-pointer hover:bg-slate-300"
        type="submit"
        value={loading ? "Loading..." : "Submit"}
        onClick={clearForm}
      />
    </form>
  );
};

export default ContactForm;
