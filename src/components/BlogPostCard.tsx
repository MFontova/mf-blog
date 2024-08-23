import { Post } from "@/interfaces/post";
import { format } from "@formkit/tempo";

export default function BlogPostCard ({post}: {post: Post}) {
  return (
    <section className="min-w-72 border rounded-md p-5 hover:shadow-md hover:shadow-gray-500 transition-all">
      <div className="flex justify-between items-center gap-10">
        <h3 className="text-xl font-bold">{post.title}</h3>
        <p>{format(post.date, 'DD/MM/YYYY')}</p>
      </div>
      <p>{post.description}</p>
      <div className="flex gap-3 pt-3">
        {
          post.tags.map(tag => <p className="text-sm rounded-full border px-2" key={tag}>{tag}</p>)
        }
      </div>
    </section>
  )
}