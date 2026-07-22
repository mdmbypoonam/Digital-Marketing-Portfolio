'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rohan Jagtap',
    role: 'PLH Realty Founder',
    content: 'Poonam transformed our marketing strategy completely. The Google Ads campaigns she created generated 500+ qualified leads in just 3 months. Her expertise in landing page design and conversion optimization is exceptional.',
    rating: 5,
  },
  {
    name: 'Sakshi Sawant',
    role: 'Business Owner',
    content: 'Working with Poonam was a game-changer for our business. She developed our entire website and implemented SEO strategies that brought our organic traffic from 100 to 2000 monthly visitors. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sunil Jagtap',
    role: 'Safepower Electrical Manager',
    content: 'The business website Poonam designed converted at 28% - way above industry average. Her understanding of conversion psychology and user experience is remarkable. She is a true marketing professional.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-primary">{'// 06'}</span>
          <h2 className="mt-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Client Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Real feedback from business owners and teams I&apos;ve helped scale.
          </p>
        </motion.div>

        {/* Testimonials Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col justify-between bg-card/40 border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 shadow-sm backdrop-blur-sm group"
            >
              {/* Subtle Decorative Quote Icon background effect */}
              <div className="absolute top-6 right-6 text-muted-foreground/10 group-hover:text-primary/10 transition-colors duration-300">
                <Quote className="h-8 w-8 transform rotate-180" />
              </div>

              <div>
                {/* Five Star Rating Blocks */}
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-amber-400 text-amber-400" 
                    />
                  ))}
                </div>

                {/* Review Copy */}
                <blockquote className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed relative z-10">
                  &quot;{item.content}&quot;
                </blockquote>
              </div>

              {/* Author Info Block */}
              <div className="border-t border-border/60 pt-4 mt-auto">
                <p className="font-semibold text-base text-foreground tracking-tight">
                  {item.name}
                </p>
                <p className="text-xs font-mono text-primary mt-0.5">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}