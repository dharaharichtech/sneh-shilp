"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";
import AboutusButtons from "@/buttons/Aboutusbutton";

const DecadesShilpGroup = () => {
  const { DecadesShilpGroup } = AboutUsData;
  const { subtitle, title, description, images, button } = DecadesShilpGroup;

  return (
    // <section className="bg-[#E8FBE6] w-full py-10 md:py-14 px-4 md:px-10">
    <section className="bg-[#E8FBE6] w-[85%] md:w-[90%] mx-auto py-10 md:py-14 px-4 md:px-10 rounded-2xl shadow-md">

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        <div className="w-full lg:w-[48%] border border-[#73BE5F] p-5 md:p-6 rounded-2xl shadow-sm bg-white/70">
          <h4 className={`${sueEllen.className} text-xl md:text-2xl text-black mb-2`}>
            {subtitle}
          </h4>
          <h2 className={`${calistoga.className} text-3xl md:text-4xl text-[#73BE5F] font-bold mb-4`}>
            {title}
          </h2>
          <p className="text-gray-700 text-[13px] md:text-[15px] leading-relaxed whitespace-pre-line mb-5">
            {description}
          </p>
          <AboutusButtons text={button.text} />
        </div>

        <div className="w-full lg:w-[45%] flex justify-center items-center">
          <div className="relative w-[85%] aspect-[1/1] bg-[#D9D9D9] rounded-2xl overflow-hidden flex flex-col justify-end">
            
            <div className="w-full h-[70%] bg-[#D9D9D9] rounded-b-2xl relative">
              <Image
                src={images[1]}
                alt="Shilp Gray"
                fill
                className="object-cover rounded-b-2xl"
              />
            </div>

            <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[#1D1D1D] rounded-tl-2xl rounded-br-[40px] overflow-hidden shadow-md">
              <Image
                src={images[0]}
                alt="Shilp Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecadesShilpGroup;
