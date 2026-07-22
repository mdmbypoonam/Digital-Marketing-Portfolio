'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, LinkIcon, Globe, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'poonamkashide7@gmail.com', // Updated from resume[cite: 1]
      href: 'mailto:poonamkashide7@gmail.com' 
    },
    { 
      icon: Phone, 
      label: 'Phone / WhatsApp', 
      value: '+91 7083759365', // Updated from resume[cite: 1]
      href: 'https://wa.me/917083759365' 
    },
    { 
      icon: LinkIcon, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/poonamk7', // Updated from resume[cite: 1]
      href: 'https://www.linkedin.com/in/poonamk7' 
    },
    { 
      icon: Globe, 
      label: 'Portfolio Platform', 
      value: 'adswithpoonam.vercel.app', // Updated from resume[cite: 1]
      href: '#' 
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-primary">{'// 07'}</span>
          <h2 className="mt-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Have a project in mind or a growth opportunity? Drop a line.
          </p>
        </motion.div>

        {/* Dual-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Direct Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Start a Conversation
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you prefer structured form submissions or immediate direct channels, choose whichever suits your workflow best.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card/40 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-secondary/20"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        {info.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Interactive Conversion Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-primary/50 focus:outline-none transition-all text-foreground placeholder-muted-foreground/60"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-primary/50 focus:outline-none transition-all text-foreground placeholder-muted-foreground/60"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border focus:border-primary/50 focus:outline-none transition-all text-foreground placeholder-muted-foreground/60 resize-none"
                  placeholder="Tell me about your pipeline conversion goals or design ideas..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 hover:brightness-110"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Send className="h-4 w-4" />
                Send Message
              </motion.button>

              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-primary text-sm font-medium mt-2"
                >
                  Message sent successfully! I&apos;ll get back to you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}