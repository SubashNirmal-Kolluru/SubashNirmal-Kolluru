'use client';

import { motion } from 'framer-motion';
import { Layers, Cpu, Smartphone } from 'lucide-react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';

const items = [
  {
    icon: Layers,
    title: 'Data Engineering Patterns',
    description: 'Reusable architecture and platform patterns for scalable data systems.',
  },
  {
    icon: Cpu,
    title: 'AI-Augmented Engineering',
    description: 'Applying AI to developer productivity and automated pipeline management.',
  },
  {
    icon: Smartphone,
    title: 'CarmaSure Evolution',
    description: 'Future product enhancements and platform experimentation.',
  },
];

export default function Future() {
  return (
    <Section id="future" className="bg-surface/30">
      <div className="mb-8">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Currently Building</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What&apos;s next
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <GlassCard key={item.title} delay={index * 0.1}>
              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-muted-light leading-relaxed">{item.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
