'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  animate?: boolean
}

export default function GradientText({ 
  children, 
  className = '',
  animate = true 
}: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-foreground via-main to-foreground bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: animate ? '200% auto' : '100% auto',
      }}
      animate={animate ? {
        backgroundPosition: ['0% center', '200% center'],
      } : undefined}
      transition={animate ? {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      } : undefined}
    >
      {children}
    </motion.span>
  )
}
