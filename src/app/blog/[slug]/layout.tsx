import BlogPostCard from "@/components/BlogPostCard";
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
          <div className="flex flex-col gap-5">
            <h3>Artículos relacionados</h3>
            <div className="flex flex-col flex-wrap gap-5">
              {
                allPostsData.slice(0, 5).map(post => <BlogPostCard post={post} key={post.id} />)
              }
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}