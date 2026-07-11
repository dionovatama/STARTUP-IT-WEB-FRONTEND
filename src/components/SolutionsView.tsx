/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ActiveView } from '../types';
import { GLOBAL_PLANS, PORTFOLIO_PROJECTS, IMAGES } from '../data';
import { 
  Bolt, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  GitBranch, 
  Cloud, 
  Shield, 
  TrendingUp, 
  Sparkles, 
  Rocket, 
  Laptop,
  Check,
  Send,
  X
} from 'lucide-react';

interface SolutionsViewProps {
  onViewChange: (view: ActiveView) => void;
}

export default function SolutionsView({ onViewChange }: SolutionsViewProps) {
  // Dialog modal state for selecting plan
  const [selectedPlanName, setSelectedPlanName] = useState<string | null>(null);
  const [consultName, setConsultName] = useState('');
  const [consultEmail, setConsultEmail] = useState('');
  const [consultMsg, setConsultMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter 3 projects for the portfolio preview
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (consultName && consultEmail) {
      setIsSubmitted(true);
      setTimeout(() => {
        setSelectedPlanName(null);
        setIsSubmitted(false);
        setConsultName('');
        setConsultEmail('');
        setConsultMsg('');
        alert('Terima kasih! Tim senior architect kami akan menghubungi Anda dalam waktu 15 menit.');
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full"
      id="solutions-view"
    >
      {/* Hero Section */}
      <section className="tech-gradient relative pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 hero-glow"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Hero Details */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
              <Bolt className="w-4 h-4 text-indigo-400" />
              Next-Gen Infrastructure
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Building the Future,<br />
              <span className="text-indigo-400">One Layer at a Time</span>
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Deploy scalable, secure, and lightning-fast cloud infrastructure designed for the modern web. Our automated platform empowers engineering teams to architect complexity with absolute ease.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => onViewChange('katalog')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:scale-102 active:scale-95 transition-all cursor-pointer shadow-md shadow-indigo-600/20"
                id="btn-hero-deploy"
              >
                Deploy Now
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button 
                onClick={() => onViewChange('developers')}
                className="glass-panel text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-bold border border-white/20 hover:border-white/40 active:scale-95 transition-all cursor-pointer"
                id="btn-hero-docs"
              >
                Documentation
              </button>
            </div>
          </div>

          {/* Isometric cloud center illustration */}
          <div className="relative hidden md:block">
            <div className="w-full aspect-square rounded-2xl glass-panel p-8 flex items-center justify-center relative border border-white/10 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/12 to-transparent opacity-50 blur-3xl"></div>
              
              <motion.img 
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                className="w-full h-full object-contain drop-shadow-2xl z-10 select-none pointer-events-none" 
                src={IMAGES.hero3D} 
                alt="3D cloud infrastructure hub showing server stacks and dynamic visualization pipelines." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Development Plans */}
      <section className="py-20 bg-slate-50" id="pricing-plans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900">Service Development Plans</h2>
            <p className="font-sans text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
              Flexible tiered architecture solutions tailored perfectly to your organization's technical maturity and operational scale.
            </p>
          </div>

          {/* Pricing tier cards */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch pt-4">
            {GLOBAL_PLANS.map((plan, index) => {
              const isBest = plan.bestValue;
              return (
                <div 
                  key={index} 
                  className={`relative p-6 rounded-xl flex flex-col justify-between transition-all ${
                    isBest 
                      ? 'bg-slate-900 border-2 border-indigo-600 text-white md:scale-105 z-10 shadow-lg shadow-indigo-900/10' 
                      : 'bg-white border border-slate-200/85 text-slate-800 card-hover-effect'
                  }`}
                >
                  {isBest && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      BEST VALUE
                    </div>
                  )}

                  <div>
                    {/* Header tier */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isBest ? 'bg-indigo-600/20 text-indigo-400' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {index === 2 ? <GitBranch className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
                      </div>
                      <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md ${
                        isBest ? 'bg-white/10 text-indigo-300' : 'bg-indigo-50 text-indigo-600'
                      }`}>
                        {plan.tier.split(':')[0]}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold mb-1">{plan.tier.split(': ')[1] || plan.name}</h3>
                    <p className={`text-xs font-sans mb-6 leading-relaxed ${
                      isBest ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {plan.description}
                    </p>

                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                      {plan.period && (
                        <span className={`text-xs font-sans ${
                          isBest ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {plan.period}
                        </span>
                      )}
                    </div>

                    {/* Features list */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-xs font-sans">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                            isBest ? 'text-indigo-400' : 'text-indigo-600'
                          }`} />
                          <span className={isBest ? 'text-slate-200' : 'text-slate-600'}>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => setSelectedPlanName(plan.tier)}
                    className={`w-full py-3 rounded-lg font-bold text-sm transition-all cursor-pointer active:scale-95 ${
                      isBest 
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/10' 
                        : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Portfolio Preview */}
      <section className="py-20 bg-slate-100/50" id="solutions-portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-semibold text-slate-900">Technical Portfolio</h2>
              <p className="font-sans text-sm sm:text-base text-slate-500">Real-world implementations of our robust architectural principles.</p>
            </div>
            
            <button 
              onClick={() => onViewChange('developers')}
              className="flex items-center gap-1 font-sans text-sm font-bold text-indigo-600 hover:gap-2 hover:translate-x-1 transition-all cursor-pointer group"
              id="btn-view-all-projects"
            >
              VIEW ALL PROJECTS 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              // Custom icons for category type
              const getCategoryIcon = (cat: string) => {
                if (cat === 'Infrastructure') return <Cloud className="w-3.5 h-3.5" />;
                if (cat === 'SaaS') return <Shield className="w-3.5 h-3.5" />;
                return <TrendingUp className="w-3.5 h-3.5" />;
              };

              return (
                <div 
                  key={index}
                  onClick={() => onViewChange('developers')}
                  className="group bg-white rounded-xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {/* Photo area */}
                  <div className="aspect-video w-full overflow-hidden relative bg-slate-900">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                      src={project.image} 
                      alt={project.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <span className="text-white text-sm font-bold inline-flex items-center gap-1">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Body area */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-indigo-600 font-sans text-xs font-semibold tracking-wider uppercase">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </div>
                    
                    <h4 className="font-display text-lg font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to Architect CTA */}
      <section className="py-20 tech-gradient overflow-hidden relative">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white leading-tight">
            Ready to Architect Your<br />Digital Future?
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join over 10,000+ elite cloud engineers scaling high-performance networks on the world's most advanced cloud architecture orchestration platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button 
              onClick={() => onViewChange('katalog')}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold hover:scale-102 transition-all active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-indigo-600/20"
              id="cta-solutions-start"
            >
              Start for Free
              <Rocket className="w-4 h-4" />
            </button>
            
            <button 
              onClick={() => setSelectedPlanName('Hubungi Konsultan / Request Demo')}
              className="w-full sm:w-auto glass-panel text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              id="cta-solutions-demo"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Booking Form Dialog Modal */}
      {selectedPlanName && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-xl border border-slate-200 text-slate-800"
          >
            <button 
              onClick={() => setSelectedPlanName(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-950 transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 space-y-1">
              <span className="text-xs text-indigo-600 font-bold uppercase tracking-wide">Hubungi Architect Senior</span>
              <h3 className="font-display text-xl font-bold text-slate-900">Order Estimasi: {selectedPlanName.replace('Tier ', '')}</h3>
              <p className="text-xs text-slate-500 font-medium">Mohon lengkapi formulir di bawah ini untuk konsultasi cetak biru server.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={consultName}
                  onChange={(e) => setConsultName(e.target.value)}
                  placeholder="Budi Gunawan"
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-sans focus:outline-hidden focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Email Perusahaan</label>
                <input 
                  type="email" 
                  value={consultEmail}
                  onChange={(e) => setConsultEmail(e.target.value)}
                  placeholder="budi@startup.co.id"
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-sans focus:outline-hidden focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Pesan Tambahan (Opsional)</label>
                <textarea 
                  rows={3}
                  value={consultMsg}
                  onChange={(e) => setConsultMsg(e.target.value)}
                  placeholder="Deskripsikan skalabilitas atau tantangan cloud infrastruktur Anda saat ini..."
                  className="w-full border border-slate-200 rounded-lg px-4 py-2 text-xs font-sans focus:outline-hidden focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white py-3 rounded-lg font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>Memproses...</>
                ) : (
                  <>
                    Kirim Permintaan <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
