'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100

      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-2 bg-secondary-background border-b-4 border-border z-[9999]">
      <motion.div
        className="h-full bg-main relative"
        style={{
          width: `${scrollProgress}%`,
        }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-4 bg-foreground"
          animate={{
            opacity: scrollProgress > 0 ? [0.5, 1, 0.5] : 0,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  )
}
