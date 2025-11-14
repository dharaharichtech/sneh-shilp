import { StaticImageData } from "next/image";

export interface BlogType {
  id: number;
  slug: string;
  image: string | StaticImageData; // OK
  date: string;
  highlight: string;
  description: string;
  belowtext: string;
  icon: string | StaticImageData;  // ✅ FIXED (NO ANY)
  link: string;
  fullContent: {
    author: string;
    readTime: string;
    content: string[];
  };
}

export interface BlogSectionDataType {
  title: string;
  heading: string;
  description: string[];
  cards: BlogType[];
}
