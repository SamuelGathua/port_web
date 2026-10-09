import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FeaturedProjects from './components/FeaturedProjects';
import PhilosophyBanner from './components/PhilosophyBanner';
import Footer from './components/Footer';

// Code-split ContactPage to optimize initial load & reduce TBT
const ContactPage = lazy(() => import('./components/ContactPage'));

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Sync with browser URL / history for natural 2-page routing
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.includes('contact') || hash.includes('contact')) {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    const targetUrl = page === 'contact' ? '/contact' : '/';
    window.history.pushState({ page }, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F6F2EC] flex flex-col font-sans selection:bg-[#FF5500] selection:text-white">
      {/* Sticky / Floating Navigation */}
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            <Hero navigateTo={navigateTo} />
            <AboutSection navigateTo={navigateTo} />
            <ServicesSection navigateTo={navigateTo} />
            {/* Featured Projects Showcase immediately following Services */}
            <FeaturedProjects />
            <PhilosophyBanner navigateTo={navigateTo} />
          </>
        ) : (
          <Suspense fallback={<div className="min-h-screen bg-[#F6F2EC] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#FF5500] border-t-transparent rounded-full animate-spin"></div></div>}>
            <ContactPage navigateTo={navigateTo} />
          </Suspense>
        )}
      </main>

      {/* Global Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
