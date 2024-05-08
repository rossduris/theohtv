"use client";

import React, { FormEvent, useState } from "react";
import { handleSubmit } from "../../../actions/actions";
import { useFormState } from "react-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setLoading(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setLoading(false);
    }, 1000);
  };

  return (
    <form
      action={handleSubmit}
      className="flex flex-col md:w-[600px] my-10 mx-10"
    >
      <label className=" pt-5 pb-1">Name</label>
      <span className=" flex gap-6">
        <input
          placeholder="Name"
          className="text-black  w-full bg-white p-2 rounded-md"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="Name"
          required
        />

        <input
          placeholder="Email *"
          className="text-black  w-full bg-white p-2 rounded-md"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="Email"
          required
        />
      </span>
      <label className=" pt-6 pb-1">Phone Number</label>
      <input
        placeholder="Phone Number"
        className="rounded-md pt-2 text-black  w-full bg-white p-2"
        type="text"
        name="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label className=" pt-6 pb-1">Message</label>
      <textarea
        placeholder="Message"
        className=" rounded-md pt-2 text-black w-full bg-white p-2 h-24"
        name="Message"
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
