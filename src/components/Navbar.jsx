import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link.label);
    scrollTo(link.id);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-5 pt-5"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="flex items-center justify-between rounded-[20px] px-5 py-3 gap-6 transition-all duration-500"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          background: scrolled ? "rgba(5,5,5,0.8)" : "rgba(255,255,255,0.04)",
          border: scrolled
            ? "0.5px solid rgba(255,255,255,0.1)"
            : "0.5px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="flex-1 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo />
        </div>

        <ul className="hidden md:flex items-center gap-1 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link)}
                className="relative px-4 py-1.5 text-[13px] font-medium tracking-wide rounded-lg transition-all duration-200 cursor-pointer border-none"
                style={{
                  color:
                    active === link.label
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.4)",
                  background:
                    active === link.label
                      ? "rgba(255,255,255,0.06)"
                      : "transparent",
                }}
              >
                {link.label}
                {active === link.label && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex items-center justify-end gap-2">
          <a
            href="/Wisdom_Imoh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center px-4 py-2 text-[11px] font-bold tracking-[0.12em] uppercase text-white/45 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 no-underline"
          >
            Resume
          </a>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("brief")}
            className="relative px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase text-white rounded-[11px] overflow-hidden border-none cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            <span className="relative">Start a Brief</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
