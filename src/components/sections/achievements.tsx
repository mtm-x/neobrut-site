import ACHIEVEMENTS from '@/data/achievements'

export default function Achievements() {
  return (
    <div className="mb-16">
      <h2 className="mb-6 text-xl font-heading sm:text-2xl">Achievements</h2>

      <div className="flex flex-col gap-4">
        {ACHIEVEMENTS.map((achievement, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5 group hover-lift relative overflow-hidden"
              key={id}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-foreground/5 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
              
              <h3 className="text-lg font-heading sm:text-xl relative z-10 group-hover:text-foreground transition-colors duration-300">
                {achievement.title}
              </h3>

              <p className="text-text mt-2 text-sm sm:text-base relative z-10 group-hover:text-foreground transition-colors duration-300">
                {achievement.description}
              </p>

              {achievement.link && (
                <a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY mt-4 inline-block cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base relative z-10 overflow-hidden group/button"
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10">View Certificate</span>
                  <span className="absolute inset-0 bg-main opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></span>
                </a>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
