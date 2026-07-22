import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects'
import { Testimonials } from '@/components/testimonials'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  )
}
