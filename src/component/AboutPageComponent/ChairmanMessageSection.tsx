"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";

const ChairmanMessageSection = () => {
  const { ChairmanMessageSection } = AboutUsData;
  const { heading, message, chairmanName, images } = ChairmanMessageSection;

  return (
    <section className="relative w-full py-14 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* --- Left Images --- */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full lg:w-[55%] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
            <Image src={images[0]} alt="Chairman" fill className="object-cover" />
          </div>

          <div className="flex flex-col w-full lg:w-[45%] justify-between gap-3">
            {images.slice(1).map((img, i) => (
              <div
                key={i}
                className="relative w-full aspect-[4/3.2] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image src={img} alt={`Foundation Work ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- Right Text --- */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className={`${calistoga.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#73BE5F] mb-4`}
          >
            {heading}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-[15px] mb-6 max-w-[90%] mx-auto lg:mx-0">
            {message}
          </p>
          <p
            className={`${calistoga.className} text-lg md:text-xl font-bold text-[#73BE5F]`}
          >
            - {chairmanName}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChairmanMessageSection;
