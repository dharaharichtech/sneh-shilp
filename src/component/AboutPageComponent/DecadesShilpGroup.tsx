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
    <section className="bg-[#E8FBE6] w-[90%] mx-auto py-10 md:py-16 px-5 md:px-10 rounded-2xl shadow-md mt-10">
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
          <h4
            className={`${sueEllen.className} text-lg md:text-2xl text-black mb-1`}
          >
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

          {/* ✅ MOBILE OVERLAPPED BOXES (Exactly Like Screenshot) */}
          <div className="lg:hidden relative w-full max-w-[300px] h-[230px] mx-auto mb-6">
            {/* Bottom Gray Box */}
            <div className="absolute bottom-0 right-0 w-full h-[180px] bg-[#D9D9D9] rounded-xl"></div>

            {/* Top Black Box */}
            <div className="absolute top-0 left-0 w-[120px] h-[120px] bg-[#1D1D1D] rounded-xl overflow-hidden shadow-md">
              <Image
                src={images[0]}
                alt="Shilp Logo"
                fill
                className="object-contain p-3"
              />
            </div>
          </div>

          {/* ✅ Explore Button */}
          <div
            onClick={handleExploreClick}
            className="flex justify-center lg:justify-start mt-3 "
          >
            <AboutusButtons text={button.text} />
          </div>
        </motion.div>

        {/* ✅ DESKTOP RIGHT IMAGES (Unchanged) */}
        <motion.div
          className="hidden lg:flex w-full lg:w-[45%] justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-[85%] aspect-square bg-[#E8FBE6] rounded-2xl flex justify-center ">
            {/* Bottom Gray Box */}
            <div className="relative w-full h-full bg-[#D9D9D9] rounded-2xl ml-auto">
              <Image
                src={images[1]}
                alt="Shilp Gray"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Top Black Box */}
            <div className="absolute -top-6 -left-6 w-[45%] h-[45%] bg-[#1D1D1D] rounded-2xl overflow-hidden shadow-lg border-4 border-[#E8FBE6]">
              <Image
                src={images[0]}
                alt="Shilp Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DecadesShilpGroup;
