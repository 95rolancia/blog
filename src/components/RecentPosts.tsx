import { getRecentPosts } from '@/lib/posts'
import CarouselPosts from './CarouselPosts'

export default async function RecentPosts() {
  const recentPosts = await getRecentPosts(10)
  return (
    <section className="bg-sky-50 p-4">
      <h2 className="text-2xl font-bold pb-4">최근 게시글</h2>
      <CarouselPosts posts={recentPosts} />
    </section>
  )
}
