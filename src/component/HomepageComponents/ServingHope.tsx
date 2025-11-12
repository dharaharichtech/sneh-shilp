"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import DonateNow from "../../buttons/Donatenow";
import ContactButton from "../../buttons/Contactusbutton";
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

interface ServingHopeProps {
  data: {
    title: string;
    heading: string;
    description: string;
    higlight: string;
    cards: CardData[];
    subheading: string;
    image?: StaticImageData | string;
    Image: StaticImageData | string;
    buttons: {
      donate: ButtonData;
      contact: ButtonData;
    };
  };
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ServingHope({ data }: ServingHopeProps) {
  const {
    title,
    heading,
    description,
    higlight,
    cards,
    subheading,
    buttons,
    image,
    Image: mainImage,
  } = data;

  const resolveSrc = (src: string | StaticImageData | undefined) => {
    if (!src) return "";
    return typeof src === "string" ? src : src;
  };

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-12 mt-[-50px] md:mt-[-80px] rounded-xl overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-4"
        >
          {/* ✅ Mobile Header Section - Now LEFT ALIGNED */}
          <div className="md:hidden mb-3 text-left">
            <h4 className={`${sueEllen.className} text-xl text-[#2E4049]`}>
              {title}
            </h4>
            <h2
              className={`${calistoga.className} text-2xl text-[#73BE5F] font-bold`}
            >
              {heading}
            </h2>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* ✅ Desktop Header (Unchanged) */}
          <div className="hidden md:block">
            <h4
              className={`${sueEllen.className} text-3xl md:text-4xl text-[#2E4049]`}
            >
              {title}
            </h4>
            <h2
              className={`${calistoga.className} text-4xl md:text-5xl text-[#73BE5F] font-bold leading-tight mt-5`}
            >
              {heading}
            </h2>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* ✅ Mobile Round Image - LEFT ALIGNED */}
          <div className="md:hidden flex justify-start mt-4">
            <div className="w-100 h-85 overflow-hidden">
              <Image
                src={resolveSrc(mainImage)}
                alt="Help on Wheels"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* ✅ Highlight Section */}
          <div className="mt-5 text-left">
            <h3
              className={`${calistoga.className} text-base md:text-lg text-[#73BE5F] font-semibold`}
            >
              {higlight}
            </h3>
          </div>

          {/* ✅ Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-[#FFF9E8] p-3 rounded-xl flex items-center gap-3 shadow-sm"
              >
                <div className="w-10 h-10">
                  <Image
                    src={resolveSrc(card.logo)}
                    alt={card.heading}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h5 className="text-sm text-[#2E4049] font-medium ">
                    {card.heading}
                  </h5>
                  <p className="text-[#2E4049] font-semibold text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Contact Line with Arrow */}
          <div className="flex justify-start items-center gap-2 mt-5">
            <p
              className={`${sueEllen.className} text-lg text-[#2E4049] text-left `}
            >
              {subheading}
            </p>
            {image && (
              <div className="w-7 h-7">
                <Image
                  src={resolveSrc(image)}
                  alt="arrow"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            )}
          </div>

    {/* ✅ Buttons (Responsive Alignment) */}
<div className="flex flex-col sm:flex-row md:flex-row items-start md:items-center justify-start md:justify-start gap-3 mt-4">
  <ContactButton
    text={buttons.contact.text}
    icon={buttons.contact.icon}
  />
  <DonateNow text={buttons.donate.text} />
</div>

        </motion.div>

        {/* ✅ Desktop Image (Unchanged) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="hidden md:flex w-full md:w-1/2 justify-center"
        >
          <div className="relative w-[90%] max-w-md rounded-xl overflow-hidden">
            <Image
              src={resolveSrc(mainImage)}
              alt="Serving hope"
              width={600}
              height={600}
              className="object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
