'use client'

import { motion } from 'framer-motion'

const cards = [
  { emoji: '🐧', label: 'Linux Lover', color: 'bg-yellow-400' },
  { emoji: '⚙️', label: 'Kernel Hacker', color: 'bg-blue-400' },
  { emoji: '🔧', label: 'IoT Builder', color: 'bg-green-400' },
  { emoji: '💾', label: 'Low-Level Coder', color: 'bg-pink-400' },
]

export default function FloatingCards() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden hidden lg:block">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className={`${card.color} border-4 border-border rounded-base shadow-shadow p-4 flex flex-col items-center gap-2 pointer-events-auto cursor-pointer`}
            whileHover={{ scale: 1.1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-4xl">{card.emoji}</span>
            <span className="text-xs font-bold text-black whitespace-nowrap">
              {card.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
