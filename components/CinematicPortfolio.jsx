"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight, ArrowDownRight, Github, Linkedin, BrainCircuit, Code2,
  Database, GitBranch, Cpu, ShieldCheck, Workflow, RadioTower,
  FileCheck2, FlaskConical, Layers3, MoveUpRight, Sparkles,
  Orbit, MousePointer2, Play, Pause, ExternalLink
} from "lucide-react";
import { SceneReveal, TiltProject, MagneticLink, MorphBackdrop, ScrollProgress } from "./MotionFX";
import styles from "../app/(home)/cinematic.module.css";

const profile = {
  github: "https://github.com/MUHRIS-AJ",
  linkedin: "https://www.linkedin.com/in/muhrees-abool-jayah-975220350/",
  site: "https://muhris-ai-lab.vercel.app"
};

const filters = [
  { value: "all", title: "ALL PROJECTS" },
  { value: "ai", title: "AI / MACHINE LEARNING" },
  { value: "data", title: "DATA & ANALYTICS" },
  { value: "dev", title: "SOFTWARE" }
];

const research = [
  { name: "RESEARCHGUARD", tag: "CITATION VERIFICATION", description: "Crossref-backed research metadata checks with source-linked DOI shortlists.", stack: "Crossref · FastMCP · Python", url: "https://github.com/MUHRIS-AJ/ResearchGuard", phase: "LOCAL MVP" },
  { name: "TENDERPILOT", tag: "PUBLIC PROCUREMENT", description: "Find EU public tender notices. Business eligibility still requires human review.", stack: "EU TED · FastMCP", url: "https://github.com/MUHRIS-AJ/TenderPilot-ZeroWaste", phase: "LOCAL MVP" },
  { name: "ZEROWASTE", tag: "FOOD RESCUE DISCOVERY", description: "Discover mapped potential food-bank and community leads; partner consent is not verified.", stack: "OpenStreetMap · Overpass", url: "https://github.com/MUHRIS-AJ/TenderPilot-ZeroWaste", phase: "LOCAL MVP" },
  { name: "EARTHWATCH", tag: "EVENT INTELLIGENCE", description: "Read NASA and USGS natural-event reports. Not an official alert or forecasting tool.", stack: "NASA EONET · USGS · FastMCP", url: "https://github.com/MUHRIS-AJ/EarthWatch", phase: "LOCAL MVP" },
  { name: "GRANTSCOUT", tag: "FUNDING DISCOVERY", description: "Search US Grants.gov opportunities and surface original agency information.", stack: "Grants.gov · Python · MCP", url: "https://github.com/MUHRIS-AJ/GrantScout-AccessMap", phase: "LOCAL MVP" },
  { name: "ACCESSMAP", tag: "ACCESSIBILITY DATA", description: "Inspect crowdsourced OSM wheelchair tags; on-site accessibility remains unverified.", stack: "OpenStreetMap · Overpass", url: "https://github.com/MUHRIS-AJ/GrantScout-AccessMap", phase: "LOCAL MVP" },
  { name: "RECALLRADAR", tag: "PRODUCT SAFETY DATA", description: "Find public CPSC consumer product recall records and their official references.", stack: "CPSC · FastMCP", url: "https://github.com/MUHRIS-AJ/RecallRadar-TradeBridge", phase: "LOCAL MVP" },
  { name: "TRADEBRIDGE", tag: "ECONOMIC INDICATORS", description: "Compare World Bank export and GDP indicators without speculative market forecasts.", stack: "World Bank · Python", url: "https://github.com/MUHRIS-AJ/RecallRadar-TradeBridge", phase: "LOCAL MVP" }
]

const certificates = [
  { title: "Data Analytics", issuer: "NoviTech R&D", year: "2025" },
  { title: "Excel Dynamic Dashboards", issuer: "NoviTech R&D", year: "2025" },
  { title: "Python Fundamentals", issuer: "University of Colombo School of Computing", year: "2025" },
  { title: "Algorithms & Flowcharts", issuer: "IBM", year: "2025" },
  { title: "Tools for Data Science", issuer: "IBM", year: "2025" },
  { title: "The Data Science Profession", issuer: "IBM", year: "2025" }
];

const process = [
  { index: "01", icon: FlaskConical, name: "RESEARCH", detail: "Define a real user problem and validate sources." },
  { index: "02", icon: Layers3, name: "DESIGN", detail: "Plan architecture, APIs, data and MCP tools." },
  { index: "03", icon: Code2, name: "BUILD", detail: "Prototype in small, reviewable iterations." },
  { index: "04", icon: ShieldCheck, name: "VERIFY", detail: "Test, evaluate, and review security boundaries." },
  { index: "05", icon: GitBranch, name: "SHIP", detail: "Document, review and deploy what works." }
];

