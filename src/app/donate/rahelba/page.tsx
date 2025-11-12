"use client";

import React from "react";
import ClothingSection from "@/component/Donate/Clothing/ClothingSection";
import Wardrobe from "@/component/Donate/Clothing/Wardrobe";
import { RahelBaData } from "@/data/RahelBaData";

const ClothingPage: React.FC = () => {
  const {
    ClothingSection: clothingData,
    DonationSection: donationData,
    ClothingPageData,
  } = RahelBaData;

  return (
     <main className="w-full min-h-screen bg-gray-50 flex justify-center items-start pt-[100px]">
      <div className="w-full max-w-7xl px-4">
      <ClothingSection
        clothingData={clothingData}
        donationData={donationData}
      />

      <Wardrobe data={ClothingPageData} />
      </div>
    </main>
  );
};

export default ClothingPage;
