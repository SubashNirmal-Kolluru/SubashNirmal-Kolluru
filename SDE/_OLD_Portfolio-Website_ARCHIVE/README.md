# Portfolio Website

## Overview

This is a fully responsive and dynamic portfolio website built using **React.js** for the frontend and **Sanity** for managing content. The website showcases personal projects, skills, professional achievements, and engineering journey in an elegant and modern design. The integration with Sanity allows for effortless content updates without requiring code changes.

[VISIT THE LIVE WEBSITE](https://subashnirmalportfolio.netlify.app/)

## Architecture

```
Portfolio-Website/
├── frontend_react/          # React.js frontend
│   └── public, src, components, pages
├── backend_sanity/          # Sanity CMS backend
│   └── schemas, sanity.config.js
└── package.json             # Workspace-level dependencies
```

- **Frontend**: React.js handles routing, animations, and responsive UI.
- **Backend**: Sanity CMS provides structured content for projects, skills, and experience.
- **Deployment**: Netlify (or static hosting via `npm run build`).

## Features

- **Dynamic Content Management:** Easily update projects, blogs, and portfolio sections via Sanity CMS.
- **Responsive Design:** Optimized for all devices (desktop, tablet, and mobile).
- **Modern UI/UX:** Clean, dark-mode-first interface with glassmorphism cards and smooth animations.
- **Performance Optimization:** Efficient loading times, lazy loading, and smooth Framer Motion animations.
- **Customizable:** Built with React.js for scalability and flexibility.

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

## Screenshots

> Screenshots of the live site will be added here. Run the app locally or deploy to Netlify to generate them.

## Deployment

1. Install dependencies: `npm install` (inside `frontend_react/` and `backend_sanity/`).
2. Start the frontend dev server: `npm start`.
3. Build for production: `npm run build`.
4. Deploy the `build/` folder to Netlify or any static hosting provider.

## Notes

- This folder preserves the original React + Sanity portfolio implementation.
- A redesigned premium portfolio (V2) is maintained separately.

