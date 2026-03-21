import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-glass">
        
        
        <div className="flex-1 flex justify-start">
          <Logo />
        </div>

        
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
          <li className="text-white/50 hover:text-white transition-colors cursor-pointer">
            Projects
          </li>
          <li className="text-white/50 hover:text-white transition-colors cursor-pointer">
            Skills
          </li>
          <li className="text-white/50 hover:text-white transition-colors cursor-pointer">
            About
          </li>
        </ul>

       
        <div className="flex-1 flex items-center justify-end gap-3">
          
          <button className="hidden sm:block px-4 py-2 text-xs font-bold tracking-widest text-white/70 hover:text-white uppercase transition-all">
            Resume
          </button>
          
         
          <button className="px-6 py-2.5 text-xs font-bold tracking-widest text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all uppercase">
            Start a Brief
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;