"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
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
      <section className="bg-[#EEFFE9] w-[85%] md:w-[90%] mx-auto px-8 md:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-14 rounded-2xl overflow-hidden shadow-md mt-10 md:mt-20">

      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
        <h4
          className={`${sueEllen.className} text-5xl md:text-6xl text-[#2E4049] font-normal`}
        >
          {title}
        </h4>

        <h2
          className={`${calistoga.className} text-5xl md:text-6xl font-bold text-[#73BE5F] leading-snug`}
        >
          {heading}
        </h2>

        <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
          {description}
        </p>

        {/* Button */}
        <div className="flex flex-wrap gap-4 mt-6">
          <AboutusButtons text={button.text} />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <Image
          src={image}
          alt="donation"
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
