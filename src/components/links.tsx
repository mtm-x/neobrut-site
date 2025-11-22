'use client'

import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'
import { motion } from 'framer-motion'

export default function Links() {
  const links: { icon: IconType; href: string; label: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:mahasel.1969@gmail.com',
      label: 'Email',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/mtm-x',
      label: 'GitHub',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/mtm-x',
      label: 'LinkedIn',
    },
  ]

  return (
    <motion.div 
      className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {links.map((link, id) => {
        return (
          <motion.a 
            target="_blank" 
            key={id} 
            href={link.href}
            className="group relative"
            aria-label={link.label}
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -180 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                transition: { 
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }
              },
            }}
            whileHover={{ 
              scale: 1.2,
              y: -8,
              rotate: [0, -10, 10, -10, 0],
              transition: {
                scale: { duration: 0.2 },
                y: { duration: 0.2 },
                rotate: { duration: 0.5 }
              }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div 
              className="absolute inset-0 bg-main rounded-full blur-md scale-150"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            />
            <link.icon 
              title={link.label} 
              className="relative z-10" 
            />
          </motion.a>
        )
      })}
    </motion.div>
  )
}
