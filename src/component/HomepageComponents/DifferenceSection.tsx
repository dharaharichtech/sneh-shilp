"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // ✅ Added for link navigation
import { calistoga, sueEllen } from "../../app/font";

interface ButtonData {
  text: string;
  icon?: StaticImageData;
  link?: string; // ✅ Added link support
}

interface DifferenceSectionProps {
  data: {
    title: string;
    heading: string;
    description: string;
    buttons: { sponser: ButtonData };
    image: StaticImageData;
  };
}

const DifferenceSection: React.FC<DifferenceSectionProps> = ({ data }) => {
  const { title, heading, description, buttons, image } = data;

  return (
    <section className="bg-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 py-16 rounded-xl overflow-hidden">
      {/* ✅ Image Side */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center relative"
      >
        <div className="relative w-[90%]">
          <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-tl-[50%] bg-yellow-300 -z-10 translate-x-4 translate-y-4"></div>
          <div className="absolute bottom-0 right-0 w-[80%] h-[80%] rounded-br-[50%] bg-[#73BE5F] -z-10 translate-x-6 -translate-y-6"></div>

          <Image
            src={image}
            alt="Difference Image"
            className="rounded-2xl object-cover w-full h-auto"
            priority
          />
        </div>
      </motion.div>

      {/* ✅ Text Side */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 bg-[#73BE5F] text-white p-8 md:p-10 rounded-3xl flex flex-col justify-center"
      >
        <h3 className={`${sueEllen.className} text-2xl sm:text-4xl mb-4`}>
          {title}
        </h3>
        <h2 className={`${calistoga.className} text-3xl sm:text-5xl mb-5`}>
          {heading}
        </h2>
        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
          {description}
        </p>

        {/* ✅ Button wrapped in Next.js Link */}
        <Link
          href={buttons.sponser.link || "#"}
          className="w-fit"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white text-[#73BE5F] px-6 py-3 rounded-full font-medium hover:bg-[#E8FBE4] transition-colors"
          >
            {buttons.sponser.icon && (
              <Image
                src={buttons.sponser.icon}
                alt="arrow"
                className="w-5 h-5 object-contain"
              />
            )}
            {buttons.sponser.text}
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default DifferenceSection;
