"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const ExperienceSection = () => {
    const experiences = config.experiences || [];

    if (!experiences || experiences.length === 0) {
        return null;
    }

    return (
        <section className="py-10" id="experience">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                        PROFESSIONAL EXPERIENCE
                    </h2>
                    <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">
                        Work Experience
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm font-medium">
                        A journey through my professional career and key achievements
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02, translateY: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-[30px] border border-white/60 dark:border-white/10 p-8 rounded-[2.5rem] flex flex-col gap-6 h-full transition-all duration-300 group-hover:bg-white/60 dark:group-hover:bg-slate-800/60 shadow-xl shadow-blue-500/5">
                                <div className="flex justify-between items-start">
                                    <div className="p-4 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                        <HiBriefcase size={32} />
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
                                            Duration
                                        </span>
                                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-emerald-500/40">
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                                        {exp.position}
                                    </h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-bold text-lg flex items-center gap-2">
                                        {exp.company}
                                    </p>
                                </div>

                                {exp.description && (
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 border-blue-500/20 dark:border-blue-500/40 pl-4 italic font-medium">
                                        {exp.description}
                                    </p>
                                )}

                                {exp.responsibilities && exp.responsibilities.length > 0 && (
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
                                                <span className="text-blue-500 dark:text-blue-400 mt-1">▸</span>
                                                <span className="leading-tight">{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {exp.technologies && exp.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                                        {exp.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[10px] font-bold bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 uppercase tracking-tighter hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

