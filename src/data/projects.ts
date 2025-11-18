const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl: string
  liveLink: string
  tags?: string[]
}[] = [
  {
    name: 'Linux Kernel & Device Drivers',
    description: 'Learning Linux kernel internals and device driver development through hands-on practice and coursework. Exploring kernel modules, character drivers, and low-level programming concepts.',
    liveLink: 'https://github.com/mtm-x/linux-device-drivers',
    previewImage: '/images/portfolio/ldd.png',
    repoUrl: 'https://github.com/mtm-x/linux-device-drivers',
    tags: ['C', 'Linux Kernel', 'Device Drivers', 'Low-level Programming'],
  },
  {
    name: 'Droid Debloat',
    description: 'Cross-platform GUI written in Qt and C++ using ADB to debloat non-rooted Android devices. Improve privacy, security, and battery life by removing bloatware.',
    liveLink: 'https://github.com/mtm-x/Universal-Android-Debloater',
    previewImage: '/images/portfolio/droiddebloat.png',
    repoUrl: 'https://github.com/mtm-x/Universal-Android-Debloater',
    tags: ['Qt', 'C++', 'Android', 'ADB'],
  },
  {
    name: 'QT Communicator',
    description: 'A simple, user-friendly chatting application built with Qt Quick (QML) and C++. Developed as part of Qt-athon 2024 where we achieved 3rd place globally among 100+ teams.',
    liveLink: 'https://github.com/mtm-x/yeagerists-round2',
    previewImage: '/images/portfolio/qtcom.png',
    repoUrl: 'https://github.com/mtm-x/yeagerists-round2',
    tags: ['Qt', 'QML', 'C++', 'Chat Application'],
  },
  {
    name: 'WiFi Jammer',
    description: 'WiFi jammer application for Linux that can jam WiFi access points. Built with Qt and Python, now being ported to QML and C++ for better performance.',
    liveLink: 'https://github.com/mtm-x/wifijammer',
    previewImage: '/images/portfolio/wifijam.png',
    repoUrl: 'https://github.com/mtm-x/wifijammer',
    tags: ['Qt', 'Python', 'QML', 'Network Security'],
  },
  {
    name: 'Smart Traffic Management',
    description: 'Uses deep learning for real-time ambulance detection and IoT for traffic light automation. Part of the TechForSociety hackathon by Siemens and NASSCOM Foundation.',
    liveLink: 'https://github.com/mtm-x/STM',
    previewImage: '/images/portfolio/stm.png',
    repoUrl: 'https://github.com/mtm-x/STM',
    tags: ['Python', 'IoT', 'Deep Learning', 'YOLO', 'Raspberry Pi'],
  },
  {
    name: 'Project.Eye',
    description: 'An AI-powered assistive system that helps people who are blind navigate and interact with their surroundings using computer vision and artificial intelligence.',
    liveLink: 'https://github.com/mtm-x/Project.Eye',
    previewImage: '/images/portfolio/projectEye.png',
    repoUrl: 'https://github.com/mtm-x/Project.Eye',
    tags: ['AI', 'Computer Vision', 'Accessibility', 'Machine Learning'],
  },
]

export default PROJECTS
