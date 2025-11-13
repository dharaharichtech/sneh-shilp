"use client";

import React from "react";
import Image from "next/image";
import { VolunteerData } from "@/data/VolunterrData";
import { calistoga, sueEllen } from "@/app/font";
import { motion } from "framer-motion";

const OurTeam: React.FC = () => {
  const data = VolunteerData.OurTeamSection;

  return (
    <section className="w-full bg-[#EEFFE9] py-16 px-6 md:px-12 lg:px-20 rounded-3xl overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 max-w-3xl mx-auto"
      >
        <h4 className={`${sueEllen.className} text-lg md:text-2xl text-gray-700 mb-3`}>
          {data.subtitle}
        </h4>
        <h2 className={`${calistoga.className} text-3xl md:text-5xl text-[#73BE5F] mb-4`}>
          {data.title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {data.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.cards.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#EFFFF9] rounded-full">
              <Image
                src={item.icon}
                alt={item.heading}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <h3 className={`${calistoga.className} text-[#73BE5F] text-lg md:text-xl font-semibold`}>
              {item.heading}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
