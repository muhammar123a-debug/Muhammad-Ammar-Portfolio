/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Terminal } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = formData.get('subject') as string;
    const body = formData.get('message') as string;
    window.location.href = `mailto:muhammar4567@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <h2 className="text-[11px] font-mono text-cyan-500 uppercase tracking-[0.5em] mb-8">Direct Transmission</h2>
            <h3 className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter leading-none">
              Initiate <br /> <span className="text-white/20 italic font-serif">Contact.</span>
            </h3>
            <p className="text-lg md:text-xl text-white/40 mb-16 max-w-lg leading-relaxed font-light border-l border-white/10 pl-8">
              Open for strategic collaborations in high-dimensional data processing
              and intelligence engineering. Ready for the next architectural challenge.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:muhammar4567@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-8 p-10 bg-white/[0.02] border border-white/5 rounded-[2rem] group hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-2">Protocol: SMTP</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight break-all sm:break-normal">muhammar4567@gmail.com</div>
                </div>
              </a>

              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://www.linkedin.com/in/muhammadammar3/" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-4 p-8 bg-white/[0.02] border border-white/5 rounded-[1.5rem] hover:bg-white hover:text-black transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-bold text-[10px] tracking-[0.3em] uppercase">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/muhammar123a-debug" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-4 p-8 bg-white/[0.02] border border-white/5 rounded-[1.5rem] hover:bg-white hover:text-black transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-bold text-[10px] tracking-[0.3em] uppercase">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 bg-[#0a0a0a] border border-white/5 rounded-[3rem] relative shadow-2xl shadow-black"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] mb-4 block">Identity</label>
                  <input 
                    name="subject"
                    type="text" 
                    placeholder="Subject Name" 
                    required
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-cyan-500/50 transition-colors font-light text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] mb-4 block">Network Protocol</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="Electronic Address" 
                    required
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-cyan-500/50 transition-colors font-light text-white"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] mb-4 block">Transmission Payload</label>
                <textarea 
                  name="message"
                  rows={4} 
                  placeholder="Insert encrypted content here..." 
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none font-light text-white"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-6 bg-cyan-600 text-white font-bold uppercase tracking-[0.4em] rounded-2xl hover:bg-cyan-500 transition-all flex items-center justify-center gap-4 text-xs shadow-lg shadow-cyan-500/20"
              >
                Execute Transmission
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
