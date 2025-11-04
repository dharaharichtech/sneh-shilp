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
    <section className="bg-[#E8FBE4] px-6 md:px-12 lg:px-20 py-12 rounded-xl">
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
          <p className="text-gray-600 max-w-3xl">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold">{card.title}</h4>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
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
