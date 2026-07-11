/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActiveView } from '../types';
import { Terminal, Share2, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: ActiveView) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#151b2a] border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-10">
          <div className="space-y-3 text-center md:text-left">
            <div 
              className="font-display text-xl font-bold tracking-tighter text-white cursor-pointer select-none"
              onClick={() => onViewChange('solutions')}
              id="footer-brand"
            >
              ARCHITECT.IT
            </div>
            <p className="text-sm text-slate-400 max-w-sm font-sans">
              © {currentYear} ARCHITECT.IT. High-performance, low-latency, resilient infrastructure custom-engineered for the modern web.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium">
            <button 
              onClick={() => onViewChange('katalog')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Katalog Jasa
            </button>
            <button 
              onClick={() => onViewChange('solutions')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Platform
            </button>
            <button 
              onClick={() => onViewChange('developers')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Portfolio &amp; Karir
            </button>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Action Icons */}
          <div className="flex gap-4">
            <button 
              onClick={() => alert('Link disalin ke clipboard! Bagikan ARCHITECT.IT ke rekan Anda.')}
              className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
              title="Share Page"
              id="footer-share"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onViewChange('developers')}
              className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
              title="Technical Docs"
              id="footer-terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-slate-500 gap-4">
          <div>
            Built with <Heart className="w-3 h-3 inline text-red-500 fill-current mx-0.5" /> in Jakarta, Indonesia. Built for modern high-scale workloads.
          </div>
          <div className="flex gap-4">
            <span>Uptime: 99.999%</span>
            <span>Latency: &lt;5ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
