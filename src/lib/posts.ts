import path from 'path'
import { readFile } from 'fs/promises'

export type Post = {
  title: string
  category: string
  path: string
  tags: string[]
  date: Date
}

export type PostData = Post & {
  content: string
}

const postsDir = path.join(process.cwd(), 'data', 'posts')

export async function getAllPosts() {
  const filePath = path.join(postsDir, 'posts.json')
  const postsJsonStr = await readFile(filePath, 'utf-8')
  const posts = JSON.parse(postsJsonStr) as Post[]

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getRecentPosts(postCount: number) {
  return (await getAllPosts()).slice(0, postCount)
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`)
  const posts = await getAllPosts()
  const post = posts.find((post) => post.path === fileName)

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`)

  const content = await readFile(filePath, 'utf-8')

  return { ...post, content }
}
