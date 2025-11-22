'use client'

import PROJECTS from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import FadeIn from '@/components/animated/fade-in'
import StaggerContainer from '@/components/animated/stagger-container'
import StaggerItem from '@/components/animated/stagger-item'
import { motion } from 'framer-motion'

export default function Work() {
  return (
    <div>
      <FadeIn direction="down" duration={0.8}>
        <div className="mb-8 sm:mb-10 inline-block">
          <h1 className="text-2xl font-black sm:text-4xl md:text-5xl inline-block bg-main text-main-foreground px-4 py-2 sm:px-6 sm:py-3 border-2 sm:border-4 border-border rounded-base shadow-shadow transform hover:rotate-[-1deg] transition-all duration-300">
            My Work
          </h1>
          <motion.div 
            className="h-1.5 sm:h-2 bg-main mt-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.2} className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <StaggerItem key={id}>
              <motion.div
                className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5 group relative overflow-hidden"
                whileHover={{ 
                  y: -8,
                  boxShadow: "12px 12px 0px 0px var(--border)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground opacity-0 group-hover:opacity-5"
                  initial={false}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                <AspectRatio
                  className="border-border shadow-shadow rounded-base border-2 overflow-hidden relative"
                  ratio={71 / 26}
                >
                  <motion.img
                    className="rounded-base w-full h-full object-cover"
                    src={`${project.previewImage}`}
                    alt={project.name}
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-border/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </AspectRatio>

                <div className="text-main-foreground font-base mt-5 relative z-10">
                  <motion.h2 
                    className="font-heading text-xl sm:text-2xl"
                    whileHover={{ color: "var(--foreground)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.name}
                  </motion.h2>

                  {project.tags && (
                    <motion.div 
                      className="mt-3 flex flex-wrap gap-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                          },
                        },
                      }}
                    >
                      {project.tags.map((tag, tagId) => (
                        <motion.span
                          key={tagId}
                          className="border-border bg-secondary-background text-foreground rounded-base border-2 px-3 py-1 text-xs sm:text-sm cursor-default"
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            y: -4,
                            boxShadow: "4px 4px 0px 0px var(--border)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}

                  <motion.p 
                    className="mt-3"
                    whileHover={{ color: "var(--foreground)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="mt-6">
                    <motion.a
                      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base cursor-pointer border-2 px-4 py-2 text-center text-sm sm:text-base inline-block w-full relative overflow-hidden group/button"
                      href={project.repoUrl}
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
                      <span className="relative z-10">View on GitHub</span>
                      <motion.span 
                        className="absolute inset-0 bg-main"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </div>
  )
}
