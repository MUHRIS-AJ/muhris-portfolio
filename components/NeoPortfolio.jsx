"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, BrainCircuit, Code2, Database, Globe2, ShieldCheck, GitBranch, Cpu, Sparkles, Workflow, Terminal, ChevronDown, RadioTower, FileCheck2, FlaskConical, Layers3 } from "lucide-react";
import styles from "../app/(home)/neo.module.css";

const socials = {
  github: "https://github.com/MUHRIS-AJ",
  linkedin: "https://www.linkedin.com/in/muhrees-abool-jayah-975220350/"
};
const categories = [
  { id: "all", text: "All systems" },
  { id: "ai", text: "AI / ML" },
  { id: "analytics", text: "Data / Analytics" },
  { id: "engineering", text: "Engineering" }
];
const credentials = [
  ["Data Analytics","NoviTech R&D","Dec 2025"],
  ["Excel Dynamic Dashboards","NoviTech R&D","Dec 2025"],
  ["Python Fundamentals","University of Colombo School of Computing","Oct 2025"],
  ["Algorithms & Flowcharts","IBM","Oct 2025"],
  ["Tools for Data Science","IBM","Sep 2025"],
  ["The Data Science Profession","IBM","Apr 2025"]
];
const roadmap = [
  { title:"TenderPilot", problem:"Finding and qualifying for public procurement opportunities", tools:"MCP · TED API · document agents" },
  { title:"ResearchGuard", problem:"Verifying citations and conflicting claims in research", tools:"MCP · OpenAlex · Crossref" },
  { title:"ZeroWaste", problem:"Connecting verified surplus food to local partners", tools:"Multi-agent · OSM · OR-Tools" },
  { title:"EarthWatch", problem:"Organizing source-verified natural-event information", tools:"NASA EONET · USGS · agent workflows" }
];
const workflow = [
  { icon:FlaskConical, name:"Research", detail:"Validate demand and data sources" },
  { icon:Layers3, name:"Architect", detail:"Plan integrations and MCP interfaces" },
  { icon:Code2, name:"Build", detail:"Implement tested code" },
  { icon:ShieldCheck, name:"Verify", detail:"Review security and output quality" },
  { icon:GitBranch, name:"Ship", detail:"Review PR and deploy" }
];
function categorise(repo) {
  const v = (repo.name + " " + (repo.description || "")).toLowerCase();
  if (/machine|churn|segment|ai_|m23-ai|fraud|predict|evaluator/.test(v)) return "ai";
  if (/sales|inflation|dashboard|data|pizza|analytics|market|scraper/.test(v)) return "analytics";
  return "engineering";
}
function MonoLabel({children}) { return <div className={styles.eyebrow}><span className={styles.dot}/> {children}</div>; }
function IconLink({href,children}) {
  return <a href={href} className={styles.iconLink} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15}/></a>;
}
export default function NeoPortfolio({github}) {
  const [filter,setFilter] = useState("all");
  const [showAll,setShowAll] = useState(false);
  const source = showAll && github.recent.length ? github.recent : github.featured;
  const filtered = useMemo(() => source.filter(r => filter === "all" || categorise(r) === filter), [source,filter]);
  return (
    <main className={styles.shell} id="top">
      <div className={styles.gridBackdrop}/>
      <div className={styles.ambientOne}/>
      <div className={styles.ambientTwo}/>
      <div className={styles.container}>
        <div className={styles.topline}>
          <span><RadioTower size={13}/> AJ / INTELLIGENCE SYSTEMS</span>
          <span>BICT UNDERGRADUATE <i className={styles.online}/> SRI LANKA</span>
        </div>
        <section className={styles.hero} aria-label="Introduction">
          <motion.div className={styles.heroCopy} initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <MonoLabel>ENGINEERING THE NEXT POSSIBLE</MonoLabel>
            <h1>BUILD <span className={styles.pink}>BEYOND</span><br/><span className={styles.outline}>THE ORDINARY.</span></h1>
            <p className={styles.lead}>I’m <strong>A.J. Muhris.</strong> I explore data science, software engineering, and AI-assisted systems designed around practical problems — from intelligent workflows to applied analytics.</p>
            <div className={styles.heroActions}>
              <a href="#work" className={styles.primary}>EXPLORE MY WORK <ArrowUpRight size={17}/></a>
              <IconLink href={socials.github}><Github size={17}/> GitHub</IconLink>
              <IconLink href={socials.linkedin}><Linkedin size={17}/> LinkedIn</IconLink>
            </div>
            <div className={styles.heroTags}><span>PYTHON</span><span>DATA SCIENCE</span><span>AI WORKFLOWS</span><span>REACT</span><span>MCP EXPLORATION</span></div>
          </motion.div>
          <motion.div className={styles.visual} initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.75,delay:.15}}>
            <div className={styles.visualFrame}>
              <div className={styles.photoGradient}/>
              <div className={styles.sunDisc}/>
              <div className={styles.photoWrap}><Image src="/profile-main.jpg" alt="A.J. Muhris profile portrait" fill sizes="(max-width: 900px) 80vw, 390px" className={styles.photo} priority/></div>
              <div className={styles.visualTop}>PERSONAL IDENTITY <span>001 / AJ</span></div>
              <div className={styles.visualBottom}><span>A.J.<br/>MUHRIS</span><small>BUILD · LEARN · RESEARCH · SHIP</small></div>
            </div>
            <div className={styles.cornerBadge}><BrainCircuit size={19}/> <span>AI / HUMAN<br/>COLLABORATION</span></div>
          </motion.div>
        </section>
        <div className={styles.statStrip}>
          <div><strong>{github.totalPublic === null ? "—" : github.totalPublic}</strong><span>ACTIVE PUBLIC REPOS</span></div>
          <div><strong>{github.featured.length}</strong><span>CURATED PROJECTS</span></div>
          <div><strong>06</strong><span>CREDENTIALS LISTED*</span></div>
          <div><strong>LIVE</strong><span>PUBLIC GITHUB FEED</span></div>
        </div>
        <section className={styles.section} id="work">
          <div className={styles.sectionHead}><div><MonoLabel>01 / ENGINEERING LOG</MonoLabel><h2>PROJECT <em>ARCHIVE.</em></h2><p>Real code and repositories. Public GitHub updates are discovered automatically after the site's cache refresh.</p></div><span className={styles.sectionIndex}>01—04</span></div>
          <div className={styles.projectTools}>
            <div className={styles.filters}>{categories.map(c=><button key={c.id} type="button" className={filter===c.id?styles.activeFilter:styles.filter} onClick={()=>setFilter(c.id)}>{c.text}</button>)}</div>
            <button className={styles.feedToggle} type="button" onClick={()=>{setShowAll(!showAll);setFilter("all")}}><GitBranch size={15}/>{showAll?"Curated work":"Recent GitHub activity"}</button>
          </div>
          {!github.live && <div className={styles.notice}>Live GitHub API temporarily unavailable — showing the previously audited public repository shortlist.</div>}
          <div className={styles.projectGrid}>
            {filtered.map((project,index)=><a className={styles.projectCard} key={project.id||project.name} href={project.html_url} target="_blank" rel="noreferrer">
              <div className={styles.projectTop}><span>REPO / {String(index+1).padStart(2,"0")}</span><ArrowUpRight size={18}/></div>
              <div className={styles.projectIcon}>{categorise(project)==="ai"?<BrainCircuit/>:categorise(project)==="analytics"?<Database/>:<Terminal/>}</div>
              <h3>{project.name.replace(/^[0-9]+\.-/,"").replaceAll("-"," ").replaceAll("_"," ")}</h3>
              <p>{project.description || "Open the GitHub repository to explore its implementation, code and documentation."}</p>
              <div className={styles.projectFoot}><span>{project.language || "SOURCE CODE"}</span><span>VIEW SOURCE <ArrowUpRight size={12}/></span></div>
            </a>)}
          </div>
          {!filtered.length && <p className={styles.empty}>No projects in this filter yet. Select another category.</p>}
          <div className={styles.sectionEnd}><a href={socials.github+"?tab=repositories"} target="_blank" rel="noreferrer">VIEW ALL PUBLIC REPOSITORIES <ArrowUpRight size={15}/></a><small>{github.live?"GitHub REST API • cached up to 15 min":"Fallback inventory • live sync temporarily unavailable"}</small></div>
        </section>
        <section className={styles.section} id="agents">
          <div className={styles.sectionHead}><div><MonoLabel>02 / AGENT ENGINEERING</MonoLabel><h2>AI LAB <em>ROADMAP.</em></h2><p>Global real-world problems prioritized for future MCP and multi-agent prototypes. Not presented as finished deployments.</p></div><span className={styles.sectionIndex}>02—04</span></div>
          <div className={styles.roadmapGrid}>{roadmap.map((r,i)=><div className={styles.roadmapCard} key={r.title}><span className={styles.roadmapNumber}>0{i+1} / PLANNED</span><Workflow size={25}/><h3>{r.title}<span> AI</span></h3><p>{r.problem}</p><small>{r.tools}</small></div>)}</div>
          <div className={styles.pipeline}><span>RESEARCH</span><b>→</b><span>MCP TOOLS</span><b>→</b><span>MULTI-AGENT REASONING</span><b>→</b><span>VERIFICATION</span><b>→</b><span>HUMAN APPROVAL</span></div>
        </section>
        <section className={styles.section} id="credentials">
          <div className={styles.sectionHead}><div><MonoLabel>03 / LEARNING RECORD</MonoLabel><h2>SKILLS & <em>CREDENTIALS.</em></h2><p>Technologies supported by my projects, plus credentials previously listed in my portfolio. Issuer verification links are pending.</p></div><span className={styles.sectionIndex}>03—04</span></div>
          <div className={styles.skillsWrap}><div className={styles.skillsPanel}><Cpu size={25}/><h3>TOOLS I BUILD WITH</h3><div className={styles.skillPills}>{["Python","SQL","pandas","Power BI","Next.js","React","Git / GitHub","Data Analysis","ML Experiments","AI-assisted Development"].map(s=><span key={s}>{s}</span>)}</div><p>Skills reflect tools appearing in code, project documentation or previous self-reported experience. Levels are not independently assessed.</p></div>
          <div className={styles.credPanel}><div className={styles.credentialHeader}><FileCheck2 size={22}/><span>LISTED / VERIFY ISSUER EVIDENCE</span></div>{credentials.map((c,i)=><div className={styles.credential} key={i}><div><strong>{c[0]}</strong><span>{c[1]}</span></div><small>{c[2]}</small></div>)}</div></div>
        </section>
        <section className={styles.section} id="workflow">
          <div className={styles.sectionHead}><div><MonoLabel>04 / OPERATING SYSTEM</MonoLabel><h2>HUMAN + <em>AI.</em></h2><p>I use AI as a reasoning, prototyping and testing collaborator. I remain responsible for verification, decisions and the finished code.</p></div><span className={styles.sectionIndex}>04—04</span></div>
          <div className={styles.workflowGrid}>{workflow.map((w,i)=><div className={styles.workflowCard} key={w.name}><span>0{i+1}</span><w.icon size={22}/><h3>{w.name}</h3><p>{w.detail}</p></div>)}</div>
          <div className={styles.cta}><div><MonoLabel>READY FOR REAL PROBLEMS</MonoLabel><h3>LET'S BUILD<br/><span>SOMETHING USEFUL.</span></h3><p>Open to collaboration, research, and practical problem-solving projects.</p></div><div className={styles.ctaActions}><a className={styles.primary} href={socials.linkedin} target="_blank" rel="noreferrer">CONNECT ON LINKEDIN <ArrowUpRight size={17}/></a><a className={styles.secondary} href={socials.github} target="_blank" rel="noreferrer">EXPLORE THE CODE <Github size={17}/></a></div></div>
        </section>
        <footer className={styles.footer}><span>© {new Date().getFullYear()} A.J. MUHRIS</span><span>DESIGNED FOR THE FUTURE, GROUNDED IN REAL CODE.</span><a href="#top">BACK TO TOP ↑</a></footer>
      </div>
    </main>
  );
}
