'use client';

import { motion } from 'framer-motion';
import Section from '../components/Section';

const nodes = [
  { label: 'Source Systems', sublabel: 'Databases · APIs · Streams', color: 'border-white/20 bg-white/5' },
  { label: 'AWS Glue', sublabel: 'ETL · Cataloging · PySpark', color: 'border-primary/40 bg-primary/10' },
  { label: 'EMR Serverless', sublabel: 'Large-scale Transformation', color: 'border-primary/40 bg-primary/10' },
  { label: 'S3 Data Lake', sublabel: 'Raw · Curated · Enriched zones', color: 'border-accent/40 bg-accent/10' },
  { label: 'Snowflake', sublabel: 'Analytics-ready Warehouse', color: 'border-primary/60 bg-primary/15' },
  { label: 'dbt', sublabel: 'Modeling · Testing · Docs', color: 'border-accent/40 bg-accent/10' },
  { label: 'Analytics & BI', sublabel: 'Dashboards · Self-serve · APIs', color: 'border-white/20 bg-white/5' },
];

export default function ArchitectureShowcase() {
  return (
    <Section id="architecture">
      <div className="mb-8">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Architecture Showcase</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Cloud data platform patterns
        </h2>
        <p className="text-muted-light mt-3 max-w-2xl text-sm leading-relaxed">
          Representative architecture patterns for ingestion, transformation, storage, and analytics-ready data delivery —
          inspired by production-scale systems.
        </p>
      </div>

      {/* Pipeline flow */}
      <div className="flex flex-col items-center gap-0 my-8">
        {nodes.map((node, index) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className={`border ${node.color} rounded-xl px-6 py-3 w-full max-w-sm text-center`}>
              <p className="text-white font-semibold text-sm">{node.label}</p>
              <p className="text-muted text-xs mt-0.5">{node.sublabel}</p>
            </div>
            {index < nodes.length - 1 && (
              <div className="flex flex-col items-center my-1">
                <div className="w-px h-5 bg-gradient-to-b from-primary/50 to-accent/30" />
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M0 0L5 6L10 0" fill="none" stroke="#29b5e8" strokeOpacity="0.6" strokeWidth="1.5"/>
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Pattern chips */}
      <div className="mt-8 p-5 glass rounded-2xl">
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
    </Section>
  );
}
