import BlogPostCard from "@/components/BlogPostCard";
import RelatedPosts from "@/components/RelatedPosts";
import { getSortedPostsData } from "@/lib/posts";
import React from "react";

export default function PostLayout({children}: {children: React.ReactNode}) {
  const allPostsData = getSortedPostsData()

  return(
    <main>
      <div className="m-auto w-full flex flex-col lg:flex-row">
        <section className="lg:w-3/4 lg:m-10">
          {children}
        </section>
        <hr className="lg:hidden" />
        <section className="lg:w-1/4 lg:m-10 sticky top-0 mt-5">
          <RelatedPosts allPosts={allPostsData} />
        </section>
      </div>
    </main>
  )
}