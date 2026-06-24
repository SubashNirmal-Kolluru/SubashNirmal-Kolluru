const featuredProjects = [
  {
    id: 'carmasure',
    tag: 'Product Development',
    title: 'CarmaSure',
    description: 'Privacy-first insurance intelligence platform built with Flutter.',
    highlights: ['Offline estimation engine', 'Modern UI/UX', 'Insurance analytics', 'Product design'],
    cta: 'View Case Study',
    href: '#carmasure',
    large: true,
  },
  {
    tag: 'Professional Experience',
    title: 'Data Engineering at Scale',
    description: 'Production-scale AWS and Snowflake data engineering solutions.',
    highlights: ['AWS Glue', 'EMR Serverless', 'Snowflake', 'PySpark', 'CDC Pipelines'],
    cta: 'View Architecture',
    href: '#architecture',
  },
  {
    tag: 'Research',
    title: 'One-Class SVM Research',
    description: 'Published predictive maintenance research using anomaly detection techniques.',
    highlights: ['One-Class SVM', 'Prognostics', 'Equipment Failure Detection', 'Publication'],
    cta: 'Read Research',
    href: '#publications',
  },
  {
    tag: 'Software Engineering',
    title: 'SimpleDB',
    description: 'Database engine implementation built from scratch.',
    highlights: ['Query Processing', 'Storage Engine', 'Java', 'CRUD Operations'],
    cta: 'View Project',
    href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/SDE/SimpleDB-DatabaseEngineImplementation',
  },
  {
    tag: 'VR Development',
    title: 'Train with Arms',
    description: 'Virtual reality FPS training game built using Unity.',
    highlights: ['VR Controllers', 'Locomotion System', 'Health System', 'Zombie AI'],
    cta: 'View Gameplay',
    href: 'https://www.youtube.com/watch?v=Ic0E412q_Ms',
  },
];

const milestones = [
  { year: '2014–2019', title: 'IIT Kharagpur', subtitle: 'Dual Degree (B.Tech + M.Tech)' },
  { year: '2018–2019', title: 'Shell India', subtitle: 'Research Engineer Intern · Published Research' },
  { year: '2019–2021', title: 'Tiger Analytics', subtitle: 'Analytics & Machine Learning' },
  { year: '2022–2024', title: 'University of Texas at Dallas', subtitle: 'MS Computer Science' },
  { year: '2024–Present', title: 'CSAA Insurance Group', subtitle: 'Data Engineering' },
];

const publications = [
  {
    title: 'Early Detection of Equipment Failure Using One-Class SVM',
    summary: 'Explores anomaly detection using one-class SVM to identify early signs of equipment failure in industrial systems.',
    venue: 'IEOM Society International Conference',
    href: 'https://index.ieomsociety.org/index.cfm/article/view/ID/1989',
  },
  {
    title: 'Hidden Markov Models to Detect Early Equipment Failure',
    summary: 'Applies Hidden Markov Models to time-series sensor data for early fault detection and prognostics.',
    venue: 'IEOM Society International Conference',
    href: 'https://index.ieomsociety.org/index.cfm/article/view/ID/1983',
  },
];

const expertise = [
  {
    icon: 'database',
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
    icon: 'cloud',
    title: 'Cloud',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Terraform', level: 75 },
      { name: 'CI/CD', level: 80 },
    ],
  },
  {
    icon: 'brain',
    title: 'AI / ML',
    skills: [
      { name: 'PyTorch', level: 85 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'SageMaker', level: 75 },
      { name: 'LLMs', level: 80 },
    ],
  },
  {
    icon: 'layers',
    title: 'Product Development',
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'React', level: 90 },
      { name: 'APIs', level: 85 },
    ],
  },
];

