import PostContent from "@/components/PostContent"
import { getSortedPostsData } from "@/lib/posts"

export default function PostPage({params}: {params: {slug: string}}) {
  const allPostsData = getSortedPostsData()
  const post = allPostsData.find(post => post.id === params.slug)
  return (
    <>
      <h1>{post?.title}</h1>
      {
        post?.content && (
          <PostContent content={post.content} />
        ) 
      }
    </>
  )
}