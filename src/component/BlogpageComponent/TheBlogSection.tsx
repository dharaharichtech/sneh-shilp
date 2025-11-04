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
    <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-8 md:px-14 lg:px-20 bg-white overflow-hidden">
      {/* Title & Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h4
          className={`${sueEllen.className} text-base sm:text-2xl md:text-3xl text-gray-700 mb-2 sm:mb-3`}
        >
          {title}
        </h4>
        <h2
          className={`${calistoga.className} text-xl sm:text-3xl md:text-5xl text-[#73BE5F]`}
        >
          {heading}
        </h2>
        <div className="mt-3 sm:mt-4 space-y-2">
          {description.map((line, index) => (
            <p
              key={index}
              className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed px-2"
            >
              {line}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Blog Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        viewport={{ once: true }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="rounded-2xl shadow-sm overflow-hidden bg-white border border-gray-100 hover:shadow-md transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Blog Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64">
              <Image
                src={card.image}
                alt={card.highlight}
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
              <p className="text-gray-500 text-xs sm:text-sm">{card.date}</p>
              <h3 className="text-[#73BE5F] font-semibold text-sm sm:text-base md:text-lg leading-snug">
                {card.highlight}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Read More Button */}
            <div className="flex items-center justify-between px-4 sm:px-5 pb-4 sm:pb-5">
              {card.link ? (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href={card.link}>
                    <button className="flex items-center gap-2 text-[#73BE5F] text-xs sm:text-sm md:text-base font-medium hover:underline transition-all">
                      {card.belowtext}
                      <Image
                        src={card.icon}
                        alt="arrow"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </button>
                  </Link>
                </motion.div>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm md:text-base font-medium cursor-not-allowed"
                >
                  {card.belowtext}
                  <Image
                    src={card.icon}
                    alt="arrow"
                    width={16}
                    height={16}
                    className="object-contain opacity-50"
                  />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TheBlogSection;
