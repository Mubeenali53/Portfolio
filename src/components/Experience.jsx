import { motion } from "framer-motion";
import { experience } from "../data/misc";

export default function Experience() {
  return (
    <div className="flex flex-col gap-8">
      {experience.map((e, i) => (
        <motion.div
          key={e.role + e.org}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="border-l-2 border-panel-line hover:border-signal pl-6 py-1 transition-colors"
        >
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
            <h3 className="font-mono text-base text-text">{e.role}</h3>
            <span className="text-muted text-sm">— {e.org}</span>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-2">
            {e.date}
          </p>
          <p className="text-sm text-muted leading-relaxed max-w-2xl">
            {e.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
