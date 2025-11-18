import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">
        Thamaraimanalan M
      </h1>
      
      <p className="mt-2 text-lg sm:text-xl">
        Embedded Systems & Low Level Engineering Enthusiast
      </p>
      
      <div className="mt-8 text-base sm:text-lg space-y-4">
        <p>
          Hi, I'm Thamaraimanalan M, an embedded systems and low-level programming enthusiast passionate about the Linux kernel and FOSS.
        </p>

        <p>
          I build hobby projects around embedded systems, cross-platform application development with Qt framework, and I'm currently diving deep into Linux kernel internals and device driver development.
        </p>

        <p>
          Whether I'm writing kernel modules, debugging device drivers, optimizing embedded firmware, or building IoT solutions, I'm constantly exploring new technologies and pushing the boundaries of what's possible with code and hardware.
        </p>
      </div>

      <div className="mt-8">
        <a
          className="border-border bg-main text-main-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY inline-block cursor-pointer border-2 px-6 py-3 text-center text-sm transition-all hover:shadow-none sm:text-base font-heading group relative overflow-hidden"
          href="/resume/Thamaraimanalan_resume.pdf"
          download
        >
          <span className="relative z-10">Download Resume</span>
          <span className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 transition-opacity"></span>
        </a>
      </div>

      <Links />
    </div>
  )
}
