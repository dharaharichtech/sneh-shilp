"use client";
import React from "react";
import Image from "next/image";
import { heritageData } from "@/data/heritageData";
import { calistoga, sueEllen } from "@/app/font";

const Participate: React.FC = () => {
  const { participate, pastEvents } = heritageData;

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🌿 Title */}
        <div className="text-center mb-10">
          <h4 className={`${sueEllen.className} text-lg text-gray-700 mb-2`}>
            {participate.subtitle}
          </h4>
          <h2
            className={`${calistoga.className} text-3xl md:text-4xl text-[#6BB45B] font-bold`}
          >
            {participate.title}
          </h2>
        </div>

        {/* 🌿 Form */}
        <div className="bg-[#EEFFE9] p-8 shadow-sm mb-20">
          <h3 className="text-[#6BB45B] text-lg font-semibold mb-6">
            {participate.formTitle}
          </h3>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  <input
    placeholder="Your Name"
    className="p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all"
  />
  <input
    placeholder="Email Id"
    className="p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all"
  />
  <input
    placeholder="Mobile no."
    className="p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all"
  />
  <input
    placeholder="Pincode"
    className="p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all"
  />
</div>

<textarea
  placeholder="Address"
  className="w-full p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all resize-none"
  rows={3}
/>


            <button
              type="submit"
              className="flex items-center gap-2 bg-[#6BB45B] text-white px-8 py-3 rounded-full hover:bg-[#5AA04E] transition-all"
            >
              {participate.buttonText}
              <Image
                src={participate.icon}
                alt="Submit icon"
                width={18}
                height={18}
              />
            </button>
          </form>
        </div>

        {/* 🌿 Past Events */}
        <div className="text-center mb-10">
          <h4 className={`${sueEllen.className} text-lg text-gray-700 mb-2`}>
            {pastEvents.subtitle}
          </h4>
          <h2
            className={`${calistoga.className} text-2xl md:text-3xl text-[#6BB45B] font-bold`}
          >
            {pastEvents.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {pastEvents.images.map((img, i) => (
            <div
              key={i}
              className="relative w-full aspect-[4/5] overflow-hidden rounded-xl hover:scale-[1.03] transition"
            >
              <Image src={img} alt={`Past ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participate;
