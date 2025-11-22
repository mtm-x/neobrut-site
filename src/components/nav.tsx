'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'
import { motion } from 'framer-motion'

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
    <motion.div 
      className="fixed top-5 left-0 z-50 w-full"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 mx-auto flex w-max gap-3 sm:gap-5 border-2 sm:border-4 p-2 px-3 sm:p-2.5 sm:px-5 text-xs sm:text-sm md:text-base font-bold">
        {links.map((link, index) => {
          const isActive = path === link.path
          return (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1]
              }}
            >
              <Link
                className={clsx(
                  'rounded-base border-2 px-2 py-1 transition-all duration-300 relative overflow-hidden group block',
                  isActive ? 'border-border' : 'border-transparent',
                )}
                href={link.path}
              >
                <motion.span 
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.text}
                </motion.span>
                {!isActive && (
                  <motion.span 
                    className="absolute inset-0 bg-foreground"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 border-border border-2 rounded-base"
                    layoutId="activeNav"
                    transition={{ 
                      type: "spring", 
                      stiffness: 380, 
                      damping: 30 
                    }}
                  />
                )}
              </Link>
            </motion.div>
          )
        })}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.4, 
            delay: links.length * 0.1,
            ease: [0.25, 0.4, 0.25, 1]
          }}
        >
          <ThemeSwitcher />
        </motion.div>
      </nav>
    </motion.div>
  )
}
