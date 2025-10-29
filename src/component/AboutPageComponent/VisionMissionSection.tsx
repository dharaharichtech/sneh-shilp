"use client";

import React from "react";
import Image from "next/image";
import { calistoga } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";

export default function VisionMissionSection() {
  const { VisionMissionSection } = AboutUsData;
  const { Vision, Mission, bgImage } = VisionMissionSection;

  return (
    <section className="relative w-full py-16 md:py-24 mt-10 md:mt-20 rounded-2xl overflow-hidden shadow-md">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Vision and Mission Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 text-gray-800">
        <div className="w-full md:w-1/2 space-y-12">
          {/* Vision */}
          <div>
            <h2
              className={`${calistoga.className} text-4xl md:text-5xl font-bold text-[#73BE5F]`}
            >
              {Vision.heading}
            </h2>
            <p className="leading-relaxed text-lg mt-4">
              {Vision.description}
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2
              className={`${calistoga.className} text-4xl md:text-5xl font-bold text-[#73BE5F]`}
            >
              {Mission.heading}
            </h2>
            <p className="leading-relaxed text-lg mt-4">
              {Mission.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
