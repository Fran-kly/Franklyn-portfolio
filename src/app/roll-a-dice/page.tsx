"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy, Dice5, RotateCw, Sparkles, Users } from "lucide-react";
// Styles are embedded in this route file so they cannot be lost by the CSS module loader.
const styles = {
  actions: "rad-actions",
  back: "rad-back",
  community: "rad-community",
  copyButton: "rad-copyButton",
  footer: "rad-footer",
  glowOne: "rad-glowOne",
  glowTwo: "rad-glowTwo",
  heading: "rad-heading",
  helpText: "rad-helpText",
  hero: "rad-hero",
  heroIcon: "rad-heroIcon",
  infoCard: "rad-infoCard",
  infoHeading: "rad-infoHeading",
  kicker: "rad-kicker",
  label: "rad-label",
  layout: "rad-layout",
  notice: "rad-notice",
  number: "rad-number",
  origin: "rad-origin",
  outcome: "rad-outcome",
  outcomeDescription: "rad-outcomeDescription",
  outcomeGrid: "rad-outcomeGrid",
  outcomeTop: "rad-outcomeTop",
  page: "rad-page",
  placeholder: "rad-placeholder",
  results: "rad-results",
  resultsHeader: "rad-resultsHeader",
  rollButton: "rad-rollButton",
  rollCounter: "rad-rollCounter",
  rolling: "rad-rolling",
  sideCard: "rad-sideCard",
  sideHeading: "rad-sideHeading",
  sidebar: "rad-sidebar",
  smallIcon: "rad-smallIcon",
  spin: "rad-spin",
  subtitle: "rad-subtitle",
  textarea: "rad-textarea",
  topbar: "rad-topbar",
  value: "rad-value",
  wideOutcome: "rad-wideOutcome",
  wrapper: "rad-wrapper"
} as const;

