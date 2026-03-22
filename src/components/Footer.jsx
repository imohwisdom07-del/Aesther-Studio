const Footer = () => {
  return (
    <footer
      className="px-6 py-12 border-t"
      style={{ background: '#050505', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-black tracking-tighter text-lg">Aether</span>
          <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-indigo-400">Studio</span>
        </div>
        <p className="text-white/20 text-[12px] tracking-wide">
          © {new Date().getFullYear()} Imoh Wisdom · All rights reserved
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/imohwisdom07-del"
            target="_blank"
            rel="noreferrer"
            className="text-white/25 hover:text-white text-[12px] tracking-wide transition-colors no-underline"
          >
            GitHub
          </a>
          <a
            href="https://wisdom-portfolio-seven.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-white/25 hover:text-white text-[12px] tracking-wide transition-colors no-underline"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
