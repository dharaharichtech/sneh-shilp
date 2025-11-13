"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { calistoga } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";

interface TimelineItem {
  id: number;
  position: "left" | "right";
  heading: string;
  description: string;
  image: StaticImageData;
}

const JourneySection: React.FC = () => {
  const { JourneySection } = AboutUsData;
  const { title, timeline } = JourneySection as {
    title: string;
    timeline: TimelineItem[];
  };

  return (
    <section
      id="our-journey"
      className="relative w-full py-5 md:py-12 px-6 md:px-12 bg-white overflow-hidden scroll-mt-20"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* ✅ Title */}
        <motion.div
          className="relative text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1
            className={`${calistoga.className} text-3xl md:text-5xl font-bold text-[#73BE5F]`}
          >
            {title}
          </h1>

          {/* Desktop Top Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-25px] z-10 hidden md:block">
            <div className="w-3.5 h-3.5 rounded-full bg-[#73BE5F]" />
          </div>
        </motion.div>

        {/* ✅ Vertical Line (Desktop Only) */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-[2px] hidden md:block"
          style={{
            top: "90px",
            bottom: "0",
            backgroundImage:
              "linear-gradient(to bottom, #73BE5F 60%, transparent 40%)",
            backgroundSize: "4px 12px",
            backgroundRepeat: "repeat-y",
          }}
        />

        {/* ✅ Timeline */}
        <div className="space-y-10 md:space-y-0"> {/* Reduced spacing */}
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative ${index !== 0 ? "mt-6 md:mt-0" : ""}`} // less vertical gap
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Desktop Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block top-0">
                <div className="w-5 h-5 rounded-full border-[2px] border-[#73BE5F] bg-white flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#73BE5F]" />
                </div>
              </div>

              {/* ✅ Card Layout */}
              <div
                className={`flex flex-col md:flex-row items-start md:items-center md:gap-0 ${
                  item.position === "right"
                    ? "md:flex-row-reverse md:text-right"
                    : ""
                }`}
              >
                {/* Text & Image Section */}
                <div className="w-full md:w-[45%] space-y-2 md:space-y-3 md:px-6 p-4 rounded-2xl md:rounded-none">
                  <h2
                    className={`${calistoga.className} text-2xl md:text-3xl font-bold text-[#73BE5F]`}
                  >
                    {item.heading}
                  </h2>

                  <p className="text-gray-700 text-[14px] md:text-[16px] leading-relaxed">
                    {item.description}
                  </p>

                  <motion.div
                    className="relative w-full h-52 sm:h-60 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl mt-2"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={item.image}
                      alt={item.heading}
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Empty Spacers for desktop alignment */}
                <div className="hidden md:block w-[10%]" />
                <div className="hidden md:block w-[45%]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
