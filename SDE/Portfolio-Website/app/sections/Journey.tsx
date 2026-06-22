import { motion } from 'framer-motion';
import Section from '../components/Section';

const milestones = [
  { year: '2018', title: 'Machine Learning Research', subtitle: 'Shell' },
  { year: '2019', title: 'Optimization & Analytics', subtitle: 'Tiger Analytics' },
  { year: '2020', title: 'Deep Learning & Forecasting', subtitle: '' },
  { year: '2021', title: 'Advanced Machine Learning Projects', subtitle: '' },
  { year: '2022', title: 'MS Business Analytics', subtitle: 'UT Dallas' },
  { year: '2023', title: 'Software Engineering & Databases', subtitle: '' },
  { year: '2024', title: 'AWS Data Engineering', subtitle: 'CSAA Insurance Group' },
  { year: '2025', title: 'CarmaSure Product Development', subtitle: '' },
  { year: '2026', title: 'AI-Powered Data Engineering', subtitle: '' },
];

export default function Journey() {
  return (
    <Section id="journey" className="bg-surface/30">
      <div className="mb-12 md:mb-16">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Engineering Journey</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
          From research to product
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

        <div className="space-y-8 md:space-y-12">
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass rounded-xl p-5 md:p-6 inline-block">
                    <span className="text-accent text-sm font-semibold">{milestone.year}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-white mt-1">
                      {milestone.title}
                    </h3>
                    {milestone.subtitle && (
                      <p className="text-muted text-sm mt-1">{milestone.subtitle}</p>
                    )}
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-accent shadow-lg shadow-accent/30 mt-6 md:mt-0" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
