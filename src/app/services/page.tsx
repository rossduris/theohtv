import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="page-details">
      <h1>Our Services</h1>
      <div className=" flex flex-col p-20 gap-10">
        <span>
          {` At The Ohio Tint & Vinyl Company, we specialize in a variety of
          high-quality vehicle enhancement and protection services. Our
          commitment to excellence and attention to detail ensures your vehicle
          not only looks its best but also receives the utmost care and
          protection.`}
        </span>
        <div>
          <h2>Window Tinting </h2>
          <p>
            {`Experience the ultimate in style and functionality with our
            professional window tinting services. Not only does window tinting
            enhance your vehicle's aesthetics, but it also provides essential
            benefits such as UV protection, glare reduction, and improved
            privacy and security. Our skilled technicians ensure a flawless
            application, resulting in a sleek, uniform appearance that
            complements your vehicle.`}
          </p>
        </div>
        <div>
          <h2>Paint Protection </h2>
          <p>
            {` Our paint protection services are designed to preserve the pristine
            condition of your vehicle's exterior. Using advanced technology and
            premium materials, we apply a durable, invisible layer that guards
            against scratches, chips, and environmental damages. This protective
            coating ensures your paint remains vibrant and new, maintaining the
            vehicle's value and appeal.`}
          </p>
        </div>
        <div>
          <h2>Protection Film Application </h2>
          <p>
            {`Our protection film application takes vehicle care to the next
            level. This resilient, clear film is expertly applied to the most
            vulnerable areas of your vehicle, offering a robust barrier against
            road debris, minor impacts, and everyday wear and tear. With
            precision application and seamless integration, your vehicle stays
            protected without compromising its style.`}
          </p>
        </div>
        <div>
          <h2>Vinyl Car Wraps</h2>
          <p>
            {`Transform your vehicle with our custom vinyl car wraps. Whether
            you're looking for a full vehicle makeover, a unique design, or
            company branding, our high-quality vinyl wraps are the perfect
            solution. Available in a wide range of colors and finishes, our
            wraps are durable, removable, and a fantastic way to personalize
            your vehicle or promote your business.`}
          </p>
        </div>
        <div>
          <h2>Why Choose Us?</h2>
          <p>
            {`  At The Ohio Tint & Vinyl Company, we are passionate about cars and
            committed to delivering exceptional service. Our team of experienced
            professionals uses only the best materials and techniques in the
            industry. We take pride in our craftsmanship and in providing
            personalized solutions to meet your specific needs.`}
          </p>
        </div>
        <p>
          {`For more information or to schedule a service, contact us today. Let
          us help you protect and personalize your vehicle to perfection!`}
        </p>
        <Link href="/contact-us">
          <button className="border p-4 rounded-full justify-end">
            Book An Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
