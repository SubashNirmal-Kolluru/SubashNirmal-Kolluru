'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Section from '../components/Section';

const archiveCategories = [
  {
    title: 'Machine Learning Projects',
    description: 'Forecasting, drug prediction, and regression models.',
    projects: [
      { name: 'COVID Forecasting RNN', tags: ['RNN', 'Time Series'], href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/COVID-19-Forecasting-RNN' },
      { name: 'Kaggle MOA Drug Prediction', tags: ['Multi-label', 'Kaggle'], href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/Kaggle_MOA-DrugPrediction' },
      { name: 'Concrete Strength Prediction', tags: ['Regression', 'Gradient Descent'], href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/ConcreteStrengthPrediction--GradientDescent-vs-ML' },
      { name: 'Pharmacy Analysis', tags: ['Analytics', 'Prediction'], href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/US-StateLevel-PharmacyAnalysis-Prediction' },
    ],
  },
  {
    title: 'Analytics Projects',
    description: 'Sports, entertainment, and social media analytics.',
    projects: [
      { name: 'Movie Gross Prediction', tags: ['NLP', 'Regression'], href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/Movie-Gross-Prediction' },
      { name: 'IPL Win Prediction', tags: ['Classification', 'Sports'], href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/IPL-Win-Prediction' },
      { name: 'GST Twitter Sentiment Analysis', tags: ['NLP', 'Sentiment'], href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/GST-Twitter-Sentiment-Analysis' },
    ],
  },
  {
    title: 'Optimization Projects',
    description: 'Operations research and combinatorial optimization.',
    projects: [
      { name: 'Capacitated Vehicle Routing + Sentiment Analysis', tags: ['CVRP', 'OR'], href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/Capacitated-Vehicle-Routing-Problem--Sentiment-Analysis' },
    ],
  },
  {
    title: 'Hardware Projects',
    description: 'Embedded systems and IoT prototyping.',
    projects: [
      { name: 'Soundless Honking System', tags: ['IoT', 'Embedded'], href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/SoundlessHonkingSystem' },
    ],
  },
];

export default function Archive() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="library">
      <div className="mb-5">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Project Library</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Additional projects</h2>
        <p className="text-muted text-sm mt-1">ML, analytics, optimization, and hardware systems.</p>
      </div>

      <div className="space-y-2">
        {archiveCategories.map((category, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={category.title} className={`rounded-xl overflow-hidden border transition-colors duration-200 ${
              isOpen ? 'border-primary/20 bg-primary/[0.03]' : 'glass border-white/5'
            }`}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-white/[0.03] transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-white">{category.title}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-muted border border-white/8">
                    {category.projects.length}
                  </span>
                  <span className="hidden sm:block text-xs text-muted">{category.description}</span>
                </div>
                <ChevronDown
                  size={15}
                  className={`text-muted transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {category.projects.map((project) => (
                        <a
                          key={project.name}
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start justify-between p-3 rounded-lg border border-white/5 hover:border-primary/20 hover:bg-white/[0.03] transition-all group"
                        >
                          <div>
                            <span className="text-sm text-muted-light group-hover:text-white transition-colors block leading-snug">
                              {project.name}
                            </span>
                            <div className="flex gap-1 mt-1.5">
                              {project.tags.map(t => (
                                <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-muted border border-white/8">{t}</span>
                              ))}
                            </div>
                          </div>
                          <ExternalLink size={12} className="text-muted group-hover:text-accent transition-colors shrink-0 mt-0.5" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
