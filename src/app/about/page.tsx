'use client'

import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import Achievements from '@/components/sections/achievements'
import FadeIn from '@/components/animated/fade-in'
import StaggerContainer from '@/components/animated/stagger-container'
import StaggerItem from '@/components/animated/stagger-item'
import BentoGrid from '@/components/bento-grid'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="font-base">
      <FadeIn direction="down" duration={0.8}>
        <div className="mb-8 sm:mb-10 inline-block">
          <h1 className="text-2xl font-black sm:text-4xl md:text-5xl inline-block bg-main text-main-foreground px-4 py-2 sm:px-6 sm:py-3 border-2 sm:border-4 border-border rounded-base shadow-shadow transform hover:rotate-[-1deg] transition-all duration-300">
            About Me
          </h1>
          <motion.div 
            className="h-1.5 sm:h-2 bg-main mt-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </FadeIn>

      <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:gap-8">
        <FadeIn delay={0.2} direction="left" className="mb-6 sm:mb-0 flex-shrink-0 group">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative elements around image - smaller on mobile */}
            <motion.div 
              className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-main border-2 sm:border-4 border-border rounded-full z-20"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow z-20"
              animate={{
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-main rounded-base blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src="/images/portfolio/myself.jpg"
              alt="Thamaraimanalan M"
              className="border-border shadow-shadow rounded-base w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 object-cover border-2 sm:border-4 mx-auto sm:mx-0 relative z-10"
              whileHover={{ 
                rotate: -2,
                boxShadow: "8px 8px 0px 0px var(--border)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.2} className="text-sm sm:text-base md:text-lg flex-1 space-y-4 sm:space-y-5">
          <StaggerItem>
            <motion.div 
              className="bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5 relative overflow-hidden group"
              whileHover={{ y: -3, boxShadow: "6px 6px 0px 0px var(--border)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-main opacity-10 rounded-full transform translate-x-6 sm:translate-x-8 -translate-y-6 sm:-translate-y-8" />
              <p className="relative z-10 leading-relaxed">
                I&apos;m a final year <span className="font-semibold text-main">Electronics and Communication</span> student at Government College of Technology, Coimbatore, 
                with a deep passion for Linux and low-level engineering. I&apos;m currently enrolled in an Embedded Systems 
                and Linux kernel course by <span className="font-semibold">Pyjamabrah</span>, taught by Google Software Engineers.
              </p>
            </motion.div>
          </StaggerItem>
          
          <StaggerItem>
            <motion.div 
              className="bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5 relative overflow-hidden group"
              whileHover={{ y: -3, boxShadow: "6px 6px 0px 0px var(--border)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-main opacity-10 rounded-full transform -translate-x-8 sm:-translate-x-10 translate-y-8 sm:translate-y-10" />
              <p className="relative z-10 leading-relaxed">
                I work with <span className="font-semibold text-main">C programming</span> and scripting daily, and regularly use Python and Shell scripting for automation 
                and building applications. Recently, I completed a 4-month remote internship at <span className="font-semibold">FOSSEE, IIT Bombay</span>, where I 
                developed a PyQt6 application to streamline the simulation process of OpenModelica.
              </p>
            </motion.div>
          </StaggerItem>
          
          <StaggerItem>
            <motion.div 
              className="bg-main text-main-foreground border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5 relative overflow-hidden group"
              whileHover={{ y: -3, boxShadow: "6px 6px 0px 0px var(--border)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-foreground opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              <p className="relative z-10 leading-relaxed font-medium">
                My GitHub is full of personal projects exploring embedded systems, Qt framework, and Linux internals. 
                I&apos;m driven by curiosity and a genuine love for open source - constantly learning and building things 
                that interest me. 🚀
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      <BentoGrid />

      <FadeIn delay={0.6}>
        <Skills />
      </FadeIn>

      <FadeIn delay={0.8}>
        <Achievements />
      </FadeIn>

      <FadeIn delay={1}>
        <Experience />
      </FadeIn>
    </div>
  )
}
