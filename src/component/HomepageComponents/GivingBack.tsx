"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
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
    buttons: { donate: ButtonData };
    Image: StaticImageData;
    secondaryImage?: StaticImageData;
  };
}

export default function GivingBack({ data }: GivingBackSectionProps) {
  const {
    title,
    heading,
    description,
    higlight,
    subdescription,
    cards,
    buttons,
    Image: mainImage,
    secondaryImage,
  } = data;

  return (
    <section className="bg-white px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 rounded-xl overflow-hidden py-12 md:py-16 mt-[-50px] md:mt-[-80px]">
      {/* ✅ LEFT IMAGE (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex w-full md:w-1/2 justify-center items-center"
      >
        <Image
          src={mainImage}
          alt="Giving Back Image"
          className="rounded-xl object-cover w-[90%] h-auto"
        />
      </motion.div>

      {/* ✅ MOBILE IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:hidden flex flex-col items-start w-full gap-4"
      >
        {/* Title + Heading + Description */}
        <h4 className={`${sueEllen.className} text-xl text-[#2E4049]`}>
          {title}
        </h4>
        <h2
          className={`${calistoga.className} text-2xl text-[#73BE5F] font-bold`}
        >
          {heading}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {/* Two Images Layout */}
        <div className="relative w-full flex gap-3 items-start mt-2">
          {/* Main Image */}
          <div className="relative w-[250%] h-80 rounded-xl overflow-hidden">
            <Image
              src={mainImage}
              alt="Main image"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Secondary Image + Green Circle Accent */}
          <div className="relative w-[45%] h-48 flex justify-center items-center">
            <div className="absolute -bottom-3 -left-2 w-12 h-12 bg-[#E8F5E3] rounded-full -z-10"></div>
            {secondaryImage && (
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={secondaryImage}
                  alt="Supporting image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* ✅ RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col justify-center space-y-5"
      >
        {/* Desktop Title + Heading */}
        <div className="hidden md:block">
          <h4
            className={`${sueEllen.className} text-3xl md:text-4xl text-[#2E4049]`}
          >
            {title}
          </h4>
          <h2
            className={`${calistoga.className} text-4xl md:text-5xl text-[#73BE5F]`}
          >
            {heading}
          </h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Highlight Section */}
        <div className="mt-4">
          <h4
            className={`${calistoga.className} text-lg text-[#73BE5F] font-semibold`}
          >
            {higlight}
          </h4>
          <p className="text-gray-500 text-sm mt-1">{subdescription}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-[#FFF9E8] flex items-center gap-3 p-3 rounded-xl shadow-sm hover:shadow-md"
            >
              <Image
                src={card.logo}
                alt={card.description}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <div>
                <h4 className="text-xs md:text-sm text-gray-700 font-medium">
                  {card.heading}
                </h4>
                <p className="text-[#2E4049] font-semibold text-sm md:text-base">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center gap-2 bg-[#73BE5F] text-white text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium hover:bg-[#5FA94E] mt-6 w-full sm:w-fit"
        >
          {buttons.donate.icon && (
            <Image
              src={buttons.donate.icon}
              alt="Heart Icon"
              className="w-4 h-4 md:w-5 md:h-5 object-contain"
            />
          )}
          {buttons.donate.text}
        </motion.button>
      </motion.div>
    </section>
  );
}
