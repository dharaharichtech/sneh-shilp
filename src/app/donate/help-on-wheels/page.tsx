"use client";

import React from "react";
import ClothingSection from "@/component/Donate/Clothing/ClothingSection";
import Wardrobe from "@/component/Donate/Clothing/Wardrobe";
// import LatestBlogs from "@/component/Donate/Clothing/latestblogs";
import { HelponwheelsData } from "@/data/HelponwheelsData";

const ClothingPage: React.FC = () => {
  const {
    helponwheels: clothingData,
    DonationSection: donationData,
      oneplate,
    BlogSection,
    JoinOurSection,
  } = HelponwheelsData;

  return ( <main className="w-full min-h-screen bg-gray-50 flex justify-center items-start pt-[140px]">
      <div className="w-full max-w-7xl px-4">
      {/* 🧥 Clothing + Donation Section */}
      <ClothingSection
        clothingData={clothingData}
        donationData={donationData}
      />

      {/* 👕 Wardrobe Section */}
      <Wardrobe data={oneplate} />

      {/* 📰 Latest Blogs + Join Our Section */}
      {/* <LatestBlogs
        blogSection={BlogSection}
        joinOurSection={JoinOurSection}
      /> */}
      </div>
    </main>
  );
};

export default ClothingPage;
