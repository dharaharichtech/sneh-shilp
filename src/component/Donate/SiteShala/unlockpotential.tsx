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
      {/* 🌿 Top Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 text-center">
        <h3
          className={`${sueEllen.className} text-lg md:text-2xl text-[#3B5D50]`}
        >
          {title}
        </h3>

        <h2
          className={`${calistoga.className} text-3xl md:text-5xl text-[#6D9886] mt-3`}
        >
          {heading}
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {/* 🧥 Boxes */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {boxes.map((box) => (
            <div
              key={box.id}
              className={`rounded-2xl p-6 shadow-md hover:shadow-lg border border-gray-100 transition-all bg-white`}
            >
              <Image
                src={box.icon}
                alt={box.title}
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <p className="text-gray-500 text-sm">{box.subtitle}</p>
              <h4
                className={`${calistoga.className} text-[#6D9886] text-xl mt-1`}
              >
                {box.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* 💚 Difference Section */}
      <div className="bg-[#f0f8f5] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p
              className={`${sueEllen.className} text-xl text-[#3B5D50] mb-2`}
            >
              {difference.smallTitle}
            </p>

            <h2
              className={`${calistoga.className} text-4xl md:text-5xl text-[#6D9886] mb-4`}
            >
              {difference.heading}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {difference.description}
            </p>

            <button className="flex items-center gap-2 bg-[#6D9886] text-white px-6 py-3 rounded-full hover:bg-[#3B5D50] transition">
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
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-[10px] border-[#d2e8dd]">
              <Image
                src={difference.imageMain}
                alt="Main Donation"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden border-[5px] border-white shadow-md">
              <Image
                src={difference.imageSmall}
                alt="Small Donation"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wardrobe;
