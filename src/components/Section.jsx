import { motion } from "framer-motion";

export default function Section({ id, index, title, children, className = "" }) {
  return (
    <section id={id} className={`relative py-24 px-6 md:px-12 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-baseline gap-3 mb-12"
        >
          <span className="font-mono text-sm text-copper">{index}</span>
          <h2 className="font-mono text-2xl md:text-3xl tracking-tight text-text">
            {title}
          </h2>
          <span className="h-px flex-1 bg-panel-line ml-4" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
