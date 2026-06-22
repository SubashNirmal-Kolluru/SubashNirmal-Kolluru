import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';

const metrics = [
  { value: 3, suffix: 'TB+', label: 'Data Processed Daily' },
  { value: 80, suffix: '%', label: 'Reduction in Processing Time' },
  { value: 40, suffix: '%', label: 'Automation Improvement' },
  { value: 2, suffix: '', label: 'Published Research Papers' },
  { value: 10, suffix: '+', label: 'End-to-End Projects' },
];

export default function Impact() {
  return (
    <Section id="impact" className="bg-surface/30">
      <div className="mb-12 md:mb-16">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Engineering Impact</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
          Metrics that matter
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {metrics.map((metric, index) => (
          <GlassCard key={metric.label} delay={index * 0.1} className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </div>
            <p className="text-muted-light text-sm md:text-base">{metric.label}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
