'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { projects } from '@/lib/projects'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="font-mono text-sm text-primary">{'// 05'}</span>
        <h2 className="mt-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
          A selection of products I&apos;ve designed and delivered recently.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={item}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_-8px_oklch(0.62_0.24_295/0.45)]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`${project.title} project interface preview`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_24px_-4px_oklch(0.62_0.24_295/0.7)]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-secondary/50"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* View more portfolios row */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
      >
        {/* Web Development Portfolio Link */}
        <a
          href="https://webwithpoonam.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary/60 px-8 py-4 text-base font-semibold text-foreground transition-colors duration-300 hover:text-primary-foreground sm:w-auto"
        >
          <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-primary to-chart-2 transition-transform duration-300 group-hover:translate-y-0" />
          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="relative z-10">View Web Development Portfolio</span>
        </a>

        {/* Creative/Marketing Portfolio Link */}
        <a
          href="https://designwithpoonam.vercel.app/" // Or your specific design/creative link
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-border bg-secondary/30 px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/80 sm:w-auto"
        >
          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span>View Creative Portfolio</span>
        </a>
      </motion.div>
    </section>
  )
}