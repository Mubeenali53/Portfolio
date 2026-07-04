import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certs" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const THEME_STORAGE_KEY = "portfolio-theme";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme = savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.dataset.theme = nextTheme;
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

      return nextTheme;
    });
  }

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-panel-line">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group font-mono text-xs tracking-widest uppercase text-muted hover:text-text transition-colors"
            >
              <span className="text-copper group-hover:text-signal transition-colors">●</span>{" "}
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={` ${theme === "dark" ? "light" : "dark"} theme`}
            title={` ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "light"}
            className="inline-flex h-10 w-10 items-center justify-center border border-panel-line text-text hover:border-copper hover:text-copper transition-colors"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="md:hidden font-mono text-xs uppercase tracking-widest text-text border border-panel-line px-3 py-2"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-panel-line bg-panel px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm uppercase tracking-widest text-muted hover:text-text"
            >
              <span className="text-copper">●</span> {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm0-22a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Zm10 9a1 1 0 0 1 0 2h-1a1 1 0 1 1 0-2h1Zm-19 0a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h1Zm16.24-7.24a1 1 0 0 1 1.41 1.41l-.7.7a1 1 0 0 1-1.41-1.41l.7-.7Zm-14.14 14.1a1 1 0 0 1 1.41 1.41l-.7.7A1 1 0 1 1 4.4 17.6l.7-.7Zm14.14 1.41a1 1 0 0 1-1.41 1.41l-.7-.7a1 1 0 1 1 1.41-1.41l.7.7ZM4.4 4.4a1 1 0 0 1 1.41 0l.7.7A1 1 0 0 1 5.1 6.5l-.7-.7a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M21 14.1A8.5 8.5 0 0 1 9.9 3a1 1 0 0 0-1.2 1.2A10.5 10.5 0 1 0 19.8 15.3a1 1 0 0 0-1.2-1.2Z" />
    </svg>
  );
}
