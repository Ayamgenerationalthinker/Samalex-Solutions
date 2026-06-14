'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ 
      position: 'fixed', width: '100%', zIndex: 100, 
      background: scrolled ? 'rgba(15, 77, 47, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          <img src="/images/logo.jpg" alt="Samalex Solutions Logo" style={{ height: '50px', objectFit: 'contain' }} />
          <span style={{ color: 'var(--white)', fontFamily: 'Sora', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Samalex Solutions
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
        >
          <a href="#contact" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>Partner With Us</a>
        </motion.div>
      </div>
    </nav>
  );
}
