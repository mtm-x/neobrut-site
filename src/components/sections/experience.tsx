'use client'

import PAST_ROLES from '@/data/experience'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <div className="mb-16">
      <motion.h2 
        className="mb-8 text-xl font-heading sm:text-2xl"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <motion.div 
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {PAST_ROLES.map((role, id) => {
          return (
            <motion.div 
              className="group relative pl-6 border-l-4 border-border hover:border-main transition-all duration-300 bg-main p-6 rounded-base shadow-shadow" 
              key={id}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.5 }
                },
              }}
            >
              <motion.div 
                className="absolute left-[-8px] top-6 w-3 h-3 bg-main border-2 border-border rounded-full"
                whileHover={{ scale: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              
              <motion.div 
                className="transform"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-lg font-heading sm:text-xl"
                  whileHover={{ color: "var(--main)" }}
                  transition={{ duration: 0.3 }}
                >
                  {role.role} @ {role.company}
                </motion.h3>

                <motion.p 
                  className="mb-4 mt-0.5 text-sm opacity-70"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {role.startDate} - {role.endDate}
                </motion.p>
                <motion.p
                  whileHover={{ color: "var(--foreground)" }}
                  transition={{ duration: 0.3 }}
                >
                  {role.description}
                </motion.p>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
