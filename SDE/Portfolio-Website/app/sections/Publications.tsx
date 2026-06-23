'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import Section from '../components/Section';

const publications = [
  {
    title: 'Early Detection of Equipment Failure Using One-Class SVM',
    summary: 'Explores anomaly detection using one-class SVM to identify early signs of equipment failure in industrial systems.',
    venue: 'IEOM Society International Conference',
    href: 'https://index.ieomsociety.org/index.cfm/article/view/ID/1989',
  },
  {
    title: 'Hidden Markov Models to Detect Early Equipment Failure',
    summary: 'Applies Hidden Markov Models to time-series sensor data for early fault detection and prognostics.',
    venue: 'IEOM Society International Conference',
    href: 'https://index.ieomsociety.org/index.cfm/article/view/ID/1983',
  },
];

export default function Publications() {
  return (
    <Section id="publications">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">Published Research</span>
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Publications</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Research contributions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {publications.map((pub, index) => (
          <motion.a
            key={pub.title}
            href={pub.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-surface-light hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <BookOpen size={24} />
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-light group-hover:text-white transition-colors"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
              {pub.title}
            </h3>
            <p className="text-muted-light mb-4 leading-relaxed">
              {pub.summary}
            </p>
            <p className="text-sm font-semibold text-accent">{pub.venue}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
