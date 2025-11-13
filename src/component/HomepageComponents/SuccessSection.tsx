"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "@/app/font";

interface SuccessCard {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
}

interface SuccessSectionProps {
  data: {
    title: string;
    heading: string;
    description: string;
    cards: SuccessCard[];
  };
}

const SuccessSection: React.FC<SuccessSectionProps> = ({ data }) => {
  const { title, heading, description, cards } = data;

  return (
    <section className="bg-[#E8FBE4] px-6 md:px-12 lg:px-20 py-12 md:py-16 rounded-xl mt-[-70px] md:mt-[-30px]">

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            className={`${sueEllen.className} text-2xl md:text-4xl text-gray-800 mb-4`}
          >
            {title}
          </h3>
          <h2
            className={`${calistoga.className} text-3xl md:text-5xl text-[#73BE5F] font-bold mb-4`}
          >
            {heading}
          </h2>
          <p className="text-gray-600 max-w-6xl">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 flex items-center gap-5 hover:shadow-xl transition-all duration-300"
            >
              {/* Bigger Icon */}
              <div className="w-16 h-16 flex-shrink-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              {/* Text Section */}
              <div>
                <h4
                  className={`${calistoga.className} text-gray-700 font-semi bold text-lg sm:text-xl`}
                >
                  {card.title}
                </h4>
                <p className="text-2xl sm:text-3xl text-gray-900 mt-1">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessSection;
