"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heritageData } from "@/data/heritageData";
import { calistoga, sueEllen } from "@/app/font";

import ArrowDown from "../../../public/Image/heritage/heritage-arrow.svg"; 

const HeritageSection: React.FC = () => {
  const { banner, overview, mission } = heritageData;

  const handleScrollToOverview = () => {
    const element = document.getElementById("overview-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full mt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12"
      >
        <div className="flex-1 text-center md:text-left">
          <h1
            className={`${calistoga.className} text-3xl sm:text-4xl text-[#6BB45B] mb-3`}
          >
            {banner.title}
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
            {banner.description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleScrollToOverview}
            className="inline-flex items-center gap-3 bg-[#6BB45B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5ca14d] transition shadow-md"
          >
            <span>{banner.buttonText}</span>
            <Image
              src={ArrowDown}
              alt="Down Arrow"
              width={20}
              height={20}
              className="object-contain"
            />
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <Image
            src={banner.logo}
            alt="Heritage Walk Logo"
            width={280}
            height={280}
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Overview Section */}
      <motion.div
        id="overview-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#EEFFE9] rounded-2xl max-w-6xl mx-auto px-6 sm:px-8 py-10 mt-8"
      >
        <h3 className={`${sueEllen.className} text-xl text-gray-700`}>
          {overview.title}
        </h3>
        <h2
          className={`${calistoga.className} text-2xl sm:text-3xl text-[#6BB45B] mb-5`}
        >
          {overview.heading}
        </h2>

        {overview.description.map((p, i) => (
          <p
            key={i}
            className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base"
          >
            {p}
          </p>
        ))}
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-16 px-6 sm:px-8"
      >
        <h3 className={`${sueEllen.className} text-xl text-gray-700`}>
          {mission.title}
        </h3>
        <h2
          className={`${calistoga.className} text-2xl sm:text-3xl text-[#6BB45B] mb-5`}
        >
          {mission.heading}
        </h2>

        {mission.description.map((p, i) => (
          <p
            key={i}
            className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base"
          >
            {p}
          </p>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex justify-center"
        >
          <Image
            src={mission.illustration}
            alt="Heritage Illustration"
            width={800}
            height={200}
            className="object-contain rounded-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeritageSection;
