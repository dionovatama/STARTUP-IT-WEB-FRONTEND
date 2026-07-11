/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { INDO_SERVICES, IMAGES } from '../data';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Gauge, 
  MessageSquare,
  Sparkles,
  Layers,
  Send,
  X
} from 'lucide-react';

export default function KatalogView() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceTier, setServiceTier] = useState('Professional');
  const [demoDate, setDemoDate] = useState('');

  const carouselItems = [
    {
      title: 'Scalable Architecture',
      desc: 'Sistem yang tumbuh bersama bisnis Anda tanpa degradasi performa.',
      image: IMAGES.scalableArch,
      tag: 'SCALABILITY'
    },
    {
      title: 'Optimized Performance',
      desc: 'Latensi rendah dan efisiensi resource yang maksimal pada setiap node.',
      image: IMAGES.optimizedPerf,
      tag: 'SPEED'
    },
    {
      title: 'Zero-Downtime Migration',
      desc: 'Migrasi database dan server lama tanpa mengorbankan kontinuitas bisnis.',
      image: IMAGES.neoNode,
      tag: 'RELIABILITY'
    }
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleDemoSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (companyName && phone && demoDate) {
      alert(`Terima kasih! Jadwal demo untuk ${companyName} telah terdaftar pada tanggal ${demoDate}. Hubungi kami via WhatsApp jika memerlukan respon cepat.`);
      setShowDemoModal(false);
      setCompanyName('');
      setPhone('');
      setDemoDate('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full"
      id="katalog-view"
    >
      {/* Hero Header */}
      <header className="text-center pt-28 pb-12 space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-indigo-50/80 text-indigo-700 ring-1 ring-indigo-100/80 px-4 py-1.5 rounded-full animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span className="font-sans text-xs font-bold uppercase tracking-wider">Solusi Teknis Terukur</span>
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
          Katalog Jasa — ARCHITECT.IT
        </h1>
        
        <p className="font-sans text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Infrastruktur digital berstandar enterprise yang dirancang untuk kecepatan tinggi, skalabilitas tanpa batas, dan ketahanan operasional tinggi.
        </p>
      </header>

      {/* Pricing Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative px-2">
        {/* Ambient background glow */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        {INDO_SERVICES.map((service, index) => {
          const isBest = service.bestValue;

          return (
            <div 
              key={index}
              className={`glass-card p-6 rounded-xl flex flex-col justify-between card-hover-effect relative ${
                isBest 
                  ? 'border-2 border-indigo-600 md:scale-105 z-10 shadow-lg shadow-indigo-100/50' 
                  : 'border border-slate-200/85 shadow-xs'
              }`}
            >
              {isBest && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  Best Value
                </div>
              )}

              {/* Service description */}
              <div>
                <div className="mb-6 space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {service.tier}
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900">{service.name}</h3>
                  <div className="flex items-baseline gap-1 mt-3">
                    <span className="text-3xl font-bold text-slate-900">{service.price}</span>
                    <span className="text-xs font-sans text-slate-400 font-medium">{service.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li 
                      key={fIndex} 
                      className={`flex items-start gap-3 text-xs font-sans ${
                        feature.included ? 'text-slate-600' : 'text-slate-300 line-through'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                        feature.included ? 'text-indigo-600' : 'text-slate-300'
                      }`} />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a 
                href={service.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all cursor-pointer ${
                  isBest 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
                    : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                {service.buttonText}
              </a>
            </div>
          );
        })}
      </section>

      {/* Secondary Section: Standards */}
      <section className="mt-20 pt-16 border-t border-gray-200/60 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-xl space-y-2">
            <h2 className="font-display text-3xl font-semibold text-gray-900">Standar Engineering Kami</h2>
            <p className="font-sans text-sm sm:text-base text-gray-500">
              Setiap baris kode dan infrastruktur yang kami bangun mengikuti prinsip teknis murni yang tidak dapat dinegosiasikan demi keselamatan data Anda.
            </p>
          </div>
          
          {/* Carousel Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={handlePrevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer text-gray-600"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer text-gray-600"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* We display slide card 1 and slide card 2, rotating them based on activeSlide */}
          {[0, 1].map((offset) => {
            const index = (activeSlide + offset) % carouselItems.length;
            const item = carouselItems[index];

            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl aspect-[16/9] bg-slate-900 border border-slate-800"
              >
                <div 
                  className="absolute inset-0 opacity-40 group-hover:scale-102 transition-transform duration-500 mix-blend-overlay bg-cover bg-center" 
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 text-white space-y-3">
                  <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider">
                    {item.tag}
                  </span>
                  
                  <h4 className="font-display text-xl sm:text-2xl font-bold leading-tight flex items-center gap-2">
                    {item.tag === 'SPEED' ? <Gauge className="w-6 h-6 text-indigo-400" /> : <ShieldCheck className="w-6 h-6 text-indigo-400" />}
                    {item.title}
                  </h4>
                  
                  <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA in Indonesian */}
      <section className="bg-slate-900 rounded-xl p-8 md:p-16 text-center relative overflow-hidden text-white shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            Siap Membangun Masa Depan?
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
            Konsultasikan kebutuhan teknis dan cetak biru arsitektur cloud server perusahaan Anda dengan senior architect kami hari ini secara gratis.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button 
              onClick={() => setShowDemoModal(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:scale-102 transition-transform active:scale-95 cursor-pointer shadow-sm shadow-indigo-600/20"
            >
              Jadwalkan Demo
            </button>
            
            <a 
              href="https://wa.me/628123456789?text=Halo%20ARCHITECT.IT,%20saya%20ingin%20membaca%20dokumentasi%20layanan."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-lg font-bold text-sm active:scale-95 transition-all inline-flex items-center justify-center gap-1.5"
            >
              Lihat Dokumentasi <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Demo Booking Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-xl text-slate-800 border border-slate-200"
          >
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 space-y-1">
              <span className="text-xs text-indigo-600 font-bold uppercase tracking-wide">Demo Teknis Virtual</span>
              <h3 className="font-display text-xl font-bold text-slate-900">Jadwalkan Sesi Cetak Biru</h3>
              <p className="text-xs text-slate-500 font-medium">Kami akan memandu Anda melalui sistem dashboard kluster Kubernetes dan metrics log.</p>
            </div>

            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Nama Perusahaan / Startup</label>
                <input 
                  type="text" 
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="PT. Sinergi Tekno Utama"
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-sans focus:outline-hidden focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Pilihan Paket Layanan</label>
                <select 
                  value={serviceTier}
                  onChange={(e) => setServiceTier(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-sans focus:outline-hidden focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 bg-white"
                >
                  <option value="Essential">Essential (Rp 4.5M)</option>
                  <option value="Professional">Professional (Rp 12.5M)</option>
                  <option value="Full Suite">Full Suite (Custom)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Nomor WhatsApp Aktif</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08123456789"
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-sans focus:outline-hidden focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Tanggal Sesi Demo</label>
                <input 
                  type="date" 
                  value={demoDate}
                  onChange={(e) => setDemoDate(e.target.value)}
                  required
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-sans focus:outline-hidden focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 bg-white"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Konfirmasi Jadwal Sesi <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
