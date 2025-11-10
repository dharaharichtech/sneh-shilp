"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "../../app/font";
import { VolunteerData } from "@/data/VolunterrData";
import { Helper } from "@/Helper/VolunteerHelper";
import AboutusButtons from "../../buttons/Aboutusbutton";

const Humanity: React.FC = () => {
  const { HumanitySection } = VolunteerData;
  const { subtitle, title, cards } = HumanitySection;

  return (
    <section className="w-full bg-white overflow-hidden">
      {/* ---------------- Hero Section ---------------- */}
      <div className="w-full px-4 md:px-24 mt-10">
        <div className="relative w-full rounded-2xl overflow-hidden">
          <Image
            src={Helper.bg}
            alt="Join us"
            width={1600}
            height={600}
            className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 md:px-16 bg-black/40 backdrop-blur-[2px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`${calistoga.className} text-white text-3xl md:text-5xl font-bold max-w-xl leading-snug text-center md:text-left`}
            >
              We can save more lives with you!
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex justify-center md:justify-start"
            >
              <AboutusButtons
                text="Explore More"
                scrollTo="next-section"
                direction="down"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------------- Content Section ---------------- */}
      <div
        id="next-section"
        className="relative w-full py-16 md:py-24 px-6 md:px-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* ---------- Left Heading ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left mb-16 md:mb-20 md:w-[45%]"
          >
            <h4
              className={`${sueEllen.className} text-xl md:text-2xl text-[#1E1E1E] mb-2`}
            >
              {subtitle}
            </h4>
            <h2
              className={`${calistoga.className} text-3xl md:text-5xl font-bold text-[#73BE5F] leading-snug`}
            >
              {title}
            </h2>
          </motion.div>

          {/* ---------- Cards as two-column grid (improved layout) ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {cards.map((card, i) => {
              const isLeftColumn = i % 2 === 0; // even indexes -> left column, odd -> right
              const iconPositionClass = isLeftColumn
                ? "-left-6 md:-left-7"
                : "-right-6 md:-right-7";

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative bg-[#EEFFE9] rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Icon overlapping the card edge */}
                    <div
                      className={`absolute top-6 md:top-8 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#73BE5F] flex items-center justify-center shadow-lg ${iconPositionClass}`}
                    >
                      <Image
                        src={card.icon}
                        alt={card.heading}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>

                    {/* Text content */}
                    <h3
                      className={`${calistoga.className} text-2xl md:text-3xl font-semibold text-[#73BE5F] mb-4`}
                    >
                      {card.heading}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Humanity;
