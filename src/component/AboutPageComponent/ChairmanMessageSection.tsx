"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";

const ChairmanMessageSection = () => {
  const { ChairmanMessageSection } = AboutUsData;
  const { heading, message, chairmanName, images } = ChairmanMessageSection;

  return (
 <section className="relative w-full py-10 md:py-1 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* ✅ LEFT IMAGE (Desktop layout only) */}
        <motion.div
          className="hidden lg:flex w-full lg:w-1/2 justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-[85%] rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
            <Image
              src={images[0]}
              alt="Chairman Portrait"
              width={700}
              height={850}
              className="object-contain w-full h-auto bg-gray-50 rounded-3xl p-2"
              priority
            />
          </div>
        </motion.div>

        {/* ✅ RIGHT CONTENT */}
        <motion.div
          className="w-full lg:w-1/2 text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* ✅ Heading (Now Left Aligned for All Screens) */}
          <h3
            className={`${sueEllen.className} text-2xl md:text-3xl text-[#2E4049] mb-2`}
          >
            Chairman’s Message
          </h3>

          <h2
            className={`${calistoga.className} text-3xl md:text-5xl font-bold text-[#73BE5F] mb-6`}
          >
            {heading}
          </h2>

          {/* ✅ MOBILE IMAGE (Center Image for Mobile) */}
        <div className="lg:hidden flex flex-col items-start mb-6">
          <div className="relative w-full h-70 rounded-xl overflow-hidden">
            <Image
              src={images[0]}
              alt="Chairman Portrait"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>


          {/* ✅ Message Text (Left Aligned for Mobile + Desktop) */}
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mb-5 max-w-[95%] lg:max-w-[90%]">
            {message}
          </p>

          {/* ✅ Signature (Left Aligned) */}
          <p
            className={`${calistoga.className} text-base sm:text-lg md:text-xl font-semibold text-[#73BE5F] italic`}
          >
            – {chairmanName}
          </p>
        </motion.div>
      </div>

      {/* ✅ Decorative blur circles */}
      <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-[#73BE5F]/20 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-20 w-72 h-72 bg-[#73BE5F]/10 rounded-full blur-3xl" />
    </section>
  );
};

export default ChairmanMessageSection;
