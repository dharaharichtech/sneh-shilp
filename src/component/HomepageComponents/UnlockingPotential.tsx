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
    smallImage?: StaticImageData | string; // ✅ Small circular image for overlap
    buttons: { sponser: ButtonData };
  };
}

export default function UnlockingPotential({
  data,
}: UnlockingPotentialSectionProps) {
  const {
    title,
    heading,
    description,
    higlight,
    cards,
    Image: mainImage,
    smallImage,
    buttons,
  } = data;

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-12 rounded-xl overflow-hidden mt-[-50px] md:mt-[-80px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* ✅ LEFT CONTENT (Text Section) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          {/* ✅ Mobile Header */}
          <div className="md:hidden mb-4">
            <h2
              className={`${sueEllen.className} text-lg text-[#2E4049] leading-snug`}
            >
              {title}
            </h2>
            <h3
              className={`${calistoga.className} text-2xl text-[#73BE5F] font-bold mt-1`}
            >
              {heading}
            </h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* ✅ Desktop Header */}
          <div className="hidden md:block">
            <h2
              className={`${sueEllen.className} text-3xl md:text-4xl text-[#2E4049] mb-3`}
            >
              {title}
            </h2>
            <h3
              className={`${calistoga.className} text-3xl md:text-4xl text-[#73BE5F] font-bold`}
            >
              {heading}
            </h3>
            <p className="text-gray-600 mt-3">{description}</p>
          </div>

          {/* ✅ Image Circle Layout (Mobile only) */}
          <div className="md:hidden flex justify-center items-center relative w-full my-5">
            <div className="w-100 h-85 overflow-hidden">
              <Image
                src={mainImage}
                alt="Site Shala Image"
                 width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            {smallImage && (
              <div className="absolute top-[-15px] left-[30px] w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={smallImage}
                  alt="Small round image"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* ✅ Highlight Text */}
          <h4
            className={`${calistoga.className} text-base md:text-lg text-[#73BE5F] font-semibold mt-4`}
          >
            {higlight}
          </h4>

          {/* ✅ Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-[#FFF9E8] p-3 rounded-xl flex items-center gap-3 shadow-sm"
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
                  <h5 className="text-sm text-gray-700">{card.heading}</h5>
                  <p className="text-[#2E4049] font-semibold text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Button Section (Now Left-Aligned) */}
          <div className="mt-5 flex justify-start">
            <button className="inline-flex items-center justify-center gap-2 bg-[#73BE5F] text-white text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium hover:bg-[#5FA94E] transition">
              {buttons.sponser.icon && (
                <Image
                  src={buttons.sponser.icon}
                  alt="btn icon"
                  width={18}
                  height={18}
                />
              )}
              {buttons.sponser.text}
            </button>
          </div>
        </motion.div>

        {/* ✅ RIGHT IMAGE (Desktop Only - unchanged) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="hidden md:flex w-full md:w-1/2 justify-center"
        >
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
