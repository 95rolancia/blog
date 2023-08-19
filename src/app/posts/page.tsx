import PostList from '@/components/PostList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '게시글 목록',
  description: '작성된 게시글 들',
}

export default function Posts() {
  return <PostList />
}
