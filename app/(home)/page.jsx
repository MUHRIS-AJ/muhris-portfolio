"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '@/config'
import Image from 'next/image'
import { useView } from '@/components/Providers/ViewProvider'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

// Components
import AboutMe from './components/AboutMe'
import ProjectGrid from './components/IronManProjects'
import ShuffleDeck from './components/ShuffleDeck'
import CertificationsGallery from './components/CertificationsGallery'
import GlassCard from '@/components/GlassCard'
import HoloSkills from './components/HoloSkills'
import ExperienceSection from './components/Experience'

const HomeView = () => (
  <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-10 min-h-[70vh]">
    <div className="flex-1 space-y-8 max-w-2xl text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg text-blue-600 mb-4 font-bold uppercase tracking-widest">
          Hey there 👋
        </p>
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
          I'm {config.developer.name}
        </h1>
        <h2 className="text-xl lg:text-2xl font-bold text-slate-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
          {config.developer.title}
        </h2>
        <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-medium">
          <p>
            {config.about.description}
          </p>
          <p>
            {config.about.fitDescription}
          </p>
          <p>
            {config.about.knowledgeDescription}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href={config.contactInfo.find(c => c.label === 'GitHub')?.link} target="_blank" className="flex items-center gap-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group">
            <div className="p-2 bg-slate-900/5 dark:bg-white/5 rounded-lg group-hover:bg-slate-900/10 dark:group-hover:bg-white/10 transition-colors">
              <FaGithub size={20} />
            </div>
            <span className="font-semibold">Follow on GitHub</span>
          </a>
          <a href={config.contactInfo.find(c => c.label === 'LinkedIn')?.link} target="_blank" className="flex items-center gap-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group">
            <div className="p-2 bg-slate-900/5 dark:bg-white/5 rounded-lg group-hover:bg-slate-900/10 dark:group-hover:bg-white/10 transition-colors">
              <FaLinkedin size={20} />
            </div>
            <span className="font-semibold">Follow on LinkedIn</span>
          </a>
          <a href={config.contactInfo.find(c => c.label === 'Instagram')?.link} target="_blank" className="flex items-center gap-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group">
            <div className="p-2 bg-slate-900/5 dark:bg-white/5 rounded-lg group-hover:bg-slate-900/10 dark:group-hover:bg-white/10 transition-colors">
              <FaInstagram size={20} />
            </div>
            <span className="font-semibold">Follow on Instagram</span>
          </a>
          <a href={config.social.whatsappUrl} target="_blank" className="flex items-center gap-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group">
            <div className="p-2 bg-slate-900/5 dark:bg-white/5 rounded-lg group-hover:bg-slate-900/10 dark:group-hover:bg-white/10 transition-colors">
              <FaWhatsapp size={20} />
            </div>
            <span className="font-semibold">Text me on WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex-1 flex justify-center lg:justify-end"
    >
      <div className="relative w-[300px] h-[400px] lg:w-[450px] lg:h-[550px] rounded-[40px] overflow-hidden rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl border-4 border-white/10 group">
        <Image
          src={config.developer.profileImage}
          fill
          alt="profile"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  </div>
);

const PageContent = () => {
  const { activeTab } = useView();

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView key="home" />;
      case 'projects':
        return <ProjectGrid key="projects" />;
      case 'skills':
        return <HoloSkills key="skills" />;
      case 'certifications':
        return <CertificationsGallery key="certs" />;
      case 'experience':
        return <ExperienceSection key="exp" />;
      case 'education':
        return <ShuffleDeck key="edu" />;
      case 'contact':
        return (
          <div key="contact" className="flex flex-col items-center justify-center py-20 min-h-[60vh]">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-12 uppercase tracking-tight text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {config.contactInfo.map((contact, idx) => (
                <GlassCard key={idx} className="p-6 flex items-center gap-4 hover:bg-white/80 dark:hover:bg-white/10 cursor-pointer border-white group transition-all">
                  <div className="text-blue-600 dark:text-blue-400 text-2xl group-hover:scale-110 transition-transform">{contact.icon}</div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-bold">{contact.label}</h3>
                    <a href={contact.link} target="_blank" className="text-slate-500 dark:text-slate-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">{contact.value}</a>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        );
      default:
        return <HomeView key="home" />;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 container mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageContent;