import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Certifications() {
  return <section className="section container" id="certificates"><Reveal><SectionTitle eyebrow="05 / Learning" title="Credentials & continuous growth." /></Reveal><div className="cert-grid">{certifications.map((cert, i) => <Reveal key={cert.title} delay={i * 0.05}><div className="cert-card"><span className="cert-icon"><Award size={21} /></span><div><h3>{cert.title}</h3><p>{cert.issuer}</p><span className="cert-year">{cert.year}</span></div><ArrowUpRight className="cert-decoration" size={18} /></div></Reveal>)}</div></section>;
}
