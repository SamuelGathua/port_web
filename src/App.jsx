import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FeaturedProjects from './components/FeaturedProjects';
import PhilosophyBanner from './components/PhilosophyBanner';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

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
          <ContactPage navigateTo={navigateTo} />
        )}
      </main>

      {/* Global Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
