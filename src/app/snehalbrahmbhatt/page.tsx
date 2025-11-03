import React from "react";
import SnehalSection from "@/component/Snehal-Brahmbhatt/SnehalSection";
import HerWorks from "@/component/Snehal-Brahmbhatt/herworks";

const SnehalPage = () => {
  return (
   <main className="w-full min-h-screen bg-gray-50 flex justify-center items-start pt-[12px]">
  <div className="w-full max-w-7xl px-4">
      <SnehalSection />
        <HerWorks />
      </div>
    </main>
  );
};

export default SnehalPage;
