"use client"

import { Post } from "@/interfaces/post";
import BlogPostCard from "./BlogPostCard";
import { usePathname } from "next/navigation";

export default function RelatedPosts({allPosts}: {allPosts: Post[]}) {
  const pathname = usePathname()
  const posts = allPosts.filter(post => !pathname.includes(post.id) )
  return (
    <div className="flex flex-col gap-5">
      <h3>Más atrículos</h3>
      <div className="flex flex-col flex-wrap gap-5">
        {
          posts.slice(0, 5).map(post => <BlogPostCard post={post} key={post.id} />)
        }
      </div>
    </div>
  )
}