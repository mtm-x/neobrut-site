'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps extends Omit<HTMLMotionProps<'a'>, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function AnimatedButton({ 
  children, 
  variant = 'primary',
  className = '',
  ...props 
}: AnimatedButtonProps) {
  const baseClasses = "border-2 rounded-base font-base font-heading cursor-pointer text-center text-sm sm:text-base inline-block relative overflow-hidden group/btn"
  
  const variantClasses = variant === 'primary' 
    ? "border-border bg-main text-main-foreground shadow-shadow px-6 py-3"
    : "border-border bg-secondary-background text-foreground shadow-shadow px-4 py-2"

  return (
    <motion.a
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ 
        scale: 1.05,
        x: 4,
        y: 4,
        boxShadow: "none"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.span 
        className="absolute inset-0 bg-foreground"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute inset-0 bg-main opacity-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.a>
  )
}
