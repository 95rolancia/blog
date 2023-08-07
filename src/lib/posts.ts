import path from 'path'
import { readFile } from 'fs/promises'
import { readFileSync } from 'fs'

export type Post = {
  title: string
  category: string
  path: string
  tags: string[]
  date: Date
}

const postsDir = path.join(process.cwd(), 'data', 'posts')

export async function getAllPosts() {
  const filePath = path.join(postsDir, 'posts.json')
  const postsJsonStr = await readFile(filePath, 'utf-8')
  const posts = JSON.parse(postsJsonStr) as Post[]

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}
