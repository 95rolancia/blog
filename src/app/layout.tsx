import { Noto_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: "jjangjun's blog",
  description: "jjangjun's blog",
}

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '500' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
