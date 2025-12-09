import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import Achievements from '@/components/sections/achievements'

export default function About() {
  return (
    <div className="font-base">
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl font-black sm:text-4xl md:text-5xl inline-block bg-main text-main-foreground px-4 py-2 sm:px-6 sm:py-3 border-2 sm:border-4 border-border rounded-base shadow-shadow">
          About Me
        </h1>
      </div>

      <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:gap-8">
        <div className="mb-6 sm:mb-0 flex-shrink-0">
          <img
            src="/images/portfolio/myself.jpg"
            alt="Thamaraimanalan M"
            className="border-border shadow-shadow rounded-base w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 object-cover border-2 sm:border-4 mx-auto sm:mx-0"
          />
        </div>

        <div className="text-sm sm:text-base md:text-lg flex-1 space-y-4 sm:space-y-5">
          <div className="bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5">
            <p className="leading-relaxed">
              Final year <span className="font-semibold text-main">ECE student</span> at GCT Coimbatore. Currently doing a course on embedded systems and Linux kernel by Pyjamabrah (taught by Google engineers).
            </p>
          </div>
          
          <div className="bg-secondary-background border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5">
            <p className="leading-relaxed">
              I work with <span className="font-semibold text-main">C</span> mostly, plus Python and shell scripts for automation. Did a 4-month internship at <span className="font-semibold">FOSSEE, IIT Bombay</span> building a PyQt6 app for OpenModelica simulations.
            </p>
          </div>
          
          <div className="bg-main text-main-foreground border-2 sm:border-4 border-border rounded-base shadow-shadow p-4 sm:p-5">
            <p className="leading-relaxed font-medium">
              My GitHub has a bunch of projects around embedded systems, Qt, and Linux stuff. I just like building things and learning how stuff works under the hood.
            </p>
          </div>
        </div>
      </div>

      <Skills />
      <Achievements />
      <Experience />
    </div>
  )
}
