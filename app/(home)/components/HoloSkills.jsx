"use client";
import React, { useMemo } from 'react';
import { config } from '@/config';
import { motion } from 'framer-motion';
import {
    SiPython, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMysql, SiGit, SiGithub, SiDocker,
    SiPandas, SiNumpy, SiJupyter, SiAmazon, SiMongodb,
    SiGreensock, SiFramer, SiThreedotjs, SiFigma, SiMui
} from 'react-icons/si';
import { HiChip, HiDatabase, HiCode, HiServer, HiCloud } from 'react-icons/hi';

const getIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes('python')) return <SiPython />;
    if (n.includes('java') && !n.includes('script')) return <HiCode />;
    if (n.includes('javascript')) return <SiJavascript />;
    if (n.includes('react')) return <SiReact />;
    if (n.includes('next')) return <SiNextdotjs />;
    if (n.includes('tailwind')) return <SiTailwindcss />;
    if (n.includes('node')) return <SiNodedotjs />;
    if (n.includes('express')) return <SiExpress />;
    if (n.includes('sql') || n.includes('mysql')) return <SiMysql />;
    if (n.includes('data') || n.includes('pandas')) return <SiPandas />;
    if (n.includes('numpy')) return <SiNumpy />;
    if (n.includes('jupyter')) return <SiJupyter />;
    if (n.includes('git')) return <SiGit />;
    if (n.includes('docker')) return <SiDocker />;
    if (n.includes('aws')) return <SiAmazon />;
    if (n.includes('mongo')) return <SiMongodb />;
    if (n.includes('gsap')) return <SiGreensock />;
    if (n.includes('framer')) return <SiFramer />;
    if (n.includes('three')) return <SiThreedotjs />;
    if (n.includes('figma')) return <SiFigma />;
    if (n.includes('material')) return <SiMui />;

    // Fallbacks
    if (n.includes('db') || n.includes('data')) return <HiDatabase />;
    if (n.includes('cloud')) return <HiCloud />;
    if (n.includes('api')) return <HiServer />;
    return <HiChip />;
};

const HoloSkills = () => {
    const { skills } = config;

    // Flatten skills from all categories
    const allSkills = useMemo(() => skills.reduce((acc, category) => {
        return [...acc, ...category.skills.map(s => ({ ...s, categoryIcon: category.icon }))];
    }, []), [skills]);

    return (
        <div className="w-full max-w-6xl mx-auto py-10 px-4">
            <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                    TECHNICAL SKILLS
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm text-center">
                    Technologies & Tools
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {allSkills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, translateY: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                        <div className="relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-[20px] border border-white/60 dark:border-white/10 p-4 rounded-2xl flex flex-col items-center gap-3 h-full justify-center transition-all duration-300 group-hover:bg-white/60 dark:group-hover:bg-slate-800/60 shadow-lg shadow-blue-500/5">
                            <div className="text-3xl text-blue-600 dark:text-blue-400 drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
                                {getIcon(skill.name)}
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                                    {skill.name}
                                </h3>
                                <div className="flex items-center justify-center gap-1.5">
                                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-tighter opacity-70 group-hover:opacity-100 italic transition-opacity">
                                        {skill.level}
                                    </span>
                                    {skill.hot && (
                                        <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HoloSkills;
