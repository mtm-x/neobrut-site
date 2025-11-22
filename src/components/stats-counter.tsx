'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { label: 'Projects Built', value: 0, target: 25, suffix: '+', icon: '🚀' },
  { label: 'Lines of Code', value: 0, target: 50, suffix: 'K+', icon: '💻' },
  { label: 'Coffee Consumed', value: 0, target: 1000, suffix: '+', icon: '☕' },
  { label: 'Bugs Fixed', value: 0, target: 500, suffix: '+', icon: '🐛' },
]

export default function StatsCounter() {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div id="stats-section" className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-12">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 text-center relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px var(--border)" }}
        >
          <div className="absolute inset-0 bg-main opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <div className="text-3xl mb-2">{stat.icon}</div>
          <motion.div
            className="text-2xl sm:text-3xl font-black text-main relative z-10"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
          >
            <Counter target={stat.target} inView={inView} />
            {stat.suffix}
          </motion.div>
          <div className="text-xs sm:text-sm font-semibold mt-1 relative z-10">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, inView])

  return <span>{count}</span>
}
