import {
  type IconType,
  SiC,
  SiCplusplus,
  SiPython,
  SiLinux,
  SiQt,
  SiRaspberrypi,
  SiGit,
  SiGithub,
  SiRos,
  SiGnubash,
  SiDocker,
  SiArduino,
  SiTensorflow,
  SiOpencv,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Programming Languages',
      skills: [
        { skill: 'C', icon: SiC },
        { skill: 'C++', icon: SiCplusplus },
        { skill: 'Python', icon: SiPython },
        { skill: 'Shell Scripting', icon: SiGnubash },
      ],
    },
    {
      field: 'Embedded Systems & IoT',
      skills: [
        { skill: 'Linux Kernel', icon: SiLinux },
        { skill: 'Qt Framework', icon: SiQt },
        { skill: 'Raspberry Pi', icon: SiRaspberrypi },
        { skill: 'Arduino', icon: SiArduino },
        { skill: 'ROS2', icon: SiRos },
      ],
    },
    {
      field: 'Tools & Technologies',
      skills: [
        { skill: 'Git', icon: SiGit },
        { skill: 'GitHub', icon: SiGithub },
        { skill: 'Docker', icon: SiDocker },
        { skill: 'OpenCV', icon: SiOpencv },
        { skill: 'TensorFlow', icon: SiTensorflow },
      ],
    },
  ]

export default SKILLS
