'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from '@/components/brand-icons'

const socials = [
  { icon: Mail, href: 'mailto:poonamkashide7@gmail.com', label: 'Email' }, // Verified from resume[cite: 1]
  { icon: GithubIcon, href: 'https://github.com/mdmbypoonam', label: 'GitHub' }, // Verified from resume[cite: 1]
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/poonamk7', label: 'LinkedIn' }, // Verified from resume[cite: 1]
  { icon: InstagramIcon, href: 'https://www.instagram.com/adswithpoonam', label: 'Instagram' },
  { icon: WhatsAppIcon, href: 'https://wa.me/917083759365', label: 'WhatsApp' }, // Verified from resume[cite: 1]
]

export function SiteFooter() {
  const [currentYear, setCurrentYear] = useState(2026) // Sets absolute safety default matching context

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="relative border-t border-border bg-card/20 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:flex-row sm:justify-between sm:px-6"
      >
        {/* Branding & Attribution Text */}
        <div className="text-center sm:text-left">
          <a href="#" className="font-mono text-sm font-semibold tracking-tight transition-colors hover:text-primary">
            <span className="text-primary">{'<'}</span>
            poonam.dev
            <span className="text-primary">{' />'}</span>
          </a>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground tracking-wide">
            © {currentYear} Poonam Kashide. All Rights Reserved.
          </p>
        </div>

        {/* Dynamic Social Action Row */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg border border-border bg-card/60 p-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary hover:bg-secondary/30 hover:shadow-[0_0_18px_-4px_oklch(0.62_0.24_295/0.7)]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  )
}