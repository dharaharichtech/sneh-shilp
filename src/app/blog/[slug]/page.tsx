"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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

  // ✅ Show ALL other blogs (not limited to 3)
  const relatedBlogs = BlogSectionData.BlogSection.cards.filter(
    (item) => item.slug !== slug
  );

  return (
    <>
      {/* ✅ Blog Details Section */}
      <section className="px-4 py-10 md:px-8 lg:px-20 bg-white mt-24">
        <article className="max-w-5xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-[#73BE5F] mb-4">
            {blogPost.highlight}
          </h1>

          {/* Date + Author */}
          <div className="flex flex-wrap gap-3 text-gray-600 text-sm mb-6">
            <span>{blogPost.date}</span>
            {blogPost.fullContent?.author && (
              <span>• By {blogPost.fullContent.author}</span>
            )}
            {blogPost.fullContent?.readTime && (
              <span>• {blogPost.fullContent.readTime}</span>
            )}
          </div>

          {/* Divider */}
          <div className="w-full h-[2px] bg-[#73BE5F] mb-10"></div>

          {/* Blog Image */}
          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src={blogPost.image}
              alt={blogPost.highlight}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Short Description */}
          <p className="text-[#555] text-lg leading-relaxed mb-10">
            {blogPost.description}
          </p>

          {/* Full Blog Content */}
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

      {/* ✅ Related Blog Section */}
      {relatedBlogs.length > 0 && (
        <section className="px-4 py-16 md:px-8 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#73BE5F] mb-3">
              Related Blog Posts
            </h2>
            <p className="text-gray-600">
              Explore more inspiring stories and updates from SnehShilp Foundation.
            </p>
          </div>

          {/* Related Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {relatedBlogs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={item.image}
                    alt={item.highlight}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-left">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold text-[#73BE5F] mb-3 line-clamp-2">
                    {item.highlight}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                    {item.description}
                  </p>

                  <Link
                    href={item.link}
                    className="flex items-center text-[#73BE5F] font-medium hover:underline"
                  >
                    Read More
                    <Image
                      src={item.icon}
                      alt="arrow"
                      className="ml-2 w-4 h-4 object-contain"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
