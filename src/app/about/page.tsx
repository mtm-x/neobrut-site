import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import Achievements from '@/components/sections/achievements'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 flex flex-col sm:flex-row sm:gap-8">
        <div className="mb-6 sm:mb-0 flex-shrink-0 group">
          <div className="relative">
            <div className="absolute inset-0 bg-main rounded-base blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              src="/images/portfolio/myself.jpg"
              alt="Thamaraimanalan M"
              className="border-border shadow-shadow rounded-base w-64 h-80 sm:w-72 sm:h-96 object-cover border-4 mx-auto sm:mx-0 relative z-10 transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2"
            />
          </div>
        </div>

        <div className="text-base sm:text-lg flex-1 space-y-4">
          <p>
            I'm a final year Electronics and Communication student at Government College of Technology, Coimbatore, 
            with a deep passion for Linux and low-level engineering. I'm currently enrolled in an Embedded Systems 
            and Linux kernel course by Pyjamabrah, taught by Google Software Engineers.
          </p>
          
          <p>
            I work with C programming and scripting daily, and regularly use Python and Shell scripting for automation 
            and building applications. Recently, I completed a 4-month remote internship at FOSSEE, IIT Bombay, where I 
            developed a PyQt6 application to streamline the simulation process of OpenModelica.
          </p>
          
          <p>
            My GitHub is full of personal projects exploring embedded systems, Qt framework, and Linux internals. 
            I'm driven by curiosity and a genuine love for open source - constantly learning and building things 
            that interest me.
          </p>
        </div>
      </div>

      <Skills />

      <Achievements />

      <Experience />
    </div>
  )
}
