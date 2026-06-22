import { motion } from 'framer-motion';
import { Database, Cloud, Brain, Layers } from 'lucide-react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';

const categories = [
  {
    icon: Database,
    title: 'Data Engineering',
    skills: [
      { name: 'Snowflake', level: 95 },
      { name: 'AWS Glue', level: 90 },
      { name: 'EMR', level: 85 },
      { name: 'Spark', level: 90 },
      { name: 'Airflow', level: 80 },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Terraform', level: 75 },
      { name: 'CI/CD', level: 80 },
    ],
  },
  {
    icon: Brain,
    title: 'AI / ML',
    skills: [
      { name: 'PyTorch', level: 85 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'SageMaker', level: 75 },
      { name: 'LLMs', level: 80 },
    ],
  },
  {
    icon: Layers,
    title: 'Product Development',
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'React', level: 90 },
      { name: 'APIs', level: 85 },
    ],
  },
];

export default function Expertise() {
  return (
    <Section id="expertise" className="bg-surface/30">
      <div className="mb-12 md:mb-16">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Technical Expertise</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
          Tools and technologies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <GlassCard key={category.title} delay={index * 0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-muted-light">{skill.name}</span>
                      <span className="text-xs text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
