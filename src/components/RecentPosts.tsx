import { getRecentPosts } from '@/lib/posts'
import CarouselPosts from './CarouselPosts'
import PostCard from './PostCard'
import Link from 'next/link'

export default async function RecentPosts() {
  const recentPosts = await getRecentPosts(10)
  return (
    <section className="p-4">
      <ul>
        {recentPosts.map((post) => (
          <li key={post.title} className="mb-12">
            <Link href={`/posts/${post.path}`} target="_blank">
              <h2 className="font-bold text-3xl mb-2">{post.title}</h2>
            </Link>
            <div className="flex gap-2 mb-2">
              <h4 className="text-gray-400">{post.date.toString()}</h4>
              <h4>{post.readingTimeInMinutes} min read</h4>
            </div>
            <h3>{post.desc}</h3>
          </li>
        ))}
      </ul>

      {/* <CarouselPosts posts={recentPosts} /> */}
    </section>
  )
}
