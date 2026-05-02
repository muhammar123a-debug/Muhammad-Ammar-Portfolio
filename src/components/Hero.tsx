/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Binary, BrainCircuit, Database, Download } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Aspiring Machine Learning Engineer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-6 overflow-hidden bg-[#050505]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="z-10 text-center max-w-6xl relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">Available for Collaboration</span>
        </motion.div>

        <h1 className="text-5xl md:text-9xl font-bold tracking-tighter mb-10 leading-[0.9]">
          <span className="text-white block opacity-90">MUHAMMAD</span>
          <span className="text-white/20 block italic font-serif">AMMAR</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="h-[1px] w-24 bg-white/10 hidden md:block" />
          <h2 className="text-2xl md:text-4xl font-light text-cyan-500/80 tracking-tight font-mono">
            {text}<span className="animate-blink text-cyan-400">_</span>
          </h2>
          <div className="h-[1px] w-24 bg-white/10 hidden md:block" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-2xl text-white/40 max-w-3xl mx-auto mb-16 font-light leading-relaxed tracking-tight"
        >
          Computer Science at Ilma University. Architecting data pipelines and 
          engineering intelligence. Turning high-dimensional complexity into 
          streamlined computational value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-12 py-6 bg-white text-black font-bold rounded-2xl transition-all hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)] overflow-hidden"
          >
            <span className="relative z-10 text-xs tracking-[0.3em] uppercase">Exhibition Catalog</span>
            <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          <a
            href="https://drive.google.com/file/d/1IFRdk74Sy8cq7YuKGAETSu7tn6WwXg6M/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-12 py-6 border border-white/5 text-white/40 font-bold rounded-2xl hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase"
          >
            <Download className="w-4 h-4" />
            Vitals / Resume
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hidden lg:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hidden lg:block" />

      {/* Floating indicators */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-5 h-5 text-white/10" />
      </motion.div>
    </section>
  );
}
