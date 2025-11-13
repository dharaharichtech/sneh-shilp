"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";
import AboutusButtons from "@/buttons/Aboutusbutton";

const DecadesShilpGroup = () => {
  const { DecadesShilpGroup } = AboutUsData;
  const { subtitle, title, description, images, button } = DecadesShilpGroup;

  const handleExploreClick = () => {
    window.open("https://shilpgroup.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-[#E8FBE6] w-[90%] mx-auto py-10 md:py-14 px-5 md:px-8 rounded-2xl shadow-md mt-8 md:mt-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* ✅ LEFT CONTENT */}
        <motion.div
          className="w-full lg:w-[50%] text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Subtitle */}
          <h4 className={`${sueEllen.className} text-lg md:text-2xl text-black mb-1`}>
            {subtitle}
          </h4>

          {/* Title */}
          <h2
            className={`${calistoga.className} text-2xl md:text-4xl text-[#73BE5F] font-bold mb-3`}
          >
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-[13px] sm:text-sm md:text-[15px] leading-relaxed whitespace-pre-line mb-6">
            {description}
          </p>

          {/* ✅ Explore Button */}
          <div onClick={handleExploreClick} className="flex-left lg:justify-start mt-3">
            <AboutusButtons text={button.text} />
          </div>
        </motion.div>

        {/* ✅ SINGLE IMAGE (No white background now) */}
        <motion.div
          className="w-full lg:w-[45%] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-[420px] md:max-w-[500px] aspect-square rounded-2xl overflow-hidden">
            <Image
              src={images[0]}
              alt="Shilp Group"
              fill
              className="object-contain p-6 md:p-8 bg-transparent"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DecadesShilpGroup;
