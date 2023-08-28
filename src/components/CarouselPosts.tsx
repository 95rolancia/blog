import { Post } from '@/lib/posts'
import PostCard from './PostCard'

export default function CarouselPosts({ posts }: { posts: Post[] }) {
  return (
    <ul className="overflow-x-auto flex snap-x">
      {posts.map((post) => (
        <li key={post.path} className="snap-center mx-4">
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}
