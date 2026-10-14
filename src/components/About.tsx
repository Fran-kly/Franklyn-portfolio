import { BarChart3, Code2, GraduationCap, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const cards = [
  { icon: BarChart3, label: "Data Analysis", sub: "From raw data to insights" },
  { icon: Code2, label: "Python Development", sub: "Useful tools and apps" },
  { icon: GraduationCap, label: "Computer Science", sub: "B.Sc. · MOUAU" },
  { icon: Sparkles, label: "Always Improving", sub: "Learning by building" },
];

export default function About() {
  return (
    <section className="section container" id="about">
      <Reveal>
        <SectionTitle title="About Me" description={profile.about} />
      </Reveal>
      <div className="about-grid">
        {cards.map(({ icon: Icon, label, sub }, i) => (
          <Reveal key={label} delay={i * 0.06}>
            <div className="info-card">
              <span className="info-icon">
                <Icon size={22} />
              </span>
              <h3>{label}</h3>
              <p>{sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
