import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`
        glass rounded-2xl p-6 md:p-8
        ${hover ? 'transition-all duration-300 hover:bg-surface-light hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/10' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
