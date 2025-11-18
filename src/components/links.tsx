import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string; label: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:mahasel.1969@gmail.com',
      label: 'Email',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/mtm-x',
      label: 'GitHub',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/mtm-x',
      label: 'LinkedIn',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a 
            target="_blank" 
            key={id} 
            href={link.href}
            className="group relative transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
            aria-label={link.label}
          >
            <div className="absolute inset-0 bg-main rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 scale-150"></div>
            <link.icon 
              title={link.label} 
              className="relative z-10 transition-transform duration-300 group-hover:rotate-12" 
            />
          </a>
        )
      })}
    </div>
  )
}
