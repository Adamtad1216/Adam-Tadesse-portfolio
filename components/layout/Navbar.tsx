'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { navItems, siteConfig } from '@/data/site';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 40;
          setIsScrolled((prev) => (prev !== shouldBeScrolled ? shouldBeScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-base/80 backdrop-blur-xl border-b border-border-subtle'
            : 'bg-transparent'
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="relative group flex items-center gap-2.5"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-border-subtle bg-surface flex items-center justify-center p-1 group-hover:border-accent/40 transition-colors shrink-0">
              <Image
                src={siteConfig.logo || '/images/logo.png'}
                alt={`${siteConfig.name} logo`}
                width={24}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-text-primary">
              {siteConfig.name.split(' ')[0]}
            </span>
            <span className="text-accent font-mono text-sm opacity-60">
              /dev
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg',
                    activeSection === item.href.slice(1)
                      ? 'text-accent'
                      : 'text-text-muted hover:text-text-primary'
                  )}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-px bg-accent"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + ThemeToggle + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {siteConfig.cvPath && (
              <a
                href={siteConfig.cvPath}
                download="Adam-Tadesse-CV.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium border border-border text-text-secondary rounded-lg hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <FileDown size={14} />
                <span>CV</span>
              </a>
            )}

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-medium bg-accent text-text-inverse rounded-lg hover:bg-accent/90 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              Get in touch
            </a>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-text-primary"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-base/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              className="flex flex-col items-center justify-center h-full gap-2"
              aria-label="Mobile navigation"
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'text-2xl font-display font-medium py-3 px-6 rounded-xl transition-colors',
                    activeSection === item.href.slice(1)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navItems.length * 0.08, duration: 0.4 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="mt-4 px-8 py-3 bg-accent text-text-inverse rounded-xl text-lg font-medium"
              >
                Get in touch
              </motion.a>

              {siteConfig.cvPath && (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: (navItems.length + 0.5) * 0.08, duration: 0.4 }}
                  href={siteConfig.cvPath}
                  download="Adam-Tadesse-CV.pdf"
                  className="mt-2 inline-flex items-center gap-2 px-8 py-3 border border-border text-text-primary rounded-xl text-lg font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  <FileDown size={18} />
                  Download CV
                </motion.a>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: (navItems.length + 1) * 0.08, duration: 0.4 }}
                className="mt-6 flex items-center gap-3 text-sm text-text-muted"
              >
                <span>Theme:</span>
                <ThemeToggle />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
