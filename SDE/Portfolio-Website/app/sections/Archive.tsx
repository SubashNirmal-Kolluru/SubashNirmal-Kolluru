'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Section from '../components/Section';

const archiveCategories = [
  {
    title: 'Machine Learning Projects',
    projects: [
      { name: 'COVID Forecasting RNN', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/COVID-19-Forecasting-RNN' },
      { name: 'Kaggle MOA Drug Prediction', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/Kaggle_MOA-DrugPrediction' },
      { name: 'Concrete Strength Prediction', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/ConcreteStrengthPrediction--GradientDescent-vs-ML' },
      { name: 'Pharmacy Analysis', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/US-StateLevel-PharmacyAnalysis-Prediction' },
    ],
  },
  {
    title: 'Analytics Projects',
    projects: [
      { name: 'Movie Gross Prediction', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/Movie-Gross-Prediction' },
      { name: 'IPL Win Prediction', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/IPL-Win-Prediction' },
      { name: 'GST Twitter Sentiment Analysis', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/GST-Twitter-Sentiment-Analysis' },
    ],
  },
  {
    title: 'Optimization Projects',
    projects: [
      { name: 'Capacitated Vehicle Routing + Sentiment Analysis', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/Capacitated-Vehicle-Routing-Problem--Sentiment-Analysis' },
    ],
  },
  {
    title: 'Hardware Projects',
    projects: [
      { name: 'Soundless Honking System', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/SoundlessHonkingSystem' },
    ],
  },
];

export default function Archive() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="library">
      <div className="mb-8">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Project Library</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Additional projects
        </h2>
        <p className="text-muted-light mt-2 max-w-2xl text-sm">
          Projects spanning machine learning, analytics, optimization, and hardware systems.
        </p>
      </div>

      <div className="space-y-3">
        {archiveCategories.map((category, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={category.title}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-surface-light transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-white">{category.title}</span>
                <ChevronDown
                  size={20}
                  className={`text-muted-light transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
                    <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-2">
                      {category.projects.map((project) => (
                        <a
                          key={project.name}
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <span className="text-muted-light group-hover:text-white transition-colors">
                            {project.name}
                          </span>
                          <ExternalLink
                            size={16}
                            className="text-muted group-hover:text-accent transition-colors"
                          />
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
