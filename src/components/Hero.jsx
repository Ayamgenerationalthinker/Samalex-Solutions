'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80', // Happy community
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80', // Eco friendly
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', // Clean environment
  'https://images.unsplash.com/photo-1473643213032-41ce101030e2?auto=format&fit=crop&w=1200&q=80'  // Water and nature
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--primary-green)' }}>
      {/* Background Images with Ken Burns */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
        >
          <Image 
            src={images[currentIndex]}
            alt="Samalex Solutions Impact"
            fill
            style={{ objectFit: 'cover' }}
            priority={currentIndex === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Green Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(15, 77, 47, 0.95), rgba(15, 77, 47, 0.5))',
        zIndex: 1
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, color: 'var(--white)', paddingTop: 'clamp(8rem, 12vw, 11rem)', paddingBottom: '4rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>
        
        <div style={{ flex: '1 1 min(100%, 600px)' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'Sora', overflow: 'hidden' }}>
            <motion.span 
              initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              style={{ display: 'block' }}
            >
              Affordable Sanitation.
            </motion.span>
            <motion.span 
              initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
              style={{ display: 'block', color: 'var(--accent-green)' }}
            >
              Dignified Living.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4 }}
            style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '3rem', opacity: 0.9, lineHeight: 1.6 }}
          >
            Transforming homes, schools, and communities through sustainable sanitation solutions and innovative toilet ownership programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.8 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#partner" className="btn-primary" style={{ backgroundColor: 'var(--accent-green)', color: 'var(--primary-green)' }}>Partner With Us</a>
            <a href="#contact" className="btn-secondary" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>Request A Consultation</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1.2 }}
          style={{ flex: '1 1 min(100%, 400px)', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '4/5', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', border: '2px solid rgba(255,255,255,0.1)' }}>
            <Image 
              src="/images/toilet.png" 
              alt="Bio-digester Toilet" 
              fill
              style={{ objectFit: 'cover' }} 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
