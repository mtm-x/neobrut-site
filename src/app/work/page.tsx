import PROJECTS from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Work() {
  return (
    <div>
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl font-black sm:text-4xl md:text-5xl inline-block bg-main text-main-foreground px-4 py-2 sm:px-6 sm:py-3 border-2 sm:border-4 border-border rounded-base shadow-shadow">
          My Work
        </h1>
      </div>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              key={id}
              className="border-border shadow-shadow rounded-base bg-main text-main-foreground border-2 sm:border-4 p-4 sm:p-5"
            >
              <AspectRatio
                className="border-border shadow-shadow rounded-base border-2 overflow-hidden"
                ratio={71 / 26}
              >
                <img
                  className="rounded-base w-full h-full object-cover"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </AspectRatio>

              <div className="mt-5">
                <h2 className="font-heading text-xl sm:text-2xl">
                  {project.name}
                </h2>

                {project.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagId) => (
                      <span
                        key={tagId}
                        className="border-border bg-secondary-background text-foreground rounded-base border-2 px-3 py-1 text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-3 text-sm sm:text-base">{project.description}</p>

                <div className="mt-4">
                  <a
                    className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base inline-block cursor-pointer border-2 px-4 py-2 text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
