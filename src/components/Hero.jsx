import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
    
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" /> 
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-110" 

        >
          <source src="/Floating_glass_plates.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-indigo-500 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase mb-6 block">
            Aether Digital Engineering
          </span>
          
          <h1 className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase">
            Engineering <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
              The Invisible
            </span>
          </h1>

          <p className="text-white/40 mt-10 max-w-lg mx-auto text-sm md:text-base leading-relaxed font-medium">
            Architecting high-fidelity interfaces and kinetic digital ecosystems 
            for the next generation of the web.
          </p>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[8px] tracking-[0.4em] text-white/20 uppercase font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;