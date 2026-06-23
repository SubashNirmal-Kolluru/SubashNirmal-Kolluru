import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold text-white">Subash Nirmal Kolluru</h3>
            <p className="text-sm text-muted-light mt-2 leading-relaxed">Building production-scale data platforms and AI-enabled products.</p>
            <p className="text-xs text-muted mt-3">AWS • Snowflake • Analytics Engineering</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/subash-nirmal-kolluru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-muted-light hover:text-white transition-colors text-sm"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="https://github.com/SubashNirmal-Kolluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-muted-light hover:text-white transition-colors text-sm"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-muted-light hover:text-white transition-colors text-sm"
            >
              <FileText size={15} /> Resume
            </a>
            <a
              href="mailto:subash.nirmal.kolluru@gmail.com"
              className="p-2.5 rounded-full glass text-muted-light hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
