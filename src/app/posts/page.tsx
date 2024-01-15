import CategoryFilter from '@/components/CategoryFilter'
import { getAllCategories, getAllPosts } from '@/lib/posts'

export default async function PostsPage() {
  const categories = await getAllCategories()
  const posts = await getAllPosts()
  return (
    <section className="px-8">
      <CategoryFilter categories={categories} posts={posts} />
    </section>
  )
}
