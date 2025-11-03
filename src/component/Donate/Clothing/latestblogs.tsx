"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { calistoga, sueEllen } from "../../../app/font";

// ✅ Fix: Allow both `string` and `StaticImageData` for all image fields
interface BlogCard {
  id: number;
  image: string | StaticImageData;
  date: string;
  highlight: string;
  description: string;
  belowtext: string;
  icon: string | StaticImageData;
}

interface ViewAllButton {
  text: string;
  icon: string | StaticImageData;
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
  image: string | StaticImageData;
  button: {
    text: string;
    icon: string | StaticImageData;
  };
}

interface LatestBlogsProps {
  blogSection: BlogSectionProps;
  joinOurSection: JoinOurSectionProps;
}

const LatestBlogs: React.FC<LatestBlogsProps> = ({
  blogSection,
  joinOurSection,
}) => {
  const router = useRouter();

  const handleNavigateToBlog = () => {
    router.push("/blog");
  };

  return (
    <section className="w-full bg-white">
      {/* 📰 BLOG SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <h4
              className={`${sueEllen.className} text-3xl text-[#2E4049] font-normal mb-5`}
            >
              {blogSection.title}
            </h4>
            <h2
              className={`${calistoga.className} text-3xl font-bold text-[#73BE5F] leading-snug`}
            >
              {blogSection.heading}
            </h2>
          </div>

          {/* View All Button */}
          <button
            onClick={handleNavigateToBlog}
            className="flex items-center gap-2 text-[#73BE5F] font-medium border border-[#73BE5F] px-5 py-2 rounded-full hover:bg-[#73BE5F] hover:text-white transition"
          >
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
              className="bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
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
                <h3 className="text-lg font-semibold mt-2 text-[#73BE5F]">
                  {card.highlight}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Read More → /blog */}
                <div
                  onClick={handleNavigateToBlog}
                  className="flex items-center gap-2 mt-4 text-[#73BE5F] font-semibold cursor-pointer hover:text-[#3B5D50] transition"
                >
                  {card.belowtext}
                  <Image src={card.icon} alt="arrow" width={14} height={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💚 JOIN AS VOLUNTEER SECTION */}
      <div className="max-w-7xl mx-auto my-20 px-6">
        <div className="bg-[#73BE5F] rounded-3xl flex flex-col md:flex-row items-center justify-between px-10 py-12 md:py-16 shadow-lg relative overflow-hidden">
          {/* Left Side */}
          <div className="flex-1 text-white md:text-left text-center md:pr-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              {joinOurSection.title}
            </h3>
            <p className="text-white/90 mb-6 max-w-lg leading-relaxed mx-auto md:mx-0">
              {joinOurSection.description}
            </p>
            <button className="flex items-center justify-center gap-3 bg-white text-[#73BE5F] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition mx-auto md:mx-0">
              <Image
                src={joinOurSection.button.icon}
                alt="arrow"
                width={25}
                height={25}
              />
              {joinOurSection.button.text}
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-end items-end mt-10 md:mt-0 translate-x-8 translate-y-15">
            <Image
              src={joinOurSection.image}
              alt="Volunteer illustration"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
