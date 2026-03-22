import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden" style={{ background: '#050505' }}>

   
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-indigo-400 mb-4">
              About
            </p>
            <h2
              className="text-white font-black tracking-tighter leading-none mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              The studio
              <br />
              <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)', color: 'transparent' }}>
                behind it.
              </span>
            </h2>

            <div className="space-y-5 text-white/50 text-[15px] leading-relaxed">
              <p>
                Aether Studio is the creative engineering practice of{' '}
                <span className="text-white font-semibold">Imoh Wisdom</span> — a frontend
                engineer based in Lagos building interfaces that move, feel alive, and
                actually ship.
              </p>
              <p>
                The focus is on the intersection of motion design and production-grade
                code. Not animations for the sake of it — kinetic interfaces that
                communicate, guide, and convert.
              </p>
              <p>
                Previously built{' '}
                <span className="text-white">E-Max Trade</span> — a full crypto merchant
                platform — from scratch. Currently available for freelance projects,
                contracts, and agency collaborations.
              </p>
            </div>

           
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '3+', label: 'Projects shipped' },
                { value: '100%', label: 'Frontend focused' },
                { value: 'Lagos', label: 'Based in' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.07)' }}
                >
                  <p className="text-white font-black text-2xl tracking-tight">{stat.value}</p>
                  <p className="text-white/35 text-[11px] tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            
            <div
              className="relative rounded-2xl overflow-hidden p-8"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(255,255,255,0.08)',
              }}
            >
              
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)' }}
              />

             
              <div
                className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center font-black text-2xl text-white"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #7c3aed)',
                  boxShadow: '0 8px 32px rgba(99,102,241,0.3)',
                }}
              >
                IW
              </div>

              <h3 className="text-white font-black text-xl tracking-tight mb-1">Imoh Wisdom</h3>
              <p className="text-indigo-400 text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
                Frontend Engineer · Aether Studio
              </p>

              <div className="space-y-3">
                {[
                  { icon: '→', text: 'React / Vite / JavaScript' },
                  { icon: '→', text: 'GSAP · Framer Motion · CSS' },
                  { icon: '→', text: 'Tailwind · Custom Design Systems' },
                  { icon: '→', text: 'Vercel · Netlify · Supabase' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-indigo-500 text-sm font-bold">{item.icon}</span>
                    <span className="text-white/50 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

             
              <div className="flex gap-3 mt-8">
                <a
                  href="https://github.com/imohwisdom07-del"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-[11px] font-bold tracking-wider uppercase rounded-xl no-underline transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.5)',
                    border: '0.5px solid rgba(255,255,255,0.1)',
                  }}
                >
                  GitHub
                </a>
                <a
                  href="https://wisdom-portfolio-seven.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-[11px] font-bold tracking-wider uppercase rounded-xl no-underline transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(99,102,241,0.1)',
                    color: 'rgba(129,140,248,0.8)',
                    border: '0.5px solid rgba(99,102,241,0.2)',
                  }}
                >
                  Portfolio
                </a>
              </div>
            </div>
            
            <div
              className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
