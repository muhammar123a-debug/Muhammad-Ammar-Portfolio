/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-cyan-500" />
          </div>
          <span className="font-bold tracking-tighter uppercase">MUHAMMAD.AMMAR</span>
        </div>

        <div className="flex items-center gap-8 text-[10px] font-mono text-white/40">
          <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-[11px]">Back to top</a>
          <Link to="/admin" className="hover:text-cyan-500 transition-colors uppercase tracking-widest text-[11px]">System Admin</Link>
          <span className="opacity-20">© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}