const diceStyles = String.raw`
/* Standalone styles for the Roll-a-Dice route. No Tailwind utilities required. */
.rad-page {
  isolation: isolate;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  color: #f5f7ff;
  background: #070b16;
  font-family: Inter, "Segoe UI", Arial, sans-serif;
}
.rad-page * { box-sizing: border-box; }
.rad-glowOne, .rad-glowTwo { position: absolute; z-index: -1; pointer-events: none; border-radius: 50%; filter: blur(85px); }
.rad-glowOne { top: -190px; left: 25%; width: 850px; height: 520px; background: rgba(55, 87, 220, .17); }
.rad-glowTwo { right: -170px; top: 460px; width: 490px; height: 440px; background: rgba(113, 55, 213, .12); }
.rad-wrapper { width: min(1150px, calc(100% - 40px)); margin: 0 auto; padding: 28px 0 64px; }
.rad-topbar { min-height: 60px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; padding-bottom: 24px; border-bottom: 1px solid rgba(176, 189, 226, .13); }
.rad-back { display: inline-flex; align-items: center; gap: 9px; color: #b9c5db; font-size: 13px; font-weight: 650; text-decoration: none; transition: color .2s; }
.rad-back:hover { color: #fff; }
.rad-community { display: inline-flex; align-items: center; gap: 9px; border: 1px solid rgba(152, 148, 255, .23); border-radius: 999px; background: rgba(116, 108, 231, .12); padding: 10px 14px; font-size: 11px; font-weight: 750; letter-spacing: .08em; text-transform: uppercase; color: #c9c3ff; }
.rad-hero { max-width: 740px; margin: 0 auto; padding: 66px 0 44px; text-align: center; }
.rad-heroIcon { margin: 0 auto 25px; display: grid; place-items: center; width: 78px; height: 78px; border: 1px solid rgba(165, 182, 255, .38); border-radius: 25px; background: linear-gradient(135deg, #257bee, #6f4be6); box-shadow: 0 20px 56px rgba(61, 84, 241, .28); color: #fff; transform: rotate(-8deg); }
.rad-kicker { margin: 0 0 14px; color: #90baff; font-size: 11px; font-weight: 800; letter-spacing: .24em; text-transform: uppercase; }
.rad-heading { margin: 0; font-size: clamp(40px, 5.5vw, 68px); line-height: 1.08; font-weight: 850; letter-spacing: -.065em; }
.rad-heading span { color: transparent; background: linear-gradient(100deg, #42baff, #8f79ff); -webkit-background-clip: text; background-clip: text; }
.rad-subtitle { max-width: 620px; margin: 18px auto 0; color: #9faecc; line-height: 1.85; font-size: 15px; }
.rad-layout { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(300px, 1fr); gap: 20px; align-items: start; }
.rad-results, .rad-sideCard { border: 1px solid rgba(158, 179, 223, .16); background: linear-gradient(145deg, rgba(22, 33, 56, .97), rgba(12, 20, 36, .97)); border-radius: 24px; box-shadow: 0 22px 55px rgba(0, 0, 0, .14); }
.rad-results { padding: 27px; }
.rad-resultsHeader { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 22px; }
.rad-resultsHeader h2, .rad-sideHeading h2, .rad-infoHeading h2 { margin: 0; font-weight: 800; font-size: 19px; letter-spacing: -.03em; }
.rad-resultsHeader p, .rad-sideHeading p { font-size: 12px; margin: 6px 0 0; color: #97a6c3; }
.rad-rollCounter { color: #b7c2d9; font-size: 11px; border: 1px solid rgba(164, 185, 225, .18); border-radius: 100px; padding: 9px 12px; background: rgba(255, 255, 255, .035); white-space: nowrap; }
.rad-rollCounter strong { color: #fff; font-variant-numeric: tabular-nums; }
.rad-outcomeGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; transition: opacity .18s ease; }
.rad-rolling { opacity: .55; }
.rad-outcome { min-width: 0; min-height: 149px; border-radius: 16px; background: #0b1425; border: 1px solid rgba(159, 177, 224, .14); padding: 20px; transition: border-color .2s ease, transform .2s ease; }
.rad-outcome:hover { transform: translateY(-2px); border-color: rgba(82, 149, 245, .4); }
.rad-wideOutcome { grid-column: 1 / -1; }
.rad-outcomeTop { display: flex; justify-content: space-between; gap: 10px; align-items: flex-start; margin-bottom: 17px; }
.rad-outcomeTop h3 { margin: 0; color: #9daccc; text-transform: uppercase; letter-spacing: .11em; font-size: 10px; font-weight: 800; line-height: 1.7; }
.rad-number { border-radius: 7px; padding: 5px 9px; background: rgba(83, 137, 251, .13); color: #86b7ff; font-family: "Consolas", monospace; font-size: 11px; }
.rad-value { min-height: 26px; margin: 0; font-size: 16px; font-weight: 750; line-height: 1.55; overflow-wrap: anywhere; color: #f6f8ff; }
.rad-placeholder { color: #6e7e9c; font-weight: 550; }
.rad-outcomeDescription { font-size: 11px; line-height: 1.6; color: #7486a5; margin: 11px 0 0; }
.rad-actions { display: flex; flex-wrap: wrap; align-items: stretch; gap: 12px; margin-top: 24px; }
.rad-rollButton, .rad-copyButton { display: inline-flex; align-items: center; justify-content: center; gap: 9px; border-radius: 12px; padding: 13px 22px; min-height: 48px; font-size: 13px; font-weight: 800; cursor: pointer; transition: filter .2s, transform .2s, background .2s; }
.rad-rollButton { border: none; color: #fff; background: linear-gradient(105deg, #2a8cf3, #7253f1); box-shadow: 0 13px 28px rgba(67, 96, 235, .23); }
.rad-copyButton { border: 1px solid rgba(169, 187, 227, .21); color: #e2e8fb; background: rgba(255, 255, 255, .045); }
.rad-rollButton:hover:not(:disabled), .rad-copyButton:hover:not(:disabled) { filter: brightness(1.15); transform: translateY(-2px); }
.rad-rollButton:disabled, .rad-copyButton:disabled { cursor: not-allowed; opacity: .5; box-shadow: none; }
.rad-notice { font-size: 12px; color: #fcd589; margin: 12px 0 0; }
.rad-sidebar { display: grid; gap: 18px; }
.rad-sideCard { padding: 24px; }
.rad-sideHeading { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
.rad-smallIcon { width: 44px; height: 44px; border-radius: 13px; display: grid; place-items: center; color: #8cbaff; background: rgba(63, 123, 237, .17); }
.rad-label { display: block; margin-bottom: 9px; color: #c3cfe5; font-size: 12px; font-weight: 750; }
.rad-textarea { width: 100%; resize: vertical; padding: 13px 14px; border: 1px solid rgba(168, 190, 236, .19); border-radius: 12px; min-height: 149px; outline: none; background: #090f1d; color: #edf4ff; font: 13px/1.75 "Consolas", monospace; }
.rad-textarea:focus { border-color: #5d98f8; box-shadow: 0 0 0 3px rgba(71, 140, 245, .12); }
.rad-helpText { margin: 10px 0 0; font-size: 11px; line-height: 1.8; color: #97a7c4; }
.rad-infoCard { background: linear-gradient(140deg, rgba(51, 47, 113, .35), rgba(17, 24, 42, .95)); border-color: rgba(155, 144, 252, .22); }
.rad-infoHeading { color: #c1b8ff; display: flex; gap: 9px; align-items: center; margin-bottom: 12px; }
.rad-infoHeading h2 { color: #f5f7ff; font-size: 16px; }
.rad-infoCard > p { margin: 0; color: #c0c9df; line-height: 1.8; font-size: 12px; }
.rad-infoCard .rad-origin { border-top: 1px solid rgba(159, 173, 218, .14); margin-top: 17px; padding-top: 14px; color: #8fa0c4; }
.rad-footer { margin-top: 57px; border-top: 1px solid rgba(158, 179, 223, .13); padding-top: 23px; font-size: 11px; color: #7c8eac; text-align: center; }
.rad-footer a { color: #8db8ff; text-decoration: none; }
.rad-footer a:hover { color: white; }
.rad-spin { animation: rotate .8s linear infinite; }
@keyframes rotate { to { transform: rotate(360deg); } }
@media (max-width: 850px) { .rad-layout { grid-template-columns: 1fr; } .rad-sidebar { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 630px) { .rad-wrapper { width: min(100% - 28px, 1150px); } .rad-topbar { gap: 12px; } .rad-community { font-size: 9px; } .rad-hero { padding: 48px 0 34px; } .rad-heroIcon { height: 65px; width: 65px; border-radius: 20px; } .rad-subtitle { font-size: 13px; } .rad-results { padding: 18px; } .rad-outcomeGrid, .rad-sidebar { grid-template-columns: 1fr; } .rad-wideOutcome { grid-column: auto; } .rad-outcome { min-height: 120px; } .rad-actions > button { flex: 1; } }
@media (prefers-reduced-motion: reduce) { .rad-page *, .rad-page *::before, .rad-page *::after { animation: none !important; transition: none !important; } }

`;

