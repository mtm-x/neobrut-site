'use client'

import { motion } from 'framer-motion'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'main' | 'accent'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantClasses = {
    default: 'bg-secondary-background text-foreground',
    main: 'bg-main text-main-foreground',
    accent: 'bg-foreground text-background',
  }

  return (
    <motion.span
      className={`inline-block border-2 border-border rounded-base shadow-shadow px-3 py-1 text-xs sm:text-sm font-bold ${variantClasses[variant]} ${className}`}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        rotate: -2,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.span>
  )
}
