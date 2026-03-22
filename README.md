# Aether Studio — Kinetic Portfolio

> The creative engineering practice of **Imoh Wisdom** — a frontend engineer based in Lagos building interfaces that move, feel alive, and actually ship.

**Live Demo →** [aether-studio.vercel.app](https://aether-studio.vercel.app)

---

## Overview

Aether Studio is a boutique agency portfolio built with a "kinetic interface" aesthetic — dark glassmorphism, indigo accents, and motion-first design. Every section is intentional: the hero uses a full-screen video background with smooth scroll indicators, projects are linked to live deployments, and the contact form lets clients start a brief directly.

---

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#home` | Full-screen video background, animated headline |
| Projects | `#projects` | Live project cards — Vestige, E-Max Trade, Habit Tracker |
| Skills | `#skills` | 2×2 method grid — architecture, animation, design systems, performance |
| About | `#about` | Bio, stack, GitHub + portfolio links |
| Brief | `#brief` | Contact form — project type, budget, message |

---

## Projects Showcased

### Vestige — Sneaker E-Commerce
Premium sneaker marketplace with kinetic product reveals and a streamlined checkout flow.
**Live →** [vestige-edit.vercel.app](https://vestige-edit.vercel.app)

### E-Max Trade — FinTech Platform
Crypto merchant trading platform built for a real client. Features live rate calculator, dual portals (customer + admin), trade history, payout management, and a hidden admin terminal.
**Live →** [e-max-trade-p3nd.vercel.app](https://e-max-trade-p3nd.vercel.app)

### Habit Tracker — SaaS Productivity
Behaviour-change SaaS with streak mechanics, data visualisation, and a calm focused UI.
**Live →** [habit-tracker-six-virid-44.vercel.app](https://habit-tracker-six-virid-44.vercel.app)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 + Vite 8 | UI framework and build tool |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Page animations and entrance effects |
| GSAP + ScrollTrigger | Scroll-based animations |
| @studio-freight/lenis | Smooth scroll (optional) |

---

## Design System

- **Background:** `#050505` Deep Black
- **Accent:** `#6366f1` Indigo
- **Glassmorphism:** `backdrop-blur-xl` + `bg-white/5` + `border-white/10`
- **Typography:** Black-weight uppercase headers, tight letter-spacing
- **Motion:** Framer Motion entrance animations, GSAP scroll triggers

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/imohwisdom07-del/Tobi-Portfolio.git

# Navigate into the project
cd Tobi-Portfolio

# Install dependencies
npm install

# Install Tailwind (required — not in package.json yet)
npm install tailwindcss @tailwindcss/vite

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
Tobi-Portfolio/
├── public/
│   ├── Floating_glass_plates_desktop.mp4   ← Hero video (desktop)
│   ├── Floating_glass_plates_mobile.mp4    ← Hero video (mobile)
│   └── resume.pdf                          ← Your resume (add this)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      ← Fixed nav with scroll links
│   │   ├── Logo.jsx        ← Aether Studio "A" mark
│   │   ├── Hero.jsx        ← Video background hero
│   │   ├── Showcase.jsx    ← Project cards with live links
│   │   ├── Method.jsx      ← Skills 2×2 grid
│   │   ├── About.jsx       ← Bio + stack card
│   │   ├── Brief.jsx       ← Contact form
│   │   └── Footer.jsx      ← Footer
│   ├── App.jsx
│   └── index.css
├── vite.config.js
└── package.json
```

---

## Adding Your Resume

Drop your resume PDF into the `public/` folder named exactly `resume.pdf`:

```
public/
└── resume.pdf
```

The navbar "Resume" button links to `/resume.pdf` automatically.

---

## Wiring Up the Contact Form

The Brief form in `Brief.jsx` currently shows a success state on submit but doesn't send emails. To make it real:

1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a new form and copy your form ID
3. Update `handleSubmit` in `Brief.jsx`:

```js
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSent(true)
}
```

---

## Deployment

The project is ready to deploy on Vercel:

```bash
# Build for production
npm run build

# Preview the build locally
npm run preview
```

Then push to GitHub and import the repo on [vercel.com](https://vercel.com). Vercel auto-detects Vite and deploys instantly.

---

## Author

**Imoh Wisdom** — Frontend Engineer · Lagos, Nigeria

[![GitHub](https://img.shields.io/badge/GitHub-imohwisdom07--del-black?style=flat&logo=github)](https://github.com/imohwisdom07-del)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-indigo?style=flat)](https://wisdom-portfolio-seven.vercel.app)
[![E--Max Trade](https://img.shields.io/badge/E--Max_Trade-Live-green?style=flat)](https://e-max-trade-p3nd.vercel.app)

---

⭐ If you like this project, leave a star!
