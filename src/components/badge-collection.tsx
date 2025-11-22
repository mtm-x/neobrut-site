'use client'

import { motion } from 'framer-motion'

const badges = [
  { text: 'Linux Kernel', color: 'bg-orange-400' },
  { text: 'FOSS Love', color: 'bg-green-400' },
  { text: 'AOSP Explorer', color: 'bg-purple-400' },
  { text: 'Qt Enthusiast', color: 'bg-blue-400' },
  { text: 'Device Drivers', color: 'bg-cyan-400' },
  { text: 'IoT Explorer', color: 'bg-pink-400' },
]

export default function BadgeCollection() {
  return (
    <motion.div
      className="my-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <h3 className="text-lg sm:text-xl font-black mb-4 inline-block bg-main text-main-foreground px-3 py-1 border-2 border-border rounded-base">
        Currently Exploring
      </h3>
      <div className="flex flex-wrap gap-3">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            className={`${badge.color} border-2 border-border rounded-full px-4 py-2 text-xs sm:text-sm font-bold text-black shadow-shadow cursor-pointer`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 1.5 + i * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            {badge.text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
