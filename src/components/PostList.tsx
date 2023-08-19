import { Post, getAllPosts } from '@/lib/posts'

export default async function PostList() {
  const posts = await getAllPosts()
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post: Post) => (
        <li key={post.path} className="border-2 p-1 border-grey-200 mb-2">
          <div>title: {post.title}</div>
          <div>date: {post.date.toString()}</div>
          <div>category: {post.category}</div>
          <div>tags: {post.tags.join('|')}</div>
        </li>
      ))}
    </ul>
  )
}
