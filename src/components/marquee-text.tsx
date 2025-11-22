'use client'

import { motion } from 'framer-motion'

export default function MarqueeText({ 
  text, 
  reverse = false 
}: { 
  text: string
  reverse?: boolean 
}) {
  return (
    <div className="w-full overflow-hidden bg-main border-y-4 border-border py-3 my-8">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: reverse ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="text-main-foreground font-black text-xl sm:text-2xl mx-8"
          >
            {text} ★
          </span>
        ))}
      </motion.div>
    </div>
  )
}
