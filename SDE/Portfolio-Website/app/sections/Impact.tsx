'use client';

import { Database, Zap, Bot, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import AnimatedCounter from '../components/AnimatedCounter';

const metrics = [
  { value: 3, suffix: 'TB+', label: 'Data Processed Daily', icon: Database },
  { value: 80, suffix: '%', label: 'Processing Time Reduction', icon: Zap },
  { value: 40, suffix: '%', label: 'Automation Efficiency', icon: Bot },
  { value: 2, suffix: '', label: 'Published Research', icon: BookOpen },
];

const capabilities = [
  {
    title: 'Data Platforms',
    chips: ['Snowflake', 'AWS Glue', 'EMR Serverless', 'PySpark', 'Airflow', 'dbt'],
  },
  {
    title: 'Data Architecture',
    chips: ['CDC Pipelines', 'Data Modeling', 'Analytics Engineering', 'Data Quality'],
  },
  {
    title: 'Platform Automation',
    chips: ['Metadata Frameworks', 'CI/CD', 'Terraform', 'AI-Augmented Engineering'],
  },
];

export default function Impact() {
  return (
    <Section id="impact" className="section-alt">
      <div className="mb-6">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Current Impact</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Metrics that matter</h2>
      </div>

      {/* Compact horizontal stats strip */}
      <div className="glass rounded-2xl overflow-hidden mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex items-center gap-3 px-5 py-4 hover:bg-white/[0.03] transition-colors group"
              >
                <div className="p-1.5 rounded-md bg-accent/10 text-accent shrink-0 group-hover:bg-accent/15 transition-colors">
                  <Icon size={14} />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white leading-none">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <p className="text-muted text-[11px] mt-0.5 leading-tight">{metric.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Merged responsibilities card */}
      <div className="glass rounded-2xl p-5 border border-white/8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          {/* Role identity */}
          <div className="shrink-0 sm:w-40 sm:border-r border-white/8 sm:pr-5">
            <p className="text-accent text-[10px] font-semibold uppercase tracking-widest mb-2">Current Role</p>
            <p className="text-white text-sm font-bold leading-snug">Data Engineer</p>
            <p className="text-muted text-xs mt-1">CSAA Insurance Group</p>
            <p className="text-muted text-[10px] mt-2 leading-relaxed">AWS • Snowflake • CDC • dbt</p>
          </div>
          {/* Capability groups */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.title}>
                <h4 className="text-[10px] font-semibold text-muted uppercase tracking-widest mb-2">{cap.title}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {cap.chips.map((chip) => (
                    <span key={chip} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
