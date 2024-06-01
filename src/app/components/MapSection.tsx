import Link from "next/link";
import React from "react";

const MapSection = () => {
  return (
    <section
      id="contact-us"
      className="  justify-between  border-t  bg-black flex-col md:flex-row grid grid-cols-1 md:grid-cols-2 text-white w-full "
    >
      <div className="flex justify-center items-center w-full flex-col gap-10 py-10">
        <h3 className="text-4xl font-bold">Location</h3>
        <span className=" text-2xl hover:text-blue-200">
          <Link href="https://maps.app.goo.gl/C12WF5hPzGUBhMXb9" passHref>
            2257 W. Fair Ave. <br></br>Lancaster, OH 43130
          </Link>
        </span>

        <Link
          href="https://maps.google.com/maps/dir//The+Ohio+Tint+%26+Vinyl+Company+2257+W+Fair+Ave+Lancaster,+OH+43130/@39.7267968,-82.6420166,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88478b5f8b676de5:0x77464d7a28ea5927"
          passHref
        >
          <button className="border p-4 rounded-full justify-end hover:bg-gray-950">
            Get Directions
          </button>
        </Link>
      </div>

      <div className=" overflow-hidden w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12274.288636230012!2d-82.6420166!3d39.7267968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88478b5f8b676de5%3A0x77464d7a28ea5927!2sThe%20Ohio%20Tint%20%26%20Vinyl%20Company!5e0!3m2!1sen!2sus!4v1714228624461!5m2!1sen!2sus"
          width="100%"
          height="450"
          loading="lazy"
          className=" justify-end bg-white"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
