import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';

const metrics = [
  { value: 3, suffix: 'TB+', label: 'Data Processed Daily' },
  { value: 80, suffix: '%', label: 'Processing Improvement' },
  { value: 40, suffix: '%', label: 'Automation Improvement' },
  { value: 2, suffix: '', label: 'Published Research Papers' },
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
    <Section id="impact" className="bg-surface/30">
      <div className="mb-8">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Current Impact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Metrics that matter
        </h2>
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
        {metrics.map((metric, index) => (
          <GlassCard key={metric.label} delay={index * 0.08} className="text-center py-4">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </div>
            <p className="text-muted-light text-xs md:text-sm">{metric.label}</p>
          </GlassCard>
        ))}
      </div>

      {/* Current Role */}
      <div className="glass rounded-2xl p-6 mb-6">
        <p className="text-accent text-xs font-medium uppercase tracking-wider mb-2">Current Role</p>
        <h3 className="text-lg font-semibold text-white mb-2">Data Engineer @ CSAA Insurance Group</h3>
        <p className="text-muted-light text-sm leading-relaxed">
          Designing analytics-ready data platforms across AWS and Snowflake — building CDC ingestion frameworks,
          metadata-driven automation, and enterprise analytics solutions.
        </p>
      </div>

      {/* Capability cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {capabilities.map((cap, i) => (
          <div key={cap.title} className="glass rounded-xl p-5">
            <h4 className="text-sm font-semibold text-white mb-3">{cap.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cap.chips.map((chip) => (
                <span key={chip} className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
