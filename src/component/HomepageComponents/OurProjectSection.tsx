"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "@/app/font";

interface CardData {
  id: number;
  heading: string;
  description: string;
  logo: StaticImageData | string;
}

interface ButtonData {
  text: string;
  icon?: StaticImageData | string;
}

interface OurProjectSectionProps {
  data: {
    title: string;
    heading: string;
    subheading: string;
    description: string;
    highlight: string;
    subdescription: string;
    cards: CardData[];
    buttons: { sponser: ButtonData };
    image: StaticImageData | string;
  };
}

const item = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } };

export default function OurProjectSection({ data }: OurProjectSectionProps) {
  const {
    title,
    heading,
    subheading,
    description,
    highlight,
    subdescription,
    cards,
    buttons,
    image,
  } = data;

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-12 md:py-16 rounded-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h4
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={item}
          className={`${calistoga.className} text-2xl md:text-4xl text-[#73BE5F] text-center font-semibold mb-6`}
        >
          {title}
        </motion.h4>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* LEFT SIDE IMAGE SECTION */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={item}
            transition={{ delay: 0.08 }}
            className="w-full md:w-1/2 flex flex-col gap-4"
          >
            <div className="w-full relative rounded-xl overflow-hidden h-64 md:h-80 lg:h-[420px]">
              <Image
                src={image}
                alt="Project image"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE TEXT SECTION */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={item}
            transition={{ delay: 0.16 }}
            className="w-full md:w-1/2 flex flex-col justify-center gap-4"
          >
            <h2
              className={`${sueEllen.className} text-3xl md:text-4xl text-[#2E4049]`}
            >
              {heading}
            </h2>
            <h3
              className={`${calistoga.className} text-2xl md:text-3xl text-[#73BE5F]`}
            >
              {subheading}
            </h3>
            <p className="text-gray-600">{description}</p>

            <div>
              <h4
                className={`${calistoga.className} text-lg text-[#73BE5F] font-semibold`}
              >
                {highlight}
              </h4>
              <p className="text-gray-500 text-sm mt-1">{subdescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-[#FFF9E8] p-3 rounded-xl flex gap-3 items-center"
                >
                  <div className="w-10 h-10 flex-shrink-0">
                    <Image
                      src={card.logo}
                      alt={card.heading}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-700 font-medium">
                      {card.heading}
                    </h5>
                    <p className="text-[#2E4049] font-semibold text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button className="inline-flex items-center gap-2 bg-[#73BE5F] text-white px-5 py-2 rounded-full font-medium hover:bg-[#5FA94E] transition">
                {buttons.sponser.icon && (
                  <span className="w-4 h-4">
                    <Image
                      src={buttons.sponser.icon}
                      alt="btn"
                      width={16}
                      height={16}
                    />
                  </span>
                )}
                {buttons.sponser.text}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
