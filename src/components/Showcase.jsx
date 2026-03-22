import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: '01',
    name: 'Vestige',
    category: 'Luxury Sneaker E-Commerce',
    description:
      'A full luxury sneaker brand built from scratch — editorial design, cinematic hero, product archive with status tags, and a cart system called "Acquisition Manifest". Scroll-triggered reveal animations, 5 pages, zero UI libraries.',
    tags: ['React 19', 'React Router v7', 'Intersection Observer', 'Custom CSS'],
    live: 'https://vestige-edit.vercel.app/',
    accent: '#6366f1',
  },
  {
    id: '02',
    name: 'E-Max Trade',
    category: 'Crypto Merchant Platform',
    description:
      'Built for a real client in Nigeria who was managing crypto trades over WhatsApp. Full web platform with dual portals — a customer portal across 13 screens and a hidden admin portal accessed by only the Admin. Live rate calculator for USDT, BTC, ETH and SOL.',
    tags: ['React', 'React Router', 'Vite', 'Custom CSS'],
    live: 'https://e-max-trade-p3nd.vercel.app/',
    accent: '#10b981',
  },
  {
    id: '03',
    name: 'Habit Architect',
    category: 'Psychology-Based Habit Tracker',
    description:
      'A habit tracking app built around behaviour psychology. XP levelling system with 10 ranks from Novice to GOAT, 30-day GitHub-style heatmaps, streak tracking, a Focus Mode that reads the current hour to surface priority habits, and an anti-habit clean timer. Fully offline via localStorage.',
    tags: ['React', 'React Router', 'localStorage', 'Vite'],
    live: 'https://habit-tracker-six-virid-44.vercel.app/',
    accent: '#f59e0b',
  },
]

const Showcase = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.12,
        }
      )
    })
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-6"
      style={{ background: '#050505' }}
    >
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-indigo-400 mb-4">
            Selected Work
          </p>
          <h2
            className="text-white font-black tracking-tighter leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Projects that
            <br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>
              ship.
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '0.5px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at 50% 50%, ${project.accent}08, transparent 70%)`,
              }}
            />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 p-8 md:p-10">

              <span
                className="font-black tracking-tighter flex-shrink-0"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: 'transparent',
                  WebkitTextStroke: `1px ${project.accent}40`,
                  lineHeight: 1,
                }}
              >
                {project.id}
              </span>

              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-2" style={{ color: project.accent }}>
                  {project.category}
                </p>
                <h3 className="text-white font-black tracking-tight mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                  {project.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full"
                      style={{
                        background: `${project.accent}12`,
                        color: project.accent,
                        border: `0.5px solid ${project.accent}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-wider uppercase rounded-xl no-underline transition-all duration-300 group-hover:scale-105"
                style={{
                  background: `${project.accent}15`,
                  color: project.accent,
                  border: `0.5px solid ${project.accent}30`,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                View Live
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Showcase
