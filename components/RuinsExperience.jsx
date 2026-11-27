"use client";
import {useRef,useState} from "react";
import Image from "next/image";
import {motion, useScroll,useTransform,useSpring,AnimatePresence} from "framer-motion";
import {Orbit,ArrowUpRight,Award,ChevronLeft,ChevronRight,ZoomIn,ZoomOut,RotateCcw,LockKeyhole} from "lucide-react";
import styles from "./RuinsExperience.module.css";

const looks=[
 ["Emerald citadel","#79e5b6","#ff9f80","#122b28"],["Vice dusk","#ff8abd","#ffbc85","#30204d"],
 ["Silver archive","#cbdce8","#7faeea","#172837"],["Obsidian","#a4adba","#75cdbb","#15171d"],
 ["Amber relic","#f4c47c","#e67b78","#382725"],["Glacial glass","#a7f5ff","#9eacff","#132c43"],
 ["Violet rift","#c5a5ff","#f7a7df","#281a48"],["Jade sanctuary","#93d9a7","#a6e6e0","#113c2b"],
 ["Crimson eclipse","#ff8a99","#e9bc8e","#321921"],["Pearl horizon","#f5f1de","#b1d9ff","#263045"]
];
const cameras=[
 {name:"Wide",scale:1,rotateZ:0,rotateY:0,x:0},
 {name:"Dolly in",scale:1.36,rotateZ:0,rotateY:0,x:0},
 {name:"Orbit",scale:1.16,rotateZ:0,rotateY:-15,x:20},
 {name:"Dutch roll",scale:1.18,rotateZ:-7,rotateY:6,x:-10}
];
export const extraCredentials=[
  {
    "title": "CCNA: Enterprise Networking, Security, and Automation",
    "issuer": "Cisco Networking Academy",
    "type": "Credly · Course badge",
    "issuedDate": "18 Jan 2026",
    "evidence": "Credly account screenshot and issuer completion email",
    "art": "https://images.credly.com/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png",
    "info": "https://www.credly.com/org/cisco/badge/ccna-enterprise-networking-security-and-automation"
  },
  {
    "title": "Industrial Networking Essentials",
    "issuer": "Cisco Networking Academy",
    "type": "Credly · Course badge",
    "issuedDate": "23 Jan 2026",
    "evidence": "Credly account screenshot and issuer completion email",
    "art": "https://images.credly.com/images/a5d515cf-f476-48b6-9d88-3210fc1fde11/blob",
    "info": "https://www.credly.com/org/cisco/badge/industrial-networking-essentials"
  },
  {
    "title": "Introduction to Critical Infrastructure Protection (ICIP)",
    "issuer": "OPSWAT",
    "type": "Credly · Certification",
    "issuedDate": "29 Dec 2025",
    "expires": "2026-12-29",
    "evidence": "Credly screenshot, issuer email and public badge page",
    "art": "https://images.credly.com/images/f9f3c533-9b5a-47eb-8a3e-5734663116c0/image.png",
    "verify": "https://www.credly.com/badges/3a73eb1d-141a-4a06-a8b7-17db0992b6f7/public_url",
    "info": "https://www.credly.com/org/opswat/badge/opswat-introduction-to-critical-infrastructure-protection-icip"
  },
  {
    "title": "Generate reports with AI research agents",
    "issuer": "Microsoft Applied Skills",
    "type": "Credential",
    "evidence": "Award email found",
    "info": "https://learn.microsoft.com/credentials/applied-skills/generate-reports-with-ai-research-agents/"
  },
  {
    "title": "Python Coder",
    "issuer": "Kaggle",
    "type": "Digital badge",
    "evidence": "Award email found"
  },
  {
    "title": "1 Million Prompters",
    "issuer": "Dubai AI",
    "type": "Training completion",
    "evidence": "Completion email found"
  },
  {
    "title": "International Observe the Moon Night 2026",
    "issuer": "SEDS Sri Lanka",
    "type": "Event certificate",
    "evidence": "Certificate correspondence found"
  },
  {
    "title": "Certificate for CISCO Certified Network Associate",
    "issuer": "WinSYS Networks",
    "type": "Training provider course certificate",
    "issuedDate": "27 Dec 2025",
    "evidence": "Original training provider certificate reviewed; not the Cisco professional certification exam."
  }
];

