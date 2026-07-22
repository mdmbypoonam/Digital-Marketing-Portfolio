'use client';

import { motion } from 'framer-motion';
import { Code2, Search, Smartphone, BarChart3 } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Performance Marketing',
      icon: BarChart3,
      skills: ['Google Ads & Meta Ads', 'Lead Generation', 'Campaign Optimization', 'A/B Testing & PPC'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Analytics & SEO',
      icon: Search,
      skills: ['Google Analytics 4 (GA4)', 'Google Search Console', 'Conversion Tracking (CRO)', 'Keyword Research & On-Page SEO'],
      color: 'from-violet-500 to-violet-600',
    },
    {
      title: 'Web & Technical',
      icon: Code2,
      skills: ['Website Development', 'HTML5 & CSS3', 'JavaScript & React', 'WordPress & Bootstrap'],
      color: 'from-purple-400 to-violet-400',
    },
    {
      title: 'Marketing Tools',
      icon: Smartphone,
      skills: ['Google Tag Manager (GTM)', 'Meta Business Suite', 'Google Keyword Planner', 'Canva & Marketing Creatives'],
      color: 'from-violet-400 to-purple-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        staggerChildren: 0.08 // Staggers the internal bullet points smoothly
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background via-purple-950/10 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-sm text-primary">{'// 03'}</span>
          <h2 className="mt-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Combining creativity, technology, and strategy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-card border border-purple-500/20 rounded-2xl p-6 h-full hover:border-purple-500/50 transition-all duration-300 flex flex-col">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-lg font-semibold mb-4 text-foreground">{category.title}</h3>

                  <ul className="space-y-2.5 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        variants={liVariants}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 shrink-0"></span>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}