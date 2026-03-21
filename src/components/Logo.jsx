import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
     
      <motion.div 
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative h-9 w-9 flex items-center justify-center"
      >
     
        <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        
        <div className="relative h-full w-full bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg border border-white/10 overflow-hidden">
        
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M11 19L15 5M11 19L7 5M11 19H15M7 13H11M15 13H21M21 13V19M21 13V7" 
              stroke="white" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>

      
      <div className="flex flex-col -space-y-1">
        <span className="text-white font-black tracking-tighter text-lg md:text-xl">
          AETHER
        </span>
        <span className="text-[7px] tracking-[0.5em] text-indigo-400 font-bold uppercase pl-0.5 opacity-80">
          Studio
        </span>
      </div>
    </div>
  );
};

export default Logo;