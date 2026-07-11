/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ActiveView } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeView: ActiveView;
  onViewChange: (view: ActiveView) => void;
}

export default function Header({ activeView, onViewChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Solutions (Indo Catalog)', view: 'katalog' as ActiveView },
    { label: 'Global Platform', view: 'solutions' as ActiveView },
    { label: 'Developers & Portfolio', view: 'developers' as ActiveView },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-xs border-b border-gray-200/50 dark:border-slate-800/50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16" id="top-navbar">
        {/* Brand Logo */}
        <div 
          className="font-display text-xl md:text-2xl font-bold tracking-tighter text-black dark:text-white cursor-pointer select-none"
          onClick={() => onViewChange('solutions')}
          id="brand-logo"
        >
          ARCHITECT.IT
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          <button 
            onClick={() => onViewChange('katalog')}
            className={`transition-all duration-200 cursor-pointer ${
              activeView === 'katalog' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                : 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white'
            }`}
            id="nav-katalog"
          >
            Solutions (Indo)
          </button>
          
          <button 
            onClick={() => onViewChange('solutions')}
            className={`transition-all duration-200 cursor-pointer ${
              activeView === 'solutions' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                : 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white'
            }`}
            id="nav-solutions"
          >
            Global Stack
          </button>

          <button 
            onClick={() => onViewChange('developers')}
            className={`transition-all duration-200 cursor-pointer ${
              activeView === 'developers' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                : 'text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white'
            }`}
            id="nav-developers"
          >
            Developers & Portfolio
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => onViewChange('katalog')}
            className="text-sm font-sans text-gray-600 hover:opacity-80 transition-opacity active:scale-95 duration-200"
            id="btn-sign-in"
          >
            Konsultasi
          </button>
          <button 
            onClick={() => onViewChange('katalog')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-95 transition-all active:scale-95 cursor-pointer shadow-xs inline-flex items-center gap-1"
            id="btn-get-started"
          >
            Get Started <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-200 hover:text-black p-1 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          id="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-all absolute top-16 w-full left-0 py-6 px-6 shadow-lg z-50">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  onViewChange(item.view);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-base font-semibold py-2 transition-all ${
                  activeView === item.view 
                    ? 'text-indigo-600 pl-2 border-l-4 border-indigo-600' 
                    : 'text-gray-600 dark:text-gray-300 pl-2'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <hr className="border-gray-100 dark:border-slate-800 my-2" />

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onViewChange('katalog');
                  setMobileMenuOpen(false);
                }}
                className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 py-3 rounded-lg border border-gray-200 dark:border-slate-800"
              >
                Konsultasi WhatsApp
              </button>
              <button
                onClick={() => {
                  onViewChange('katalog');
                  setMobileMenuOpen(false);
                }}
                className="text-center text-sm font-semibold text-white bg-indigo-600 py-3 rounded-lg shadow-sm"
              >
                Mulai Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
