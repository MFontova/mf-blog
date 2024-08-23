import BlogPostCard from "@/components/BlogPostCard"
import { getSortedPostsData } from "@/lib/posts"

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">Blog</h1>
      <ul className="py-10 grid grid-cols-3 gap-5">
        {
          allPostsData.map((post) => (
            <li key={post.id}>
              <BlogPostCard post={post}/>
            </li>
          ))
        }
      </ul>
    </main>
  )
}