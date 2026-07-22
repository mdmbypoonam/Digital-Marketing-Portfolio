'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from '@/components/brand-icons'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none"
    >
      {/* Main Structural Wrapper */}
      <div
        className={`w-full max-w-6xl transition-all duration-300 pointer-events-auto flex flex-col ${
          scrolled ? 'mt-4' : 'mt-0'
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 transition-all duration-300 ${
            scrolled
              ? 'rounded-full border border-border/80 bg-background/70 py-2.5 backdrop-blur-xl shadow-lg shadow-background/5'
              : 'border-b border-transparent bg-transparent py-5'
          }`}
        >
          {/* Brand Identity */}
          <a
            href="#"
            className="font-mono text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="text-primary">{'<'}</span>
            poonam.dev
            <span className="text-primary">{' />'}</span>
          </a>

          {/* Desktop Links Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Brand Social Triggers */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://github.com/mdmbypoonam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/poonamk7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/adswithpoonam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/917083759365"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Display Hamburger Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Navigation Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground hover:bg-secondary/50 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* AnimatePresence for Smooth Mobile Out-Animations */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="mt-2 flex flex-col gap-1 rounded-2xl border border-border/80 bg-background/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}