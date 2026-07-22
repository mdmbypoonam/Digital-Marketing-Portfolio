'use client'

import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import { useState, useEffect } from "react";

export function Hero() {

  const roles = [
    "Digital Marketer",
    "Web Designer",
    "UI Developer",
  ];

  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentRole(roles[index]);
    }, 1500); // 1 second

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section
      id="#hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Animated gradient glows */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-chart-4/20 blur-[120px]"
      />

      {/* Grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.27_0.02_290/0.25)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.27_0.02_290/0.25)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open to Digital Marketing & Front-End Opportunities
          </motion.span>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I&apos;m Poonam,
            <br />
            a{" "}
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-4 bg-clip-text text-transparent text-glow">
              {currentRole}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Helping businesses generate leads and grow through performance marketing, SEO, and conversion-focused landing pages.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/documents/Poonam_Kashide_Resume.pdf"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_0_0_oklch(0.62_0.24_295/0.5)] transition-all duration-300 hover:shadow-[0_0_32px_2px_oklch(0.62_0.24_295/0.55)] hover:brightness-110"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-secondary/50"
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
