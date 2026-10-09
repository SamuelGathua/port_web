import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Terminal, Sparkles } from 'lucide-react';

export default function Navbar({ currentPage, navigateTo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (target === 'home') {
      navigateTo('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'contact') {
      navigateTo('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Anchors on home
      if (currentPage !== 'home') {
        navigateTo('home');
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 flex justify-center ${
          isScrolled ? 'backdrop-blur-md bg-[#F6F2EC]/85 py-3 shadow-xs' : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#FF5500] text-white flex items-center justify-center font-black text-lg tracking-wider shadow-md shadow-[#FF5500]/25 group-hover:scale-105 transition-transform duration-200">
              <span className="font-sans">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#111113] group-hover:text-[#FF5500] transition-colors">
                Teller<span className="text-[#FF5500]">.</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#4D4E55] -mt-1 hidden sm:block">
                Solutions
              </span>
            </div>
          </a>

          {/* Floating Pill Nav for Desktop (Inspired by Image 2's Pill Container) */}
          <nav className="hidden md:flex items-center bg-[#18191E] text-white px-2 py-1.5 rounded-full border border-white/10 shadow-xl shadow-black/15">
            <button
              onClick={(e) => handleLinkClick(e, 'home')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-white text-[#111113] shadow-xs'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'services')}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'portfolio')}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'about')}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              About
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                currentPage === 'contact'
                  ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30'
                  : 'text-gray-300 hover:text-[#FF5500]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Button: Distinct Pill (As in Image 1 and 2) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={(e) => handleLinkClick(e, 'contact')}
              aria-label="Get in touch with Teller Solutions"
              className="bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full flex items-center gap-1.5 transition-all duration-200 shadow-lg shadow-[#FF5500]/25 hover:shadow-[#FF5500]/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Hamburger Button (Styled as orange capsule icon like Image 2) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => navigateTo('contact')}
              aria-label="Contact Teller Solutions"
              className="bg-[#FF5500] text-white text-xs font-black uppercase tracking-wider px-3.5 py-2 rounded-full shadow-xs cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-[#18191E] text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Right-Side Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md md:hidden flex justify-end animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-[82%] max-w-xs h-full bg-[#14151B] border-l border-white/10 p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FF5500] text-white flex items-center justify-center font-black text-sm">
                    T
                  </div>
                  <span className="text-white font-black text-base tracking-tight">Teller<span className="text-[#FF5500]">.</span></span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 py-6">
                <button
                  onClick={(e) => handleLinkClick(e, 'home')}
                  className={`text-left py-3 px-4 rounded-xl text-base font-bold transition-colors flex items-center justify-between cursor-pointer ${
                    currentPage === 'home'
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>Home</span>
                  {currentPage === 'home' && <span className="w-2 h-2 rounded-full bg-[#FF5500]"></span>}
                </button>
                <button
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="text-left py-3 px-4 rounded-xl text-base font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
                <button
                  onClick={(e) => handleLinkClick(e, 'portfolio')}
                  className="text-left py-3 px-4 rounded-xl text-base font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                >
                  Work
                </button>
                <button
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="text-left py-3 px-4 rounded-xl text-base font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
                <button
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className={`text-left py-3 px-4 rounded-xl text-base font-bold transition-colors flex items-center justify-between cursor-pointer ${
                    currentPage === 'contact'
                      ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30'
                      : 'text-[#FF5500] hover:bg-white/5'
                  }`}
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </nav>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FF5500]/25 transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] font-mono-code text-center text-gray-400">
                Nairobi, Kenya • EAT (UTC+3)
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
