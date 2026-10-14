import {
  ArrowUpRight,
  CloudSun,
  Code2,
  Dice5,
  GitBranch as Github,
  ListTodo,
} from "lucide-react";

import { projects, type Project } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function ProjectArtwork({ type }: { type: Project["artwork"] }) {
  if (type === "ai")
    return (
      <div className="project-art art-ai">
        <span className="art-badge">OCTAVE ANALYTICS & INSIGHTS</span>
        <div className="ai-orbit" />
        <div className="ai-cover-title">
          <span>AI INVASION</span>
          <strong>FOR KIDS</strong>
          <small>Website prototype · Not officially launched</small>
        </div>
        <span className="art-bottom">
          Learning the future, today <span>✦</span>
        </span>
      </div>
    );
  if (type === "weather")
    return (
      <div className="project-art art-weather">
        <span className="art-badge">PYTHON / API</span>
        <div className="weather-cover">
          <CloudSun size={58} strokeWidth={1.4} />
          <div>
            <strong>28°</strong>
            <span>Weather API</span>
          </div>
        </div>
        <span className="art-bottom">
          Live data integration <span>↗</span>
        </span>
      </div>
    );
  if (type === "dice")
    return (
      <div className="project-art art-dice">
        <span className="art-badge">PYTHON / RANDOMIZATION</span>
        <div className="dice-cover">
          <Dice5 size={74} strokeWidth={1.1} />
          <span>ROLL A DICE</span>
        </div>
        <span className="art-bottom">
          One click. New project. <span>↗</span>
        </span>
      </div>
    );
  return (
    <div className="project-art art-todo">
      <span className="art-badge">
        <Code2 size={14} /> PYTHON / CLI
      </span>
      <div className="terminal-cover">
        <div>
          <ListTodo size={18} /> tasks.py
        </div>
        <p>
          <span>✓</span> Add a task
        </p>
        <p>
          <span>✓</span> Complete a task
        </p>
        <p>
          <span>›</span> Save changes_
        </p>
      </div>
      <span className="art-bottom">
        Built to stay organized <span>↗</span>
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <Reveal>
        <SectionTitle
          title="Projects"
          description="A selection of internship contributions, independent builds, and learning projects. Each is labelled accurately as completed, a prototype, or in preparation."
        />
      </Reveal>
      <div className="project-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={Math.min(i, 3) * 0.06}>
            <article className="project-card">
              <ProjectArtwork type={project.artwork} />
              <div className="project-body">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-foot">
                  <span className="project-status">{project.status}</span>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.linkText || "View project"}: ${project.title}`}
                    >
                      {project.linkText || "View project"}{" "}
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <a
          className="all-github"
          href="https://github.com/Fran-kly?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={18} /> More work on GitHub <ArrowUpRight size={17} />
        </a>
      </Reveal>
    </section>
  );
}
