"use client";

import React from "react";
import Image from "next/image";
import { calistoga } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";

const ChairmanMessageSection = () => {
  const { ChairmanMessageSection } = AboutUsData;
  const { heading, message, chairmanName, images } = ChairmanMessageSection;

  return (
    <section className="relative w-full py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-3">
            <div className="relative w-full lg:w-[55%] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images[0]}
                alt="Chairman"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col w-full lg:w-[45%] justify-between">
              <div className="relative w-full aspect-[4/3.2] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images[1]}
                  alt="Foundation Work 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[4/3.2] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images[2]}
                  alt="Foundation Work 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2
              className={`${calistoga.className} text-2xl md:text-3xl lg:text-5xl font-bold text-[#73BE5F] mb-4`}
            >
              {heading}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-[15px] mb-6 max-w-[90%] mx-auto lg:mx-0">
              {message}
            </p>
            <p
              className={`${calistoga.className} text-xl md:text-2xl font-bold text-[#73BE5F]`}
            >
              - {chairmanName}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessageSection;
