"use server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import nodemailer from "nodemailer";

const sanitize = (str: string) => str.replace(/[<>]/g, "").trim();

// ---- MOVE THIS UP ----
export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const emailBody = `
    <h1>New Inquiry from ${name}</h1>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"The Ohio Tint & Vinyl Company" <${process.env.GMAIL_USER}>`,
      to: process.env.SEND_MAIL_TO_OWNER,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: emailBody,
    });

    console.log("Email sent");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// ---- CALL IT HERE ----
export const sendToEmailAndSheets = async (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  name = sanitize(name);
  email = sanitize(email);
  phone = sanitize(phone);
  message = sanitize(message);

  try {
    await sendEmail(name, email, phone, message);

    if (!process.env.CHRIS_GOOGLE_PRIVATE_KEY) {
      throw new Error("Missing Google private key");
    }

    const serviceAccountAuth = new JWT({
      email: process.env.CHRIS_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.CHRIS_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      process.env.CHRIS_GOOGLE_SHEETS_ID!,
      serviceAccountAuth
    );

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    await sheet.addRows([
      {
        Name: name,
        Email: email,
        Phone: phone,
        Message: message,
        Date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      },
    ]);
  } catch (err) {
    console.error("Google Sheets or email error:", err);
  }
};
