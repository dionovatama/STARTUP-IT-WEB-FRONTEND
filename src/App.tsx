/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ActiveView } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import SolutionsView from './components/SolutionsView';
import PortfolioView from './components/PortfolioView';
import KatalogView from './components/KatalogView';

export default function App() {
  // We can default to 'katalog' as shown in the primary mockup image (with pricing catalog in Indonesian),
  // or allow switching seamlessly. Let's default to 'katalog' since it's the premium catalog request,
  // but allow instant switching to the other gorgeous layouts.
  const [activeView, setActiveView] = useState<ActiveView>('katalog');

  // Automatically scroll to top when changing page tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const handleViewChange = (view: ActiveView) => {
    setActiveView(view);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-indigo-600 selection:text-white">
      {/* Dynamic Header */}
      <Header activeView={activeView} onViewChange={handleViewChange} />

      {/* Main View Router */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          {activeView === 'solutions' && (
            <motion.div
              key="solutions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SolutionsView onViewChange={handleViewChange} />
            </motion.div>
          )}
          {activeView === 'developers' && (
            <motion.div
              key="developers"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioView onViewChange={handleViewChange} />
            </motion.div>
          )}
          {activeView === 'katalog' && (
            <motion.div
              key="katalog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <KatalogView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Common footer across views */}
      <Footer onViewChange={handleViewChange} />
    </div>
  );
}

