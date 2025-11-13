"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "@/app/font";

interface ClothingSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
  images: string[];
}

interface DonationSectionProps {
  title: string;
  heading: string;
  description: string;
  gallery: string[];
}

const ClothingSection: React.FC<{
  clothingData: ClothingSectionProps;
  donationData: DonationSectionProps;
}> = ({ clothingData, donationData }) => {
  return (
    <section className="w-full mb-40 mt-[-30px] md:mt-[-30px]">
      {/* ===================== CLOTHING SECTION ===================== */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2
              className={`${calistoga.className} text-3xl md:text-5xl font-extrabold text-[#73BE5F] mb-4 md:mb-6`}
            >
              {clothingData.title}
            </h2>

            <p className="text-gray-700 text-base md:text-10xl leading-relaxed mb-6 md:mb-10 max-w-xl">
              {clothingData.description}
            </p>

            <button className="flex items-center justify-center gap-3 bg-[#73BE5F] text-white font-semibold text-base md:text-10xl px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#58a34d] hover:transition-all duration-300 mx-auto ml-0 md:mx-0">
              <Image
                src={clothingData.buttonIcon}
                alt="Donate Now"
                width={26}
                height={26}
              />
              {clothingData.buttonText}
            </button>
          </div>

          {/* RIGHT IMAGES */}
      <div className="grid md:grid-cols-1 grid-cols-1 gap-3 md:gap-5">
  {clothingData.images.map((img, i) => (
    <div
      key={i}
      className="w-full rounded-2xl overflow-hidden md hover:transition-all duration-300 "
    >
      <Image
        src={img}
        alt="Clothing Donation"
        width={400}
        height={350}
        className="
          w-full 
          h-[250px] sm:h-[300px] 
          md:h-[350px] lg:h-[360px] 
          object-cover rounded-2xl 
          hover:scale-105 transition-transform duration-500
        "
      />
    </div>
  ))}
</div>

        </div>
      </div>

      {/* ===================== DONATION SECTION ===================== */}
      <div className="py-16 px-5 md:px-10  mt-[-50px] md:mt-[-30px]">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-14">
          <h4
            className={`${sueEllen.className} text-lg md:text-3xl text-gray-700 mb-2`}
          >
            {donationData.title}
          </h4>
          <h2
            className={`${calistoga.className} text-3xl md:text-6xl text-[#73BE5F] mb-3 md:mb-4`}
          >
            {donationData.heading}
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-5xl mx-auto leading-relaxed">
            {donationData.description}
          </p>
        </div>

        {/* Desktop Grid (UNCHANGED) */}
        <div className="max-w-7xl mx-auto hidden md:grid grid-cols-4 gap-5">
          <div className="flex flex-col gap-5">
            <Image
              src={donationData.gallery[0]}
              alt="Donation 1"
              width={400}
              height={500}
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
            <Image
              src={donationData.gallery[4]}
              alt="Donation 5"
              width={400}
              height={400}
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col gap-5 mt-16">
            <Image
              src={donationData.gallery[1]}
              alt="Donation 2"
              width={400}
              height={400}
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
            <Image
              src={donationData.gallery[5]}
              alt="Donation 6"
              width={400}
              height={500}
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col gap-5">
            <Image
              src={donationData.gallery[2]}
              alt="Donation 3"
              width={400}
              height={500}
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
            <Image
              src={donationData.gallery[6]}
              alt="Donation 7"
              width={400}
              height={350}
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col gap-5 mt-16">
            <Image
              src={donationData.gallery[3]}
              alt="Donation 4"
              width={400}
              height={450}
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
            <Image
              src={donationData.gallery[7]}
              alt="Donation 8"
              width={400}
              height={500}
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* ✅ Mobile Layout (Exactly Like Your Image) */}
        <div className="md:hidden flex flex-col gap-5 mt-5">
          {donationData.gallery.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Image
                src={img}
                alt={`Donation ${i + 1}`}
                width={400}
                height={350}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;
