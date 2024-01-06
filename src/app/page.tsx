import Info from '@/components/Info'
import RecentPosts from '@/components/RecentPosts'

export default function Home() {
  return (
    <>
      <Info />
      <h1 className="font-bold text-4xl mb-4 mt-12">최근 게시글</h1>
      <RecentPosts />
    </>
  )
}
