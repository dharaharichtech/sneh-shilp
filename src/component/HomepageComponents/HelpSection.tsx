"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import DonateNow from "../../buttons/Donatenow";
import ContactButton from "../../buttons/Contactusbutton";
import { calistoga, sueEllen } from "../../app/font"

interface ButtonData {
  text: string;
  icon?: StaticImageData;
}

interface HelpSectionProps {
  data: {
    title: string;
    heading: string;
    description: string;
    buttons: {
      donate: ButtonData;
      contact: ButtonData;
    };
    image: StaticImageData;
  };
}

export default function HelpSection({ data }: HelpSectionProps) {
  const { title, heading, description, buttons, image } = data;

  return (
    <section className="bg-[#EEFFE9]  px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 rounded-xl overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h4
          className={`${sueEllen.className} text-6xl text-[#2E4049] font-normal mb-13`}
        >
          {title}
        </h4>

        <h2
          className={`${calistoga.className} text-6xl font-bold text-[#73BE5F] leading-snug`}
        >
          {heading}
        </h2>

        <p className="text-gray-600 leading-relaxed">{description}</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <DonateNow text={buttons.donate.text} />
          <ContactButton
            text={buttons.contact.text}
            icon={buttons.contact.icon}
          />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-5">
        <Image
          src={image}
          alt="help the needed"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
