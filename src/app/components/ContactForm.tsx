"use client";
import React, { FormEvent, useState } from "react";
import { sendEmail, sendToEmailAndSheets } from "../../../actions/actions";

interface Errors {
  email: string;
  phone: string;
  message: string;
  name: string;
}

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({
    email: "",
    phone: "",
    message: "",
    name: "",
  });

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setLoading(false);
    setErrors({ email: "", phone: "", message: "", name: "" });
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[+]?[\d\s-]+$/;
    return re.test(phone);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    let validationErrors: Errors = {
      email: "",
      phone: "",
      message: "",
      name: "",
    };
    if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }
    if (!validatePhone(phone)) {
      validationErrors.phone = "Invalid phone number";
    }
    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }
    if (message.trim() === "") {
      validationErrors.message = "Message is required";
    }

    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      await sendToEmailAndSheets(name, email, phone, message);
      setLoading(false);
      alert("Message sent successfully");
      clearForm();
    } catch (error) {
      alert("Error sending message: " + error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:w-[600px] my-10 mx-10"
    >
      <label className="pt-5 pb-1">Name</label>
      <input
        placeholder="Name *"
        className="text-black w-full bg-white p-2 rounded-md"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="Name"
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <label className="pt-6 pb-1">Email</label>
      <input
        placeholder="Email *"
        className="text-black w-full bg-white p-2 rounded-md"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="Email"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <label className="pt-6 pb-1">Phone Number</label>
      <input
        placeholder="Phone Number *"
        className="rounded-md pt-2 text-black w-full bg-white p-2"
        type="text"
        name="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}

      <label className="pt-6 pb-1">Message</label>
      <textarea
        placeholder="Message *"
        className="rounded-md pt-2 text-black w-full bg-white p-2 h-24"
        name="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {errors.message && <p className="text-red-500">{errors.message}</p>}

      <input
        disabled={loading}
        className="rounded-md pt-2 bg-white border text-black w-28 p-2 my-4 cursor-pointer hover:bg-slate-300"
        type="submit"
        value={loading ? "Loading..." : "Submit"}
      />
    </form>
  );
};

export default ContactForm;
