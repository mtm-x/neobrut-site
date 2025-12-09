import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-black sm:text-4xl md:text-5xl tracking-tight">
        Thamaraimanalan{' '}
        <span className="inline-block bg-main text-main-foreground px-2 py-1 sm:px-3 sm:py-1 border-2 sm:border-4 border-border rounded-base shadow-shadow">
          M
        </span>
      </h1>
      
      <p className="mt-4 text-lg sm:text-xl text-muted-foreground font-medium">
        Embedded Systems • Linux Kernel • FOSS
      </p>
      
      <div className="mt-8 sm:mt-10 text-sm sm:text-base md:text-lg space-y-4 sm:space-y-5">
        <div className="bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5">
          <p className="leading-relaxed">
            Hey! I&apos;m into embedded systems and low-level stuff. Mostly spending my time with <span className="font-semibold text-main">Linux kernel</span>, device drivers, and anything close to the metal.
          </p>
        </div>

        <div className="bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5">
          <p className="leading-relaxed">
            I build things with C, Python, and the <span className="font-semibold text-main">Qt framework</span>. Currently learning kernel internals and trying to contribute to open source when I can.
          </p>
        </div>

        <div className="bg-main text-main-foreground border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5">
          <p className="leading-relaxed font-medium">
            Check out my projects or hit me up if you want to talk about Linux, embedded systems, or anything tech.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mt-10">
        <a
          className="border-border bg-main text-main-foreground shadow-shadow rounded-base hover:translate-x-1 hover:translate-y-1 inline-flex items-center gap-2 sm:gap-3 cursor-pointer border-2 sm:border-4 px-5 py-3 sm:px-8 sm:py-4 text-center transition-all hover:shadow-none font-bold text-base sm:text-lg"
          href="/resume/ThamaraimanalanM_Resume.pdf"
          download
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </div>

      <Links />
    </div>
  )
}
