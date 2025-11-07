"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";

export default function VisionMissionSection() {
  const { VisionMissionSection } = AboutUsData;
  const { Vision, Mission, bgImage } = VisionMissionSection;

  return (
    <section className="relative w-[90%] mx-auto py-16 md:py-24 mt-10 md:mt-20 rounded-2xl overflow-hidden shadow-md">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Vision and Mission Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 text-gray-800 backdrop-blur-[2px]">
        <motion.div
          className="w-full md:w-1/2 space-y-12 bg-white/70 p-6 md:p-10 rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Vision */}
          <div>
            <h2
              className={`${calistoga.className} text-4xl md:text-5xl font-bold text-[#73BE5F]`}
            >
              {Vision.heading}
            </h2>
            <p className="leading-relaxed text-base md:text-lg mt-4">
              {Vision.description}
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2
              className={`${calistoga.className} text-4xl md:text-5xl font-bold text-[#73BE5F]`}
            >
              {Mission.heading}
            </h2>
            <p className="leading-relaxed text-base md:text-lg mt-4">
              {Mission.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
