import SKILLS from '@/data/skills'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Skills() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Skills</h2>

      {SKILLS.map((item, id) => {
        return (
          <div key={id} className="mb-10">
            <h3 className="mb-4 text-lg font-heading sm:text-xl">
              {item.field}
            </h3>

            <div className="flex flex-wrap gap-5">
              {item.skills.map((skill, skillId) => {
                return (
                  <TooltipProvider key={skillId}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="group relative cursor-pointer">
                          <div className="absolute inset-0 bg-main rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 scale-150"></div>
                          <skill.icon 
                            className="h-8 w-8 relative z-10 transform transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12 group-hover:animate-wiggle" 
                            title="" 
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="border-border bg-secondary-background border-2 shadow-shadow">
                        {skill.skill}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
