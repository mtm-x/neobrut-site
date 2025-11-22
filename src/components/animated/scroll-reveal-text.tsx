'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollRevealText({ 
  text, 
  className = '' 
}: { 
  text: string
  className?: string 
}) {
  const { scrollYProgress } = useScroll()
  const words = text.split(' ')

  return (
    <div className={className}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </div>
  )
}

function Word({ 
  children, 
  progress, 
  range 
}: { 
  children: string
  progress: any
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.3, 1])
  const scale = useTransform(progress, range, [0.8, 1])

  return (
    <motion.span
      style={{ opacity, scale }}
      className="inline-block mr-2 transition-colors duration-300"
    >
      {children}
    </motion.span>
  )
}
