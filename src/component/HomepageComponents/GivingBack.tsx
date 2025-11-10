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
  };
}

export default function GivingBack({ data }: GivingBackSectionProps) {
  const { title, heading, description, higlight, subdescription, cards, buttons, Image: mainImage } = data;

  return (
    <section className="bg-white px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 rounded-xl overflow-hidden py-16 mt-[-50px] md:mt-[-80px] ">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <Image
          src={mainImage}
          alt="Giving Back Image"
          className="rounded-xl object-cover w-[90%] h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col justify-center space-y-5"
      >
        <h4 className={`${sueEllen.className} text-3xl md:text-4xl text-[#2E4049]`}>
          {title}
        </h4>
        <h2 className={`${calistoga.className} text-4xl md:text-5xl text-[#73BE5F]`}>
          {heading}
        </h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>

        <div>
          <h4 className={`${calistoga.className} text-lg text-[#73BE5F]`}>
            {higlight}
          </h4>
          <p className="text-gray-500 text-sm mt-1">{subdescription}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-[#FFF9E8] flex items-center gap-3 p-4 rounded-xl shadow-sm hover:shadow-md"
            >
              <Image
                src={card.logo}
                alt={card.description}
                className="w-10 h-10 object-contain"
              />
              <div>
                <h4 className="text-sm text-gray-700 font-medium">
                  {card.heading}
                </h4>
                <p className="text-[#2E4049] font-semibold text-lg">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-[#73BE5F] text-white px-4 py-3 rounded-full font-medium hover:bg-[#5FA94E] mt-6 w-fit"
        >
          {buttons.donate.icon && (
            <Image
              src={buttons.donate.icon}
              alt="Heart Icon"
              className="w-5 h-5 object-contain"
            />
          )}
          {buttons.donate.text}
        </motion.button>
      </motion.div>
    </section>
  );
}
