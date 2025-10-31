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
      {/* Clothing Matters Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 pt-40 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h2
              className={`${calistoga.className} text-3xl md:text-5xl font-bold text-[#73BE5F] mb-4`}
            >
              {clothingData.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              {clothingData.description}
            </p>

            <button className="flex items-center gap-3 bg-[#73BE5F] text-white font-medium px-6 py-3 rounded-full hover:bg-[#c1eccf] transition-all">
              <Image
                src={clothingData.buttonIcon}
                alt="Donate Now"
                width={20}
                height={20}
              />
              {clothingData.buttonText}
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-4">
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
      <div className=" py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto text-center mb-12">
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
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {donationData.description}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {donationData.gallery.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="Donation"
              width={400}
              height={400}
              className="rounded-2xl object-cover w-full h-[280px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;
