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
    <section className="relative w-[92%] mx-auto my-12 md:my-20 rounded-3xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Vision and Mission Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Light Overlay for readability */}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 py-12 md:py-16 px-6 md:px-12">
        {/* Left Side Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Vision */}
          <div>
            <h2
              className={`${calistoga.className} text-3xl md:text-5xl font-bold text-[#73BE5F]`}
            >
              {Vision.heading}
            </h2>
            <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
              {Vision.description}
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2
              className={`${calistoga.className} text-3xl md:text-5xl font-bold text-[#73BE5F]`}
            >
              {Mission.heading}
            </h2>
            <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
              {Mission.description}
            </p>
          </div>
        </motion.div>

        {/* Right Side – Transparent for background visibility */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Empty div just for layout balance */}
          <div className="hidden md:block w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}
