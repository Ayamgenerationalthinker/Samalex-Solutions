'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{ 
      position: 'relative', 
      height: '100vh', 
      width: '100vw', 
      overflow: 'hidden', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--primary-green)'
    }}>
      {/* Abstract Background Elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(167,217,72,0.15) 0%, rgba(15,77,47,0) 70%)', borderRadius: '50%' }}
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,194,66,0.1) 0%, rgba(15,77,47,0) 70%)', borderRadius: '50%' }}
        />
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, color: 'var(--white)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '1000px', fontFamily: 'Sora' }}
        >
          Affordable Sanitation.<br />
          <span style={{ color: 'var(--accent-green)' }}>Dignified Living.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.6 }}
        >
          Transforming homes, schools, and communities through sustainable sanitation solutions and innovative toilet ownership programs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#partner" className="btn-primary" style={{ backgroundColor: 'var(--accent-green)', color: 'var(--primary-green)' }}>Partner With Us</a>
          <a href="#contact" className="btn-secondary" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>Request A Consultation</a>
        </motion.div>
      </div>
    </section>
  );
}
