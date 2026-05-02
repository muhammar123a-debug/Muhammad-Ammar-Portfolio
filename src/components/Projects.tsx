/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';

export default function Projects() {
  const { projects } = useProjects();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);

  React.useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextProject = () => {
    if (projects.length === 0) return;
    const maxIndex = isLarge ? Math.max(0, projects.length - 2) : projects.length - 1;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevProject = () => {
    if (projects.length === 0) return;
    const maxIndex = isLarge ? Math.max(0, projects.length - 2) : projects.length - 1;
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-cyan-500 uppercase tracking-[0.3em] mb-4"
            >
              Exhibition
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Hands-on <span className="text-white/20 italic font-serif">Projects</span>
            </motion.h3>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevProject}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white/40 hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextProject}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white/40 hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-visible">
            <motion.div 
              className="flex gap-8"
              animate={{ x: `calc(-${currentIndex * (isLarge ? 50 : 100)}% - ${currentIndex * 2}rem)` }}
              transition={{ type: "spring", damping: 30, stiffness: 100 }}
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className="min-w-full lg:min-w-[calc(50%-1rem)] group relative rounded-[3rem] overflow-hidden bg-[#0d0d0d] border border-white/5 flex flex-col transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_80px_-20px_rgba(6,182,212,0.1)]"
                >
                  {/* Content Section */}
                  <div className="flex-1 p-10 md:p-16 relative z-10 flex flex-col">
                    {/* Decorative background number */}
                    <span className="absolute top-10 right-14 text-[12rem] font-bold opacity-[0.02] select-none font-mono pointer-events-none leading-none">
                      0{idx + 1}
                    </span>

                    <div className="mb-12 relative">
                      <div className="flex items-center gap-4 mb-10">
                        <span className="w-16 h-[1px] bg-cyan-500/40" />
                        <span className="text-[11px] font-mono text-cyan-500 uppercase tracking-[0.5em] font-medium">Project Dossier</span>
                      </div>
                      
                      <h4 
                        className="text-4xl md:text-7xl font-bold mb-8 group-hover:text-cyan-400 transition-colors leading-[1.1] tracking-tighter max-w-4xl"
                      >
                        {project.title}
                      </h4>
                      
                      <p className="text-white/40 text-lg md:text-2xl mb-12 leading-relaxed font-light max-w-2xl border-l border-white/10 pl-8">
                        {project.description}
                      </p>

                      {/* Display tags - removing excluded ones per instructions */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-4">
                          {project.tags
                            .filter(t => !['Python', 'Scikit-learn', 'Active', 'available for internship', 'Available for Internship'].includes(t))
                            .map(tag => (
                              <span key={tag} className="px-6 py-2 bg-white/[0.03] border border-white/10 rounded-full text-[10px] font-mono text-white/30 uppercase tracking-widest group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all">
                                {tag}
                              </span>
                            ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 mt-auto">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 py-6 border border-white/10 hover:bg-white hover:text-black hover:border-white text-center rounded-[1.5rem] text-[12px] font-bold tracking-[0.3em] transition-all uppercase flex items-center justify-center gap-3 group/btn"
                      >
                        <Github className="w-5 h-5" />
                        GitHub
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-1 py-6 bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_20px_40px_-10px_rgba(6,182,212,0.3)] text-center rounded-[1.5rem] text-[12px] font-bold tracking-[0.3em] transition-all uppercase flex items-center justify-center gap-3"
                        >
                          <ExternalLink className="w-5 h-5" />
                          View Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {projects.slice(0, isLarge ? Math.max(1, projects.length - 1) : projects.length).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? 'w-12 bg-cyan-500' : 'w-4 bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
