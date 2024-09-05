import PostContent from "@/components/PostContent"
import { getSortedPostsData } from "@/lib/posts"
import { Metadata, ResolvingMetadata } from "next"

export async function generateMetadata({params}: {params: {slug: string}}, parent: ResolvingMetadata) : Promise<Metadata> {
  const allPostsData = getSortedPostsData()
  const post = allPostsData.find(post => post.id === params.slug)

  return {
    title: post?.title,
    description: post?.description
  }
}

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