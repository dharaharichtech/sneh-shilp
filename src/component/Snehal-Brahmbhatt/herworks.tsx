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
      {/* --- Her Works --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[#EEFFE9] rounded-2xl p-6 md:p-10"
      >
        <div className="text-center mb-10">
          <h2 className={`${sueEllen.className} text-lg md:text-xl text-gray-700`}>
            {herworks.title}
          </h2>
          <h1
            className={`${calistoga.className} text-3xl md:text-4xl font-bold text-[#73BE5F] mt-2`}
          >
            {herworks.heading}
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed text-sm md:text-base font-medium">
            {herworks.description}
          </p>
        </div>

        {/* --- Works Gallery --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto mb-12">
          {herworks.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-3 flex justify-center"
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={280}
                height={200}
                className="rounded-lg object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- Media Coverage --- */}
      <div className="text-center mt-20 mb-10">
        <h2 className={`${sueEllen.className} text-lg md:text-xl text-gray-700`}>
          {media.title}
        </h2>
        <h1
          className={`${calistoga.className} text-3xl md:text-4xl font-bold text-[#73BE5F] mt-2`}
        >
          {media.heading}
        </h1>
      </div>

      {/* --- Media Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
        {media.cards.map((news, index) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center"
          >
            <Image
              src={news.img}
              alt="News Image"
              width={300}
              height={300}
              className="rounded-md object-cover w-full h-60 md:h-72"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HerWorks;
