"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { calistoga, sueEllen } from "../../app/font"; // ✅ Fonts

interface InvolvedIcon {
  id: number;
  image: StaticImageData;
  description: string;
}

interface GetInvolvedSectionProps {
  title: string;
  heading: string;
  belowicons: InvolvedIcon[];
  bgimage: StaticImageData;
}

const GetInvolvedSection: React.FC<{ data: GetInvolvedSectionProps }> = ({
  data,
}) => {
  return (
    <section className="relative w-full h-[80vh] sm:h-[90vh] overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={data.bgimage}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* ✅ Foreground Content - aligned left */}
      <div className="flex items-center justify-start h-full px-4 sm:px-10 lg:px-20">
        {/* White card covering half width */}
        <div className="bg-white rounded-3xl shadow-lg w-full sm:w-3/4 lg:w-1/2 text-center py-10 px-6 sm:px-10 lg:px-12">
          {/* Title */}
          <h4
            className={`${sueEllen.className} text-lg sm:text-xl text-gray-800 mb-2`}
          >
            {data.title}
          </h4>

          {/* Heading */}
          <h2
            className={`${calistoga.className} text-3xl sm:text-4xl text-[#4C9A2A] mb-10`}
          >
            {data.heading}
          </h2>

          {/* Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 place-items-center">
            {data.belowicons.map((icon) => (
              <div
                key={icon.id}
                className="flex flex-col items-center justify-center space-y-3"
              >
                <div className="relative w-15 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full">
                  <Image
                    src={icon.image}
                    alt={icon.description}
                    fill
                    className="object-contain p-5"
                  />
                </div>
                <p className="text-sm sm:text-md text-gray-700 font-medium">
                  {icon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
