'use client'

import ACHIEVEMENTS from '@/data/achievements'
import { motion } from 'framer-motion'

export default function Achievements() {
  return (
    <div className="mb-16">
      <motion.h2 
        className="mb-6 text-xl font-heading sm:text-2xl"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </motion.h2>

      <motion.div 
        className="flex flex-col gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {ACHIEVEMENTS.map((achievement, id) => {
          return (
            <motion.div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5 group relative overflow-hidden"
              key={id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                },
              }}
              whileHover={{ 
                y: -8,
                boxShadow: "12px 12px 0px 0px var(--border)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-foreground/5 to-transparent rounded-bl-full"
                initial={{ x: 128, y: -128 }}
                whileHover={{ x: 64, y: -64 }}
                transition={{ duration: 0.5 }}
              />
              
              <motion.h3 
                className="text-lg font-heading sm:text-xl relative z-10"
                whileHover={{ color: "var(--foreground)" }}
                transition={{ duration: 0.3 }}
              >
                {achievement.title}
              </motion.h3>

              <motion.p 
                className="text-text mt-2 text-sm sm:text-base relative z-10"
                whileHover={{ color: "var(--foreground)" }}
                transition={{ duration: 0.3 }}
              >
                {achievement.description}
              </motion.p>

              {achievement.link && (
                <motion.a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base mt-4 inline-block cursor-pointer border-2 px-4 py-2 text-center text-sm sm:text-base relative z-10 overflow-hidden group/button"
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    x: 4,
                    y: 4,
                    boxShadow: "none"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">View Certificate</span>
                  <motion.span 
                    className="absolute inset-0 bg-main"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )}
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
