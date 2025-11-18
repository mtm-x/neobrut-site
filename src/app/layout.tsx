import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import ScrollProgress from '@/components/scroll-progress'
import BackToTop from '@/components/back-to-top'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thamaraimanalan M - Portfolio',
  description: 'Embedded Systems & IoT Enthusiast | Python | C/C++ | ROS2 | Qt Framework',
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
            <ScrollProgress />
            <Nav />
            <div className="text-foreground mx-auto w-[750px] max-w-full px-5 pt-28 pb-10">
              {children}
            </div>
            <BackToTop />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
