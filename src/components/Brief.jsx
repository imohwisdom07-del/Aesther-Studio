import { useState } from 'react'
import { motion } from 'framer-motion'

const PROJECT_TYPES = ['Web App', 'Landing Page', 'E-Commerce', 'Dashboard', 'Other']
const BUDGETS = ['< $500', '$500–$1k', '$1k–$3k', '$3k+', 'Let\'s talk']

const Brief = () => {
  const [form, setForm] = useState({ name: '', email: '', type: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }))

  const handleSubmit = (e) => {
    e.preventDefault()
   
    setSent(true)
  }

  return (
    <section id="brief" className="relative py-32 px-6" style={{ background: '#050505' }}>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.4))' }}
      />

      <div className="max-w-3xl mx-auto">

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-indigo-400 mb-4">
            Work With Me
          </p>
          <h2
            className="text-white font-black tracking-tighter leading-none mb-5"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Start a
            <br />
            <span style={{ WebkitTextStroke: '1px rgba(129,140,248,0.5)', color: 'transparent' }}>
              Brief.
            </span>
          </h2>
          <p className="text-white/40 text-[15px] max-w-md mx-auto">
            Tell me about your project. I'll get back within 24 hours.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {sent ? (
            <div
              className="text-center py-20 rounded-2xl"
              style={{ background: 'rgba(99,102,241,0.06)', border: '0.5px solid rgba(99,102,241,0.2)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(99,102,241,0.15)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white font-black text-2xl tracking-tight mb-3">Brief received.</h3>
              <p className="text-white/40 text-sm">I'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { key: 'name', label: 'Your Name', placeholder: 'Imoh Wisdom', type: 'text' },
                  { key: 'email', label: 'Email Address', placeholder: 'you@email.com', type: 'email' },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-white/30 mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={(e) => set(key, e.target.value)}
                      className="w-full px-4 py-3 text-sm text-white placeholder-white/20 rounded-xl outline-none transition-all duration-200 focus:border-indigo-500/50"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '0.5px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-white/30 mb-3">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => set('type', t)}
                      className="px-4 py-2 text-[11px] font-bold tracking-wider uppercase rounded-xl transition-all duration-200"
                      style={{
                        background: form.type === t ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)',
                        color: form.type === t ? '#818cf8' : 'rgba(255,255,255,0.35)',
                        border: form.type === t ? '0.5px solid rgba(99,102,241,0.4)' : '0.5px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-white/30 mb-3">
                  Budget Range
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => set('budget', b)}
                      className="px-4 py-2 text-[11px] font-bold tracking-wider uppercase rounded-xl transition-all duration-200"
                      style={{
                        background: form.budget === b ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)',
                        color: form.budget === b ? '#818cf8' : 'rgba(255,255,255,0.35)',
                        border: form.budget === b ? '0.5px solid rgba(99,102,241,0.4)' : '0.5px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-white/30 mb-2">
                  Tell Me About the Project
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="What are you building? What's the goal? Any deadline?"
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  className="w-full px-4 py-3 text-sm text-white placeholder-white/20 rounded-xl outline-none transition-all duration-200 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '0.5px solid rgba(255,255,255,0.08)',
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 text-[12px] font-black tracking-[0.2em] uppercase text-white rounded-xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #7c3aed)',
                  boxShadow: '0 4px 32px rgba(99,102,241,0.35)',
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                <span className="relative">Send Brief →</span>
              </motion.button>

            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Brief
