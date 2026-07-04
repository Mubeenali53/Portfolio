import { motion } from "framer-motion";
import { skillGroups } from "../data/misc";

export default function Skills() {
  return (
    <div className="flex flex-col gap-8">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <h3 className="font-mono text-xs uppercase tracking-widest text-copper mb-3">
            {group.label}
          </h3>
          <div className="flex flex-wrap gap-3">
            {group.items.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 bg-panel border border-panel-line text-text hover:border-copper hover:text-copper transition-colors"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
