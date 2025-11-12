"use client";

import React from "react";
import { BlogSectionData } from "@/data/BlogPageData";
import TheBlogSection from "../../component/BlogpageComponent/TheBlogSection";

//comment added
export default function BlogPage() {
  const { BlogSection: blogData } = BlogSectionData;

  return (
    <main className="w-full py-22 md:py-36 px-5 md:px-10 lg:px-15 space-y-20">
      {/* Blog Section */}
      <TheBlogSection data={blogData} />
    </main>
  );
}
