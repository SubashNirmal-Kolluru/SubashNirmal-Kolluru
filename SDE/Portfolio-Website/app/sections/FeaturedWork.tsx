'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from '../components/Section';

const projects = [
  {
    id: 'carmasure',
    tag: 'Product Development',
    title: 'CarmaSure',
    description: 'Privacy-first insurance intelligence platform built with Flutter.',
    highlights: ['Offline estimation engine', 'Modern UI/UX', 'Insurance analytics', 'Product design'],
    cta: 'View Case Study',
    href: '#carmasure',
    size: 'large',
  },
  {
    tag: 'Professional Experience',
    title: 'Data Engineering at Scale',
    description: 'Production-scale AWS and Snowflake data engineering solutions.',
    highlights: ['AWS Glue', 'EMR Serverless', 'Snowflake', 'PySpark', 'CDC Pipelines'],
    cta: 'View Architecture',
    href: '#architecture',
    size: 'medium',
  },
  {
    tag: 'Research',
    title: 'One-Class SVM Research',
    description: 'Published predictive maintenance research using anomaly detection techniques.',
    highlights: ['One-Class SVM', 'Prognostics', 'Equipment Failure Detection', 'Publication'],
    cta: 'Read Research',
    href: '#publications',
    size: 'medium',
  },
  {
    tag: 'Software Engineering',
    title: 'SimpleDB',
    description: 'Database engine implementation built from scratch.',
    highlights: ['Query Processing', 'Storage Engine', 'Java', 'CRUD Operations'],
    cta: 'View Project',
    href: '#simpledb',
    size: 'medium',
  },
  {
    tag: 'VR Development',
    title: 'Train with Arms',
    description: 'Virtual reality FPS training game built using Unity.',
    highlights: ['VR Controllers', 'Locomotion System', 'Health System', 'Zombie AI'],
    cta: 'View Gameplay',
    href: 'https://www.youtube.com/watch?v=Ic0E412q_Ms',
    size: 'medium',
  },
];

export default function FeaturedWork() {
  return (
    <Section id="featured">
      <div className="mb-12 md:mb-16">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Featured Work</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
          Projects worth highlighting
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`
              group relative glass rounded-2xl p-6 md:p-8
              transition-all duration-300 hover:bg-surface-light hover:scale-[1.01]
              ${project.size === 'large' ? 'md:col-span-2' : ''}
            `}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {project.tag}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-muted-light group-hover:text-white transition-colors"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-muted-light mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-light border border-white/10"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
                >
                  {project.cta}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
