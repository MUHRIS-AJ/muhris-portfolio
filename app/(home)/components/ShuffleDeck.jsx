import React from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config';
import { HiAcademicCap } from 'react-icons/hi';

const ShuffleDeck = () => {
    const { education } = config;

    return (
        <div className="w-full max-w-6xl mx-auto py-10 px-4">
            <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                    KNOWLEDGE DATABASE
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">
                    Education & Learning
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, translateY: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                        <div className="relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-[20px] border border-white/60 dark:border-white/10 p-6 rounded-[2rem] flex flex-col gap-4 h-full transition-all duration-300 group-hover:bg-white/60 dark:group-hover:bg-slate-800/60 shadow-xl shadow-blue-500/5">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                    <HiAcademicCap size={32} />
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
                                        Period
                                    </span>
                                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-emerald-500/30">
                                        {item.period}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                                    {item.institution}
                                </h3>
                                <p className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                                    {item.degree}
                                </p>
                            </div>

                            {item.description && (
                                <p className="text-sm text-slate-500 dark:text-slate-400 border-l-2 border-emerald-500/30 pl-3 leading-relaxed font-medium capitalize">
                                    {item.description}
                                </p>
                            )}

                            <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-white/5 items-center justify-between">
                                {item.grade && (
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-bold">
                                            {item.grade}
                                        </span>
                                    </div>
                                )}
                                {item.location && (
                                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono italic font-medium">
                                        {item.location}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ShuffleDeck;
