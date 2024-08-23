import { Post } from "@/interfaces/post";
import { format } from "@formkit/tempo";
import Link from "next/link";

export default function BlogPostCard ({post}: {post: Post}) {
  return (
    <Link href={`/blog/${post.id}`}>
      <section className="min-w-72 border rounded-md p-5 hover:border-dashed transition-all min-h-48 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center gap-10">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{format(post.date, 'DD/MM/YYYY')}</p>
          </div>
          <p className="mt-5">{post.description}</p>
        </div>
        <div className="flex gap-3 pt-3">
          {
            post.tags.map(tag => <p className="text-sm rounded-full border px-2" key={tag}>{tag}</p>)
          }
        </div>
      </section>
    </Link>
  )
}