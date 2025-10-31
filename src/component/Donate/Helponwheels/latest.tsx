"use client";

import React from "react";
import Image from "next/image";

interface BlogCard {
  id: number;
  image: string;
  date: string;
  highlight: string;
  description: string;
  belowtext: string;
  icon: string;
}

interface ViewAllButton {
  text: string;
  icon: string;
}

interface BlogSectionProps {
  title: string;
  heading: string;
  cards: BlogCard[];
  viewAll: ViewAllButton;
}

interface JoinOurSectionProps {
  title: string;
  description: string;
  image: string;
  button: { text: string; icon: string };
}

interface LatestBlogsProps {
  blogSection: BlogSectionProps;
  joinOurSection: JoinOurSectionProps;
}

const LatestBlogs: React.FC<LatestBlogsProps> = ({
  blogSection,
  joinOurSection,
}) => {
  return (
    <section className="w-full bg-white">
      {/* 📰 BLOG SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-[#6D9886] text-lg font-medium">
              {blogSection.title}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
              {blogSection.heading}
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#6D9886] font-medium border border-[#6D9886] px-5 py-2 rounded-full hover:bg-[#6D9886] hover:text-white transition">
            {blogSection.viewAll.text}
            <Image
              src={blogSection.viewAll.icon}
              alt="arrow"
              width={16}
              height={16}
            />
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogSection.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.highlight}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-400">{card.date}</p>
                <h3 className="text-lg font-semibold mt-2 text-[#3B5D50]">
                  {card.highlight}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {card.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-[#6D9886] font-semibold cursor-pointer hover:text-[#3B5D50] transition">
                  {card.belowtext}
                  <Image src={card.icon} alt="arrow" width={14} height={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💚 CONNECT / JOIN OUR SECTION */}
      <div className="relative w-full py-24 flex items-center justify-center overflow-hidden">
        {/* Background image fills entire section */}
        <Image
          src="/image/Donation/rightside.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Semi-transparent overlay (optional for contrast) */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Foreground content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
          {/* Left Text Section */}
          <div className="flex-1 text-white">
            <h3 className="text-2xl md:text-3xl font-bold">
              {joinOurSection.title}
            </h3>
            <p className="mt-4 leading-relaxed max-w-md text-white/90">
              {joinOurSection.description}
            </p>

            {/* Contact Button */}
            <div className="mt-8 flex items-center gap-3 bg-white rounded-full px-6 py-3 w-fit shadow-md hover:shadow-lg transition">
              <Image
                src={joinOurSection.button.icon}
                alt="phone"
                width={22}
                height={22}
              />
              <span className="text-[#3B5D50] font-semibold tracking-wide">
                {joinOurSection.button.text}
              </span>
            </div>
          </div>

          {/* Right Side Image */}
          {/* <div className="flex-1 flex justify-center">
            <Image
              src={joinOurSection.image}
              alt="Join our cause"
              width={420}
              height={340}
              className="object-contain drop-shadow-lg"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
