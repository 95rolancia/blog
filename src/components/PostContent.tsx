import MarkdownViewer from '@/components/MarkdownViewer'
import { PostData } from '@/lib/posts'
import { AiTwotoneCalendar } from 'react-icons/ai'

export default function PostContent({ post }: { post: PostData }) {
  const { title, date, content } = post
  return (
    <section className="flex flex-col p-4 w-full">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
      <MarkdownViewer content={content} />
    </section>
  )
}
