    "use client";

    import React from "react";
    import Image, { StaticImageData } from "next/image";
    import { calistoga, sueEllen } from "../../app/font"; // ✅ Fonts

    interface PartnerCard {
      id: number;
      icon: StaticImageData;
    }

    interface FoundationSectionProps {
      title: string;
      heading: string;
      cards: PartnerCard[];
    }

    const FoundationSection: React.FC<{ data: FoundationSectionProps }> = ({
      data,
    }) => {
      return (
        <section className="bg-white py-16 px-4 sm:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Title */}
            <h4
              className={`${sueEllen.className} text-xl sm:text-4xl text-gray-800 mb-6`}
            >
              {data.title}
            </h4>

            {/* Heading */}
            <h2
              className={`${calistoga.className} text-3xl sm:text-5xl text-[#73BE5F] mb-14`}
            >
              {data.heading}
            </h2>

            {/* Partner Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {data.cards.map((card) => (
                <div
                  key={card.id}
                  className="flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 p-6"
                >
                  <div className="relative w-40 h-16 sm:w-44 sm:h-20">
                    <Image
                      src={card.icon}
                      alt={`Partner ${card.id}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default FoundationSection;
