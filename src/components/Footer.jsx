import { socials } from "../data/misc";

// Vite: import all social icon SVGs as URLs, keyed by filename.
const iconModules = import.meta.glob("../assets/images/*.svg", {
  eager: true,
  import: "default",
});

function iconUrl(filename) {
  const match = Object.keys(iconModules).find((p) => p.endsWith(filename));
  return match ? iconModules[match] : null;
}

export default function Footer() {
  return (
    <footer className="border-t border-panel-line bg-panel/70 px-6 md:px-12 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <nav className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={` ${s.name} `}
              aria-label={s.name}
              className="group w-15 h-15 flex items-center justify-center border border-panel-line hover:border-copper transition-colors"
            >
              <img
                src={iconUrl(s.icon)}
                alt=""
                aria-hidden="true"
                className="footer-social-icon"
              />
            </a>
          ))}
        </nav>

        <p className="font-mono text-s text-muted">
          &copy; 2026 &middot; Designed &amp; developed by{" "}
          <a
            href="https://github.com/Mubeenali53"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal hover:text-text transition-colors"
          >
            Mubeen
          </a>
        </p>

        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-widest text-copper hover:text-signal transition-colors"
        >
          Back to top &#8593;
        </a>
      </div>
    </footer>
  );
}
