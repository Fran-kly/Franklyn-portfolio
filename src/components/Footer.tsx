import { GitBranch as Github } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© 2026 {profile.name}. Built with care.</span>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit GitHub"
        >
          <Github size={18} />
        </a>
      </div>
    </footer>
  );
}
