'use client'

import SKILLS from '@/data/skills'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <div className="mb-16">
      <motion.h2 
        className="mb-8 text-xl font-heading sm:text-2xl"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      {SKILLS.map((item, id) => {
        return (
          <motion.div 
            key={id} 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
          >
            <h3 className="mb-4 text-lg font-heading sm:text-xl">
              {item.field}
            </h3>

            <motion.div 
              className="flex flex-wrap gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {item.skills.map((skill, skillId) => {
                return (
                  <TooltipProvider key={skillId}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div 
                          className="group relative cursor-pointer"
                          variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { 
                              opacity: 1, 
                              scale: 1,
                              transition: { duration: 0.3 }
                            },
                          }}
                          whileHover={{ 
                            scale: 1.3,
                            rotate: [0, -12, 12, -12, 0],
                            transition: { 
                              scale: { duration: 0.3 },
                              rotate: { duration: 0.5 }
                            }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div 
                            className="absolute inset-0 bg-main rounded-lg blur-md scale-150"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.5 }}
                            transition={{ duration: 0.3 }}
                          />
                          <skill.icon 
                            className="h-8 w-8 relative z-10" 
                            title="" 
                          />
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className="border-border bg-secondary-background border-2 shadow-shadow">
                        {skill.skill}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
