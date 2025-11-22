'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const phrases = [
  'Embedded Systems Engineer 💻',
  'Linux Kernel Enthusiast 🐧',
  'IoT Solutions Builder ⚡',
  'Device Driver Developer 🔧',
  'Open Source Contributor ❤️',
]

export default function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex])

  return (
    <div className="h-12 sm:h-14 flex items-center">
      <motion.span
        className="text-base sm:text-lg md:text-xl font-bold text-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-5 sm:h-6 bg-main ml-1 align-middle"
        />
      </motion.span>
    </div>
  )
}
