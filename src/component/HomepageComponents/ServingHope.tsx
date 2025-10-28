"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import DonateNow from "../../buttons/Donatenow";
import ContactButton from "../../buttons/Contactusbutton";
import { calistoga, sueEllen } from "../../app/font";

interface CardData {
  id: number;
  heading: string;
  description: string;
  logo: StaticImageData;
}

interface ButtonData {
  text: string;
  icon?: StaticImageData;
}

interface ServingHopeProps {
  data: {
    title: string;
    heading: string;
    description: string;
    higlight: string;
    cards: CardData[];
    subheading: string;
    image: StaticImageData; // arrow image
    Image: StaticImageData; // main right image
    buttons: {
      donate: ButtonData;
      contact: ButtonData;
    };
  };
}

export default function ServingHope({ data }: ServingHopeProps) {
  const {
    title,
    heading,
    description,
    higlight,
    cards,
    subheading,
    buttons,
    image, // arrow image
    Image: mainImage, // main right image
  } = data;

  return (
    <section className="bg-white  px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 rounded-xl overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-5">
        {/* Title */}
        <h4
          className={`${sueEllen.className} text-4xl md:text-5xl text-[#2E4049] font-normal mb-10 mt-5`}
        >
          {title}
        </h4>

        {/* Heading */}
        <h2
          className={`${calistoga.className} text-5xl md:text-6xl text-[#73BE5F] font-bold leading-tight`}
        >
          {heading}
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{description}</p>

        {/* Highlight */}
        <h3
          className={`${calistoga.className} text-lg text-[#73BE5F] font-semibold mt-2`}
        >
          {higlight}
        </h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#FFF9E8] flex items-center gap-3 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12">
                <Image
                  src={card.logo}
                  alt={`${card.heading} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-[#2E4049] text-sm font-medium">
                  {card.heading}
                </h4>
                <p className="text-[#2E4049] font-semibold text-lg">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subheading with Arrow Image */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <p
            className={`${sueEllen.className} text-3xl text-[#2E4049] font-normal`}
          >
            {subheading}
          </p>
          <Image
            src={image}
            alt="Arrow Icon"
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-10 mt-4 justify-center md:justify-start">
          <DonateNow text={buttons.donate.text} />
          <ContactButton
            text={buttons.contact.text}
            icon={buttons.contact.icon}
          />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={mainImage}
          alt="Serving Hope Image"
          className="w-[85%] h-auto object-cover "
        />
      </div>
    </section>
  );
}
