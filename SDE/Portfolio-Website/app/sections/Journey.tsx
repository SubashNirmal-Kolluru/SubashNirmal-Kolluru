'use client';

import { motion } from 'framer-motion';
import { GraduationCap, FlaskConical, BarChart2, Cloud, Building2 } from 'lucide-react';
import Section from '../components/Section';

const cards = [
  {
    period: '2014–2019',
    title: 'IIT Kharagpur',
    icon: GraduationCap,
    tags: ['Industrial Engineering', 'Operations Research', 'Machine Learning', 'Optimization', 'Analytics'],
    org: 'Dual Degree (B.Tech + M.Tech)',
  },
  {
    period: '2018–2019',
    title: 'Shell India',
    icon: FlaskConical,
    tags: ['Anomaly Detection', 'Fault Diagnosis', 'One-Class SVM'],
    org: 'Research Engineer Intern · Published Research',
  },
  {
    period: '2019–2021',
    title: 'Tiger Analytics',
    icon: BarChart2,
    tags: ['Forecasting', 'Optimization', 'Data Analytics'],
    org: 'Analytics & Machine Learning',
  },
  {
    period: '2022–2024',
    title: 'University of Texas at Dallas',
    icon: Building2,
    tags: ['Computer Science', 'Business Analytics', 'Software Engineering'],
    org: 'MS Computer Science',
  },
  {
    period: '2024–Present',
    title: 'CSAA Insurance Group',
    icon: Cloud,
    tags: ['AWS', 'Snowflake', 'Platform Engineering'],
    org: 'Data Engineering',
  },
];

export default function Journey() {
  return (
    <Section id="journey" className="bg-surface/30">
      <div className="mb-8">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Career Evolution</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white">From IIT Kharagpur to platform engineering</h2>
      </div>

      {/* Desktop: horizontal connected timeline */}
      <div className="hidden md:block">
        {/* Connector line */}
        <div className="relative mb-2">
          <div className="absolute top-4 left-[10%] right-[10%] h-px bg-gradient-to-r from-white/5 via-primary/30 to-accent/30" />
          <div className="grid grid-cols-5 gap-0">
            {cards.map((card, index) => (
              <div key={card.title} className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 mb-4 ${
                    index === 0 || index === 3
                      ? 'border-accent/50 bg-accent/10'
                      : index === cards.length - 1
                      ? 'border-primary/50 bg-primary/10'
                      : 'border-primary/50 bg-surface'
                  }`}
                >
                  <card.icon size={14} className={index === cards.length - 1 ? 'text-primary' : 'text-accent'} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-5 gap-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-xl p-3.5 flex flex-col gap-2 border transition-all duration-200 hover:border-primary/30 hover:bg-white/[0.04] ${
                index === cards.length - 1
                  ? 'border-primary/25 bg-primary/5'
                  : index === 0 || index === 3
                  ? 'border-accent/15 bg-accent/[0.03]'
                  : 'border-white/8 bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-accent text-[10px] font-bold tracking-widest">{card.period}</span>
                {index === cards.length - 1 && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25">Current</span>
                )}
              </div>
              <h3 className="text-sm font-bold text-white leading-snug">{card.title}</h3>
              <p className="text-muted text-[10px] leading-snug">{card.org}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {card.tags.map((tag) => (
                  <span key={tag} className="px-1.5 py-0.5 rounded text-[9px] bg-white/5 text-muted border border-white/8">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-0">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex gap-4"
          >
            {/* Timeline spine */}
            <div className="flex flex-col items-center shrink-0">
              <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 ${
                index === 0 || index === 3
                  ? 'border-accent/50 bg-accent/10'
                  : index === cards.length - 1
                  ? 'border-primary/50 bg-primary/10'
                  : 'border-primary/50 bg-surface'
              }`}>
                <card.icon size={12} className={index === cards.length - 1 ? 'text-primary' : 'text-accent'} />
              </div>
              {index < cards.length - 1 && (
                <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-white/5 my-1" />
              )}
            </div>
            {/* Content */}
            <div className="pb-6">
              <span className="text-accent text-[10px] font-bold tracking-widest">{card.period}</span>
              <h3 className="text-sm font-bold text-white mt-0.5">{card.title}</h3>
              <p className="text-muted text-xs mt-0.5">{card.org}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="px-1.5 py-0.5 rounded text-[9px] bg-white/5 text-muted border border-white/8">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
