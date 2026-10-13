"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  GitBranch as Github,
  MapPin,
} from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <motion.div
          className="availability"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="pulse" /> Open to early-career opportunities
        </motion.div>
        <motion.p
          className="hero-kicker"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
        >
          Franklyn
          <br />
          <span>Ngurukwem.</span>
        </motion.h1>
        <motion.p
          className="hero-role"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.24 }}
        >
          {profile.role} <span className="role-separator">/</span> Computer
          Science Graduate
        </motion.p>
        <motion.p
          className="hero-intro"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.32 }}
        >
          {profile.intro}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a href="#projects" className="btn btn-primary">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Let&apos;s connect <ArrowDownRight size={17} />
          </a>
        </motion.div>
        <div className="hero-meta">
          <MapPin size={15} /> {profile.location} <span>·</span>{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub
          </a>
        </div>
      </div>
      <div
        className="hero-visual"
        aria-label="Decorative visual showing data analysis and software development"
      >
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="visual-frame">
          <div className="visual-top">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>franklyn / workspace</span>
          </div>
          <div className="visual-main">
            <span className="visual-comment">// turning ideas into impact</span>
            <span className="visual-code">
              <b>const</b> developer = <em>{"{"}</em>
            </span>
            <span className="visual-code visual-indent">
              focus: <strong>&quot;Data + Python&quot;</strong>,
            </span>
            <span className="visual-code visual-indent">
              mindset: <strong>&quot;Keep building&quot;</strong>,
            </span>
            <span className="visual-code visual-indent">
              curiosity: <strong>true</strong>
            </span>
            <span className="visual-code">
              <em>{"}"}</em>;
            </span>
          </div>
          <div className="visual-bottom">
            <span className="visual-live" /> All systems learning
          </div>
        </div>
        <div className="float-chip chip-top">
          <span>4.09 / 5.00</span>
          <small>University CGPA</small>
        </div>
        <div className="float-chip chip-bottom">
          <span>2 internships</span>
          <small>Real-world experience</small>
        </div>
      </div>
    </section>
  );
}
