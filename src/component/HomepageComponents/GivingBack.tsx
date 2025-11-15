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
    <section className="bg-white px-6 md:px-12 lg:px-20 py-12 md:py-16 rounded-xl overflow-hidden mt-[-90px] md:mt-[-30px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* LEFT IMAGE (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex w-full md:w-1/2 justify-center items-center relative"
        >
          <div className="relative w-[90%] h-[480px] rounded-xl overflow-hidden">
            <Image
              src={mainImage}
              alt="Giving Back Image"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {secondaryImage && (
            <div className="absolute bottom-[-40px] right-[-40px] w-[220px] h-[220px] rounded-xl overflow-hidden shadow-md border-4 border-white">
              <Image
                src={secondaryImage}
                alt="Secondary Image"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#E8F5E3] rounded-full -z-10"></div>
            </div>
          )}
        </motion.div>

        {/* MOBILE IMAGE SECTION — FULLY FIXED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:hidden flex flex-col w-full gap-6"
        >
          {/* TEXT (Mobile) */}
          <div className="text-left mb-3">
            <h2 className={`${sueEllen.className} text-2xl text-[#2E4049] mb-2`}>
              {title}
            </h2>
            <h3 className={`${calistoga.className} text-4xl text-[#73BE5F] font-semibold mb-3`}>
              {heading}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
          </div>

          {/* MAIN FULL-WIDTH IMAGE */}
          <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
            <Image
              src={mainImage}
              alt="Main image"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* SECONDARY IMAGE MOBILE */}
          {secondaryImage && (
            <div className="relative w-[70%] mx-auto h-[200px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={secondaryImage}
                alt="Secondary image"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#E8F5E3] rounded-full -z-10"></div>
            </div>
          )}
        </motion.div>

        {/* RIGHT CONTENT (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col justify-center space-y-5"
        >
          <div className="hidden md:block">
            <h4 className={`${sueEllen.className} text-3xl md:text-4xl text-[#2E4049]`}>
              {title}
            </h4>
            <h2 className={`${calistoga.className} text-4xl md:text-5xl text-[#73BE5F] mt-5`}>
              {heading}
            </h2>
            <p className="text-gray-600 leading-relaxed mt-3">{description}</p>
          </div>

          {/* Highlight */}
          <div className="mt-4">
            <h4 className={`${calistoga.className} text-2xl text-[#73BE5F] font-semibold`}>
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
                className="bg-[#FFF9E8] flex items-center gap-3 p-6 rounded-xl shadow-sm hover:shadow-md"
              >
                <Image
                  src={card.logo}
                  alt={card.description}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
                <div>
                  <h4 className="text-xs md:text-sm text-gray-700 font-medium">{card.heading}</h4>
                  <p className="text-[#2E4049] font-semibold text-sm md:text-base">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DONATE BUTTON */}
          <motion.a
            href="https://pages.razorpay.com/snehshilpfoundation"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 bg-[#73BE5F] text-white text-sm md:text-base px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium hover:bg-[#5FA94E] mt-6 w-fit shadow-sm transition-all"
          >
            {buttons.donate.icon && (
              <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full">
                <Image
                  src={buttons.donate.icon}
                  alt="Donate Icon"
                  width={25}
                  height={16}
                  className="object-contain"
                />
              </span>
            )}
            <span className="leading-none">{buttons.donate.text}</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
