'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/work',
      text: 'Work',
    },
  ]

  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 mx-auto flex w-max gap-5 border-2 p-2.5 px-5 text-sm sm:text-base backdrop-blur-sm">
        {links.map((link, index) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'hover:border-border rounded-base border-2 px-2 py-1 transition-all duration-300 relative overflow-hidden group',
                path === link.path ? 'border-border' : 'border-transparent hover:scale-105',
              )}
              href={link.path}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10">{link.text}</span>
              {path !== link.path && (
                <span className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              )}
            </Link>
          )
        })}
        <ThemeSwitcher />
      </nav>
    </div>
  )
}
