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
    <section className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h2
              className={`${calistoga.className} text-4xl md:text-6xl font-extrabold text-[#73BE5F] mb-6`}
            >
              {clothingData.title}
            </h2>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {clothingData.description}
            </p>

            <button className="flex items-center gap-4 bg-[#73BE5F] text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-full hover:bg-[#58a34d] hover:shadow-xl transition-all duration-300">
              <Image
                src={clothingData.buttonIcon}
                alt="Donate Now"
                width={32}
                height={30}
              />
              {clothingData.buttonText}
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid gap-5">
            {clothingData.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="Clothing Donation"
                width={400}
                height={400}
                className="rounded-2xl object-cover w-full h-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="py-20 px-5 md:px-10">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h4
            className={`${sueEllen.className} text-2xl md:text-4xl text-gray-700 mb-3`}
          >
            {donationData.title}
          </h4>
          <h2
            className={`${calistoga.className} text-4xl md:text-6xl text-[#73BE5F] mb-4`}
          >
            {donationData.heading}
          </h2>
          <p className="text-gray-600 max-w-6xl mx-auto leading-relaxed">
            {donationData.description}
          </p>
        </div>

        {/* Staggered Masonry Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout - 4 Column Staggered */}
          <div className="hidden md:grid grid-cols-4 gap-5">
            {/* Column 1 - Normal Position */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={donationData.gallery[0]}
                  alt="Donation 1"
                  width={400}
                  height={500}
                  className="w-full h-90 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={donationData.gallery[4]}
                  alt="Donation 5"
                  width={400}
                  height={400}
                  className="w-full h-90 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 2 - Pushed Down */}
            <div className="flex flex-col gap-5 mt-16">
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={donationData.gallery[1]}
                  alt="Donation 2"
                  width={400}
                  height={400}
                  className="w-full h-90 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={donationData.gallery[5]}
                  alt="Donation 6"
                  width={400}
                  height={500}
                  className="w-full h-90 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 3 - Normal Position */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={donationData.gallery[2]}
                  alt="Donation 3"
                  width={400}
                  height={500}
                  className="w-full h-90 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={donationData.gallery[6]}
                  alt="Donation 7"
                  width={400}
                  height={350}
                  className="w-full h-90 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 4 - Pushed Down */}
            <div className="flex flex-col gap-5 mt-16">
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={donationData.gallery[3]}
                  alt="Donation 4"
                  width={400}
                  height={450}
                  className="w-full h-90 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={donationData.gallery[7]}
                  alt="Donation 8"
                  width={400}
                  height={500}
                  className="w-full h-90 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {donationData.gallery.map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={img}
                  alt={`Donation ${i + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;