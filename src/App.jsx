import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import PublicationCard from "./components/PublicationCard";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import { publications } from "./data/publications";

export default function App() {
  return (
    <div id="top">
      <Nav />
      <Hero />
      <Section id="about" index="01" title="About" className="bg-panel/30">
        <About />
      </Section>

      <Section id="projects" index="02" title="Projects">
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Section>

      <div className="flex justify-center py-8">
        <a
          href="https://github.com/Mubeenali53?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest px-6 py-3 bg-copper text-bg hover:bg-signal transition-colors"
        >
          <GitHubIcon />
          Browse more repos
        </a>
      </div>

      <Section id="skills" index="03" title="Skills" className="bg-panel/30">
        <Skills />
      </Section>

      <Section id="certifications" index="04" title="Certifications">
        <Certifications />
      </Section>
      <Section id="publications" index="05" title="Publications" className="bg-panel/30">
        <div className="flex flex-col gap-10">
          {publications.map((p) => (
            <PublicationCard key={p.id} pub={p} />
          ))}
        </div>
      </Section>

      <Section id="experience" index="06" title="Experience" className="bg-panel/30">
        <Experience />
      </Section>

      <Section id="contact" index="07" title="Get in Touch" className="bg-panel/30">
        <Contact />
      </Section>

      <Footer />
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="w-4 h-4 fill-current"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.4-4.04-1.4-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.72.08-.72 1.2.09 1.83 1.24 1.83 1.24 1.06 1.82 2.78 1.29 3.45.98.11-.77.42-1.29.76-1.58-2.66-.31-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.24-3.23-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.25 2.94.12 3.25.77.84 1.24 1.92 1.24 3.23 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}