export function RuinsExperience({disabled=false}){
 const section=useRef(null);
 const [look,setLook]=useState(0);
 const [camera,setCamera]=useState(0);
 const {scrollYProgress}=useScroll({target:section,offset:["start end","end start"]});
 const progress=useSpring(scrollYProgress,{stiffness:90,damping:25,mass:.5});
 const zoom=useTransform(progress,[0,.45,1],[.95,1.13,1]);
 const roll=useTransform(progress,[0,.5,1],[-3,0,3]);
 const pan=useTransform(progress,[0,1],[-18,18]);
 const [name,accent,sunset,stone]=looks[look];
 const cam=cameras[camera];
 const moveLook=(n)=>setLook(i=>(i+n+looks.length)%looks.length);
 return <section ref={section} id="citadel" className={styles.section} data-still={disabled?"true":"false"} style={{"--accent":accent,"--sunset":sunset,"--stone":stone}} aria-label="Interactive cinematic citadel">
  <header className={styles.heading}><div><p className={styles.eyebrow}>EXPERIENCE / 01</p><h2>THE <em>CITADEL.</em></h2><p>An imagined campus of knowledge, rebuilt in light, stone and glass.</p></div><span className={styles.sceneLabel}>ORIGINAL / PROCEDURAL SCENE</span></header>
  <div className={styles.stage}>
   <div className={styles.sky} aria-hidden="true"/>
   <motion.div className={styles.scrollCamera} aria-hidden="true" style={{scale:disabled?1:zoom,rotateZ:disabled?0:roll,x:disabled?0:pan}}>
    <motion.div className={styles.camera} animate={{scale:disabled?1:cam.scale,rotateZ:disabled?0:cam.rotateZ,rotateY:disabled?0:cam.rotateY,x:disabled?0:cam.x}} transition={{duration:disabled?0:1.1,ease:[.22,1,.36,1]}}>
     <div className={styles.sun}/>
     <div className={styles.horizon}/>
     <div className={styles.floor}/>
     <svg className={styles.ruins} viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice" role="presentation">
      <defs><linearGradient id="citadel-stone" x2="1" y2="1"><stop stopColor={stone}/><stop offset="1" stopColor="#080f16"/></linearGradient></defs>
      <g fill="url(#citadel-stone)" stroke={accent} strokeOpacity=".23" strokeWidth="1.5">
       <path d="M0 430V130l65-18 43 40 5 278zM40 140l46-13 20 12-6 22-60 8zM0 430h140v25H0z"/>
       <path d="M135 424V185l22-18 22 24 30-8v241zM127 424h92v19h-92zM145 250h51M145 335h51"/>
       <path d="M224 423V226q0-139 142-161l26 45q-113 29-113 116v197zM608 110l26-45q142 22 142 161v197h-55V226q0-87-113-116z"/>
       <path d="M798 421V165l30 15 20-24 24 9v256zM790 421h94v20h-94zM898 428V100l63 26 39-19v321z"/>
       <path d="M0 455h1000v13H0zM90 486h820v10H90zM177 516h646v10H177z"/>
       <path d="M325 134l40-16 20 22-44 33zM652 151l23-22 35 23-21 30zM85 452l68-21 41 35-55 12zM820 465l58-39 53 29-25 20z"/>
      </g>
      <g stroke={accent} strokeOpacity=".22" fill="none"><path d="M276 245l-18 19 10 37-20 29M736 258l16 20-12 29 18 17M54 200l23 23-15 30 25 28M834 221l-15 24 11 34"/></g>
     </svg>
     <div className={styles.jelly}><div className={styles.jellyCore}/><div className={styles.jellyShine}/></div>
     <div className={styles.shardOne}/><div className={styles.shardTwo}/>
    </motion.div>
   </motion.div>
   <div className={styles.overlay}><span>MUHRIS / INTELLIGENCE STUDIO</span><strong>LEGACY<br/>IN MOTION.</strong><small>GLASS · RUINS · LIGHT</small></div>
   <span className={styles.hud}>SCENE {String(look+1).padStart(2,"0")} / 10</span>
  </div>
  <div className={styles.controls}>
   <div className={styles.lookPicker}><button type="button" aria-label="Previous lighting style" onClick={()=>moveLook(-1)}><ChevronLeft size={19}/></button><div><small>ART DIRECTION</small><strong>{name}</strong></div><button type="button" aria-label="Next lighting style" onClick={()=>moveLook(1)}><ChevronRight size={19}/></button></div>
   <div className={styles.cameraPicker} role="group" aria-label="Camera angle">{cameras.map((item,i)=>{const Icon=[ZoomOut,ZoomIn,Orbit,RotateCcw][i];return <button key={item.name} type="button" disabled={disabled} aria-pressed={camera===i} onClick={()=>setCamera(i)}><Icon size={16}/>{item.name}</button>})}</div>
  </div>
  <p className={styles.note}>Ten original lighting presets, scroll-linked camera depth and optional manual viewpoints. {disabled?"Motion is disabled.":"Use the camera controls to change the view."} This is a fictional architectural environment, not a photograph of the university.</p>
 </section>;
}

const archivedCredentialDetails = {
  "Data Analytics": {
    "issuedDate": "Dec 2025",
    "skills": [
      "Data Analysis",
      "Python (Pandas, NumPy)",
      "Microsoft Excel",
      "Power BI"
    ]
  },
  "Excel Dynamic Dashboards": {
    "issuedDate": "Dec 2025",
    "skills": [
      "Microsoft Excel",
      "Power BI",
      "Power Query",
      "Dashboards"
    ]
  },
  "Python Fundamentals": {
    "issuedDate": "Oct 2025",
    "skills": [
      "Python",
      "NumPy",
      "pandas",
      "MySQLi"
    ]
  },
  "Algorithms & Flowcharts": {
    "issuedDate": "Oct 2025",
    "skills": [
      "Program Development",
      "Computational Thinking",
      "Algorithms",
      "Computer Science"
    ]
  },
  "Tools for Data Science": {
    "issuedDate": "Sep 2025",
    "skills": [
      "Data Science",
      "Python",
      "Github",
      "IBM Cloud",
      "Jupyter"
    ]
  },
  "The Data Science Profession": {
    "issuedDate": "Apr 2025",
    "skills": [
      "Applied ML",
      "Data Science",
      "ML Algorithms",
      "Python"
    ]
  }
};

