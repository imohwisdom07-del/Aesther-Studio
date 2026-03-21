import { motion } from "framer-motion";

const methods = [
  {
    id: "01",
    title: "Component Architecture",
    tool: "React.js / Vite",
    description: "Building modular, reusable UI systems. I focus on clean prop-drilling solutions, custom hooks, and high-performance rendering."
  },
  {
    id: "02",
    title: "Kinetic Motion",
    tool: "Framer Motion / GSAP",
    description: "Creating 'alive' interfaces. I engineer scroll-triggered animations and state-based transitions that feel natural."
  },
  {
    id: "03",
    title: "Responsive Systems",
    tool: "Tailwind CSS",
    description: "Precision-based styling. I build fluid layouts that maintain visual integrity from 4K monitors down to mobile devices."
  },
  {
    id: "04",
    title: "State Engineering",
    tool: "React Hooks / Context",
    description: "Managing complex data flows. From habit tracking logic to e-commerce carts, I ensure data is synced and persistent."
  }
];

const Method = () => {
  return (
    <section id="skills" className="py-32 px-[5%] bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="flex flex-col mb-20">
          <span className="text-indigo-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4">
            Technical Philosophy
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            The Method<span className="text-indigo-600">.</span>
          </h2>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {methods.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#050505] p-10 md:p-16 group hover:bg-indigo-950/20 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="font-mono text-indigo-500 text-sm tracking-widest">
                  // {item.id}
                </span>
                <div className="h-2 w-2 rounded-full bg-white/20 group-hover:bg-indigo-500 transition-colors" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/30 font-bold text-[10px] tracking-[0.2em] uppercase mb-6">
                Expertise: {item.tool}
              </p>
              
              <p className="text-white/50 leading-relaxed text-sm md:text-base max-w-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        
        <div className="mt-12 text-center">
          <p className="text-[9px] uppercase tracking-[0.6em] text-white/20 font-bold">
            Frontend Specialist — Focused on the 1%
          </p>
        </div>
      </div>
    </section>
  );
};

export default Method;