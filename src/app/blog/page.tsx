import BlogPostCard from "@/components/BlogPostCard"
import { getSortedPostsData } from "@/lib/posts"

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <main>
      <h1>Blog</h1>
      <ul className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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