"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "../../app/font";

interface DonationSectionProps {
  data: {
    title: string;
    heading: string;
    description: string;
    image: StaticImageData;
  };
}

export default function DonationSection({ data }: DonationSectionProps) {
  const { title, heading, description, image } = data;

  return (
    <section className="bg-white px-6 md:px-20 flex flex-col items-center justify-center gap-10 py-16 rounded-xl overflow-hidden">
      <motion.h4
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`${sueEllen.className} text-2xl md:text-3xl text-[#73BE5F] text-center`}
      >
        {title}
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className={`${calistoga.className} text-3xl md:text-6xl text-[#2E4049] font-bold text-center`}
      >
        {heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="max-w-5xl text-gray-600 leading-relaxed text-center"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="w-full max-w-5xl"
      >
        <Image
          src={image}
          alt="Donation"
          className="object-cover w-full h-auto rounded-none"
          priority
        />
      </motion.div>
    </section>
  );
}
