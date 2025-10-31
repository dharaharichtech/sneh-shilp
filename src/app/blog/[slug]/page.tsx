"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { BlogSectionData } from "@/data/BlogPageData";

export default function BlogSlugPage() {
  const { slug } = useParams();

  const blogPost = BlogSectionData.BlogSection.cards.find(
    (item) => item.slug === slug
  );

  if (!blogPost) {
    return (
      <section className="px-4 py-10 md:px-8 lg:px-20 bg-[#EFFFF9] mt-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog not found</h1>
        <p className="text-gray-600">
          The blog post you’re looking for doesn’t exist or has been removed.
        </p>
      </section>
    );
  }

  return (
    <section className="px-4 py-10 md:px-8 lg:px-20 bg-[#EFFFF9] mt-24">
      <article className="max-w-5xl mx-auto">
        {/* ✅ Blog Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#279977] mb-4">
          {blogPost.highlight}
        </h1>

        {/* ✅ Date + Author */}
        <div className="flex flex-wrap gap-3 text-gray-600 text-sm mb-6">
          <span>{blogPost.date}</span>
          {blogPost.fullContent?.author && (
            <span>• By {blogPost.fullContent.author}</span>
          )}
          {blogPost.fullContent?.readTime && (
            <span>• {blogPost.fullContent.readTime}</span>
          )}
        </div>

        {/* ✅ Divider */}
        <div className="w-full h-[2px] bg-[#279977] mb-10"></div>

        {/* ✅ Blog Image */}
        <div className="rounded-lg overflow-hidden mb-8">
          <Image
            src={blogPost.image}
            alt={blogPost.highlight}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* ✅ Description */}
        <p className="text-[#555] text-lg leading-relaxed mb-10">
          {blogPost.description}
        </p>

        {/* ✅ Full Blog Content */}
        {blogPost.fullContent?.content && (
          <div className="space-y-6 text-[#444] leading-relaxed">
            {blogPost.fullContent.content.map((para: string, index: number) => (
              <p key={index} className="text-base md:text-lg">
                {para}
              </p>
            ))}
          </div>
        )}
      </article>
    </section>
  );
}
