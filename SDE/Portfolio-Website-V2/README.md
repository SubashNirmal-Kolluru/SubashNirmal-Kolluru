# Portfolio Website V2

A modern, premium engineering portfolio designed for an experienced Software Engineer / Data Engineer. The design is inspired by Linear, Vercel, Stripe, Raycast, and Notion Careers.

## Structure

- **`app/`** — Next.js 14 App Router implementation (React + TypeScript + Tailwind CSS + Framer Motion).
- **`static/`** — Self-contained static HTML/CSS/JS preview that works without a build step.

## Design Direction

- **Style**: Modern, premium, minimal, dark-mode first
- **UI**: Glassmorphism cards, subtle gradients, smooth scroll animations, animated counters, hover effects
- **Accessibility**: Semantic HTML, ARIA labels, keyboard focus states, reduced-motion support

## Sections

1. **Hero** — Name, title, tagline, and primary CTAs
2. **Engineering Impact** — Animated metric cards
3. **Featured Work** — Premium project cards with hierarchy (CarmaSure, Data Engineering, Research, SimpleDB, VR Game)
4. **Engineering Journey** — Scroll-animated timeline
5. **Publications** — Research paper cards
6. **Technical Expertise** — Categorized skill bars
7. **Project Archive** — Collapsible older projects
8. **Future** — Placeholder cards for upcoming sections

## Quick Preview

Open `static/index.html` directly in a browser or serve it with any static server:

```bash
cd static
python3 -m http.server 8080
```

## Next.js Build

Requires Node.js and npm:

```bash
cd SDE/Portfolio-Website-V2
npm install
npm run dev      # Start development server
npm run build    # Static export to /dist
```

## Performance

- Static export ready
- Semantic HTML and accessibility attributes
- Reduced-motion support
- SEO metadata
- Mobile-responsive design

## Deployment

- **Static preview**: Deploy the `static/` folder to any static host.
- **Next.js build**: Deploy the `dist/` folder after running `npm run build`.

## Future Placeholders

- AI Assistant ("Ask About Subash")
- Blog / Technical Articles
- Interactive AWS Architecture Showcase
- Live CarmaSure Demo Integration