const archiveCategories = [
  {
    title: 'Machine Learning Projects',
    projects: [
      { name: 'COVID Forecasting RNN', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/COVID-19-Forecasting-RNN' },
      { name: 'Kaggle MOA Drug Prediction', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/Kaggle_MOA-DrugPrediction' },
      { name: 'Concrete Strength Prediction', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/ConcreteStrengthPrediction--GradientDescent-vs-ML' },
      { name: 'Pharmacy Analysis', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/US-StateLevel-PharmacyAnalysis-Prediction' },
    ],
  },
  {
    title: 'Analytics Projects',
    projects: [
      { name: 'Movie Gross Prediction', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/Movie-Gross-Prediction' },
      { name: 'IPL Win Prediction', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/IPL-Win-Prediction' },
      { name: 'GST Twitter Sentiment Analysis', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/GST-Twitter-Sentiment-Analysis' },
    ],
  },
  {
    title: 'Optimization Projects',
    projects: [
      { name: 'Capacitated Vehicle Routing + Sentiment Analysis', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/Capacitated-Vehicle-Routing-Problem--Sentiment-Analysis' },
    ],
  },
  {
    title: 'Hardware Projects',
    projects: [
      { name: 'Soundless Honking System', href: 'https://github.com/SubashNirmal-Kolluru/SubashNirmal-Kolluru/tree/SubashNirmalKolluru/DS-ML/SoundlessHonkingSystem' },
    ],
  },
];

const futureItems = [
  { icon: 'message', title: 'AI Assistant', subtitle: 'Ask About Subash', description: 'A conversational interface to explore experience, projects, and skills.' },
  { icon: 'book', title: 'Blog', subtitle: 'Technical Articles', description: 'Deep dives into data engineering, ML, and product development.' },
  { icon: 'cloud', title: 'AWS Architecture', subtitle: 'Interactive Showcase', description: 'Explore production data pipelines and cloud architecture diagrams.' },
  { icon: 'play', title: 'CarmaSure Demo', subtitle: 'Live Integration', description: 'Interactive product demo and case study walkthrough.' },
];

const iconSvgs = {
  database: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
  cloud: '<path d="M17.5 19c.83 0 1.5-.67 1.5-1.5 0-.83-.67-1.5-1.5-1.5H17v-1a5 5 0 0 0-5-5 5 5 0 0 0-5 5v1h-.5C4.12 16 3 17.12 3 18.5S4.12 21 5.5 21h12Z"></path>',
  brain: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
  play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
};

function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  grid.innerHTML = featuredProjects.map((project, index) => `
    <div class="reveal group relative glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-surface-light hover:scale-[1.01] ${project.large ? 'md:col-span-2' : ''}" style="transition-delay: ${index * 80}ms">
      <div class="flex flex-col h-full">
        <div class="flex items-start justify-between gap-4 mb-4">
          <span class="text-xs font-medium uppercase tracking-wider text-accent">${project.tag}</span>
          <svg class="text-muted-light group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
        </div>
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">${project.title}</h3>
        <p class="text-muted-light mb-6 leading-relaxed">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-6">
          ${project.highlights.map((h) => `<span class="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-light border border-white/10">${h}</span>`).join('')}
        </div>
        <div class="mt-auto">
          <a href="${project.href}" ${project.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors">
            ${project.cta}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderJourney() {
  const container = document.getElementById('journey-timeline');
  if (!container) return;
  container.innerHTML = `
    <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent"></div>
    <div class="space-y-8 md:space-y-12">
      ${milestones.map((m, index) => {
        const isLeft = index % 2 === 0;
        return `
          <div class="reveal relative flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:flex-row-reverse' : ''}" style="transition-delay: ${index * 60}ms">
            <div class="flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'}">
              <div class="glass rounded-xl p-5 md:p-6 inline-block">
                <span class="text-accent text-sm font-semibold">${m.year}</span>
                <h3 class="text-lg md:text-xl font-semibold text-white mt-1">${m.title}</h3>
                ${m.subtitle ? `<p class="text-muted text-sm mt-1">${m.subtitle}</p>` : ''}
              </div>
            </div>
            <div class="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-accent shadow-lg shadow-accent/30 mt-6 md:mt-0"></div>
            <div class="flex-1 hidden md:block"></div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderPublications() {
  const grid = document.getElementById('publications-grid');
  if (!grid) return;
  grid.innerHTML = publications.map((pub, index) => `
    <a href="${pub.href}" target="_blank" rel="noopener noreferrer" class="reveal group glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-surface-light hover:scale-[1.01]" style="transition-delay: ${index * 80}ms">
      <div class="flex items-start justify-between gap-4 mb-4">
        <div class="p-3 rounded-xl bg-primary/10 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
        </div>
        <svg class="text-muted-light group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
      </div>
      <h3 class="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">${pub.title}</h3>
      <p class="text-muted-light mb-4 leading-relaxed">${pub.summary}</p>
      <p class="text-sm text-accent font-medium">${pub.venue}</p>
    </a>
  `).join('');
}

function renderExpertise() {
  const grid = document.getElementById('expertise-grid');
  if (!grid) return;
  grid.innerHTML = expertise.map((cat, index) => `
    <div class="reveal glass rounded-2xl p-6 md:p-8" style="transition-delay: ${index * 80}ms">
      <div class="flex items-center gap-3 mb-6">
        <div class="p-2 rounded-lg bg-primary/10 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconSvgs[cat.icon]}</svg>
        </div>
        <h3 class="text-xl font-bold text-white">${cat.title}</h3>
      </div>
      <div class="space-y-4">
        ${cat.skills.map((skill) => `
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-sm text-muted-light">${skill.name}</span>
              <span class="text-xs text-muted">${skill.level}%</span>
            </div>
            <div class="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div class="progress-bar h-full rounded-full bg-gradient-to-r from-primary to-accent" data-width="${skill.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderArchive() {
  const container = document.getElementById('archive-accordion');
  if (!container) return;
  container.innerHTML = archiveCategories.map((cat, index) => `
    <div class="glass rounded-xl overflow-hidden">
      <button class="accordion-btn w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-surface-light transition-colors" data-index="${index}" aria-expanded="false">
        <span class="text-lg font-semibold text-white">${cat.title}</span>
        <svg class="accordion-icon text-muted-light transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="accordion-content hidden px-5 md:px-6 pb-5 md:pb-6 space-y-2">
        ${cat.projects.map((project) => `
          <a href="${project.href}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
            <span class="text-muted-light group-hover:text-white transition-colors">${project.name}</span>
            <svg class="text-muted group-hover:text-accent transition-colors" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.accordion-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.accordion-icon');
      const isOpen = !content.classList.contains('hidden');
      document.querySelectorAll('.accordion-content').forEach((c) => c.classList.add('hidden'));
      document.querySelectorAll('.accordion-icon').forEach((i) => i.classList.remove('rotate-180'));
      document.querySelectorAll('.accordion-btn').forEach((b) => b.setAttribute('aria-expanded', 'false'));
      if (!isOpen) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function renderFuture() {
  const grid = document.getElementById('future-grid');
  if (!grid) return;
  grid.innerHTML = futureItems.map((item, index) => `
    <div class="reveal glass rounded-2xl p-6 md:p-8" style="transition-delay: ${index * 80}ms">
      <div class="p-2 rounded-lg bg-white/5 text-muted-light w-fit mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconSvgs[item.icon]}</svg>
      </div>
      <h3 class="text-lg font-semibold text-white mb-1">${item.title}</h3>
      <p class="text-xs text-accent font-medium uppercase tracking-wide mb-3">${item.subtitle}</p>
      <p class="text-sm text-muted-light leading-relaxed">${item.description}</p>
    </div>
  `).join('');
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.target, 10);
        const suffix = counter.dataset.suffix || '';
        const duration = 2000;
        const startTime = performance.now();
        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          counter.textContent = Math.floor(easeOutQuart * target) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
          else counter.textContent = target + suffix;
        };
        requestAnimationFrame(animate);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => observer.observe(c));
}

function initReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });
  reveals.forEach((el) => observer.observe(el));
}

function initProgressBars() {
  const bars = document.querySelectorAll('.progress-bar');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach((bar) => observer.observe(bar));
}

function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  });
}

function init() {
  renderFeatured();
  renderJourney();
  renderPublications();
  renderExpertise();
  renderArchive();
  renderFuture();
  initCounters();
  initReveals();
  initProgressBars();
  initMobileMenu();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
