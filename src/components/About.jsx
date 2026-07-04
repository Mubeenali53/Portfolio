export default function About() {
  return (
    <div className="max-w-3xl">
      <p className="text-muted leading-relaxed mb-6">
        I'm working toward a DevOps Engineer role where I can apply Linux
        systems administration, cloud platforms, automation, and CI/CD
        pipelines to build reliable, scalable infrastructure. I care about
        seamless software delivery and continuous improvement — and about
        making the systems behind an app as solid as the app itself.
      </p>
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest px-6 py-3 border border-signal text-signal hover:bg-signal hover:text-bg transition-colors"
      >
        My Resume
      </a>
    </div>
  );
}
