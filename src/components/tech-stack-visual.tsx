'use client'

import { motion } from 'framer-motion'

const techStack = [
  { name: 'C', icon: '🔵', level: 95 },
  { name: 'Python', icon: '🐍', level: 90 },
  { name: 'Linux', icon: '🐧', level: 88 },
  { name: 'Qt', icon: '⚙️', level: 85 },
  { name: 'ROS2', icon: '🤖', level: 80 },
  { name: 'Docker', icon: '🐳', level: 75 },
]

export default function TechStackVisual() {
  return (
    <div className="my-12">
      <motion.h2
        className="text-2xl sm:text-3xl font-black mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Tech Stack 
        <span className="text-main ml-2">⚡</span>
      </motion.h2>
      
      <div className="space-y-4">
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-bold text-sm sm:text-base">{tech.name}</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-main">{tech.level}%</span>
            </div>
            
            <div className="h-3 bg-secondary-background border-2 border-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-main border-r-2 border-border"
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
