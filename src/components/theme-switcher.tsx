'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <button 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="group relative p-1 hover:scale-110 transition-transform duration-300"
        aria-label="Toggle theme"
      >
        <div className="absolute inset-0 bg-main-foreground rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 scale-150"></div>
        <Sun className="stroke-main-foreground hidden size-4 sm:size-6 dark:inline relative z-10 rotate-0 dark:rotate-180 transition-all duration-500 group-hover:rotate-12" />
        <Moon className="stroke-main-foreground inline size-4 sm:size-6 dark:hidden relative z-10 rotate-0 dark:rotate-180 transition-all duration-500 group-hover:-rotate-12" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  )
}
