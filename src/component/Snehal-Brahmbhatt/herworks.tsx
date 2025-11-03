"use client";

import React from "react";
import Image from "next/image";
import { snehalData } from "@/data/snehalData";
import { calistoga, sueEllen } from "../../app/font";

const HerWorks: React.FC = () => {
  const { herworks, media } = snehalData;

  return (
    <section className="py-20 px-6 md:px-20">
      {/* --- Her Works --- */}
      <div className="bg-[#EEFFE9] rounded-2xl">
      <div className="text-center mb-16 ">
        <h2 className={`${sueEllen.className} text-xl text-gray-700`}>
          {herworks.title}
        </h2>
        <h1
          className={`${calistoga.className} text-3xl md:text-4xl font-bold text-[#73BE5F] mt-2 `}
        >
          {herworks.heading}
        </h1>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed font-medium">
          {herworks.description}
        </p>
      </div>

      {/* --- Works Gallery --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
        {herworks.gallery.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 flex justify-center"
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={300}
              height={200}
              className="rounded-lg object-contain"
            />
          </div>
        ))}
      </div>
        </div>
      

      {/* --- Media Coverage --- */}
      <div className="text-center mb-10 ">
        <h2 className={`${sueEllen.className} text-xl text-gray-700`}>
          {media.title}
        </h2>
        <h1
          className={`${calistoga.className} text-3xl md:text-4xl font-bold text-[#73BE5F] mt-2`}
        >
          {media.heading}
        </h1>
      </div>

      {/* --- Media Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {media.cards.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4"
          >
            <div className="flex justify-center">
              <Image
                src={news.img}
                alt="News Image"
                width={300}
                height={300}
                className="rounded-md object-cover"
              />
            </div>
            <p
              className={`${calistoga.className} text-center text-gray-700 mt-4 text-sm`}
            >
              {/* {news.title} */}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HerWorks;
