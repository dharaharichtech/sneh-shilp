"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "../../app/font";

interface PartnerCard {
  id: number;
  icon: StaticImageData;
}

interface FoundationSectionProps {
  data: {
    title: string;
    heading: string;
    cards: PartnerCard[];
  };
}

const FoundationSection: React.FC<FoundationSectionProps> = ({ data }) => {
  return (
    <section className="bg-white py-16 px-4 sm:px-10 lg:px-20 mt-[-70px] md:mt-[-30px]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h4
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${sueEllen.className} text-xl sm:text-4xl text-gray-800 mb-6`}
        >
          {data.title}
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className={`${calistoga.className} text-3xl sm:text-5xl text-[#73BE5F] mb-14`}
        >
          {data.heading}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {data.cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6"
            >
              <div className="relative w-32 h-16 sm:w-40 sm:h-20">
                <Image
                  src={card.icon}
                  alt={`Partner ${card.id}`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
