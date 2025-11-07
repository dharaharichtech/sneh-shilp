"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "../../app/font";
import AboutusButtons from "../../buttons/Aboutusbutton";

interface ButtonData {
  text: string;
}

interface HumanitySectionData {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  button: ButtonData;
}

interface DonationSectionProps {
  data: HumanitySectionData;
}

export default function DonationSection({ data }: DonationSectionProps) {
  const { title, heading, description, image, button } = data;

  return (
    <section className="bg-[#EEFFE9] w-[90%] mx-auto px-6 md:px-12 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl shadow-md mt-10">
      {/* LEFT CONTENT */}
      <motion.div
        className="w-full md:w-1/2 space-y-4 md:space-y-4 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4
          className={`${sueEllen.className} text-3xl md:text-4xl text-[#2E4049]`}
        >
          {title}
        </h4>

        <h2
          className={`${calistoga.className} text-3xl md:text-5xl font-bold text-[#73BE5F] leading-snug`}
        >
          {heading}
        </h2>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {description}
        </p>

        <div className="flex justify-center md:justify-start mt-4">
          <AboutusButtons text={button.text} />
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Rectangular (Landscape) image box */}
 <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden">
  <Image
    src={image}
    alt="donation"
    fill
    className="object-cover rounded-2xl"
  />
</div>

      </motion.div>
    </section>
  );
}
