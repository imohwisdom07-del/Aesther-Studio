import { motion } from 'framer-motion'

const methods = [
  {
    num: '01',
    title: 'Frontend Architecture',
    body: 'Component-driven systems built for scale. Every decision — folder structure, state management, data flow — is made with the next engineer in mind.',
    tags: ['React', 'Vite', 'JavaScript'],
  },
  {
    num: '02',
    title: 'Kinetic Interaction',
    body: 'Animation as communication, not decoration. GSAP ScrollTrigger sequences, spring physics, and micro-interactions that make users feel the interface.',
    tags: ['GSAP', 'Framer Motion', 'CSS'],
  },
  {
    num: '03',
    title: 'Design Systems',
    body: 'Bespoke design tokens, reusable component libraries, and dark-mode-first Tailwind configurations that keep teams aligned at any scale.',
    tags: ['Tailwind', 'Figma', 'CSS'],
  },
  {
    num: '04',
    title: 'Performance First',
    body: 'Lighthouse 100 is the baseline. Code splitting, lazy loading, optimised assets, and Core Web Vitals monitoring baked in from day one.',
    tags: ['Vite', 'Vercel', 'Lighthouse'],
  },
]

const Method = () => {
  return (
    <section id="skills" className="relative py-32 px-6" style={{ background: '#050505' }}>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-indigo-400 mb-4">
            The Method
          </p>
          <h2
            className="text-white font-black tracking-tighter leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            How I
            <br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)', color: 'transparent' }}>
              engineer.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {methods.map((m, i) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-10 transition-all duration-500 hover:bg-white/[0.02]"
              style={{ background: '#050505' }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, rgba(99,102,241,0.07), transparent 70%)' }}
              />

              <span
                className="block font-black tracking-tighter mb-6 leading-none"
                style={{
                  fontSize: '4rem',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(99,102,241,0.18)',
                }}
              >
                {m.num}
              </span>

              <h3 className="text-white font-black tracking-tight text-2xl mb-4">{m.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{m.body}</p>

              <div className="flex flex-wrap gap-2">
                {m.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full"
                    style={{
                      background: 'rgba(99,102,241,0.08)',
                      color: 'rgba(129,140,248,0.8)',
                      border: '0.5px solid rgba(99,102,241,0.15)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method
