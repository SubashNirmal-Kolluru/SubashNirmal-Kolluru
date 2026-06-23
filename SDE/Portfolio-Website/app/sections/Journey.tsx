'use client';

import { motion } from 'framer-motion';
import { FlaskConical, BarChart2, GraduationCap, Cloud } from 'lucide-react';
import Section from '../components/Section';

const cards = [
  {
    period: '2018–2019',
    title: 'Research',
    icon: FlaskConical,
    tags: ['Anomaly Detection', 'Fault Diagnosis', 'One-Class SVM'],
    org: 'Shell · Published Research',
  },
  {
    period: '2019–2021',
    title: 'Analytics & ML',
    icon: BarChart2,
    tags: ['Forecasting', 'Optimization', 'Data Analytics'],
    org: 'Tiger Analytics',
  },
  {
    period: '2022–2023',
    title: 'Graduate Studies',
    icon: GraduationCap,
    tags: ['Business Analytics', 'Databases', 'Software Engineering'],
    org: 'UT Dallas · MS Computer Science',
  },
  {
    period: '2024–Present',
    title: 'Cloud Data Engineering',
    icon: Cloud,
    tags: ['AWS', 'Snowflake', 'Platform Engineering', 'CarmaSure'],
    org: 'CSAA Insurance Group',
  },
];

export default function Journey() {
  return (
    <Section id="journey" className="bg-surface/30">
      <div className="mb-8">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Career Evolution</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          From research to platform engineering
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-5 flex flex-col gap-3 card-glow"
          >
            <div>
              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3">
                <card.icon size={16} />
              </div>
              <span className="text-accent text-xs font-semibold tracking-wide">{card.period}</span>
              <h3 className="text-lg font-bold text-white mt-1">{card.title}</h3>
              <p className="text-muted text-xs mt-1">{card.org}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {card.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-white/5 text-muted-light border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-muted text-sm mt-6">
        Currently exploring: <span className="text-muted-light">Product Development · AI-Augmented Data Engineering</span>
      </p>
    </Section>
  );
}
