'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav style={{ 
      position: 'absolute', 
      top: 0, left: 0, right: 0, 
      padding: '1.5rem 0', 
      zIndex: 50,
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          <img src="/images/logo.png" alt="Samalex Solutions Logo" style={{ height: '50px', objectFit: 'contain' }} />
          <span style={{ color: 'var(--white)', fontFamily: 'Sora', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Samalex Solutions
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#contact" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>Partner With Us</a>
        </motion.div>
      </div>
    </nav>
  );
}
