'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Digital Marketing Executive',
      company: 'PLH Realty, Pune',
      period: '2023-2024',
      description: 'Managed end-to-end Google Ads and Meta Ads campaigns for residential real estate projects, driving high-quality leads. Leveraged GA4 and Google Search Console to analyze user behavior, set up tracking pipelines, and align active social media ads with cross-functional sales goals.',
      achievements: [
        'Monitored campaign metrics (CTR, CPC, CPA), reducing overall CPA by 15% while growing qualified lead volume by 20%.',
        'Developed, tested, and optimized high-converting, mobile-responsive landing pages to maximize lead capture rates.',
        'Executed data-driven keyword research and audience segmentation, minimizing ad spend wastage and improving ROI.',
        'Designed engaging marketing creatives via Canva and built precise custom conversion tracking architectures using GA4.'
      ],
    },
    {
      title: 'Freelance Digital & Web Designer',
      company: 'Remote / Self-Employed',
      period: '2024-2025',
      description: 'Built clean, fully responsive online platforms with an acute focus on user experience (UX), discoverability, and strategic search engine optimization frameworks.',
      achievements: [
        'Built and launched a responsive business site for SafePower Electricals, scaling organic visibility by 10% within three months.',
        'Designed and optimized an e-commerce website structure to dramatically improve product discoverability and user conversion rates.',
        'Created high-quality technical diagrams, digital layouts, and core brand assets translated from complex requirements.'
      ],
    },
    {
      title: 'Proprietor & Licensing Partner',
      company: 'Poonam Electricals, Hingoli',
      period: '2025-Present',
      description: 'Direct corporate administration, legal compliance monitoring, and periodic project audits to keep government licensing in good standing while engineering high-margin operational agreements.',
      achievements: [
        'Negotiated a strategic licensing agreement with an external contractor, securing a 34% commission on all completed projects.',
        'Oversee end-to-end business administration, asset compliance monitoring, and structural project operations across the region.'
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-4 md:px-8 relative max-w-6xl mx-auto">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-sm text-primary">{'// 04'}</span>
          <h2 className="mt-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Experience
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            A journey of delivering high-ROI digital solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Refined subtle ambient card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-chart-2/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                      <Briefcase className="text-primary-foreground" size={22} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground mt-1">
                      <span className="font-medium text-foreground/80">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-5 text-sm md:text-base leading-relaxed">{exp.description}</p>

                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">Key Achievements:</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="text-sm text-muted-foreground flex items-start leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mr-3 mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}