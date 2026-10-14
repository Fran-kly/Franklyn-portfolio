import {
  ArrowUpRight,
  Download,
  GitBranch,
  Link2,
  Mail,
  MapPin,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { contact } from "@/data/contact";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section container" id="contact">
      <Reveal>
        <div className="contact-card">
          <span className="eyebrow">
            <span className="eyebrow-line" /> Contact
          </span>
          <h2>
            Let&apos;s build something <span>meaningful.</span>
          </h2>
          <p>
            I&apos;m open to junior data analyst, Python development, IT
            support, and other early-career opportunities. Let&apos;s connect.
          </p>

          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>
              <Mail size={18} /> Email me <ArrowUpRight size={16} />
            </a>
            <a
              className="btn btn-outline"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link2 size={18} /> LinkedIn <ArrowUpRight size={16} />
            </a>
            <a
              className="btn btn-outline"
              href={contact.cv}
              download="Franklyn-Ngurukwem-CV.pdf"
              type="application/pdf"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              className="btn btn-outline"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch size={18} /> GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <p className="contact-note">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            {"  ·  "}
            <span
              className="contact-location"
              style={{ display: "inline-flex" }}
            >
              <MapPin size={13} /> {profile.location}
            </span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
