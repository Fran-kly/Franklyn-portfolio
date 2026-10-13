"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { contact } from "@/data/contact";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Certificates", "#certificates"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="container nav" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Back to top">
          <span className="brand-mark">FN</span>
          <span>Franklyn<span className="brand-last">.</span></span>
        </a>
        <div className="desktop-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <a className="nav-github" href={contact.cv} download="Franklyn-Ngurukwem-CV.pdf">
          <Download size={16} /> Download CV
        </a>
        <button
          className="mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href={contact.cv} download="Franklyn-Ngurukwem-CV.pdf" onClick={() => setOpen(false)}>
            Download CV ↓
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  );
}
