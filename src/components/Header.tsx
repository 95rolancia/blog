'use client'

import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'

import { AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { md } from '@/constants/size'

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleToggle = (e: any) => {
    setShowNavbar((prev) => !prev)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    function handleResize(e: Event) {
      const target = e.target as Window
      // TODO: throttling 적용
      if (target.innerWidth >= md && showNavbar) {
        setShowNavbar(false)
      }
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [showNavbar])

  return (
    <header className={`flex`}>
      <div
        className={`flex justify-between w-full p-3 ${
          showNavbar ? 'flex-col' : 'items-center'
        }`}
      >
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              width="100"
              height="70"
              alt="logo"
              priority
            />
          </Link>
        </div>
        <div
          className={`md:block ${
            showNavbar ? 'w-full flex justify-center' : 'hidden'
          }`}
        >
          <Navbar showNavbar={showNavbar} />
        </div>
        <div className="md:hidden absolute top-6 right-4">
          <AiOutlineMenu size="32" onClick={handleToggle} />
        </div>
      </div>
    </header>
  )
}
