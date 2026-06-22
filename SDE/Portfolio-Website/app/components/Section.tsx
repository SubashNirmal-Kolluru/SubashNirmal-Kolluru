'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  children,
  className = '',
  containerClassName = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div
        className={`max-w-7xl mx-auto ${containerClassName}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
