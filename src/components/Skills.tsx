/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../types';
import { Database, Table, Grid3X3, BarChart3, Cpu, Code } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  python: <Code className="w-6 h-6" />,
  table: <Table className="w-6 h-6" />,
  grid: <Grid3X3 className="w-6 h-6" />,
  'bar-chart': <BarChart3 className="w-6 h-6" />,
  cpu: <Cpu className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-mono text-cyan-500 uppercase tracking-[0.5em] mb-6"
            >
              Technical Arsenal
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              Expertise <span className="text-white/20 italic font-serif">&</span> Stack
            </motion.h3>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[10rem] font-bold opacity-[0.01] leading-none select-none">DATA</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-white/5">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative p-10 border-b border-r border-white/5 group hover:bg-white/[0.02] transition-colors overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-20 transition-opacity">
                {iconMap[skill.icon] || <Code className="w-8 h-8" />}
              </div>
              <div className="text-[10px] font-mono text-white/20 mb-8 uppercase tracking-widest">Skill {idx + 1}</div>
              <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white/50 group-hover:text-cyan-400 transition-colors uppercase mb-4">{skill.name}</h4>
              <div className="h-0.5 w-8 bg-white/10 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
