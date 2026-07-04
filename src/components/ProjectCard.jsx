import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const hasLinks = project.github || project.visit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="relative bg-panel border border-panel-line p-6 flex flex-col gap-3 hover:border-signal/50 transition-colors"
    >
      {/* corner pins, like a component footprint */}
      <span className="absolute -top-px -left-px w-2 h-2 border-t-2 border-l-2 border-copper" />
      <span className="absolute -top-px -right-px w-2 h-2 border-t-2 border-r-2 border-copper" />
      <span className="absolute -bottom-px -left-px w-2 h-2 border-b-2 border-l-2 border-copper" />
      <span className="absolute -bottom-px -right-px w-2 h-2 border-b-2 border-r-2 border-copper" />

      <h3 className="font-mono text-lg text-text">{project.title}</h3>
      <p className="text-sm text-muted leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 pt-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 border border-panel-line text-signal"
          >
            {t}
          </span>
        ))}
      </div>

      {hasLinks && (
        <div className="flex gap-4 pt-3 border-t border-panel-line mt-2 font-mono text-xs uppercase tracking-widest">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-copper transition-colors"
            >
              GitHub &#8599;
            </a>
          )}
          {project.visit && (
            <a
              href={project.visit}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-copper transition-colors"
            >
              Visit &#8599;
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
