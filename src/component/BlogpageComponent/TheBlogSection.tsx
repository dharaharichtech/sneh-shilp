"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { calistoga, sueEllen } from "@/app/font";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCard {
  id: number;
  image: StaticImageData;
  date: string;
  highlight: string;
  description: string;
  belowtext: string;
  icon: StaticImageData;
  link?: string;
}

interface BlogSectionProps {
  data: {
    title: string;
    heading: string;
    description: string[];
    cards: BlogCard[];
  };
}

const TheBlogSection: React.FC<BlogSectionProps> = ({ data }) => {
  const { title, heading, description, cards } = data;

  return (
    <section className="w-full py-14 md:py-20 px-5 sm:px-10 lg:px-20 bg-white overflow-hidden mt-[-50px] md:mt-[-120px] ">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4
          className={`${sueEllen.className} text-lg sm:text-2xl text-gray-700 mb-2`}
        >
          {title}
        </h4>
        <h2
          className={`${calistoga.className} text-3xl sm:text-4xl md:text-5xl font-bold text-[#73BE5F] mb-4`}
        >
          {heading}
        </h2>
        <div className="space-y-2 text-gray-500">
          {description.map((line, i) => (
            <p
              key={i}
              className="text-sm sm:text-base leading-relaxed max-w-50xl mx-auto"
            >
              {line}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Blog Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        viewport={{ once: true }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-[#E5F4E2] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-52 sm:h-60 md:h-64">
              <Image
                src={card.image}
                alt={card.highlight}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <p className="text-gray-500 text-xs sm:text-sm mb-2">
                {card.date}
              </p>
              <h3 className="text-[#73BE5F] font-bold text-base sm:text-lg mb-2 leading-snug">
                {card.highlight}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-grow">
                {card.description}
              </p>
            </div>

            {/* Full Green Read More Bar */}
            <div className="mt-auto">
              {card.link ? (
                <Link href={card.link}>
                  <motion.div
                    whileHover={{ backgroundColor: "#ECECEC" }}
                    className="bg-[#ECECEC] border-t border-[#73BE5F] cursor-pointer"
                  >
                    <div className="flex items-center justify-between px-5 py-3">
                      <span className="text-[#73BE5F] text-sm sm:text-base font-semibold">
                        {card.belowtext}
                      </span>
                      <Image
                        src={card.icon}
                        alt="arrow"
                        width={18}
                        height={18}
                        className="object-contain text-[#73BE5F]"
                      />
                    </div>
                  </motion.div>
                </Link>
              ) : (
                <div className="bg-gray-100 border-t border-gray-300 px-5 py-3 text-gray-400 text-sm font-medium flex items-center justify-between">
                  {card.belowtext}
                  <Image
                    src={card.icon}
                    alt="arrow"
                    width={18}
                    height={18}
                    className="opacity-40"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TheBlogSection;
