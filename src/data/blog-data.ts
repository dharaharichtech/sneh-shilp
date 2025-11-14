// src/data/blog-data.ts
import { BlogSectionData } from "@/data/BlogPageData";
import { StaticImageData } from "next/image";

export type BlogType = {
  id: number;
  slug: string;
  image: string | StaticImageData;   // ✅ FIXED
  date: string;
  highlight: string;
  description: string;
  fullContent: {
    author?: string;
    readTime?: string;
    content: string[];
  };
};

export const blogs: BlogType[] =
  BlogSectionData.BlogSection.cards.map((c) => ({
    id: c.id,
    slug: c.slug,
    image: c.image, // OK — because type supports string | StaticImageData
    date: c.date,
    highlight: c.highlight,
    description: c.description,
    fullContent: c.fullContent,
  }));
