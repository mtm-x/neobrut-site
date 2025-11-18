import PAST_ROLES from '@/data/experience'

export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>

      <div className="space-y-8">
        {PAST_ROLES.map((role, id) => {
          return (
            <div 
              className="group relative pl-6 border-l-4 border-border hover:border-main transition-all duration-300" 
              key={id}
            >
              <div className="absolute left-[-8px] top-0 w-3 h-3 bg-main border-2 border-border rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              
              <div className="transform transition-all duration-300 group-hover:translate-x-2">
                <h3 className="text-lg font-heading sm:text-xl group-hover:text-main transition-colors duration-300">
                  {role.role} @ {role.company}
                </h3>

                <p className="mb-4 mt-0.5 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {role.startDate} - {role.endDate}
                </p>
                <p className="group-hover:text-foreground transition-colors duration-300">{role.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
