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
    <section className="relative w-full min-h-[85vh] overflow-hidden flex items-center justify-start">
      {/* Background Image */}
      <Image
        src={data.bgimage}
        alt="Background"
        fill
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      {/* Left Aligned Card */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#F8F9F8]/95 rounded-3xl shadow-lg w-[90%] sm:w-[80%] lg:w-[55%] xl:w-[45%] 
                   py-10 sm:py-14 px-6 sm:px-12 text-center ml-4 sm:ml-10 lg:ml-20"
      >
        {/* Title */}
        <h4
          className={`${sueEllen.className} text-lg sm:text-xl text-gray-800 mb-2`}
        >
          {data.title}
        </h4>

        {/* Heading */}
        <h2
          className={`${calistoga.className} text-3xl sm:text-4xl text-[#73BE5F] mb-10`}
        >
          {data.heading}
        </h2>

        {/* Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10 place-items-center">
          {data.belowicons.map((icon) => (
            <motion.div
              key={icon.id}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center justify-center space-y-3"
            >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all hover:scale-100">
                <Image
                  src={icon.image}
                  alt={icon.description}
                  width={80}
                  height={80}
                  className="object-contain opacity-90"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-700 font-medium leading-tight">
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
