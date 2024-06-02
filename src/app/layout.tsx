import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Ohio Tint & Vinyl Company",
  description:
    "Discover top-quality window tinting and vinyl solutions at The Ohio Tint & Vinyl Company. Serving Ohio with excellence, we offer automotive, residential, and commercial tint services alongside custom vinyl graphics and wraps. Enhance your style and comfort with our professional, durable installations. Get a free quote today!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
