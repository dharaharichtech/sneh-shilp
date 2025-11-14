// src/app/blog/page.tsx
import TheBlogSection from "@/component/BlogpageComponent/TheBlogSection";
import { BlogSectionData } from "@/data/BlogPageData";

export default function BlogPage() {
  const blogData = BlogSectionData.BlogSection;

  return (
    <main className="w-full py-22 md:py-36 px-5 md:px-10 lg:px-15 space-y-20">
      <TheBlogSection data={blogData} />
    </main>
  );
}
