import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-[5%] bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
       
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-white/30 text-sm max-w-[240px] leading-relaxed mt-2">
            Independent Studio specialized in high-performance digital engineering.
          </p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Connect</span>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">GitHub</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Twitter</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Navigation</span>
            <a href="#projects" className="text-white/60 hover:text-white transition-colors text-sm">Showcase</a>
            <a href="#skills" className="text-white/60 hover:text-white transition-colors text-sm">Method</a>
            <a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">The Studio</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] text-white/20 font-bold uppercase tracking-[0.4em]">
        <p>© {currentYear} AETHER STUDIO — ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0">MADE IN LAGOS, NIGERIA.</p>
      </div>
    </footer>
  );
};

export default Footer;