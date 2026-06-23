'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, FileText, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 animate-gradient-x" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[96px] animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-accent text-sm md:text-base font-medium tracking-wide uppercase mb-3">
            Data Engineer
          </p>
          <p className="text-muted text-sm md:text-base tracking-wide mb-6">
            AWS • Snowflake • Analytics Engineering
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 text-balance">
            Subash Nirmal{' '}
            <span className="gradient-text">Kolluru</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-light max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Building production-scale data platforms,{' '}
            metadata-driven automation frameworks,{' '}
            and AI-enabled products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
