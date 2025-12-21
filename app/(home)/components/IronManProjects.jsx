"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HiChip } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import useSWR from 'swr';
import GlassCard from '@/components/GlassCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProjectGrid = () => {
    const { data: projects } = useSWR('/api/github/repos?sort=updated&per_page=100', fetcher);

    if (!projects) return <div className="text-[#00FF9D] animate-pulse text-center">Loading Projects...</div>

    return (
        <div className="w-full max-w-7xl mx-auto py-10 px-4">
            <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                    SELECTED PROJECTS
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm text-center">
                    Showcasing My Best Work
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id || idx}
                        whileHover={{ scale: 1.02, translateY: -5 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx % 10 * 0.05 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                        <div className="relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-[20px] border border-white/60 dark:border-white/10 p-6 rounded-[2rem] flex flex-col gap-4 h-full transition-all duration-300 group-hover:bg-white/60 dark:group-hover:bg-slate-800/60 shadow-xl shadow-blue-500/5">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                    <HiChip size={24} />
                                </div>
                                <div className="flex gap-2">
                                    {project.stargazers_count > 0 && (
                                        <div className="flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400 border border-amber-500/30 dark:border-amber-400/30 px-2 py-0.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10">
                                            ★ {project.stargazers_count}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2 flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed font-medium">
                                    {project.description || "No description available."}
                                </p>
                            </div>

                            <div className="pt-4 mt-auto border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-bold">
                                        {project.language || "Jupyter"}
                                    </span>
                                </div>

                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 hover:bg-slate-900 dark:hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl transition-all border border-slate-200 dark:border-white/10"
                                >
                                    <FaGithub size={14} />
                                    VIEW CODE
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectGrid;
