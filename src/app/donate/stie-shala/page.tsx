"use client";

import React from "react";
import ClothingSection from "@/component/Donate/Clothing/ClothingSection";
import Wardrobe from "@/component/Donate/Clothing/Wardrobe";
import LatestBlogs from "@/component/Donate/Clothing/latestblogs";
import { SiteShalaData } from "@/data/SiteShalaData";

const ClothingPage: React.FC = () => {
  const {
    ClothingSection: clothingData,
    DonationSection: donationData,
    ClothingPageData,
    BlogSection,
    JoinOurSection,
  } = SiteShalaData ;

  return (
     <main className="w-full min-h-screen bg-gray-50 flex justify-center items-start pt-[140px]">
      <div className="w-full max-w-7xl px-4">
      <ClothingSection
        clothingData={clothingData}
        donationData={donationData}
      />

      {/* 👕 Wardrobe Section */}
      <Wardrobe data={ClothingPageData} />

      {/* 📰 Latest Blogs + Join Our Section */}
      <LatestBlogs
        blogSection={BlogSection}
        joinOurSection={JoinOurSection}
      />
      </div>
    </main>
  );
};

export default ClothingPage;
