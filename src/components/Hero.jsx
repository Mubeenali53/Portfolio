import { motion } from "framer-motion";
import TerminalIntro from "./TerminalIntro";
import mePhoto from "../assets/images/me.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center px-6 md:px-12 pt-16"
    >
      {/* faint grid backdrop*/}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-signal) 1px, transparent 1px), linear-gradient(90deg, var(--color-signal) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-5xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-copper mb-4"
          >
          DevOps Engineer · Cloud · Automation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-5xl md:text-7xl leading-[1.05] tracking-tight text-text mb-6"
          >
            Hey, I'm
            <br />
            Syed Mubeen Ali<span className="text-signal">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-8"
          >
            <TerminalIntro />
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest px-6 py-3 border border-copper text-copper hover:bg-copper hover:text-bg transition-colors"
          >
            Get in touch
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="font-mono text-[11px] uppercase tracking-widest text-muted mt-10 flex items-center gap-2"
          >
            
            <motion.a
              href="#about"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              &#8595;
            </motion.a>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative justify-self-center"
        >
          <div className="absolute -inset-3 border border-panel-line" />
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-copper" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-copper" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-copper" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-copper" />
          <img
            src={mePhoto}
            alt="Syed Mubeen Ali"
            className="relative w-48 h-48 md:w-64 md:h-64 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
