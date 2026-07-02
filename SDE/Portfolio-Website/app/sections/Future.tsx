import { Layers, Cpu } from 'lucide-react';
import Section from '../components/Section';

const items = [
  { icon: Layers, title: 'Data Engineering Patterns' },
  { icon: Cpu, title: 'AI-Augmented Engineering' },
  // { icon: Smartphone, title: 'CarmaSure Evolution' },
];

export default function Future() {
  return (
    <Section id="future" className="bg-surface/30">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <div className="shrink-0">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest">Currently Exploring</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map(({ icon: Icon, title }) => (
            <span key={title} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/8 text-xs text-muted-light hover:text-white hover:border-primary/30 transition-colors cursor-default">
              <Icon size={11} className="text-primary shrink-0" />
              {title}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
