"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import DonateNow from "../../buttons/Donatenow";
import ContactButton from "../../buttons/Contactusbutton";
import { calistoga, sueEllen } from "../../app/font";

interface ButtonData {
  text: string;
  icon?: StaticImageData;
}

interface HelpSectionProps {
  data: {
    title: string;
    heading: string;
    description: string;
    buttons: { donate: ButtonData; contact: ButtonData };
    image: StaticImageData;
  };
}

export default function HelpSection({ data }: HelpSectionProps) {
  const { title, heading, description, buttons, image } = data;

  return (
    <section className="bg-[#EEFFE9] px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 py-16 rounded-xl overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <h4 className={`${sueEllen.className} text-5xl text-[#2E4049]`}>
          {title}
        </h4>
        <h2 className={`${calistoga.className} text-4xl text-[#73BE5F] font-bold`}>
          {heading}
        </h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-4 mt-6">
          <DonateNow text={buttons.donate.text} />
          <ContactButton text={buttons.contact.text} icon={buttons.contact.icon} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 flex justify-center items-center"
      >
        <Image
          src={image}
          alt="help the needed"
          className="w-full h-auto object-cover rounded-xl"
        />
      </motion.div>
    </section>
  );
}
