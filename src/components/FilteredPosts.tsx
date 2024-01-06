import { Post } from '@/lib/posts'
import Link from 'next/link'

export default function FilteredPosts({
  category,
  posts,
}: {
  category: string
  posts: Post[]
}) {
  if (category === 'All') {
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.title} className="mb-12">
            <Link href={`/posts/${post.path}`}>
              <h2 className="font-bold text-3xl mb-2 hover:text-sky-400">
                {post.title}
              </h2>
            </Link>
            <div className="flex gap-2 mb-2">
              <h4 className="text-gray-400">{post.date.toString()}</h4>
              <h4>{post.readingTimeInMinutes} min read</h4>
            </div>
            <h3>{post.desc}</h3>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul>
      {posts
        .filter((post) => post.category === category)
        .map((post) => (
          <li key={post.title} className="mb-12">
            <Link href={`/posts/${post.path}`}>
              <h2 className="font-bold text-3xl mb-2 hover:text-sky-400">
                {post.title}
              </h2>
            </Link>
            <div className="flex gap-2 mb-2">
              <h4 className="text-gray-400">{post.date.toString()}</h4>
              <h4>{post.readingTimeInMinutes} min read</h4>
            </div>
            <h3>{post.desc}</h3>
          </li>
        ))}
    </ul>
  )
}
