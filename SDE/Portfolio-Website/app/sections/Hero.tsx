'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, FileText, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-8">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Grid texture */}
        <div className="absolute inset-0 hero-grid opacity-[0.035]" />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.15),transparent)]" />
        {/* Floating blurs */}
        <div className="absolute top-1/4 left-1/5 w-[520px] h-[520px] bg-primary/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/5 w-[380px] h-[380px] bg-accent/8 rounded-full blur-[110px]" />
        {/* Subtle horizontal data-flow lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          {[15, 30, 45, 60, 75].map((y) => (
            <line key={y} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="4 12" />
          ))}
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-2">
            Data Engineer
          </p>
          <p className="text-muted text-xs tracking-wide mb-4">
            AWS • Snowflake • Analytics Engineering
          </p>
          <p className="text-muted/80 text-[10px] tracking-wide mb-4">
            Dual Degree (B.Tech + M.Tech), IIT Kharagpur · MS Computer Science, UT Dallas
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 text-balance">
            Subash Nirmal{' '}
            <span className="gradient-text">Kolluru</span>
          </h1>
          <p className="text-base md:text-lg text-muted-light max-w-2xl mx-auto mb-7 leading-relaxed text-balance">
            Building production-scale data platforms,{' '}
            metadata-driven automation frameworks,{' '}
            and AI-enabled products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5"
        >
          <a
            href="#featured"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            <Globe size={18} />
            Explore Portfolio
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-medium hover:bg-surface-light transition-colors"
          >
            <FileText size={18} />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/subash-nirmal-kolluru/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-medium hover:bg-surface-light transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/SubashNirmal-Kolluru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-medium hover:bg-surface-light transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
        </motion.div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {[
            { value: '3TB+', label: 'Daily Processing' },
            { value: '80%', label: 'Optimization' },
            { value: '40%', label: 'Automation Gain' },
            { value: '2', label: 'Publications' },
            { value: '10+', label: 'Projects' },
          ].map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium border border-white/10 hover:border-primary/40 hover:text-white transition-colors cursor-default"
            >
              <span className="text-accent font-semibold">{badge.value}</span>
              <span className="text-muted-light">{badge.label}</span>
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#impact" className="text-muted-light hover:text-white transition-colors" aria-label="Scroll down">
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
