'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const emojis = ['💻', '⚡', '🚀', '🔥', '✨', '🎯', '⚙️', '🎨']

export default function EmojiRain() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Show emoji rain after a delay
    const timer = setTimeout(() => setShow(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -50,
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 50,
            rotate: 360,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {emojis[i]}
        </motion.div>
      ))}
    </div>
  )
}
