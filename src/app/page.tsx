'use client'

import Links from '@/components/links'
import FadeIn from '@/components/animated/fade-in'
import StaggerContainer from '@/components/animated/stagger-container'
import StaggerItem from '@/components/animated/stagger-item'
import MarqueeText from '@/components/marquee-text'
import BadgeCollection from '@/components/badge-collection'
import TypingEffect from '@/components/typing-effect'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="font-base">
      <FadeIn direction="down" duration={0.8}>
        <div className="relative inline-block">
          <motion.div 
            className="absolute -inset-2 sm:-inset-4 bg-main rounded-base opacity-20 blur-xl sm:blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <h1 className="text-2xl font-black sm:text-4xl md:text-5xl relative z-10 tracking-tight">
            <span className="inline-block transform hover:scale-105 sm:hover:scale-110 transition-transform duration-300">
              Thamaraimanalan
            </span>{' '}
            <span className="inline-block bg-main text-main-foreground px-2 py-1 sm:px-3 sm:py-1 border-2 sm:border-4 border-border rounded-base shadow-shadow transform rotate-[-2deg] hover:rotate-0 transition-all duration-300">
              M
            </span>
          </h1>
        </div>
      </FadeIn>
      
      <FadeIn delay={0.2} direction="none" duration={0.8}>
        <TypingEffect />
      </FadeIn>
      
      <StaggerContainer staggerDelay={0.15} className="mt-8 sm:mt-10 text-sm sm:text-base md:text-lg space-y-4 sm:space-y-5">
        <StaggerItem>
          <motion.div 
            className="bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5 relative overflow-hidden group"
            whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px var(--border)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-main opacity-10 rounded-full transform translate-x-8 sm:translate-x-10 -translate-y-8 sm:-translate-y-10 group-hover:scale-150 transition-transform duration-500" />
            <p className="relative z-10 leading-relaxed">
              Hi, I&apos;m <span className="font-bold text-main">Thamaraimanalan M</span>, an embedded systems and low-level programming enthusiast passionate about the <span className="font-semibold">Linux kernel</span> and <span className="font-semibold">FOSS</span>.
            </p>
          </motion.div>
        </StaggerItem>

        <StaggerItem>
          <motion.div 
            className="bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5 relative overflow-hidden group"
            whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px var(--border)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-main opacity-10 rounded-full transform -translate-x-10 sm:-translate-x-12 translate-y-10 sm:translate-y-12 group-hover:scale-150 transition-transform duration-500" />
            <p className="relative z-10 leading-relaxed">
              I build hobby projects around embedded systems, cross-platform application development with <span className="font-semibold text-main">Qt framework</span>, and I&apos;m currently diving deep into Linux kernel internals and device driver development.
            </p>
          </motion.div>
        </StaggerItem>

        <StaggerItem>
          <motion.div 
            className="bg-main text-main-foreground border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5 relative overflow-hidden group"
            whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px var(--border)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-foreground opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
            <p className="relative z-10 leading-relaxed font-medium">
              Whether I&apos;m writing kernel modules, debugging device drivers, optimizing embedded firmware, or building IoT solutions, I&apos;m constantly exploring new technologies and pushing the boundaries of what&apos;s possible with code and hardware.
            </p>
          </motion.div>
        </StaggerItem>
      </StaggerContainer>

      <FadeIn delay={0.8} direction="up" className="mt-8 sm:mt-10">
        <motion.a
          whileHover={{ 
            scale: 1.05,
            rotate: -1,
          }}
          whileTap={{ scale: 0.95 }}
          className="border-border bg-main text-main-foreground shadow-shadow rounded-base hover:translate-x-1 hover:translate-y-1 inline-flex items-center gap-2 sm:gap-3 cursor-pointer border-2 sm:border-4 px-5 py-3 sm:px-8 sm:py-4 text-center transition-all hover:shadow-none font-bold text-base sm:text-lg group relative overflow-hidden"
          href="/resume/Thamaraimanalan_resume.pdf"
          download
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </span>
          <motion.span 
            className="absolute inset-0 bg-foreground"
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute -inset-1 bg-main opacity-30 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.a>
      </FadeIn>

      <FadeIn delay={1} direction="up">
        <MarqueeText text="EMBEDDED SYSTEMS • LINUX KERNEL • DEVICE DRIVERS • IoT SOLUTIONS" />
      </FadeIn>

      <BadgeCollection />

      <FadeIn delay={1.4} direction="up">
        <Links />
      </FadeIn>
    </div>
  )
}
