"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { snehalData } from "@/data/snehalData";
import { calistoga, sueEllen } from "../../app/font";

const HerWorks: React.FC = () => {
  const { herworks, media } = snehalData;

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      {/* --- Her Works Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[#EEFFE9] rounded-2xl p-6 md:p-10"
      >
        {/* 🌿 Text Section */}
        <div className="text-center mb-10">
          <h2
            className={`${sueEllen.className} text-base sm:text-lg md:text-2xl text-gray-700`}
          >
            {herworks.title}
          </h2>
          <h1
            className={`${calistoga.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#73BE5F] mt-2`}
          >
            {herworks.heading}
          </h1>
          <p className="text-gray-600 mt-4 max-w-8xl mx-auto leading-relaxed text-sm sm:text-base font-medium px-2">
            {herworks.description}
          </p>
        </div>

        {/* 🌿 Works Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto mb-12">
          {herworks.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl hover:shadow-lg transition-all duration-300 p-3 flex justify-center items-center"
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={300}
                height={220}
                className="rounded-lg object-cover w-full h-[200px] sm:h-[220px] md:h-[240px]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- Media Coverage Section --- */}
      <div className="text-center mt-20 mb-10 px-3">
        <h2
          className={`${sueEllen.className} text-base sm:text-lg md:text-xl text-gray-700`}
        >
          {media.title}
        </h2>
        <h1
          className={`${calistoga.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#73BE5F] mt-2`}
        >
          {media.heading}
        </h1>
      </div>

      {/* 🌿 Media Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto px-2 sm:px-4">
        {media.cards.map((news, index) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center justify-center"
          >
            <Image
              src={news.img}
              alt="News Image"
              width={300}
              height={300}
              className="rounded-xl object-cover w-full h-[220px] sm:h-[260px] md:h-[280px]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HerWorks;
