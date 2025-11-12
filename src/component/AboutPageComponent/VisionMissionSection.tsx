"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";

export default function VisionMissionSection() {
  const { VisionMissionSection } = AboutUsData;
  const { Vision, Mission, bgImage ,bgimage} = VisionMissionSection;

  return (
    <section className="relative w-[92%] mx-auto my-12 md:my-20 rounded-3xl overflow-hidden bg-[#E8FBE3] md:bg-transparent">
        <div className="absolute inset-0 hidden md:block overflow-hidden flex items-center justify-center">
        <Image
          src={bgImage}
          alt="Vision and Mission Background"
          fill
          className="object-contain scale-90 md:scale-95 lg:scale-100 transition-all duration-700 ease-out h-100%"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 py-10 md:py-16 px-6 md:px-12">
        {/* ✅ LEFT TEXT SECTION */}
        <motion.div
          className="w-full md:w-1/2 space-y-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Vision */}
          <div>
            <h2
              className={`${calistoga.className} text-2xl sm:text-3xl md:text-5xl font-bold text-[#73BE5F]`}
            >
              {Vision.heading}
            </h2>
            <p className="text-gray-700 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              {Vision.description}
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2
              className={`${calistoga.className} text-2xl sm:text-3xl md:text-5xl font-bold text-[#73BE5F]`}
            >
              {Mission.heading}
            </h2>
            <p className="text-gray-700 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              {Mission.description}
            </p>
          </div>

          {/* ✅ Image for Mobile (shown only on small screens) */}
          <div className="md:hidden flex justify-center mt-6">
            <div className="relative w-60 h-60 rounded-full overflow-hidden ">
              <Image
                src={bgimage}
                alt="Vision Mission Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="hidden md:flex w-full md:w-1/2 justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  );
}
