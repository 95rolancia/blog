import Link from 'next/link'

import { Post } from '@/lib/posts'

type Props = { post: Post }

export default function PostCard({ post }: Props) {
  const { title, path, desc, date, readingTimeInMinutes } = post

  return (
    <li key={title} className={`mb-12`}>
      <Link href={`/posts/${path}`}>
        <h3 className="font-bold text-xl mb-2 hover:text-sky-400">{title}</h3>

        <h3 className="pb-2 text-sm">{desc}</h3>
        <div className="flex gap-2 mb-2">
          <h4 className="text-gray-500 text-sm">{date.toString()}</h4>
          <h4 className="text-sm">{readingTimeInMinutes} min read</h4>
        </div>
      </Link>
    </li>
  )
}