// Example members only. Visitors can type their own list, one name per line.
const SAMPLE_MEMBERS = ["Member 01", "Member 02", "Member 03", "Member 04", "Member 05"];

const PROJECT_TOPICS = [
  { category: "Education", topic: "Student Performance Analysis" },
  { category: "Finance", topic: "Personal Spending Trends" },
  { category: "Healthcare", topic: "Hospital Attendance Analysis" },
  { category: "Agriculture", topic: "Crop Production Trends" },
  { category: "Transportation", topic: "Urban Traffic Patterns" },
  { category: "E-commerce", topic: "Online Sales Performance" },
  { category: "Public Sector", topic: "Budget Allocation Analysis" },
  { category: "Sports", topic: "Player Performance Insights" },
  { category: "Energy", topic: "Electricity Consumption Trends" },
];

const VISUALIZATION_TOOLS = ["Power BI", "Excel Charts", "Matplotlib", "Seaborn", "Plotly", "Looker Studio"];
const TOOL_STACKS = [
  "Python + pandas", "Excel + Power Query", "SQL + Power BI", "Python + Matplotlib",
  "Python + Seaborn", "Google Sheets + Looker Studio", "SQL + Python", "Excel + Power BI",
];
const PROJECT_TYPES = ["Solo", "Group"] as const;

type RollResult = {
  member: string;
  category: string;
  topic: string;
  visualization: string;
  stack: string;
  projectType: (typeof PROJECT_TYPES)[number];
};

function randomItem<T,>(values: readonly T[]): T {
  return values[Math.floor(Math.random() * values.length)];
}

