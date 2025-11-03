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
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      <Image
        src={data.bgimage}
        alt="Background"
        fill
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="flex items-center justify-start h-full px-4 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-lg w-full sm:w-3/4 lg:w-1/2 text-center py-10 px-6 sm:px-10 lg:px-12"
        >
          <h4
            className={`${sueEllen.className} text-lg sm:text-xl text-gray-800 mb-2`}
          >
            {data.title}
          </h4>

          <h2
            className={`${calistoga.className} text-3xl sm:text-4xl text-[#4C9A2A] mb-10`}
          >
            {data.heading}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 place-items-center">
            {data.belowicons.map((icon) => (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center space-y-3"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src={icon.image}
                    alt={icon.description}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <p className="text-sm sm:text-md text-gray-700 font-medium">
                  {icon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
