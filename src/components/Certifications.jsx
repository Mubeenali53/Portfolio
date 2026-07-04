import { motion } from "framer-motion";
import { certifications } from "../data/misc";

export default function Certifications() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {certifications.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="border border-panel-line bg-panel p-5 flex flex-col gap-2"
        >
          <p className="font-mono text-sm text-text mb-1">{c.name}</p>
          <p className="text-sm text-muted">{c.org}</p>
          <p className="font-mono text-xs text-signal mt-2">{c.date}</p>

          {c.certificate && (
            <div className="pt-3 mt-2 border-t border-panel-line font-mono text-xs uppercase tracking-widest">
              <a
                href={c.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-copper transition-colors"
              >
                View &#8599;
              </a>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
