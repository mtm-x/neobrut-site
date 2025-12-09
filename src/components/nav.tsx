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
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base mx-auto flex w-max gap-3 sm:gap-5 border-2 sm:border-4 p-2 px-3 sm:p-2.5 sm:px-5 text-xs sm:text-sm md:text-base font-bold">
        {links.map((link) => {
          const isActive = path === link.path
          return (
            <Link
              key={link.path}
              className={clsx(
                'rounded-base border-2 px-2 py-1 transition-colors',
                isActive ? 'border-border' : 'border-transparent hover:border-border/50',
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          )
        })}
        <ThemeSwitcher />
      </nav>
    </div>
  )
}
