'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-5 md:py-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="font-mono text-sm text-primary">{'// 02'}</span>
        <h2 className="mt-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          About Me
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
          Welcome to my professional evolution.
        </p>
        </motion.div>

        <div className="items-center justify-between gap-12 lg:flex">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Performance Marketing Professional and Front-End Developer with an engineering foundation. I specialize in turning user traffic into measurable revenue by combining logical problem-solving with conversion-driven web architecture.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a Bachelor’s degree in Electrical Engineering from MIT, my career approach is heavily rooted in data and optimization. I look at marketing funnels and code structures through an analytical lens—identifying drop-off points, optimizing systems, and maximizing efficiency.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Throughout my journey, I have managed high-ROI Google and Meta Ads pipelines, engineered responsive front-end landing pages, and set up advanced GA4/GTM custom tracking systems to eliminate ad spend waste[cite: 1]. Whether designing user-focused websites or implementing technical on-page SEO frameworks[cite: 1], my priority is always scale and efficiency.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond engineering and marketing, I manage compliance and business administration as a licensed proprietor, and consult on freelance web projects — bringing absolute cross-functional execution to every build.
            </p>

            {/* Core Capability Badges */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              {['Paid Media', 'SEO Fundamentals', 'Front-End Development'].map((skill) => (
                <div 
                  key={skill}
                  className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs font-medium text-primary tracking-wide"
                >
                  {skill}
                </div>
              ))}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