function projectCategory(repo) {
  const name = (repo.name + " " + (repo.description || "")).toLowerCase();
  if (/churn|segment|machine|ai_|m23-ai|predict|fraud|evaluator/.test(name)) return "ai";
  if (/sales|dashboard|inflation|data|pizza|analytics|scraper|market/.test(name)) return "data";
  return "dev";
}

function projectTitle(name) {
  return name.replace(/^[0-9]+\.-/, "").replace(/[_-]+/g, " ").trim();
}

function Kicker({ children }) {
  return <div className={styles.kicker}><span className={styles.signal} />{children}</div>;
}

function SectionTitle({ kicker, title, accent, description, number }) {
  return <div className={styles.sectionHeading}>
    <div><Kicker>{kicker}</Kicker>
      <h2>{title} <em>{accent}</em></h2>
      <p>{description}</p>
    </div>
    <span className={styles.sectionNumber}>{number}</span>
  </div>;
}

export default function CinematicPortfolio({ github }) {
  const systemReduced = useReducedMotion();
  const [animations, setAnimations] = useState(true);
  const [category, setCategory] = useState("all");
  const [feed, setFeed] = useState("featured");
  const noMotion = Boolean(systemReduced || !animations);

  const source = feed === "recent" && github.recent?.length ? github.recent : github.featured;
  const projects = useMemo(
    () => source.filter(repo => category === "all" || projectCategory(repo) === category),
    [source, category]
  );

  return <main className={styles.canvas} id="top" data-motion={noMotion ? "off" : "on"}>
    <ScrollProgress disabled={noMotion} />
    <MorphBackdrop />
    <div className={styles.noise} aria-hidden="true" />
    <div className={styles.width}>
      <div className={styles.systemBar}>
        <span><RadioTower size={13} /> MUHRIS / INTELLIGENCE STUDIO</span>
        <div className={styles.systemActions}>
          <span className={styles.status}><i /> SYSTEM ONLINE</span>
          <button type="button" className={styles.motionButton} onClick={() => setAnimations(current => !current)} aria-label={noMotion ? "Enable motion effects" : "Reduce motion effects"} aria-pressed={!noMotion}>
            {noMotion ? <Play size={13} /> : <Pause size={13} />}
            {noMotion ? "ENABLE MOTION" : "REDUCE MOTION"}
          </button>
        </div>
      </div>

      <section className={styles.hero} aria-label="Introduction">
        <motion.div className={styles.heroText}
          initial={noMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <Kicker>THE PORTFOLIO / VOL. 02</Kicker>
          <h1 className={styles.heroTitle}>
            <motion.span className={styles.titleWord} initial={noMotion ? false : { opacity: 0, y: 64, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.95, delay: 0.04 }}>BUILD</motion.span>
            {" "}
            <motion.span className={styles.titleWord + " " + styles.pink} initial={noMotion ? false : { opacity: 0, y: 64, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.95, delay: 0.17 }}>BEYOND.</motion.span>
            <br />
            <motion.span className={styles.titleWord + " " + styles.outline} initial={noMotion ? false : { opacity: 0, y: 64, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.95, delay: 0.30 }}>THINK FURTHER.</motion.span>
          </h1>
          <p className={styles.heroDescription}>
            <strong>A.J. Muhris</strong> — exploring data science, software development and AI-assisted engineering. I turn curiosity into practical experiments, test what I build, and document the results.
          </p>
          <div className={styles.heroLinks}>
            <MagneticLink href="#work" className={styles.mainAction} disabled={noMotion}>EXPLORE PROJECTS <ArrowUpRight size={16} /></MagneticLink>
            <MagneticLink href={profile.github} external className={styles.action} disabled={noMotion}><Github size={17} /> GITHUB <ArrowUpRight size={13}/></MagneticLink>
            <MagneticLink href={profile.linkedin} external className={styles.action} disabled={noMotion}><Linkedin size={17} /> LINKEDIN <ArrowUpRight size={13}/></MagneticLink>
          </div>
          <div className={styles.heroTech}><span>PYTHON</span><span>MACHINE LEARNING</span><span>NEXT.JS</span><span>MCP / AGENT R&D</span></div>
          <a className={styles.scrollHint} href="#work"><MousePointer2 size={15}/> SCROLL TO EXPLORE <ArrowDownRight size={14}/></a>
        </motion.div>
        <motion.div className={styles.portraitStage}
          initial={noMotion ? false : { opacity: 0, y: 32, rotate: -3, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
          <div className={styles.portraitFrame}>
            <div className={styles.sun} aria-hidden="true" />
            <div className={styles.portraitWrap}>
              <motion.div className={styles.portraitMotion} animate={noMotion ? {} : { scale: [1, 1.085, 1], y: [0, -8, 0] }} transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}>
                <Image src="/profile-main.jpg" alt="Portrait of A.J. Muhris" fill priority sizes="(max-width: 760px) 90vw, 450px" className={styles.portraitImage} />
              </motion.div>
            </div>
            <div className={styles.portraitTop}><span>HUMAN × INTELLIGENCE</span><span>001 / AJ</span></div>
            <div className={styles.portraitBottom}><strong>MUHRIS<br/>AJ.</strong><small>LEARN<br/>BUILD<br/>RESEARCH</small></div>
          </div>
          <motion.div className={styles.floatCard} animate={noMotion ? {} : { y: [0, -11, 0], rotate: [0, 2, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
            <BrainCircuit size={21} /><span>HUMAN + AI<br/>ENGINEERING</span>
          </motion.div>
          <div className={styles.orbitRing} aria-hidden="true" />
        </motion.div>
      </section>

      <SceneReveal className={styles.metrics} disabled={noMotion}>
        <div><strong>{github.totalPublic ?? "—"}</strong><span>PUBLIC CODE REPOSITORIES</span></div>
        <div><strong>{github.featured.length}</strong><span>FEATURED PROJECTS</span></div>
        <div><strong>06</strong><span>CREDENTIALS LISTED*</span></div>
        <div><strong>LIVE</strong><span>GITHUB DATA FEED</span></div>
      </SceneReveal>

      <SceneReveal as="section" className={styles.section} id="work" disabled={noMotion}>
        <SectionTitle kicker="01 / SHIPPED CODE" title="PROJECT" accent="ARCHIVE." description="Selected repositories with source code. Explore the published implementation, not just a concept image." number="01—04"/>
        <div className={styles.filterRow}>
          <div className={styles.filters} role="group" aria-label="Filter projects">{filters.map(option =>
            <button key={option.value} type="button" aria-pressed={category === option.value}
              className={category === option.value ? styles.selectedFilter : styles.filter}
              onClick={() => setCategory(option.value)}>{option.title}</button>
          )}</div>
          <button type="button" className={styles.switchFeed} onClick={() => { setFeed(value => value === "featured" ? "recent" : "featured"); setCategory("all"); }}>
            <GitBranch size={15}/>{feed === "featured" ? "LATEST ON GITHUB" : "CURATED PROJECTS"}
          </button>
        </div>
        {!github.live && <p className={styles.fallback}>GitHub is temporarily unreachable. Showing the last curated public-repository shortlist.</p>}
        <div className={styles.projectGrid}>
          <AnimatePresence mode="popLayout" initial={false}>
            {projects.map((repo, index) =>
              <motion.div layout className={styles.projectCell} key={repo.id ?? repo.name}
                initial={noMotion ? false : { opacity: 0, scale: 0.93, y: 23 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={noMotion ? {opacity: 1} : { opacity: 0, y: -12, scale: 0.95 }}
                transition={{ duration: 0.36, ease: "easeOut", delay: noMotion ? 0 : Math.min(index, 5)*0.03 }}>
                <TiltProject href={repo.html_url} className={styles.projectCard} disabled={noMotion}>
                  <span className={styles.cardSpot} aria-hidden="true"/>
                  <div className={styles.cardMeta}><span>REPOSITORY / {String(index+1).padStart(2,"0")}</span><MoveUpRight size={18}/></div>
                  <div className={styles.projectSymbol}>{projectCategory(repo)==="ai" ? <BrainCircuit size={28}/> : projectCategory(repo)==="data" ? <Database size={28}/> : <Code2 size={28}/>}<div className={styles.symbolRing}/></div>
                  <h3>{projectTitle(repo.name)}</h3>
                  <p>{repo.description || "Open the repository for source code, documentation and project history."}</p>
                  <div className={styles.cardBottom}><span>{repo.language || "SOURCE CODE"}</span><span>VIEW PROJECT <ArrowUpRight size={13}/></span></div>
                </TiltProject>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {projects.length === 0 && <p className={styles.fallback}>No public projects match this filter. Try another category.</p>}
        <div className={styles.projectFooter}><a href={profile.github + "?tab=repositories"} target="_blank" rel="noreferrer">EXPLORE ALL PUBLIC REPOSITORIES <ExternalLink size={15}/></a><small>{github.live ? "GitHub REST · cached approximately 15 min" : "Curated fallback list"}</small></div>
      </SceneReveal>

      <SceneReveal as="section" className={styles.section} id="agents" disabled={noMotion}>
        <SectionTitle kicker="02 / REAL-WORLD PROBLEM SOLVING" title="AGENT" accent="LAB." description="Eight source-grounded, locally runnable prototypes now have public code and documented limits. The workflows are rule-based; autonomous LLM agents and hosted demos are not yet deployed." number="02—04"/>
        <div className={styles.labGrid}>{research.map((project, index) =>
          <motion.div className={styles.labCard} key={project.name} whileHover={noMotion ? undefined : { y: -8, rotate: index % 2 ? 0.6 : -0.6, scale: 1.02 }} transition={{ type: "spring", stiffness: 195, damping: 20 }}>
            <div className={styles.labHeader}><span>{String(index+1).padStart(2,"0")} / {project.phase}</span><Orbit size={26}/></div>
            <div><small>{project.tag}</small><h3>{project.name}</h3><p>{project.description}</p></div>
            <div className={styles.labBottom}><span>{project.stack}</span>{project.url ? <a href={project.url} target="_blank" rel="noreferrer" aria-label={"View source for "+project.name}><ArrowUpRight size={18}/></a> : null}</div>
          </motion.div>
        )}</div>
        <div className={styles.pipeline}><span>DISCOVER</span><i>↗</i><span>DESIGN</span><i>↗</i><span>MCP TOOLS</span><i>↗</i><span>VERIFY</span><i>↗</i><span>HUMAN REVIEW</span></div>
      </SceneReveal>

      <SceneReveal as="section" className={styles.section} id="credentials" disabled={noMotion}>
        <SectionTitle kicker="03 / PROGRESS, NOT HYPE" title="SKILLS &" accent="LEARNING." description="Tools appearing in my work, and learning records from my previous profile. Certificate issuer evidence is not yet independently linked." number="03—04"/>
        <div className={styles.learnGrid}>
          <motion.div className={styles.toolBox} whileHover={noMotion ? undefined : { y: -6 }} transition={{duration:.3}}>
            <Cpu size={27} /><h3>MY TOOLKIT</h3>
            <div className={styles.tags}>{["Python", "SQL", "pandas", "Power BI", "Next.js", "React", "Git / GitHub", "Data Analytics", "ML Experiments", "AI-assisted Coding"].map(item => <span key={item}>{item}</span>)}</div>
            <p>These skills are supported by repositories or self-reported practice. No artificial skill scores or unverified expert badges.</p>
          </motion.div>
          <div className={styles.credentials}>
            <div className={styles.credentialsTop}><FileCheck2 size={21}/><span>LISTED CREDENTIALS · ISSUER VERIFICATION PENDING</span></div>
            {certificates.map((cert, index) =>
              <div className={styles.credential} key={cert.title}><span className={styles.certNumber}>{String(index+1).padStart(2,"0")}</span><div><strong>{cert.title}</strong><small>{cert.issuer}</small></div><span>{cert.year}</span></div>
            )}
          </div>
        </div>
      </SceneReveal>

      <SceneReveal as="section" className={styles.section} id="workflow" disabled={noMotion}>
        <SectionTitle kicker="04 / THINK · BUILD · VERIFY" title="HUMAN +" accent="AI." description="I collaborate with AI for research, architecture, implementation and testing. I retain responsibility for reviewing the output and real-world results." number="04—04"/>
        <div className={styles.steps}>{process.map(step =>
          <motion.div className={styles.step} key={step.index} whileHover={noMotion ? undefined : { y: -9, scale: 1.025 }} transition={{ type: "spring", damping: 24, stiffness: 230 }}>
            <span>{step.index}</span><step.icon size={23}/><h3>{step.name}</h3><p>{step.detail}</p>
          </motion.div>
        )}</div>
        <div className={styles.contact}>
          <div><Kicker>AVAILABLE FOR COLLABORATION</Kicker><h2>LET'S BUILD <em>WHAT MATTERS.</em></h2><p>Applied AI, thoughtful software and evidence-led projects.</p></div>
          <div className={styles.contactActions}><MagneticLink href={profile.linkedin} external className={styles.mainAction} disabled={noMotion}>CONNECT ON LINKEDIN <ArrowUpRight size={17}/></MagneticLink><MagneticLink href={profile.github} external className={styles.action} disabled={noMotion}>EXPLORE CODE <Github size={17}/></MagneticLink></div>
        </div>
      </SceneReveal>

      <footer className={styles.footer}><span>© {new Date().getFullYear()} A.J. MUHRIS</span><span>BUILT WITH CURIOSITY · REFINED THROUGH TESTING</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  </main>;
}
