'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from '../components/Section';

function DataEngineeringVisual() {
  const layers = [
    { label: 'Sources', sublabel: 'DBs · APIs · Streams', color: '#6b7280', accent: false },
    { label: 'AWS Glue', sublabel: 'ETL · Catalog', color: '#8b5cf6', accent: true },
    { label: 'EMR', sublabel: 'PySpark · Scale', color: '#8b5cf6', accent: true },
    { label: 'S3', sublabel: 'Raw · Curated', color: '#22d3ee', accent: false },
    { label: 'Snowflake', sublabel: 'Warehouse', color: '#8b5cf6', accent: true },
    { label: 'Analytics', sublabel: 'BI · APIs', color: '#22d3ee', accent: false },
  ];
  return (
    <div className="w-full bg-black/25 rounded-xl p-5">
      <div className="flex items-center justify-between gap-1 overflow-hidden">
        {layers.map((l, i) => (
          <div key={l.label} className="flex items-center gap-1 min-w-0">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                l.accent ? 'border-primary/40 bg-primary/10' : 'border-white/10 bg-white/5'
              }`}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
              </div>
              <span className="text-[9px] text-white font-medium whitespace-nowrap">{l.label}</span>
              <span className="text-[8px] text-muted whitespace-nowrap hidden sm:block">{l.sublabel}</span>
            </div>
            {i < layers.length - 1 && (
              <svg width="20" height="8" viewBox="0 0 20 8" className="shrink-0 mb-4">
                <path d="M0 4 L16 4 M13 1 L16 4 L13 7" stroke={l.color} strokeWidth="1" fill="none" strokeOpacity="0.5" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 h-0.5 rounded-full bg-gradient-to-r from-primary/40 via-accent/30 to-transparent" />
        <span className="text-[9px] text-muted">3TB+ daily · CDC · Medallion Architecture</span>
      </div>
    </div>
  );
}

/* CarmaSure section removed
function CarmaSureVisual() {
  return (
    <div className="w-full bg-black/20 rounded-xl p-4 flex gap-3 items-center">
      <div className="w-20 h-32 bg-surface-light rounded-xl border border-white/10 flex flex-col overflow-hidden shrink-0">
        <div className="h-4 bg-primary/30 flex items-center justify-center">
          <div className="w-6 h-1 rounded bg-white/30" />
        </div>
        <div className="flex-1 p-1.5 flex flex-col gap-1">
          <div className="w-full h-1.5 rounded bg-accent/30" />
          <div className="w-3/4 h-1.5 rounded bg-white/10" />
          <div className="mt-1 w-full h-8 rounded bg-primary/20 flex items-center justify-center">
            <span className="text-[7px] text-primary font-bold">$1,240</span>
          </div>
          <div className="w-full h-1 rounded bg-white/10" />
          <div className="w-2/3 h-1 rounded bg-white/10" />
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="text-[9px] text-accent font-semibold uppercase tracking-wider">Insurance Intelligence</div>
        <div className="flex flex-wrap gap-1">
          {['Offline', 'Flutter', 'AI-ready'].map(t => (
            <span key={t} className="px-1.5 py-0.5 rounded text-[8px] bg-primary/10 text-primary border border-primary/20">{t}</span>
          ))}
        </div>
        <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>
      </div>
    </div>
  );
}
*/

function SVMVisual() {
  const points = [[20,60],[35,40],[50,65],[65,45],[80,55],[30,75],[55,30],[70,70],[45,50]];
  const anomalies = [[15,20],[85,80]];
  return (
    <div className="w-full bg-black/20 rounded-xl p-3">
      <svg viewBox="0 0 100 90" className="w-full h-24">
        <ellipse cx="50" cy="52" rx="38" ry="28" fill="none" stroke="#8b5cf6" strokeWidth="0.8" strokeDasharray="3 2" strokeOpacity="0.5" />
        {points.map(([x,y],i) => <circle key={i} cx={x} cy={y} r="2" fill="#8b5cf6" fillOpacity="0.7" />)}
        {anomalies.map(([x,y],i) => <circle key={i} cx={x} cy={y} r="2.5" fill="#ef4444" fillOpacity="0.9" />)}
        <text x="50" y="88" textAnchor="middle" fill="#6b7280" fontSize="5">Decision Boundary — Anomaly Detection</text>
      </svg>
    </div>
  );
}

function SimpleDBVisual() {
  return (
    <div className="w-full bg-black/20 rounded-xl p-4">
      <div className="flex flex-col gap-1.5">
        {['SQL Parser', 'Query Planner', 'Storage Engine', 'B-Tree Index', 'CRUD Layer'].map((layer, i) => (
          <div key={layer} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-sm shrink-0" style={{ backgroundColor: i < 2 ? '#8b5cf6' : i < 4 ? '#22d3ee' : '#6b7280' }} />
            <div className="flex-1 h-5 rounded flex items-center px-2 text-[9px] text-muted-light bg-white/5 border border-white/5">{layer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VRVisual() {
  return (
    <div className="w-full bg-black/20 rounded-xl p-4 flex items-center gap-4">
      <svg viewBox="0 0 80 60" className="w-28 h-20 shrink-0">
        <rect x="5" y="20" width="70" height="30" rx="8" fill="#1a1a25" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="25" cy="35" r="10" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="0.8" />
        <circle cx="55" cy="35" r="10" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="0.8" />
        <rect x="35" y="32" width="10" height="6" rx="1" fill="#22d3ee" fillOpacity="0.4" />
        <text x="40" y="58" textAnchor="middle" fill="#6b7280" fontSize="5">VR Headset</text>
      </svg>
      <div className="flex flex-col gap-1">
        {['Unity Engine', 'VR Controllers', 'Zombie AI', 'Health System'].map(f => (
          <span key={f} className="text-[9px] text-muted-light">{f}</span>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    tag: 'Professional Experience',
    title: 'Data Engineering at Scale',
    description: 'Production-scale AWS and Snowflake data platforms processing 3TB+ daily — CDC ingestion, metadata-driven automation, and analytics-ready data delivery.',
    highlights: ['AWS Glue', 'EMR Serverless', 'Snowflake', 'PySpark', 'CDC Pipelines', 'dbt'],
    cta: 'Explore Architecture',
    href: '#architecture',
    size: 'large',
    tier: 'primary',
    visual: DataEngineeringVisual,
  },
  /* CarmaSure project removed
  {
    tag: 'Product Development',
    title: 'CarmaSure',
    description: 'Privacy-first insurance intelligence platform built with Flutter. Offline estimation engine, AI-ready architecture.',
    highlights: ['Offline Estimation', 'Flutter', 'Insurance Analytics', 'Product Design'],
    cta: 'View Live Product',
    href: 'https://carmasurev2.netlify.app/',
    size: 'medium',
    tier: 'primary',
    visual: CarmaSureVisual,
  },
  */
  {
    tag: 'Research',
    title: 'One-Class SVM Research',
    description: 'Published predictive maintenance research using anomaly detection techniques.',
    highlights: ['One-Class SVM', 'Prognostics', 'Equipment Failure Detection', 'Publication'],
    cta: 'Read Research',
    href: '#publications',
    size: 'medium',
    tier: 'secondary',
    visual: SVMVisual,
  },
  {
    tag: 'Software Engineering',
    title: 'SimpleDB',
    description: 'Database engine implementation built from scratch.',
    highlights: ['Query Processing', 'Storage Engine', 'Java', 'CRUD Operations'],
    cta: 'View Project',
    href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/SDE/SimpleDB-DatabaseEngineImplementation',
    size: 'medium',
    tier: 'secondary',
    visual: SimpleDBVisual,
  },
  {
    tag: 'VR Development',
    title: 'Train with Arms',
    description: 'Virtual reality FPS training game built using Unity.',
    highlights: ['VR Controllers', 'Locomotion System', 'Health System', 'Zombie AI'],
    cta: 'View Gameplay',
    href: 'https://www.youtube.com/watch?v=Ic0E412q_Ms',
    size: 'medium',
    tier: 'secondary',
    visual: VRVisual,
  },
];

export default function FeaturedWork() {
  return (
    <Section id="featured">
      <div className="mb-8">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Featured Work</p>
        <h2 className="text-2xl md:text-4xl font-bold text-white text-balance">Projects worth highlighting</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => {
          const Visual = project.visual;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-2xl overflow-hidden card-glow ${
                project.size === 'large' ? 'md:col-span-2' : ''
              } ${
                project.title === 'Data Engineering at Scale'
                  ? 'glass border border-primary/30 shadow-xl shadow-primary/10 ring-1 ring-primary/10'
                  : project.tier === 'primary'
                  ? 'glass border border-primary/20 shadow-lg shadow-primary/5'
                  : 'bg-surface/60 border border-white/5'
              }`}
            >
              {/* Visual preview */}
              <div className={`px-5 pt-5 pb-2 ${
                project.title === 'Data Engineering at Scale' ? 'pb-3' : ''
              }`}>
                <Visual />
              </div>

              {/* Card content */}
              <div className="p-5 pt-3 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <span className={`text-xs font-medium uppercase tracking-wider ${
                    project.title === 'Data Engineering at Scale' ? 'text-primary' : 'text-accent'
                  }`}>
                    {project.tag}
                  </span>
                  <ArrowUpRight size={18} className="text-muted-light group-hover:text-white transition-colors shrink-0" />
                </div>
                <h3 className={`font-bold text-white ${
                  project.title === 'Data Engineering at Scale'
                    ? 'text-2xl md:text-3xl'
                    : 'text-xl md:text-2xl'
                }`}>{project.title}</h3>
                <p className="text-muted-light text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.highlights.map((h) => (
                    <span key={h} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-muted-light border border-white/10">{h}</span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors mt-1"
                >
                  {project.cta} <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
