"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { calistoga } from "@/app/font";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  icon: StaticImageData;
}

interface JoinOurSectionProps {
  title: string;
  description: string;
  image: StaticImageData;
  button: ButtonProps;
}

const JoinOurSection: React.FC<JoinOurSectionProps> = ({
  title,
  description,
  image,
  button,
}) => {
  return (
    <section className="w-full bg-white flex flex-col-reverse lg:flex-row items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16 gap-8 md:gap-12 overflow-hidden">
      {/* LEFT SIDE CONTENT */}
      <motion.div
        className="flex-1 w-full text-center lg:text-left mt-6 lg:mt-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          className={`${calistoga.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#73BE5F] mb-4 sm:mb-6 leading-snug`}
        >
          {title}
        </h2>

        <p className="text-[#9F9F9F] text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
          {description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#73BE5F] text-white text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-[#238a69] transition-all duration-300"
        >
          <span>{button.text}</span>
          <Image
            src={button.icon}
            alt="arrow icon"
            width={24}
            height={24}
            className="object-contain"
          />
        </motion.button>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-none"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt="Join Our Team"
          className="w-full h-auto rounded-2xl object-cover shadow-md"
          priority
        />
      </motion.div>
    </section>
  );
};

export default JoinOurSection;
