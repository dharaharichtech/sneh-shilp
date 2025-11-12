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
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 bg-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* ✅ Title */}
        <motion.div
          className="relative text-center mb-12 md:mb-16"
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
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] z-10 hidden md:block">
            <div className="w-4 h-4 rounded-full bg-[#73BE5F]" />
          </div>
        </motion.div>

        {/* ✅ Vertical Line (Desktop Only) */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-[2px] hidden md:block"
          style={{
            top: "100px",
            bottom: "0",
            backgroundImage:
              "linear-gradient(to bottom, #73BE5F 60%, transparent 40%)",
            backgroundSize: "4px 14px",
            backgroundRepeat: "repeat-y",
          }}
        />

        {/* ✅ Timeline Content */}
        <div className="space-y-12 md:space-y-0">
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative"
              style={{ marginTop: index === 0 ? "0" : "-40px" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Desktop Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block top-0">
                <div className="w-6 h-6 rounded-full border-[2.5px] border-[#73BE5F] bg-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#73BE5F]" />
                </div>
              </div>

              {/* ✅ Mobile View — Simple Stack (text over image) */}
              <div
                className={`flex flex-col md:flex-row items-start gap-4 md:gap-0 ${
                  item.position === "right"
                    ? "md:flex-row-reverse md:text-right"
                    : ""
                }`}
              >
                {/* Text & Image Section */}
                <div className="w-full md:w-[45%] space-y-3 md:space-y-4 md:px-6">
                  {/* Heading */}
                  <h2
                    className={`${calistoga.className} text-2xl md:text-3xl font-bold text-[#73BE5F]`}
                  >
                    {item.heading}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed">
                    {item.description}
                  </p>

                  {/* ✅ Image — Visible Below Text */}
                  <motion.div
                    className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl mt-3"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
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

                {/* Empty Spacer (for desktop layout) */}
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
