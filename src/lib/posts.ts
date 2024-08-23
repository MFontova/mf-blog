import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '@/interfaces/post'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  console.log(fileNames)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    console.log('file contents', fileContents)

    const matterResult = matter(fileContents)

    console.log('matterResult', matterResult)

    const post: Post = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      content: matterResult.content,
      tags: matterResult.data.tags
    }

    return post
  })

  return allPostsData.sort((a, b) => {
    if(a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}