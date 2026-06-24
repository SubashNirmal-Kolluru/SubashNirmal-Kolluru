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
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">Published Research</span>
          <p className="text-accent text-xs font-semibold uppercase tracking-widest">Publications</p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Research contributions</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {publications.map((pub, index) => (
          <motion.a
            key={pub.title}
            href={pub.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group glass rounded-xl p-5 card-glow flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <BookOpen size={18} />
              </div>
              <ArrowUpRight size={16} className="text-muted group-hover:text-white transition-colors shrink-0 mt-1" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white leading-snug mb-1.5">
                {pub.title}
              </h3>
              <p className="text-muted-light text-sm leading-relaxed">{pub.summary}</p>
            </div>
            <p className="text-xs font-semibold text-accent mt-auto">{pub.venue}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
