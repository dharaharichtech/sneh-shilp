"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "@/app/font";

interface BoxType {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  bg?: string;
}

interface DifferenceSection {
  smallTitle: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
  imageMain: string;
  imageSmall: string;
}

interface ClothingPageProps {
  title: string;
  heading: string;
  description: string;
  boxes: BoxType[];
  difference: DifferenceSection;
}

const Wardrobe: React.FC<{ data: ClothingPageProps }> = ({ data }) => {
  const { title, heading, description, boxes, difference } = data;

  return (
    <section className="w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 text-center">
        <h3 className={`${sueEllen.className} text-xl md:text-3xl text-gray-800`}>
          {title}
        </h3>
        <h2
          className={`${calistoga.className} text-3xl md:text-5xl text-[#73BE5F] mt-3`}
        >
          {heading}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {/* Boxes */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {boxes.map((box) => (
            <div
              key={box.id}
              className={`rounded-2xl p-6 border hover:shadow-lg transition-all ${
                box.bg ? box.bg : "bg-white"
              }`}
            >
              <Image
                src={box.icon}
                alt={box.title}
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <p className="text-gray-600 text-sm">{box.subtitle}</p>
              <h4
                className={`${calistoga.className} text-[#73BE5F] text-xl mt-1`}
              >
                {box.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Difference Section */}
      <div className="bg-[#EEFFE9] py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h4
              className={`${sueEllen.className} text-2xl md:text-3xl text-gray-700 mb-2`}
            >
              {difference.smallTitle}
            </h4>
            <h2
              className={`${calistoga.className} text-3xl md:text-5xl text-[#73BE5F] mb-3`}
            >
              {difference.heading}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {difference.description}
            </p>

            <button className="flex items-center gap-3 bg-[#73BE5F] text-white px-6 py-3 rounded-full hover:bg-[#9addaa] transition-all">
              <Image
                src={difference.buttonIcon}
                alt="Donate Now"
                width={20}
                height={20}
              />
              {difference.buttonText}
            </button>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-[300px] h-[400px] md:w-[490px] md:h-[400px] ">
              <Image
                src={difference.imageMain}
                alt="Main Donation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wardrobe;
