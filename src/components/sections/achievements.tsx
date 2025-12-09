import ACHIEVEMENTS from '@/data/achievements'

export default function Achievements() {
  return (
    <div className="mb-16">
      <h2 className="mb-6 text-xl font-heading sm:text-2xl">
        Achievements
      </h2>

      <div className="flex flex-col gap-4">
        {ACHIEVEMENTS.map((achievement, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main text-main-foreground border-2 sm:border-4 p-4 sm:p-5"
              key={id}
            >
              <h3 className="text-lg font-heading sm:text-xl">
                {achievement.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base">
                {achievement.description}
              </p>

              {achievement.link && (
                <a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base mt-4 inline-block cursor-pointer border-2 px-4 py-2 text-center text-sm sm:text-base hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
