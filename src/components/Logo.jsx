import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">

      
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 400, damping: 14 }}
        className="relative flex-shrink-0"
        style={{ width: 38, height: 38 }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{ background: '#6366f1', filter: 'blur(10px)' }}
        />

        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <circle
            cx="19"
            cy="19"
            r="15"
            stroke="#6366f1"
            strokeWidth="1.5"
            fill="none"
          />

          <circle
            cx="19"
            cy="19"
            r="9"
            stroke="#818cf8"
            strokeWidth="1"
            strokeDasharray="2.5 2"
            fill="none"
            opacity="0.6"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 19 19"
              to="360 19 19"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>

          <ellipse
            cx="19"
            cy="19"
            rx="15"
            ry="5.5"
            stroke="#6366f1"
            strokeWidth="0.8"
            fill="none"
            opacity="0.25"
            strokeDasharray="3 2"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 19 19"
              to="-360 19 19"
              dur="12s"
              repeatCount="indefinite"
            />
          </ellipse>

          <circle cx="19" cy="19" r="3" fill="#6366f1" />
          <circle cx="19" cy="19" r="1.5" fill="#c7d2fe" />

          <circle cx="34" cy="19" r="2" fill="#818cf8" opacity="0.9">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 19 19"
              to="360 19 19"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </motion.div>

      <div className="flex flex-col" style={{ gap: 0 }}>
        <motion.span
          className="text-white uppercase leading-none"
          style={{ fontSize: 17, fontWeight: 900, letterSpacing: '-0.04em' }}
        >
          Aether
        </motion.span>
        <span
          className="text-indigo-400 uppercase font-bold"
          style={{ fontSize: 8, letterSpacing: '0.45em', opacity: 0.75, paddingLeft: 1, marginTop: 2 }}
        >
          Studio
        </span>
      </div>
    </div>
  )
}

export default Logo
