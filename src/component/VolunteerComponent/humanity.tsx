"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "../../app/font";
import { VolunteerData } from "@/data/VolunterrData";
import { Helper } from "@/Helper/VolunteerHelper";
import { motion } from "framer-motion";

const Humanity: React.FC = () => {
  const { HumanitySection } = VolunteerData;
  const { subtitle, title, cards } = HumanitySection;

  return (
    <section className="w-full bg-white overflow-hidden">
      {/*Hero Section */}
      <div className="w-full px-4 md:px-24 mt-10">
        <div className="relative w-full rounded-2xl overflow-hidden">
          <Image
            src={Helper.bg}
            alt="Join us"
            width={1600}
            height={600}
            className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 bg-black/30 backdrop-blur-[2px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`${calistoga.className} text-white text-3xl md:text-5xl font-bold max-w-lg leading-snug`}
            >
              We can save more lives with you!
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6"
            >
              <button className="flex items-center gap-2 bg-[#73BE5F] hover:bg-[#5AA84D] text-white font-medium text-sm md:text-base px-6 py-2 rounded-full transition-all duration-300">
                <span className="text-lg">→</span> Join Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/*Content */}
      <div className="relative w-full py-12 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center md:text-left"
          >
            <h4
              className={`${sueEllen.className} text-lg md:text-2xl text-[#1E1E1E] mb-2`}
            >
              {subtitle}
            </h4>
            <h2
              className={`${calistoga.className} text-3xl md:text-5xl font-bold text-[#73BE5F]`}
            >
              {title}
            </h2>
          </motion.div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative bg-[#EEFFE9] rounded-xl p-6 pl-12 shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute -left-6 top-1/2 -translate-y-1/2">
                  <Image
                    src={card.icon}
                    alt={card.heading}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3
                  className={`${calistoga.className} text-lg md:text-xl font-semibold text-[#73BE5F ] mb-2`}
                >
                  {card.heading}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Humanity;
