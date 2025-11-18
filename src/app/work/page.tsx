import PROJECTS from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Work() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Work</h1>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5 group hover-lift relative overflow-hidden"
              key={id}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <AspectRatio
                className="border-border shadow-shadow rounded-base border-2 overflow-hidden relative"
                ratio={71 / 26}
              >
                <img
                  className="rounded-base w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-border/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </AspectRatio>

              <div className="text-main-foreground font-base mt-5 relative z-10">
                <h2 className="font-heading text-xl sm:text-2xl group-hover:text-foreground transition-colors duration-300">
                  {project.name}
                </h2>

                {project.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagId) => (
                      <span
                        key={tagId}
                        className="border-border bg-secondary-background text-foreground rounded-base border-2 px-3 py-1 text-xs sm:text-sm transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-shadow cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-3 transition-all duration-300 group-hover:text-foreground">{project.description}</p>

                <div className="mt-6">
                  <a
                    className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base inline-block w-full relative overflow-hidden group/button"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">View on GitHub</span>
                    <span className="absolute inset-0 bg-main opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></span>
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
