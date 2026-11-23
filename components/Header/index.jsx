"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Github, ArrowUpRight } from "lucide-react";
const anchors = [
  ["WORK","/#work"],["AI LAB","/#agents"],["CREDENTIALS","/#credentials"],["PROCESS","/#workflow"]
];
export default function Header() {
  const [open,setOpen]=useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 pointer-events-none">
    <nav className="pointer-events-auto mx-auto max-w-[1310px] rounded-2xl border border-white/15 bg-[#090917]/80 px-5 py-3 shadow-2xl backdrop-blur-2xl flex items-center justify-between gap-3">
      <Link href="/" className="flex items-center gap-3 text-white font-black tracking-widest text-xs" onClick={()=>setOpen(false)}>
        <span className="h-9 w-9 overflow-hidden rounded-full border border-fuchsia-300/70 relative"><Image src="/profile-main.jpg" alt="" fill sizes="36px" className="object-cover"/></span>
        A.J. <span className="text-pink-300 -ml-2">MUHRIS</span>
      </Link>
      <div className="hidden md:flex items-center gap-6">
        {anchors.map(([title,url])=><Link key={url} href={url} className="text-[10px] tracking-[.16em] font-extrabold text-white/70 hover:text-pink-300 transition">{title}</Link>)}
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/MUHRIS-AJ" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 text-xs font-bold text-white/90 border border-white/20 rounded-xl px-3 py-2 hover:border-pink-400"><Github size={15}/> GITHUB <ArrowUpRight size={12}/></a>
        <button type="button" className="md:hidden text-white" onClick={()=>setOpen(v=>!v)} aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open}>{open?<X size={22}/>:<Menu size={22}/>}</button>
      </div>
    </nav>
    {open&&<div className="pointer-events-auto mx-auto max-w-[1310px] mt-1 bg-[#10101c]/95 border border-white/10 rounded-xl p-4 backdrop-blur-xl flex flex-col gap-4">{anchors.map(([title,url])=><Link key={url} href={url} className="text-white/90 text-xs font-bold" onClick={()=>setOpen(false)}>{title}</Link>)}</div>}
  </header>;
}
