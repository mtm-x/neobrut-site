'use client'

import { motion } from 'framer-motion'

const gridItems = [
  {
    title: '10+ Projects',
    description: 'Built with passion',
    icon: '🚀',
    color: 'bg-yellow-300',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Linux Kernel',
    description: 'Deep diving into internals',
    icon: '🐧',
    color: 'bg-blue-300',
    size: 'col-span-1 row-span-2',
  },
  {
    title: 'FOSSEE IIT',
    description: '4-month internship',
    icon: '🎓',
    color: 'bg-green-300',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'IoT & Embedded',
    description: 'Hardware meets software',
    icon: '⚡',
    color: 'bg-purple-300',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Open Source',
    description: 'Contributing to community',
    icon: '❤️',
    color: 'bg-pink-300',
    size: 'col-span-1 row-span-1',
  },
]

export default function BentoGrid() {
  return (
    <div className="my-12">
      <motion.h2
        className="text-2xl sm:text-3xl font-black mb-6 inline-block"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Quick <span className="bg-main text-main-foreground px-2 border-2 border-border rounded-base">Stats</span>
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[120px]">
        {gridItems.map((item, i) => (
          <motion.div
            key={i}
            className={`${item.color} ${item.size} border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 flex flex-col justify-between relative overflow-hidden group`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              y: -4,
              boxShadow: "8px 8px 0px 0px var(--border)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"
            />
            <div className="text-3xl sm:text-4xl relative z-10">{item.icon}</div>
            <div className="relative z-10">
              <h3 className="text-sm sm:text-base font-black text-black mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-black opacity-70 font-semibold">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
