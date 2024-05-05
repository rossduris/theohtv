import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="page-details">
      <h1>About Us</h1>
      <div className=" flex flex-col p-20 gap-10 mx-28">
        <span>
          {`At The Ohio Tint & Vinyl Company, we're passionate about enhancing
          your driving experience through high-quality car and window tinting
          solutions. With years of experience in the industry, we have
          established ourselves as a trusted name in vehicle customization and
          protection.`}
        </span>
        <div>
          <h2>Our Mission</h2>
          <p>
            {`Our mission is simple: to provide you with top-notch window tinting
            services that not only enhance the aesthetics of your vehicle but
            also offer practical benefits like UV protection, privacy, and heat
            reduction. We understand that your vehicle is more than just a mode
            of transportation; it's an extension of your personality and style.
            That's why we're dedicated to delivering tinting solutions that
            match your unique preferences.`}
          </p>
        </div>
        <div>
          <h2>Why Choose Us?</h2>
          <ul className=" flex flex-col gap-6">
            <li>
              <span className=" font-bold">Expertise</span>:{" "}
              {`Our team of skilled
              technicians is well-versed in the art of window tinting. We stay
              updated with the latest industry trends and technologies to ensure
              that your tinting job is carried out to perfection.`}
            </li>
            <li>
              <span className=" font-bold">Quality Materials</span>:{" "}
              {`We only use
              the highest quality window films and tinting materials. Our
              products are known for their durability, UV resistance, and
              superior performance.`}
            </li>
            <li>
              <span className=" font-bold">Customization</span>:{" "}
              {`We offer a wide
              range of tint shades, patterns, and styles to suit your individual
              needs. Whether you're looking for a subtle upgrade or a bold
              statement, we've got you covered.Customer-Centric Approach:
              Customer satisfaction is at the heart of everything we do. We take
              the time to understand your requirements and provide personalized
              solutions that exceed your expectations.`}
            </li>
            <li>
              <span className=" font-bold">Attention to Detail</span>:{" "}
              {`We
              believe that precision matters. Our meticulous approach to
              installation ensures that your window tint is free from
              imperfections and bubbles, giving your vehicle a sleek and
              flawless appearance.`}
            </li>
          </ul>
        </div>
        <div>
          <h2>Get in Touch</h2>
          <p>
            {`Ready to transform your vehicle or property with our expert window
            tinting services? Reach out to us today to schedule an appointment
            or inquire about our offerings. We look forward to serving you and
            making your driving and living spaces more comfortable, stylish, and
            protected.`}
          </p>
        </div>

        <Link href="/contact-us">
          <button className="border p-4 rounded-full justify-end">
            Book An Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
