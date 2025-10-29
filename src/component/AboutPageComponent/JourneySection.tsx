"use client";

import React from "react";
import Image from "next/image";
import { calistoga } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";

const JourneySection = () => {
  const { JourneySection } = AboutUsData;
  const { title, timeline } = JourneySection;

  return (
    <section className="relative w-full py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="relative max-w-6xl mx-auto">
        <div className="relative text-center mb-20">
          <h1 className={`${calistoga.className} text-4xl md:text-5xl font-bold text-[#73BE5F]`}>
            {title}
          </h1>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-10 z-10 hidden md:block">
            <div className="w-4 h-4 rounded-full bg-[#73BE5F]" />
          </div>
        </div>

        <div 
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 hidden md:block"
          style={{
            top: '90px',
            bottom: '0',
            backgroundImage: 'linear-gradient(to bottom, #73BE5F 50%, transparent 50%)',
            backgroundSize: '2px 12px',
            backgroundRepeat: 'repeat-y'
          }}
        />

        <div className="space-y-0">
          {timeline.map((item, index) => (
            <div key={item.id} className="relative" style={{ marginTop: index === 0 ? '0' : '-100px' }}>
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block top-0">
                <div className="w-6 h-6 rounded-full border-2 border-[#73BE5F] bg-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#73BE5F]" />
                </div>
              </div>

              {item.position === "left" ? (
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-full md:w-[45%] md:pr-12 space-y-6">
                    <div>
                      <h2 className={`${calistoga.className} text-2xl md:text-3xl font-bold text-[#73BE5F] mb-4`}>
                        {item.heading}
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="relative w-full max-w-sm">
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.heading}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-[10%]" />

                  <div className="hidden md:block w-[45%]" />
                </div>
              ) : (
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="hidden md:block w-[45%]" />

                  <div className="hidden md:block w-[10%]" />

                  <div className="w-full md:w-[45%] md:pl-12 space-y-6">
                    <div>
                      <h2 className={`${calistoga.className} text-2xl md:text-3xl font-bold text-[#73BE5F] mb-4`}>
                        {item.heading}
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="relative w-full max-w-sm">
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.heading}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;