export default function RollADicePage() {
  const [memberInput, setMemberInput] = useState(SAMPLE_MEMBERS.join("\n"));
  const [result, setResult] = useState<RollResult | null>(null);
  const [rolling, setRolling] = useState(false);
  const [rollCount, setRollCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const members = useMemo(
    () => memberInput.split(/\r?\n/).map((name) => name.trim()).filter(Boolean),
    [memberInput]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current);
    };
  }, []);

  function rollDice() {
    if (rolling || members.length === 0) return;
    setRolling(true);
    setCopied(false);
    setCopyError("");

    timerRef.current = setTimeout(() => {
      const project = randomItem(PROJECT_TOPICS);
      setResult({
        member: randomItem(members),
        category: project.category,
        topic: project.topic,
        visualization: randomItem(VISUALIZATION_TOOLS),
        stack: randomItem(TOOL_STACKS),
        projectType: randomItem(PROJECT_TYPES),
      });
      setRollCount((previous) => previous + 1);
      setRolling(false);
      timerRef.current = null;
    }, 620);
  }

  async function copyResult() {
    if (!result) return;
    const text = [
      "ROLL-A-DICE PROJECT CHALLENGE",
      `Member: ${result.member}`,
      `Category / Topic: ${result.category} — ${result.topic}`,
      `Visualization Tool: ${result.visualization}`,
      `Tool Stack: ${result.stack}`,
      `Project Type: ${result.projectType}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setCopyError("");
    } catch {
      setCopyError("Your browser blocked copying. You can select the results manually.");
    }
  }

  const outcomes = [
    { index: "01", label: "Member name", value: result?.member ?? "Waiting for your roll", description: "Selected from the member pool" },
    { index: "02", label: "Project category / topic", value: result ? `${result.category} — ${result.topic}` : "Waiting for your roll", description: "A problem worth exploring" },
    { index: "03", label: "Visualization tool", value: result?.visualization ?? "Waiting for your roll", description: "How to communicate insights" },
    { index: "04", label: "Tool stack", value: result?.stack ?? "Waiting for your roll", description: "Technology for the project" },
    { index: "05", label: "Project type", value: result?.projectType ?? "Waiting for your roll", description: "Solo effort or team collaboration" },
  ];

  return (
    <main className={styles.page}>
      <style dangerouslySetInnerHTML={{ __html: diceStyles }} />
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />
      <div className={styles.wrapper}>
        <header className={styles.topbar}>
          <Link href="/#projects" className={styles.back}>
            <ArrowLeft size={17} aria-hidden="true" /> Back to portfolio
          </Link>
          <span className={styles.community}><Dice5 size={16} aria-hidden="true" /> Data Geeks Community Challenge</span>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroIcon}><Dice5 size={37} strokeWidth={1.65} aria-hidden="true" /></div>
          <p className={styles.kicker}>One click. Five possibilities.</p>
          <h1 className={styles.heading}>Roll a <span>Project.</span></h1>
          <p className={styles.subtitle}>
            Discover a random member, project topic, visualization tool, tool stack, and project type — all in one roll.
          </p>
        </section>

        <div className={styles.layout}>
          <section className={styles.results} aria-label="Random project results">
            <div className={styles.resultsHeader}>
              <div>
                <h2>Your challenge</h2>
                <p>Every roll creates five randomized outcomes.</p>
              </div>
              <span className={styles.rollCounter}>Rolls completed: <strong>{rollCount}</strong></span>
            </div>

            <div className={`${styles.outcomeGrid} ${rolling ? styles.rolling : ""}`} aria-live="polite" aria-atomic="true">
              {outcomes.map((item, index) => (
                <article key={item.index} className={`${styles.outcome} ${index === 4 ? styles.wideOutcome : ""}`}>
                  <div className={styles.outcomeTop}>
                    <h3>{item.label}</h3>
                    <span className={styles.number}>{item.index}</span>
                  </div>
                  <p className={`${styles.value} ${!result ? styles.placeholder : ""}`}>
                    {rolling ? "Rolling…" : item.value}
                  </p>
                  <p className={styles.outcomeDescription}>{item.description}</p>
                </article>
              ))}
            </div>

            <div className={styles.actions}>
              <button className={styles.rollButton} onClick={rollDice} disabled={rolling || members.length === 0} type="button">
                <RotateCw size={18} aria-hidden="true" className={rolling ? styles.spin : ""} />
                {rolling ? "Rolling…" : result ? "Roll again" : "Roll the dice"}
              </button>
              <button className={styles.copyButton} onClick={copyResult} disabled={rolling || !result} type="button">
                {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                {copied ? "Copied!" : "Copy result"}
              </button>
            </div>
            {members.length === 0 && <p className={styles.notice} role="alert">Enter at least one member name to roll.</p>}
            {copyError && <p className={styles.notice} role="alert">{copyError}</p>}
          </section>

          <aside className={styles.sidebar}>
            <section className={styles.sideCard}>
              <div className={styles.sideHeading}>
                <span className={styles.smallIcon}><Users size={20} aria-hidden="true" /></span>
                <div>
                  <h2>Member pool</h2>
                  <p>{members.length} member{members.length === 1 ? "" : "s"} available</p>
                </div>
              </div>
              <label className={styles.label} htmlFor="dice-members">Edit sample member names</label>
              <textarea
                className={styles.textarea}
                id="dice-members"
                value={memberInput}
                onChange={(event) => setMemberInput(event.target.value)}
                rows={6}
                spellCheck={false}
                placeholder="One name per line"
              />
              <p className={styles.helpText}>These are sample names, not real community members. Enter names one per line. They'll reset when you refresh.</p>
            </section>

            <section className={`${styles.sideCard} ${styles.infoCard}`}>
              <div className={styles.infoHeading}><Sparkles size={18} aria-hidden="true" /><h2>How it works</h2></div>
              <p>Customize the member list, then click <strong>Roll the dice</strong>. Keep your randomized challenge or roll again.</p>
              <p className={styles.origin}>Originally built as a Python challenge; recreated in React and TypeScript as a playable portfolio demo.</p>
            </section>
          </aside>
        </div>

        <footer className={styles.footer}>Built by Franklyn Ngurukwem · <Link href="/#projects">View more projects</Link></footer>
      </div>
    </main>
  );
}
