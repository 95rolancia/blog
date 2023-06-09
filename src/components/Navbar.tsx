import Link from 'next/link'

const paths = [
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export default function Navbar({ showNavbar }: { showNavbar: boolean }) {
  return (
    <nav className="w-full">
      <ul className={`flex ${showNavbar ? 'flex-col text-center' : ''}`}>
        {paths.map((path) => (
          <li
            key={path.href}
            className={`hover:bg-sky-400 rounded-sm p-2 ${
              showNavbar
                ? 'w-full'
                : 'w-16 h-10 mr-3 flex items-center justify-center'
            }`}
          >
            <Link href={path.href}>{path.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
