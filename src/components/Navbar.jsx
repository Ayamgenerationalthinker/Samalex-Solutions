'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{ 
      position: 'fixed', width: '100%', zIndex: 100, 
      background: scrolled ? 'rgba(15, 77, 47, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: scrolled ? '0.75rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <Image src="/images/logo.jpg" alt="Samalex Solutions Logo" width={45} height={45} style={{ height: 'clamp(35px, 8vw, 45px)', width: 'auto', borderRadius: '50%', objectFit: 'contain' }} />
          <span style={{ color: 'var(--white)', fontFamily: 'Sora', fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', fontWeight: 'bold' }}>
            Samalex Solutions
          </span>
        </motion.div>
        
        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'none' }}
          className="desktop-nav"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} style={{ color: 'var(--white)', fontWeight: 500, fontSize: '1rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-green)'} onMouseOut={(e) => e.target.style.color = 'var(--white)'}>
                {link.name}
              </a>
            ))}
            <a href="#partner" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>Partner With Us</a>
          </div>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'block', cursor: 'pointer', color: 'var(--white)' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', backgroundColor: 'var(--primary-green)' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 2rem 2rem 2rem', gap: '1.5rem' }}>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} style={{ color: 'var(--white)', fontSize: '1.125rem', fontWeight: 500 }}>
                  {link.name}
                </a>
              ))}
              <a href="#partner" onClick={() => setIsOpen(false)} className="btn-primary" style={{ textAlign: 'center' }}>Partner With Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
