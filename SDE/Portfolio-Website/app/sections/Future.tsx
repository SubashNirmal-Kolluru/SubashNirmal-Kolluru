'use client';

import { motion } from 'framer-motion';
import { MessageSquare, BookOpen, Cloud, Play } from 'lucide-react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';

const placeholders = [
  {
    icon: MessageSquare,
    title: 'AI Assistant',
    subtitle: 'Ask About Subash',
    description: 'A conversational interface to explore experience, projects, and skills.',
  },
  {
    icon: BookOpen,
    title: 'Blog',
    subtitle: 'Technical Articles',
    description: 'Deep dives into data engineering, ML, and product development.',
  },
  {
    icon: Cloud,
    title: 'AWS Architecture',
    subtitle: 'Interactive Showcase',
    description: 'Explore production data pipelines and cloud architecture diagrams.',
  },
  {
    icon: Play,
    title: 'CarmaSure Demo',
    subtitle: 'Live Integration',
    description: 'Interactive product demo and case study walkthrough.',
  },
];

export default function Future() {
  return (
    <Section id="future" className="bg-surface/30">
      <div className="mb-12 md:mb-16">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Coming Soon</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
          Future enhancements
        </h2>
        <p className="text-muted-light mt-3 max-w-2xl">
          Architecture-ready sections planned for the next iteration of this portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {placeholders.map((item, index) => {
          const Icon = item.icon;
          return (
            <GlassCard key={item.title} delay={index * 0.1} hover={false}>
              <div className="p-2 rounded-lg bg-white/5 text-muted-light w-fit mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-accent font-medium uppercase tracking-wide mb-3">
                {item.subtitle}
              </p>
              <p className="text-sm text-muted-light leading-relaxed">{item.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
