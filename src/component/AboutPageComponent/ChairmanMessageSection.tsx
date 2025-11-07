"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";

const ChairmanMessageSection = () => {
  const { ChairmanMessageSection } = AboutUsData;
  const { heading, message, chairmanName, images } = ChairmanMessageSection;

  return (
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-white to-[#f9fafb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* --- Left Single Image --- */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-[90%] md:w-[80%] lg:w-[85%] rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={images[0]}
                alt="Chairman Portrait"
                width={700}
                height={850}
                className="object-contain w-full h-auto mx-auto bg-gray-50 rounded-3xl p-2"
                priority
              />
          </div>

        </motion.div>

        {/* --- Right Text Content --- */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3
            className={`${sueEllen.className} text-2xl md:text-3xl text-[#2E4049] mb-2`}
          >
            Chairman’s Message
          </h3>

          <h2
            className={`${calistoga.className} text-4xl md:text-5xl font-bold text-[#73BE5F] mb-6`}
          >
            {heading}
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8 max-w-[95%] mx-auto lg:mx-0">
            {message}
          </p>

          <p
            className={`${calistoga.className} text-lg md:text-xl font-semibold text-[#73BE5F]`}
          >
            — {chairmanName}
          </p>
        </motion.div>
      </div>

      {/* Decorative blur backgrounds */}
      <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-[#73BE5F]/20 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-20 w-72 h-72 bg-[#73BE5F]/10 rounded-full blur-3xl" />
    </section>
  );
};

export default ChairmanMessageSection;
