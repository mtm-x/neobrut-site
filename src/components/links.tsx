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
    <div className="mr-auto mt-10 sm:mt-12 flex w-full flex-wrap items-center gap-6 sm:gap-8">
      {links.map((link, id) => {
        return (
          <a 
            target="_blank" 
            key={id} 
            href={link.href}
            className="hover:text-main transition-colors p-2 -m-2"
            aria-label={link.label}
          >
            <link.icon title={link.label} className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        )
      })}
    </div>
  )
}
