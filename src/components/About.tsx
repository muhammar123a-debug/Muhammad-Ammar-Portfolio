/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const resumeHighlights = [
    {
      category: "Professional Summary",
      icon: <Briefcase className="w-5 h-5 text-cyan-500" />,
      content: "Motivated Computer Science student at Ilma University focused on Data Analytics and Machine Learning. Skilled in Python and EDA, eager to contribute to data-driven decision-making."
    },
    {
      category: "Education",
      icon: <GraduationCap className="w-5 h-5 text-cyan-500" />,
      content: "Bachelor of Science in Computer Science at ILMA University. Strong foundation in Mathematics and Pre-Engineering from Gov. College."
    },
    {
      category: "Experience",
      icon: <Award className="w-5 h-5 text-cyan-500" />,
      content: "5 years of experience as a Clinic Assistant, managing workflows, billing, and medicine stock, demonstrating strong responsibility and time management."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-mono text-cyan-500 uppercase tracking-[0.5em] mb-6"
            >
              Curriculum Vitae
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-10"
            >
              The <span className="text-white/20 italic font-serif">Profile</span>
            </motion.h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/5">
          {resumeHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 border-b border-r border-white/5 group hover:bg-white/[0.02] transition-colors relative"
            >
              <div className="text-[10px] font-mono text-white/20 mb-12 uppercase tracking-widest">Section 0{idx + 1}</div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>
                <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors uppercase">{item.category}</h4>
              </div>
              <p className="text-white/40 leading-relaxed text-base font-light border-l border-white/10 pl-6 group-hover:border-cyan-500/30 transition-colors">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
