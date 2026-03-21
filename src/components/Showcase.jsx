import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "VESTIGE",
    category: "SNEAKER ECOSYSTEM",
    image: "/project-vestige.jpg",
    link: "https://vestige-edit.vercel.app",
    description: "A high-performance React application for luxury footwear acquisition with dynamic state management."
  },
  {
    id: "02",
    title: "E-MAX TRADE",
    category: "FINANCIAL INTERFACE",
    image: "/project-emax.jpg",
    link: "https://e-max-trade-p3nd.vercel.app/",
    description: "A sophisticated trading dashboard designed for real-time market data visualization and asset tracking."
  },
  {
    id: "03",
    title: "HABIT TRACKER",
    category: "PRODUCTIVITY SAAS",
    image: "/project-habit.jpg",
    link: "https://habit-tracker-six-virid-44.vercel.app/",
    description: "A logic-heavy React utility focused on behavioral engineering and consistent data persistence."
  }
];

const Showcase = () => {
  return (
    <section id="projects" className="py-32 px-[5%] bg-[#050505]">
     
      <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-10">
        <div>
          <span className="text-indigo-500 font-bold tracking-[0.3em] text-xs uppercase">Selected Works</span>
          <h2 className="text-6xl md:text-8xl font-black text-white mt-4 tracking-tighter">SHOWCASE</h2>
        </div>
        <p className="hidden md:block text-white/40 max-w-[320px] text-right text-sm leading-relaxed font-medium">
          Engineering digital solutions across E-commerce, FinTech, and Productivity sectors.
        </p>
      </div>

      
      <div className="flex flex-col gap-40">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          >
            <div className="hidden md:block col-span-1 pt-2">
              <span className="text-white/10 text-7xl font-black tracking-tighter group-hover:text-indigo-500/20 transition-colors duration-500">
                {project.id}
              </span>
            </div>

            
            <div className="col-span-1 md:col-span-7 relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 aspect-video">
              <a href={project.link} target="_blank" rel="noreferrer">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 grayscale-[50%] group-hover:grayscale-0"
                  />
                </motion.div>
              </a>
            </div>

           
            <div className="col-span-1 md:col-span-4 flex flex-col pt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-indigo-500" />
                <span className="text-indigo-400 font-bold text-[10px] tracking-[0.3em] uppercase">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-white/50 text-base mb-8 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex gap-6">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group/link flex items-center gap-2 text-white font-bold text-xs tracking-widest uppercase border-b border-indigo-500/0 hover:border-indigo-500 pb-1 transition-all"
                >
                  Launch App
                  <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;