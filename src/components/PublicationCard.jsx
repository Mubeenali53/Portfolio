import { motion } from "framer-motion";

export default function PublicationCard({ pub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="border-l-2 border-panel-line hover:border-signal pl-6 py-2 transition-colors"
    >
      <h3 className="font-mono text-base md:text-lg text-text mb-1">
        {pub.title}
      </h3>
      <p className="font-mono text-xs uppercase tracking-widest text-copper mb-3">
        {pub.venue}
      </p>
      <p className="text-sm text-muted leading-relaxed mb-4 max-w-3xl">
        {pub.summary}
      </p>
      <a
        href={pub.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs uppercase tracking-widest text-signal hover:text-text transition-colors"
      >
        Read more &#8599;
      </a>
    </motion.div>
  );
}
