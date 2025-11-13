"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
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
  link?: string;
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
    images: (StaticImageData | string)[];
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
    images,
  } = data;

  return (
  <section className="bg-white px-6 md:px-12 lg:px-20 py-12 md:py-16 rounded-xl overflow-hidden mt-[-50px] md:mt-[-30px]">

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h4
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={item}
          className={`${calistoga.className} text-3xl md:text-4xl text-[#73BE5F] text-center font-semibold mb-8`}
        >
          {title}
        </motion.h4>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* LEFT SIDE - 3 IMAGE LAYOUT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={item}
            transition={{ delay: 0.08 }}
            className="w-full md:w-1/2 flex flex-col md:flex-row gap-4"
          >
            {/* ✅ Mobile Text Section */}
            <div className="md:hidden text-left mb-5">
              <h2
                className={`${sueEllen.className} text-2xl text-[#2E4049] mb-2`}
              >
                {heading}
              </h2>
              <h3
                className={`${calistoga.className} text-3xl text-[#73BE5F] font-semibold mb-3`}
              >
                {subheading}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {description}
              </p>
            </div>

            {/* ✅ Mobile Layout (image style) */}
            <div className="block md:hidden w-full">
              <div className="grid grid-cols-[60%_auto] gap-3">
                {/* Large Left Image */}
                <div className="relative w-full h-60 rounded-xl overflow-hidden">
                  <Image
                    src={images[0]}
                    alt="Project main image"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>

                {/* Right Side - Two stacked small images */}
                <div className="flex flex-col gap-3">
                  <div className="relative w-full h-28 rounded-xl overflow-hidden">
                    <Image
                      src={images[1]}
                      alt="Project secondary image 1"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="relative w-full h-28 rounded-xl overflow-hidden">
                    <Image
                      src={images[2]}
                      alt="Project secondary image 2"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Desktop Layout (unchanged) */}
            <div className="hidden md:flex w-full flex-row gap-4">
              {/* Large Left Image */}
              <div className="w-2/3 relative rounded-xl overflow-hidden h-[420px]">
                <Image
                  src={images[0]}
                  alt="Project main image"
                  fill
                  className="object-cover object-center rounded-xl"
                  priority
                />
              </div>

              {/* Two stacked small images */}
              <div className="w-1/3 flex flex-col gap-4">
                <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src={images[1]}
                    alt="Project secondary image 1"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src={images[2]}
                    alt="Project secondary image 2"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
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
            {/* Desktop Heading */}
            <div className="hidden md:block">
              <h2
                className={`${sueEllen.className} text-3xl md:text-4xl text-[#2E4049]`}
              >
                {heading}
              </h2>
              <h3
                className={`${calistoga.className} text-4xl md:text-5xl text-[#73BE5F] mt-5`}
              >
                {subheading}
              </h3>
              <p className="text-gray-600 leading-relaxed mt-3">
                {description}
              </p>
            </div>

            {/* Highlight Section */}
            <div className="text-left mt-4">
              <h4
                className={`${calistoga.className} text-2xl md:text-xl text-[#73BE5F] font-semibold`}
              >
                {highlight}
              </h4>
              <p className="text-gray-500 text-sm md:text-base mt-1">
                {subdescription}
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-[#FFF9E8] p-6 rounded-xl flex gap-3 items-center"
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

            {/* Button */}
            <div className="mt-6 flex justify-start">
              <Link
                href={buttons.sponser.link || "/donate"}
                className="flex items-center gap-2 bg-[#73BE5F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5FA94E] transition-all duration-200"
              >
                {buttons.sponser.icon && (
                  <span className="flex items-center justify-center w-6 h-6">
                    <Image
                      src={buttons.sponser.icon}
                      alt="btn"
                      width={25}
                      height={25}
                      className="object-contain"
                    />
                  </span>
                )}
                {buttons.sponser.text}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
