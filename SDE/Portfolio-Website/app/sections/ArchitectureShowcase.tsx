'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const nodes = [
  {
    label: 'Source Systems',
    sublabel: 'Databases · APIs · Streams',
    role: 'Ingestion',
    roleDesc: 'CDC, batch, and streaming data from operational systems',
    color: 'border-white/20 bg-white/5',
    dot: '#6b7280',
  },
  {
    label: 'AWS Glue',
    sublabel: 'ETL · Cataloging · PySpark',
    role: 'Processing',
    roleDesc: 'Serverless ETL jobs with metadata-driven automation',
    color: 'border-primary/40 bg-primary/10',
    dot: '#8b5cf6',
  },
  {
    label: 'EMR Serverless',
    sublabel: 'Large-scale Transformation',
    role: 'Processing',
    roleDesc: 'Distributed PySpark jobs for high-volume transformations',
    color: 'border-primary/40 bg-primary/10',
    dot: '#8b5cf6',
  },
  {
    label: 'S3 Data Lake',
    sublabel: 'Raw · Curated · Enriched zones',
    role: 'Storage',
    roleDesc: 'Medallion architecture — bronze, silver, gold zones',
    color: 'border-accent/40 bg-accent/10',
    dot: '#22d3ee',
  },
  {
    label: 'Snowflake',
    sublabel: 'Analytics-ready Warehouse',
    role: 'Warehouse',
    roleDesc: 'Enterprise data warehouse with role-based access and audit',
    color: 'border-primary/60 bg-primary/15',
    dot: '#8b5cf6',
  },
  {
    label: 'dbt',
    sublabel: 'Modeling · Testing · Docs',
    role: 'Analytics Engineering',
    roleDesc: 'Semantic layer, data quality tests, and documentation',
    color: 'border-accent/40 bg-accent/10',
    dot: '#22d3ee',
  },
  {
    label: 'Analytics & BI',
    sublabel: 'Dashboards · Self-serve · APIs',
    role: 'Delivery',
    roleDesc: 'Business-facing analytics, self-serve reporting, and APIs',
    color: 'border-white/20 bg-white/5',
    dot: '#9ca3af',
  },
];

export default function ArchitectureShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Section id="architecture">
      <div className="mb-8">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Architecture Showcase</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Cloud data platform patterns
        </h2>
        <p className="text-muted-light mt-3 max-w-2xl text-sm leading-relaxed">
          Production-scale architecture patterns for ingestion, transformation, storage, and analytics-ready delivery.
          Hover each node to explore the layer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Animated pipeline */}
        <div className="flex flex-col items-center gap-0">
          {nodes.map((node, index) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center w-full max-w-xs"
            >
              <div
                className={`border ${node.color} rounded-xl px-5 py-3 w-full text-center cursor-default transition-all duration-200 ${
                  hovered === index ? 'scale-[1.03] shadow-lg shadow-primary/20' : ''
                }`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: node.dot }} />
                  <p className="text-white font-semibold text-sm">{node.label}</p>
                </div>
                <p className="text-muted text-xs mt-0.5">{node.sublabel}</p>
              </div>
              {index < nodes.length - 1 && (
                <div className="flex flex-col items-center my-0.5">
                  <svg width="2" height="20" className="overflow-visible">
                    <line
                      x1="1" y1="0" x2="1" y2="20"
                      stroke="url(#flowGrad)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className={hovered === index ? 'flow-line' : ''}
                    />
                    <defs>
                      <linearGradient id="flowGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M0 0L5 6L10 0" fill="none" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1.5"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Hover detail panel + pattern chips */}
        <div className="flex flex-col gap-4">
          <div className="glass rounded-2xl p-5 min-h-[100px] transition-all duration-200">
            {hovered !== null ? (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{nodes[hovered].role}</span>
                <p className="text-white font-semibold mt-1">{nodes[hovered].label}</p>
                <p className="text-muted-light text-sm mt-1 leading-relaxed">{nodes[hovered].roleDesc}</p>
              </motion.div>
            ) : (
              <p className="text-muted text-sm">Hover a node to explore the architecture layer.</p>
            )}
          </div>

          <div className="p-5 glass rounded-2xl">
            <p className="text-xs text-accent font-medium uppercase tracking-wider mb-3">Architecture Patterns</p>
            <div className="flex flex-wrap gap-2">
              {[
                'CDC Change Data Capture',
                'Medallion Architecture',
                'Metadata-driven Ingestion',
                'Incremental Loading',
                'Schema Evolution',
                'Data Quality Gates',
                'Cost-optimized Serverless',
                'Audit & Lineage',
              ].map((pattern) => (
                <span
                  key={pattern}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {pattern}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
