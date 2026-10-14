import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <Reveal>
        <SectionTitle title="Experience" />
      </Reveal>
      <div className="timeline">
        {experiences.map((item, i) => (
          <Reveal key={item.company} delay={i * 0.1}>
            <article className="experience-card">
              <div className="experience-icon">
                <BriefcaseBusiness size={22} />
              </div>
              <div className="experience-main">
                <div className="experience-header">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                  </div>
                  <span className="experience-date">{item.period}</span>
                </div>
                <p className="experience-summary">{item.description}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
