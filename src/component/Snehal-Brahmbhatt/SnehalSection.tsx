"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { snehalData } from "@/data/snehalData";
import { calistoga, sueEllen } from "../../app/font";

const SnehalSection: React.FC = () => {
  const { banner, overview } = snehalData;

  return (
    <section className="w-full mt-24">
      {/* 🌿 Top Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#EEFFE9] rounded-3xl mx-auto max-w-6xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-md"
      >
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left ">
          <h3 className={`${sueEllen.className} text-lg text-gray-700 mb-1`}>
            {banner.title}
          </h3>

          <h1
            className={`${calistoga.className} text-4xl md:text-5xl font-bold text-[#6BB45B] mb-3`}
          >
            {banner.name}
          </h1>

          <p className="text-gray-700 mb-6 text-sm md:text-base font-medium">
            {banner.subtitle}
          </p>

          {/* ✅ Desktop Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(banner.buttonLink, "_blank")}
            className="hidden md:inline-flex items-center gap-3 bg-[#6BB45B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5ea34b] transition-all shadow-lg"
          >
            <span className="bg-white rounded-full flex items-center justify-center">
              <Image
                src="/Svg/Group.png"
                alt="Arrow"
                width={30}
                height={18}
                className="object-contain"
              />
            </span>
            {banner.buttonText}
          </motion.button>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <Image
            src={banner.image}
            alt={banner.name}
            className="rounded-2xl w-full max-w-xs md:max-w-sm object-cover shadow-md"
          />
        </motion.div>

        {/* ✅ Mobile Button (Centered Below Image) */}
        <div className="flex justify-center mt-5 md:hidden">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(banner.buttonLink, "_blank")}
            className="inline-flex items-center gap-3 bg-[#6BB45B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5ea34b] transition-all shadow-lg"
          >
            <span className="bg-white rounded-full flex items-center justify-center p-1">
              <Image
                src="/Svg/Group.png"
                alt="Arrow"
                width={22}
                height={18}
                className="object-contain"
              />
            </span>
            {banner.buttonText}
          </motion.button>
        </div>
      </motion.div>

      {/* 🌿 Overview Section */}
      <div
        id="overview"
        className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start p-4 md:p-6"
      >
        {/* ✅ Left Gallery (Dashboard view unchanged) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-col md:flex-row gap-4"
        >
          <div className="flex-1">
            <Image
              src={overview.gallery[0]}
              alt="Main Snehal image"
              className="rounded-2xl w-full h-[350px] md:h-[450px] object-cover shadow-md"
            />
          </div>

          <div className="flex flex-col gap-4 flex-[0.8]">
            {overview.gallery.slice(1, 3).map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Snehal small image ${i + 1}`}
                className="rounded-2xl w-full h-[160px] md:h-[215px] object-cover shadow-md"
              />
            ))}
          </div>
        </motion.div>

        {/* ✅ Right Content (Desktop same, Mobile reordered) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* ✅ Title, heading, paragraph — appear first in mobile */}
          <div className="md:mb-0 mb-6">
            <h3 className={`${sueEllen.className} text-xl md:text-2xl text-gray-700`}>
              {overview.title}
            </h3>
            <h2
              className={`${calistoga.className} text-2xl md:text-3xl font-bold text-[#6BB45B] mb-5`}
            >
              {overview.heading}
            </h2>

            {overview.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-gray-700 mb-4 leading-relaxed text-[14px] md:text-[15px] font-medium"
              >
                {p}
              </p>
            ))}
          </div>

          {/* ✅ Mobile Images Below Text */}
          <div className="flex flex-col md:hidden gap-4 mt-6">
            {/* Large Image */}
            <Image
              src={overview.gallery[0]}
              alt="Main Snehal image"
              className="rounded-2xl w-full h-[280px] sm:h-[330px] object-cover shadow-md"
            />

            {/* Two Smaller Side-by-Side Images */}
            <div className="grid grid-cols-2 gap-4">
              {overview.gallery.slice(1, 3).map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Snehal small image ${i + 1}`}
                  className="rounded-2xl w-full h-[150px] sm:h-[180px] object-cover shadow-md"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SnehalSection;
