export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    title: 'Real Estate Lead Generation Engine',
    description:
      'Engineered high-performance landing pages paired with Meta and Google Ads pipelines, scaling qualified lead generation by 35% monthly while maintaining structural search visibility.',
    image: '/projects/project-1.jpg',
    tags: ['Performance Marketing', 'Lead Gen', 'Google & Meta Ads', 'CRO'],
    demoUrl: 'https://venkatesh-buildcon.vercel.app/',
    repoUrl: 'https://github.com/mdmbypoonam/Venkatesh-Buildcon-Website',
  },
  {
    title: 'Ranjekar Realty Platform',
    description:
      'Built a highly responsive, modern real estate portal using React. Focused heavily on interface fluidity and lightning-fast asset loading to drastically lower user bounce rates.',
    image: '/projects/project-2.jpg',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
    demoUrl: 'https://ranjekar-realty.vercel.app/',
    repoUrl: 'https://github.com/mdmbypoonam/Ranjekar-Realty-Website',
  },
  {
    title: 'SafePower Electricals Business Site',
    description:
      'Designed and coded an end-to-end web presence for an electrical enterprise. Implemented technical on-page SEO frameworks that directly doubled the company’s organic visibility.',
    image: '/projects/project-3.jpg',
    tags: ['React', 'Technical SEO', 'Semantic HTML', 'CSS Architecture'],
    demoUrl: 'https://safepowerelectricals.com/',
    repoUrl: 'https://github.com/mdmbypoonam/Safepower-Electricals-Website',
  },
  {
    title: 'Majestic New Friends Landing Page',
    description:
      'Created an ultra-optimized landing page with precise conversion hooks. Leveraged lightweight web methodologies to maximize structural speed and optimize campaign quality score metrics.',
    image: '/projects/project-4.jpg',
    tags: ['JavaScript', 'Bootstrap', 'Performance Tuning', 'UI Development'],
    demoUrl: 'https://majestic-new-friends.vercel.app/',
    repoUrl: 'https://github.com/mdmbypoonam/Majestic-New-Friends-Landing-Page',
  },
]