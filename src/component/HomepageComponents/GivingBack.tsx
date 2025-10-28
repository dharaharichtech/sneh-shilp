"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
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

interface GivingBackSectionProps {
  data: {
    title: string;
    heading: string;
    description: string;
    higlight: string;
    subdescription: string;
    cards: CardData[];
    buttons: {
      donate: ButtonData;
    };
    Image: StaticImageData;
  };
}

export default function GivingBack({ data }: GivingBackSectionProps) {
  const {
    heading,
    description,
    higlight,
    subdescription,
    cards,
    buttons,
    Image: mainImage,
  } = data;

  return (
    <section className="bg-white px-6 md:px-15 flex flex-col md:flex-row items-center justify-between gap-10 rounded-xl overflow-hidden ">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full h-[85%] flex justify-center items-center">
          <Image
            src={mainImage}
            alt="Giving Back Image"
            className="rounded-xl object-cover w-[90%] h-auto"
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-5">
        {/* Heading */}
        <h2
          className={`${sueEllen.className} text-4xl md:text-5xl text-[#2E4049] font-normal`}
        >
          {data.title}
        </h2>

        {/* Subheading */}
        <h3
          className={`${calistoga.className} text-3xl md:text-4xl text-[#73BE5F] font-bold`}
        >
          {heading}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{description}</p>

        {/* Highlight Section */}
        <div>
          <h4
            className={`${calistoga.className} text-lg text-[#73BE5F] font-semibold`}
          >
            {higlight}
          </h4>
          <p className="text-gray-500 text-sm mt-1">{subdescription}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#FFF9E8] flex items-center gap-3 text-left p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <Image
                src={card.logo}
                alt={card.description}
                className="w-10 h-10 flex-shrink-0 object-contain"
              />
              <div>
                <h4 className="text-sm text-gray-700 font-medium leading-tight">
                  {card.heading}
                </h4>
                <p className="text-[#2E4049] font-semibold text-lg">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Donate Button */}
        <button className="flex items-center gap-2 bg-[#73BE5F] text-white px-4 py-3 rounded-full font-medium hover:bg-[#5FA94E] transition-colors mt-6 w-fit">
          {buttons.donate.icon && (
            <Image
              src={buttons.donate.icon}
              alt="Heart Icon"
              className="w-5 h-5 object-contain"
            />
          )}
          {buttons.donate.text}
        </button>
      </div>
    </section>
  );
}
