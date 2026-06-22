import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Subash Nirmal Kolluru</h3>
            <p className="text-sm text-muted mt-1">
              Software Engineer 2 | Data Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SubashNirmal-Kolluru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass text-muted-light hover:text-white hover:bg-surface-light transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/subash-nirmal-kolluru/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass text-muted-light hover:text-white hover:bg-surface-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:subash.nirmal.kolluru@gmail.com"
              className="p-2 rounded-full glass text-muted-light hover:text-white hover:bg-surface-light transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-muted">
          © {currentYear} Subash Nirmal Kolluru. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
