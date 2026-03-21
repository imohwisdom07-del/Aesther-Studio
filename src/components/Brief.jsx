import { motion } from "framer-motion";

const Brief = () => {
  return (
    <section id="about" className="py-32 px-[5%] bg-[#050505] relative overflow-hidden">
    
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        <div>
          <span className="text-indigo-500 font-bold tracking-[0.3em] text-xs uppercase">Initiate</span>
          <h2 className="text-6xl md:text-8xl font-black text-white mt-4 tracking-tighter leading-[0.9]">
            START A <br /> <span className="text-white/20 hover:text-white transition-colors duration-500">BRIEF.</span>
          </h2>
          <p className="text-white/50 mt-10 max-w-sm leading-relaxed text-lg">
            Currently accepting select commissions for Q3 2026. Let's engineer something that survives the noise.
          </p>
          
          <div className="mt-12 space-y-4">
            <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Direct Line</p>
            <a href="mailto:hello@aether.studio" className="text-2xl text-white hover:text-indigo-400 transition-colors">
              wisdom@aether.studio
            </a>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Identity</label>
              <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email</label>
              <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Mission Goal</label>
            <select className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
              <option className="bg-black">Full Brand Ecosystem</option>
              <option className="bg-black">Web Application</option>
              <option className="bg-black">Kinetic Interface</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">The Vision</label>
            <textarea rows="4" placeholder="Tell us about the project..." className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" />
          </div>

          <button className="w-full py-5 bg-indigo-600 text-white font-black tracking-[0.2em] uppercase rounded-xl hover:bg-indigo-500 shadow-xl shadow-indigo-500/20 transition-all active:scale-95 mt-4">
            Send Intelligence
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Brief;