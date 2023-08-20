import { Metadata } from 'next'
import PostList from '@/components/PostList'

export const metadata: Metadata = {
  title: '게시글 목록',
  description: '작성된 게시글 들',
}

export default function Posts() {
  return <PostList />
}
