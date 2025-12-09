import PAST_ROLES from '@/data/experience'

export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">
        Experience
      </h2>

      <div className="space-y-6">
        {PAST_ROLES.map((role, id) => {
          return (
            <div 
              className="bg-main text-main-foreground p-5 sm:p-6 rounded-base border-2 sm:border-4 border-border shadow-shadow" 
              key={id}
            >
              <h3 className="text-lg font-heading sm:text-xl">
                {role.role} @ {role.company}
              </h3>
              <p className="mb-3 mt-1 text-sm opacity-80">
                {role.startDate} - {role.endDate}
              </p>
              <p>{role.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
