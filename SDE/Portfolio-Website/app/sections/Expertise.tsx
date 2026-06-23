import { Database, Cloud, Brain, Layers } from 'lucide-react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';

const categories = [
  {
    icon: Database,
    title: 'Data Platforms',
    chips: ['Snowflake', 'AWS Glue', 'EMR Serverless', 'PySpark', 'Airflow', 'dbt'],
  },
  {
    icon: Cloud,
    title: 'Data Architecture',
    chips: ['CDC Pipelines', 'Data Modeling', 'Analytics Engineering', 'Data Quality', 'S3 Data Lake'],
  },
  {
    icon: Brain,
    title: 'Platform Automation',
    chips: ['Metadata Frameworks', 'Terraform', 'CI/CD', 'Observability', 'LLMs'],
  },
  {
    icon: Layers,
    title: 'Product Development',
    chips: ['Flutter', 'React', 'Next.js', 'REST APIs', 'TypeScript'],
  },
];

export default function Expertise() {
  return (
    <Section id="expertise" className="bg-surface/30">
      <div className="mb-8">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Engineering Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Tools and technologies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <GlassCard key={category.title} delay={index * 0.1}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-light border border-white/10 hover:border-primary/40 hover:text-white transition-colors"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