export function CredentialGallery({original=[],disabled=false,linkedin}){
 const [selected,setSelected]=useState(null);
 const items=[...extraCredentials,...original.map(c=>({...c,...archivedCredentialDetails[c.title],type:"Learning record",evidence:"Listed in original GitHub portfolio · issuer proof pending"}))];
 return <section id="achievement-gallery" className={styles.gallery} data-still={disabled?"true":"false"} aria-label="Hall of achievements">
  <header className={styles.heading}><div><p className={styles.eyebrow}>ARCHIVE / {items.length} RECORDS</p><h2>HALL OF <em>ACHIEVEMENTS.</em></h2><p>Official Credly badge artwork, certificates and learning records. Evidence and public verification availability are indicated per record.</p></div><a className={styles.profileLink} href={linkedin} target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={15}/></a></header>
  <a href="https://github.com/MUHRIS-AJ/muhris-portfolio/blob/main/docs/github-profile/hero.svg" target="_blank" rel="noreferrer" className={styles.identityBanner}><Image src="/github-profile-hero.svg" width={1200} height={360} alt="A.J. Muhris original GitHub profile banner" unoptimized/><span>GITHUB PROFILE ARTWORK <ArrowUpRight size={14}/></span></a>
  <div className={styles.galleryGrid}>{items.map((item,i)=><motion.article key={item.title} className={styles.medal} whileHover={disabled?undefined:{y:-5,rotateY:i%2?5:-5}} transition={{duration:.25}}>
    <button type="button" className={styles.medalTrigger} aria-expanded={selected===i} aria-controls={"credential-details-"+i} onClick={()=>setSelected(n=>n===i?null:i)}>
      <div className={item.art?styles.officialBadge:styles.medalIcon}>{item.art?<Image src={item.art} alt={item.title+" badge artwork"} width={128} height={128} unoptimized/>:<Award size={33}/>}</div>
      <span className={styles.medalType}>{item.type}</span><strong>{item.title}</strong><small>{item.issuer}{item.issuedDate ? " · "+item.issuedDate : ""}</small>
      {item.expires && <small>Expires 29 Dec 2026 · check issuer for current status</small>}
      <span className={styles.expandHint}>{selected===i?"Hide details":"View details"}</span>
    </button>
    <AnimatePresence initial={false}>{selected===i&&<motion.div id={"credential-details-"+i} className={styles.evidence} initial={disabled?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={disabled?{opacity:1}:{opacity:0}} transition={{duration:disabled?0:.2}}>{item.evidence}<br/>{item.skills?.length ? <>Skills: {item.skills.join(" · ")}<br/></> : null}{item.verify?"Public personal badge link available.":"Personal public verification URL not available."}</motion.div>}</AnimatePresence>
    {(item.verify||item.info)&&<div className={styles.credentialLinks}>{item.verify&&<a href={item.verify} target="_blank" rel="noreferrer">Verify badge <ArrowUpRight size={13}/></a>}{item.info&&<a href={item.info} target="_blank" rel="noreferrer">Issuer details <ArrowUpRight size={13}/></a>}</div>}
  </motion.article>)}</div>
  <p className={styles.note}>Credly artwork is provided by the original issuers. Other glass medallions are visual placeholders, not official badges. Course completion is not an industry certification. No personal email links are published. <a href="https://github.com/MUHRIS-AJ/muhris-portfolio/blob/main/config.js" target="_blank" rel="noreferrer">Original GitHub credential records</a>.</p>
 </section>
}

export function MembershipHall(){
 const slots=[
 {title:"CSSA",detail:"Professional or student association"},
 {title:"IEEE",detail:"Future student membership"},
 {title:"Microsoft Student Ambassador",detail:"Future ambassador application"},
 {title:"Additional professional body",detail:"Reserved for future membership"},
 {title:"Student ambassador programme",detail:"Reserved for future recognition"},
 {title:"Future affiliation",detail:"Reserved for a new organisation"}
 ];
 return <section id="memberships" className={styles.gallery} aria-label="Future memberships">
  <header className={styles.heading}><div><p className={styles.eyebrow}>NEXT CHAPTER / RESERVED SLOTS</p><h2>HALL OF <em>MEMBERSHIPS.</em></h2><p>Future goals only. No membership or ambassador appointment is claimed here.</p></div><span className={styles.sceneLabel}>NOT YET HELD</span></header>
  <div className={styles.galleryGrid}>{slots.map(slot=><article key={slot.title} className={styles.reservedSlot}><div className={styles.emptyPedestal}><LockKeyhole size={24}/></div><span className={styles.medalType}>RESERVED / NOT YET HELD</span><strong>{slot.title}</strong><small>{slot.detail}</small></article>)}</div>
 </section>
}
