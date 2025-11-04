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

  return (
    <section className="bg-[#E8FBE6] w-[90%] mx-auto py-12 md:py-16 px-4 md:px-10 rounded-2xl shadow-md mt-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* --- Left Content --- */}
        <motion.div
          className="w-full lg:w-[50%] border border-[#73BE5F] p-6 md:p-8 rounded-2xl bg-white/80 shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className={`${sueEllen.className} text-xl md:text-2xl text-black mb-2`}>
            {subtitle}
          </h4>
          <h2
            className={`${calistoga.className} text-3xl md:text-4xl text-[#73BE5F] font-bold mb-4`}
          >
            {title}
          </h2>
          <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed whitespace-pre-line mb-6">
            {description}
          </p>
          <AboutusButtons text={button.text} />
        </motion.div>

        {/* --- Right Images --- */}
        <motion.div
          className="w-full lg:w-[45%] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-[85%] aspect-square bg-[#E8FBE6] rounded-2xl overflow-visible flex justify-center items-center">
            {/* Bottom big gray block */}
            <div className="relative w-[100%] h-[100%] bg-[#D9D9D9] rounded-2xl ml-auto">
              <Image
                src={images[1]}
                alt="Shilp Gray"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Top black block with space between */}
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
