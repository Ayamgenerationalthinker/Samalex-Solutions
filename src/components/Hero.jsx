'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/atom-construction.jpeg',
  '/images/atom-success.jpeg',
  '/images/atom-inspection.jpeg',
  '/images/atom-registration.jpeg',
  '/images/atom-handover.jpeg'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background Images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(15, 77, 47, 0.9), rgba(15, 77, 47, 0.4))',
        zIndex: 1
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, color: 'var(--white)' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px' }}
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
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a href="#partner" className="btn-primary" style={{ backgroundColor: 'var(--accent-green)', color: 'var(--primary-green)' }}>Partner With Us</a>
          <a href="#contact" className="btn-secondary" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>Request A Consultation</a>
        </motion.div>
      </div>
    </section>
  );
}
