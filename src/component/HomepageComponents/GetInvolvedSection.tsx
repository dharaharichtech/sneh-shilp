"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "../../app/font";

interface InvolvedIcon {
  id: number;
  image: StaticImageData;
  description: string;
}

interface GetInvolvedSectionProps {
  data: {
    title: string;
    heading: string;
    belowicons: InvolvedIcon[];
    bgimage: StaticImageData;
  };
}

const GetInvolvedSection: React.FC<GetInvolvedSectionProps> = ({ data }) => {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden flex items-center justify-center mt-[-90px] md:mt-[-30px]">
      {/* ✅ Background Image */}
      <Image
        src={data.bgimage}
        alt="Background"
        fill
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      {/* ✅ White Card */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/95 rounded-3xl shadow-lg 
                   w-[90%] sm:w-[80%] lg:w-[55%] xl:w-[45%]
                   py-8 sm:py-12 px-5 sm:px-10 
                   text-center mx-auto"
      >
        {/* ✅ Title */}
        <h4
          className={`${sueEllen.className} text-lg sm:text-xl text-gray-800 mb-1 sm:mb-2`}
        >
          {data.title}
        </h4>

        {/* ✅ Heading */}
        <h2
          className={`${calistoga.className} text-2xl sm:text-4xl text-[#73BE5F] mb-8 sm:mb-10`}
        >
          {data.heading}
        </h2>

        {/* ✅ Icons Grid */}
        <div
          className="grid 
                     grid-cols-2 gap-6 
                     sm:grid-cols-3 sm:gap-10 
                     lg:grid-cols-5 
                     place-items-center justify-items-center"
        >
          {data.belowicons.map((icon, index) => (
            <motion.div
              key={icon.id}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex flex-col items-center lg:items-start justify-center space-y-2 sm:space-y-3 ${
                index === data.belowicons.length - 1
                  ? "col-span-2 sm:col-span-1 justify-self-center"
                  : ""
              }`}
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center lg:justify-start">
                <Image
                  src={icon.image}
                  alt={icon.description}
                  width={60}
                  height={60}
                  className="object-contain opacity-90"
                />
              </div>

              <p className="text-[18px] sm:text-[14px] md:text-[15px] text-gray-700 font-medium leading-tight text-center lg:text-left max-w-[120px]">
                {icon.description}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default GetInvolvedSection;
