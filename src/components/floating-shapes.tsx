'use client'

import { motion } from 'framer-motion'

export default function FloatingShapes() {
  const shapes = [
    { size: 60, duration: 20, delay: 0, left: '10%', color: 'var(--main)' },
    { size: 40, duration: 15, delay: 2, left: '80%', color: 'var(--main)' },
    { size: 80, duration: 25, delay: 5, left: '50%', color: 'var(--main)' },
    { size: 30, duration: 18, delay: 3, left: '25%', color: 'var(--main)' },
    { size: 50, duration: 22, delay: 7, left: '70%', color: 'var(--main)' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-10 blur-xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            background: shape.color,
          }}
          animate={{
            y: ['100vh', '-20vh'],
            x: [0, Math.sin(index) * 100, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
