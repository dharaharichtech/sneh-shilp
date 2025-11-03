// components/LatestBlogSection.tsx
"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "@/app/font";

interface BlogCard {
  id: number;
  image: StaticImageData | string;
  date: string;
  highlight: string;
  description: string;
  belowtext: string;
  icon: StaticImageData | string;
}

interface LatestBlogSectionProps {
  data: {
    title: string;
    heading: string;
    cards: BlogCard[];
    buttons?: {
      view?: {
        text: string;
        icon: StaticImageData | string;
      };
    };
  };
}

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function LatestBlogSection({ data }: LatestBlogSectionProps) {
  const { title, heading, cards, buttons } = data ?? { title: "", heading: "", cards: [] };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="text-center md:text-left">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={itemVariant}
              className={`${sueEllen.className} text-2xl md:text-3xl text-gray-700`}
            >
              {title}
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={itemVariant}
              transition={{ delay: 0.12 }}
              className={`${calistoga.className} text-2xl md:text-4xl text-[#73BE5F] mt-3`}
            >
              {heading}
            </motion.h2>
          </div>

          {buttons?.view && (
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={itemVariant}>
              <Link href="/blog" legacyBehavior>
                <a className="inline-flex items-center gap-3 bg-[#73BE5F] text-white px-5 py-2 rounded-full text-sm md:text-base font-medium hover:bg-[#5fa64e] transition-shadow shadow">
                  {buttons.view.icon && (
                    <span className="inline-block w-5 h-5">
                      <Image src={buttons.view.icon} alt="view icon" width={20} height={20} />
                    </span>
                  )}
                  {buttons.view.text}
                </a>
              </Link>
            </motion.div>
          )}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards?.map((card) => (
            <motion.article
              key={card.id}
              variants={itemVariant}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src={card.image}
                  alt={card.highlight}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-2">{card.date}</p>
                  <h3 className={`${calistoga.className} text-lg text-[#73BE5F] mb-2`}>{card.highlight}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                </div>

                <div className="mt-4">
                  <Link href="/blog" legacyBehavior>
                    <a className="inline-flex items-center gap-2 text-[#73BE5F] font-semibold hover:underline">
                      <span>{card.belowtext}</span>
                      <span className="inline-block w-4 h-4">
                        <Image src={card.icon} alt="arrow" width={16} height={16} />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
