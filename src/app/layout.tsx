import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import BackToTop from '@/components/back-to-top'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Thamaraimanalan M - Portfolio',
  description: 'Embedded Systems & FOSS Enthusiast | C/C++  | Python | Linux | Qt Framework',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-foreground mx-auto w-[750px] max-w-full px-4 sm:px-5 pt-24 sm:pt-28 pb-8 sm:pb-10">
              {children}
            </div>
            <BackToTop />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
