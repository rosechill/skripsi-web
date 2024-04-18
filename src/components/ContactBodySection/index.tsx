"use client";
import React from "react";
import {
  FaEnvelope,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactBodySection() {
  return (
    <section className="h-fit mt-16 lg:px-24 py-16 px-8 bg-[#2E3E78] grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-8 ">
      <div>
        <h2 className="text-white font-bold text-3xl ">Headquarter</h2>
        <div className="flex items-center gap-4 mt-4 text-white">
          <FaLocationArrow className="text-3xl" />
          <p className="lg:w-3/4 w-full">
            Genius Idea Coworking Space, Jl. Magelang No.32-34 lantai 2,
            Cokrodiningratan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa
            Yogyakarta 55233{" "}
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 text-white">
          <FaEnvelope className="text-3xl" />
          <p className="w-3/4">info@travelxism.com</p>
        </div>
        <div className="flex items-center gap-4 mt-4 text-white">
          <FaPhoneAlt className="text-3xl" />
          <p className="w-3/4">+62 812-8564-6968</p>
        </div>
      </div>
      <div className="flex lg:justify-end justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.08860187759!2d110.3584653755474!3d-7.780430092239248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5839513fb791%3A0x719c9a330d0c99b5!2sGenius%20Idea%20Coworking%20Space!5e0!3m2!1sen!2sid!4v1713086041048!5m2!1sen!2sid"
          width="600"
          height="450"
          allowFullScreen={true}
          className="rounded-xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
