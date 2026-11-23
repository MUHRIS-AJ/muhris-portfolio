"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring
} from "framer-motion";

// All pointer-driven effects are optional; keyboard and reduced-motion users
// keep the same information and navigation without animation.
export function ScrollProgress({ disabled = false }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div aria-hidden="true" className="portfolio-scroll-progress"
    style={{ scaleX: disabled || prefersReducedMotion ? scrollYProgress : smooth }} />;
}

export function SceneReveal({ children, as = "div", className, delay = 0, disabled = false, ...props }) {
  const prefersReducedMotion = useReducedMotion();
  const Component = as === "section" ? motion.section : motion.div;
  const still = Boolean(disabled || prefersReducedMotion);
  return <Component
    className={className}
    initial={still ? false : { opacity: 0, y: 36, scale: 0.975, filter: "blur(7px)" }}
    whileInView={still ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.12, margin: "0px 0px -30px 0px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    {...props}
  >{children}</Component>;
}

export function TiltProject({ href, className, children, disabled = false }) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 230, damping: 25, mass: 0.5 });
  const rotateY = useSpring(y, { stiffness: 230, damping: 25, mass: 0.5 });
  const still = Boolean(disabled || prefersReducedMotion);

  function pointerMove(event) {
    if (still || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = (event.clientX - rect.left) / rect.width - 0.5;
    const dy = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(-dy * 9);
    y.set(dx * 11);
    event.currentTarget.style.setProperty("--spot-x", (dx + 0.5) * 100 + "%");
    event.currentTarget.style.setProperty("--spot-y", (dy + 0.5) * 100 + "%");
  }

  function pointerLeave() {
    x.set(0);
    y.set(0);
  }

  return <motion.a
    href={href}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
    onPointerMove={pointerMove}
    onPointerLeave={pointerLeave}
    style={still ? undefined : { rotateX, rotateY, transformPerspective: 1050, transformStyle: "preserve-3d" }}
    whileHover={still ? undefined : { y: -7, scale: 1.015 }}
    whileTap={still ? undefined : { scale: 0.985 }}
    transition={{ type: "spring", stiffness: 250, damping: 27 }}
  >{children}</motion.a>;
}

export function MagneticLink({ href, className, children, external = false, disabled = false }) {
  const prefersReducedMotion = useReducedMotion();
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);
  const x = useSpring(tx, { stiffness: 250, damping: 16, mass: 0.25 });
  const y = useSpring(ty, { stiffness: 250, damping: 16, mass: 0.25 });
  const still = Boolean(disabled || prefersReducedMotion);
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return <motion.a
    href={href}
    className={className}
    {...props}
    style={still ? undefined : { x, y }}
    onPointerMove={(event) => {
      if (still || event.pointerType !== "mouse") return;
      const r = event.currentTarget.getBoundingClientRect();
      tx.set(((event.clientX - r.left) / r.width - 0.5) * 12);
      ty.set(((event.clientY - r.top) / r.height - 0.5) * 8);
    }}
    onPointerLeave={() => { tx.set(0); ty.set(0); }}
    whileTap={still ? undefined : { scale: 0.97 }}
  >{children}</motion.a>;
}

export function MorphBackdrop() {
  return <div className="portfolio-morph-backdrop" aria-hidden="true">
    <div className="portfolio-morph-blob portfolio-morph-blob-a"/>
    <div className="portfolio-morph-blob portfolio-morph-blob-b"/>
    <div className="portfolio-morph-blob portfolio-morph-blob-c"/>
    <div className="portfolio-morph-ring portfolio-morph-ring-one"/>
    <div className="portfolio-morph-ring portfolio-morph-ring-two"/>
  </div>;
}
