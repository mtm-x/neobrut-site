'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 border-border bg-main text-main-foreground shadow-shadow rounded-base border-2 p-3 transition-all duration-300 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none animate-fadeInUp group"
          aria-label="Back to top"
        >
          <div className="absolute inset-0 bg-foreground rounded-base opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <ArrowUp className="h-5 w-5 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </>
  )
}
