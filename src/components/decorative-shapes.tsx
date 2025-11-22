'use client'

import { motion } from 'framer-motion'

export default function DecorativeShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left Corner Shape - hidden on small screens */}
      <motion.div
        className="absolute top-20 left-10 w-12 h-12 sm:w-20 sm:h-20 bg-main border-2 sm:border-4 border-border rounded-full hidden sm:block"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Top Right Triangle - smaller on mobile */}
      <motion.div
        className="absolute top-40 right-5 sm:right-20 w-0 h-0 border-l-[25px] sm:border-l-[40px] border-l-transparent border-r-[25px] sm:border-r-[40px] border-r-transparent border-b-[40px] sm:border-b-[60px] border-b-main opacity-40 sm:opacity-60 hidden sm:block"
        style={{ filter: 'drop-shadow(4px 4px 0px var(--border))' }}
        animate={{
          rotate: [0, 180, 360],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Left Side Rectangle - hidden on mobile */}
      <motion.div
        className="absolute left-5 top-1/3 w-12 h-20 sm:w-16 sm:h-24 bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow hidden md:block"
        animate={{
          x: [0, -5, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Right Side Star-like shape - smaller on mobile */}
      <motion.div
        className="absolute right-5 sm:right-10 top-2/3 w-10 h-10 sm:w-16 sm:h-16 hidden md:block"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-main border-2 sm:border-4 border-border rounded-lg transform rotate-45" />
          <div className="absolute inset-0 bg-main border-2 sm:border-4 border-border rounded-lg" />
        </div>
      </motion.div>

      {/* Bottom Right Circle - simplified on mobile */}
      <motion.div
        className="absolute bottom-32 right-1/4 w-8 h-8 sm:w-12 sm:h-12 border-2 sm:border-4 border-border rounded-full bg-foreground opacity-10 sm:opacity-20 hidden sm:block"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Bottom Left Oval - hidden on mobile */}
      <motion.div
        className="absolute bottom-20 left-1/4 w-20 h-14 sm:w-24 sm:h-16 bg-main border-2 sm:border-4 border-border rounded-full shadow-shadow hidden md:block"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Small floating circles - minimal on mobile */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-main border-2 border-border rounded-full hidden lg:block"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/3 w-8 h-8 sm:w-10 sm:h-10 bg-secondary-background border-2 border-border rounded-lg shadow-shadow hidden lg:block"
        animate={{
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
