/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROJECTS, ENGAGEMENT_MODELS } from '../data';
import { ActiveView } from '../types';
import { 
  CheckCircle2, 
  Rocket, 
  Terminal, 
  Cloud, 
  Shield, 
  Cpu, 
  ArrowRight,
  Filter,
  Check,
  Zap,
  BookOpen
} from 'lucide-react';

interface PortfolioViewProps {
  onViewChange: (view: ActiveView) => void;
}

export default function PortfolioView({ onViewChange }: PortfolioViewProps) {
  // Filter category state
  const [activeFilter, setActiveFilter] = useState<'All' | 'SaaS' | 'Infrastructure' | 'Data'>('All');
  
  // Custom interactive terminal/sandbox log output for cloud developers
  const [logs, setLogs] = useState<string[]>([
    'Initializing ARCHITECT.IT Secure Core Sandbox v1.4...',
    'System ready. Select a case study to inspect server blueprints.'
  ]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev.slice(-4), `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  // Filter project lists
  const filteredProjects = activeFilter === 'All' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full"
      id="portfolio-view"
    >
      {/* Hero Header: Dark Theme */}
      <section className="relative bg-slate-950 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-indigo-600 text-white px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">
              Portfolio 2024
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Building the <span className="text-indigo-400">Digital Backbone</span> of Global Leaders.
            </h1>
            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Our expert engineering team specializes in high-availability distributed systems, cloud-native storage infrastructure, and mission-critical SaaS architectures. Explore our legacy projects.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Sticky Filter Bar */}
      <section className="bg-white sticky top-16 z-40 border-b border-slate-200/50 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 md:pb-0 scrollbar-none w-full md:w-auto">
            {(['All', 'SaaS', 'Infrastructure', 'Data'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  addLog(`Filter changed to: ${filter}`);
                }}
                className={`font-sans text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-gray-500 font-sans text-xs">
            <Filter className="w-4 h-4" />
            <span className="font-medium">Recent Deployments First</span>
          </div>
        </div>
      </section>

      {/* Dynamic Project Grid / Bento */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Decide span widths for bento-inspired aesthetic matching Template 2
              // First item wide, next narrow, etc.
              const isWide = index % 3 === 0;
              const gridSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className={`${gridSpan} group relative overflow-hidden rounded-xl border border-slate-200/80 subtle-glow bg-white flex flex-col justify-between`}
                >
                  <div>
                    {/* Visual Asset Container */}
                    <div className="aspect-video w-full relative overflow-hidden bg-slate-950">
                      <img 
                        className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                        src={project.image} 
                        alt={project.title} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      <div className="absolute bottom-6 left-6">
                        <span className="bg-indigo-600 text-white font-sans text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                          {project.category}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Meta info & Description */}
                    <div className="p-6">
                      <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Foot Stack info */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex flex-wrap justify-between items-center gap-3">
                    <div className="flex items-center gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          onClick={() => addLog(`Inspecting blueprint technology stack for ${tech}...`)}
                          className="font-mono text-[10px] text-indigo-600 hover:underline cursor-pointer inline-flex items-center gap-1 bg-indigo-50/70 px-2.5 py-1 rounded-md"
                        >
                          <Terminal className="w-3 h-3" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => {
                        addLog(`Retrieving case-study resources for ${project.title}...`);
                        alert(`Dokumentasi teknis untuk ${project.title} sedang disiapkan. Silakan hubungi arsitek utama kami untuk presentasi cetak biru server secara langsung.`);
                      }}
                      className="font-sans text-xs font-bold text-indigo-600 hover:translate-x-1.5 transition-transform flex items-center gap-1 cursor-pointer"
                    >
                      Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}

            {/* Asymmetric CTA Card Inside Bento */}
            <motion.div 
              layout
              className="md:col-span-8 bg-indigo-500/5 rounded-xl border border-indigo-200/50 p-8 md:p-12 flex flex-col justify-center items-center text-center space-y-6"
            >
              <h4 className="font-display text-2xl sm:text-3xl text-slate-900 font-bold leading-snug">
                Your vision, architected for scale.
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
                We don't just build server applications; we engineer highly resilient, future-proof foundations. Join our network of high-growth technology partners today.
              </p>
              
              <button 
                onClick={() => onViewChange('katalog')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-display font-medium text-sm flex items-center gap-2 hover:shadow-lg transition-all active:scale-95 cursor-pointer shadow-md shadow-indigo-600/10"
              >
                Start Your Project
                <Rocket className="w-4 h-4" />
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Live Log Terminal Component */}
          <div className="md:col-span-4 bg-slate-900 text-slate-300 rounded-xl p-6 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="font-mono text-[10px] font-bold text-indigo-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Metrics Sandbox
                </span>
                <span className="font-mono text-[10px] text-slate-500">v1.4</span>
              </div>
              
              <div className="space-y-2 font-mono text-[11px] leading-relaxed select-none">
                {logs.map((log, i) => (
                  <div key={i} className={i === logs.length - 1 ? 'text-white font-medium' : 'text-slate-400'}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 space-y-3">
              <div className="text-[10px] font-sans text-slate-500 uppercase tracking-wider">Quick Command Sandbox:</div>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => addLog('kubectl get pods -n production')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 py-2 rounded-lg font-mono text-[10px] transition-colors cursor-pointer text-center"
                >
                  kubectl get pods
                </button>
                <button 
                  onClick={() => addLog('terraform plan --out=tfplan')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 py-2 rounded-lg font-mono text-[10px] transition-colors cursor-pointer text-center"
                >
                  terraform plan
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Engagement Models Matrix */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">Engagement Models</h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              Strategic cloud partnership and collaboration structures custom-designed for hyper-growth corporate entities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
            {ENGAGEMENT_MODELS.map((model, index) => {
              const isPopular = model.mostPopular;

              return (
                <div 
                  key={index} 
                  className={`dark-glass-card p-6 rounded-xl border border-slate-800 flex flex-col justify-between transition-all ${
                    isPopular 
                      ? 'ring-2 ring-indigo-600 ring-offset-4 ring-offset-slate-950 shadow-lg' 
                      : ''
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-lg font-bold text-indigo-300">{model.name}</h3>
                      {isPopular && (
                        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                          Most Popular
                        </span>
                      )}
                    </div>
                    
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {model.description}
                    </p>

                    <ul className="space-y-3 pt-2">
                      {model.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-xs font-sans">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => {
                      addLog(`Selected Engagement model: ${model.name}`);
                      onViewChange('katalog');
                    }}
                    className={`w-full py-3 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-all mt-8 cursor-pointer ${
                      isPopular 
                        ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700 shadow-indigo-600/10' 
                        : 'border border-slate-800 hover:border-slate-700 text-slate-200'
                    }`}
                  >
                    {model.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speak to Lead Architect CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-indigo-600 rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-lg shadow-indigo-100">
            <div className="relative z-10 max-w-xl text-center md:text-left space-y-4">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white leading-tight">
                Ready to scale your infrastructure?
              </h2>
              <p className="font-sans text-sm sm:text-base text-indigo-100/90">
                Get in touch with our veteran cloud architects today and transform your technical server bottlenecks into modular competitive advantages.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button 
                onClick={() => onViewChange('katalog')}
                className="w-full sm:w-auto bg-white text-indigo-700 hover:bg-slate-50 font-display font-medium text-sm px-8 py-4 rounded-lg shadow-md hover:scale-102 transition-transform active:scale-95 cursor-pointer text-center"
              >
                Speak to Lead Architect
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
