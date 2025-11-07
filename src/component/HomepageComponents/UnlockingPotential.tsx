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

interface UnlockingPotentialSectionProps {
  data: {
    title: string;
    heading: string;
    description: string;
    higlight: string;
    cards: CardData[];
    Image: StaticImageData | string;
    buttons: { sponser: ButtonData };
  };
}

export default function UnlockingPotential({ data }: UnlockingPotentialSectionProps) {
  const { title, heading, description, higlight, cards, Image: mainImage, buttons } = data;

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-12 rounded-xl overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className={`${sueEllen.className} text-3xl md:text-4xl text-[#2E4049] mb-5`}>
            {title}
          </h2>
          <h3
            className={`${calistoga.className} text-2xl md:text-3xl text-[#73BE5F] font-bold`}
          >
            {heading}
          </h3>
          <p className="text-gray-600 mt-3">{description}</p>

          <h4
            className={`${calistoga.className} text-lg text-[#73BE5F] font-semibold mt-4`}
          >
            {higlight}
          </h4>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-[#FFF9E8] p-3 rounded-xl flex items-center gap-3"
              >
                <div className="w-10 h-10">
                  <Image
                    src={card.logo}
                    alt={card.heading}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h5 className="text-sm text-gray-700">{card.heading}</h5>
                  <p className="text-[#2E4049] font-semibold text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button className="inline-flex items-center gap-2 bg-[#73BE5F] text-white px-5 py-2 rounded-full hover:bg-[#5FA94E] transition">
              {buttons.sponser.icon && (
                <span className="w-4 h-4">
                  <Image
                    src={buttons.sponser.icon}
                    alt="btn icon"
                    width={16}
                    height={16}
                  />
                </span>
              )}
              {buttons.sponser.text}
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE (fixed) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          {/* Fixed height & relative positioning for image visibility */}
          <div className="w-[100%] max-w-lg relative rounded-xl overflow-hidden h-64 md:h-80 lg:h-[500px]">
            <Image
              src={mainImage}
              alt="Unlocking potential"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
