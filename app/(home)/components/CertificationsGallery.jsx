"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config';
import { HiBadgeCheck } from 'react-icons/hi'; // Icon for Certs

const CertificationsGallery = () => {
    const { certifications } = config;

    return (
        <div className="w-full max-w-6xl mx-auto py-10 px-4">
            <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                    PRO CERTIFICATIONS
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm text-center">
                    Validated expertise in data science, programming, and technology
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, translateY: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                        <div className="relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-[20px] border border-white/60 dark:border-white/10 p-6 rounded-[2rem] flex flex-col gap-4 h-full transition-all duration-300 group-hover:bg-white/60 dark:group-hover:bg-slate-800/60 shadow-xl shadow-blue-500/5">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                    <HiBadgeCheck size={32} />
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
                                        Issued
                                    </span>
                                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-emerald-500/40">
                                        {cert.issuedDate}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center gap-2">
                                    {cert.issuer}
                                </p>
                            </div>

                            {cert.credentialId && (
                                <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 mt-2">
                                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono block uppercase">Credential ID</span>
                                    <span className="text-xs font-mono text-slate-600 dark:text-slate-300 break-all font-semibold">{cert.credentialId}</span>
                                </div>
                            )}

                            {cert.skills && (
                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                                    {cert.skills.map((skill, i) => (
                                        <span key={i} className="text-[10px] font-bold border border-slate-200 dark:border-white/10 px-2 py-1 rounded-full text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-white/5 uppercase tracking-tighter hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CertificationsGallery;
