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
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Impact', href: '/#impact' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav style={{ 
      position: 'fixed', width: '100%', zIndex: 100, 
      background: 'var(--button-green)',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      padding: scrolled ? '0.5rem 0' : '1rem 0',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <Image src="/images/logo.jpg" alt="Samalex Solutions Logo" width={56} height={56} style={{ height: '56px', width: '56px', borderRadius: '10px', objectFit: 'cover', background: '#fff', padding: '2px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', flexShrink: 0 }} />
          <span style={{ color: 'var(--white)', fontFamily: 'Sora', fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: 'bold', lineHeight: 1.2 }}>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
