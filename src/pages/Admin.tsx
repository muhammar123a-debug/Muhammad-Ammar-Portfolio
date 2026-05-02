/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Plus, Trash2, LogOut, ExternalLink, Github } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';
import { cn } from '../lib/utils';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const { projects, addProject, deleteProject } = useProjects();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
    tags: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded credentials as requested
    if (password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Unauthorized access');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProject({
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
    });
    setFormData({ title: '', description: '', imageUrl: '', githubUrl: '', liveUrl: '', tags: '' });
    alert('Project added successfully');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-[0.02]">
            <Lock className="w-32 h-32" />
          </div>
          <div className="flex flex-col items-center mb-10 relative z-10">
            <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center mb-6 bg-white/[0.02]">
              <Lock className="w-6 h-6 text-cyan-500" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter uppercase mb-2 text-white">Gatekeeper</h1>
            <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em]">Authorization Required</div>
          </div>
          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            <div className="space-y-4">
              <label className="text-[10px] font-mono text-white/20 uppercase tracking-widest block">Access Key</label>
              <input
                type="password"
                placeholder="System Passcode"
                className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-cyan-500/50 transition-colors text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-6 bg-white text-black font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-cyan-500 hover:text-white transition-all text-[11px]"
            >
              Verify Protocol
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white">Project Manager</h1>
            <p className="text-white/40 font-mono text-xs">root@portfolio:~/admin</p>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-all"
          >
            <LogOut className="w-4 h-4" />
            Exit System
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Add Project Form */}
          <section className="lg:col-span-1">
            <div className="glass-card p-6 rounded-2xl sticky top-12">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Plus className="w-5 h-5 text-cyan-500" />
                Initialize Project
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* General Information Section */}
                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.2em] mb-2 border-b border-white/5 pb-2">Core Details</h3>
                  <div>
                    <label className="text-[10px] font-mono text-white/40 mb-1.5 block uppercase tracking-wider">Project Title</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter project name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                      value={formData.title}
                      onChange={e => setFormData({...formData, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-white/40 mb-1.5 block uppercase tracking-wider">Thumbnail URL</label>
                    <input
                      required
                      type="url"
                      placeholder="https://images.unsplash.com/..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                      value={formData.imageUrl}
                      onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-white/40 mb-1.5 block uppercase tracking-wider">Description</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Brief overview of the project..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                    />
                  </div>
                </div>

                {/* Integration Section */}
                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.2em] mb-2 border-b border-white/5 pb-2">External Links</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-white/40 mb-1.5 block uppercase tracking-wider">Source (GitHub)</label>
                      <input
                        type="url"
                        placeholder="https://github.com/..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                        value={formData.githubUrl}
                        onChange={e => setFormData({...formData, githubUrl: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-white/40 mb-1.5 block uppercase tracking-wider">Live URL (Production)</label>
                      <input
                        type="url"
                        placeholder="https://..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                        value={formData.liveUrl}
                        onChange={e => setFormData({...formData, liveUrl: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Metadata Section */}
                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.2em] mb-2 border-b border-white/5 pb-2">Classification</h3>
                  <div>
                    <label className="text-[10px] font-mono text-white/40 mb-1.5 block uppercase tracking-wider">Tags (CSV)</label>
                    <input
                      type="text"
                      placeholder="e.g. Python, SQL, ML"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                      value={formData.tags}
                      onChange={e => setFormData({...formData, tags: e.target.value})}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 uppercase text-xs tracking-widest"
                  >
                    Deploy to Production
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Project List */}
          <section className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6">Internal Repository ({projects.length})</h2>
            <div className="grid grid-cols-1 gap-4">
              {projects.map(project => (
                <div key={project.id} className="glass-card p-4 rounded-xl flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-16 h-16 rounded-lg object-cover bg-white/5"
                    />
                    <div>
                      <h3 className="font-medium text-white">{project.title}</h3>
                      <div className="flex items-center gap-3 text-white/40 text-xs mt-1">
                        <span className="flex items-center gap-1"><Github className="w-3 h-3" /> Repo</span>
                        {project.liveUrl && <span className="flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Sync</span>}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => deleteProject(project.id)}
                    className="p-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {projects.length === 0 && (
                <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-2xl text-white/20">
                  No projects indexed.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
