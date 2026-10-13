import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return <section className="section container" id="skills"><Reveal><SectionTitle eyebrow="04 / Toolkit" title="Skills I use to get things done." /></Reveal><div className="skills-grid">{skillGroups.map((group, i) => <Reveal key={group.title} delay={i * 0.07}><div className="skill-card"><h3>{group.title}</h3><div className="skill-pills">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></Reveal>)}</div></section>;
}
