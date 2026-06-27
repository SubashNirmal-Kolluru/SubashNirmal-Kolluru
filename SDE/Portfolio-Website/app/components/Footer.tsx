import { Github, Linkedin, Mail, FileText, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-white">Subash Nirmal Kolluru</h3>
            <p className="text-sm text-muted-light mt-2 leading-relaxed max-w-xs">Building production-scale data platforms, metadata-driven automation systems, and AI-enabled products.</p>
            <div className="flex items-center gap-1.5 mt-4">
              <div className="p-1 rounded bg-accent/10 text-accent"><Zap size={10} /></div>
              <span className="text-xs text-muted">Current Focus: AI-Augmented Data Engineering</span>
            </div>
            <p className="text-xs text-muted mt-3">AWS • Snowflake • Analytics Engineering</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Exploring</p>
            <ul className="space-y-1.5">
              {['Agentic Workflows', 'Developer Productivity', 'Data Platform Patterns'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-light">
                  <div className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Connect</p>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/in/subash-nirmal-kolluru/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-light hover:text-white transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="https://github.com/SubashNirmal-Kolluru" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-light hover:text-white transition-colors">
                <Github size={14} /> GitHub
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 text-sm text-muted-light hover:text-white transition-colors">
                <FileText size={14} /> Resume
              </a>
              <a href="mailto:subashnirmalkolluru@gmail.com" className="inline-flex items-center gap-2 text-sm text-muted-light hover:text-white transition-colors">
                <Mail size={14} /> subashnirmalkolluru@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
