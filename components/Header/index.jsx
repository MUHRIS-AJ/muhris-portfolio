"use client";
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi2';
import React from 'react';
import { motion } from 'framer-motion';
import { useView } from '@/components/Providers/ViewProvider';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Header = () => {
    const { activeTab, setActiveTab } = useView();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const tabs = [
        { id: 'home', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 pointer-events-none"
        >
            <div
                className="flex items-center gap-3 group cursor-pointer pointer-events-auto shrink-0 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/60 dark:border-white/10 p-1.5 pr-4 rounded-full shadow-lg transition-all duration-300"
                onClick={() => setActiveTab('home')}
            >
                <div className="w-8 h-8 rounded-full bg-white/50 dark:bg-white/20 overflow-hidden border border-white/80 dark:border-white/10 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Image
                        src="/profile-main.jpg"
                        alt="logo"
                        width={32}
                        height={32}
                        className="object-cover"
                    />
                </div>
                <span className="font-bold text-slate-900 dark:text-white tracking-tight text-sm md:text-base">
                    MUHRIS <span className="text-blue-600 dark:text-blue-400">AJ</span>
                </span>
            </div>

            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:static md:translate-x-0 pointer-events-auto max-w-[95vw] md:max-w-none">
                <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl border border-white/80 dark:border-white/10 rounded-full p-1.5 flex items-center gap-1 shadow-2xl shadow-blue-500/10 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "relative px-4 md:px-6 py-2 rounded-full text-[13px] md:text-sm font-semibold tracking-tight transition-all duration-300",
                                    isActive ? "text-[#1E293B] dark:text-white" : "text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white dark:bg-slate-800 shadow-md rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center justify-center pointer-events-auto shrink-0">
                <button
                    onClick={toggleTheme}
                    className="w-9 h-9 rounded-full bg-white/50 dark:bg-slate-900/50 border border-white/80 dark:border-white/20 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-slate-800"
                >
                    {mounted && (theme === 'dark' ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />)}
                </button>
            </div>
        </motion.header>
    );
};

export default Header;