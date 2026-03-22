import { motion } from 'framer-motion'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">

      <video
        src="/Floating_glass_plates_desktop.mp4"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
      />

      <video
        src="/Floating_glass_plates_mobile.mp4"
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-indigo-500/60" />
          <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-indigo-400">
            Frontend Engineer · Lagos
          </span>
          <span className="w-8 h-px bg-indigo-500/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-black tracking-tighter text-white leading-[0.95] mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
        >
          Building the
          <br />
          <span style={{ WebkitTextStroke: '1px rgba(129,140,248,0.6)', color: 'transparent' }}>
            Invisible
          </span>
          <span className="text-indigo-400"> Layer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15px] text-white/40 tracking-wide max-w-md mx-auto mb-12"
        >
          Kinetic interfaces. Production-grade code.
          <br />
          Built for the boutique agency aesthetic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="relative px-8 py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase text-white overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.04] active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #7c3aed)',
              boxShadow: '0 4px 24px rgba(99,102,241,0.35)',
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-xl" />
            <span className="relative">View Work</span>
          </button>

          <button
            onClick={() => scrollTo('brief')}
            className="px-8 py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase text-white/50 hover:text-white border border-white/10 hover:border-white/25 rounded-xl transition-all duration-300 hover:bg-white/5"
          >
            Start a Brief
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.45em] uppercase text-white/25 font-medium">
          Scroll
        </span>
        <div className="w-px h-12 overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              background: 'linear-gradient(to bottom, #6366f1, transparent)',
              animation: 'scrollDrop 2s ease-in-out infinite',
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100%);  opacity: 0; }
        }
      `}</style>

    </section>
  )
}

export default Hero
