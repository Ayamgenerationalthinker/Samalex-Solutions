'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const slides = [
  {
    image: '/images/toilet.png',
    title1: 'Affordable Sanitation.',
    title2: 'Dignified Living.',
    desc: 'Transforming homes, schools, and communities through sustainable sanitation solutions and innovative toilet ownership programs.',
    primaryBtnText: 'Partner With Us',
    primaryBtnHref: '#partner',
    secondaryBtnText: 'Request A Consultation',
    secondaryBtnHref: '#contact'
  },
  {
    image: '/images/slider2.png',
    title1: 'Eco-Friendly Solutions.',
    title2: 'Sustainable Future.',
    desc: 'Samalex Solutions engineers modern, odor-free bio-digesters that protect the environment and promote a healthier Ghana.',
    primaryBtnText: 'View Our Solutions',
    primaryBtnHref: '#solutions',
    secondaryBtnText: 'Learn More',
    secondaryBtnHref: '#about'
  },
  {
    image: '/images/slider3.png',
    title1: 'Expert Installation.',
    title2: 'Guaranteed Quality.',
    desc: 'With over 11,000 toilets built, Samalex Solutions is the trusted name in bio-digester technology and hygiene education.',
    primaryBtnText: 'See Our Impact',
    primaryBtnHref: '#impact',
    secondaryBtnText: 'Contact Us',
    secondaryBtnHref: '#contact'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      
      {/* Animated Background Image */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [1, 1.05] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, scale: { duration: 10, repeat: Infinity, repeatType: 'reverse', ease: "linear" } }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
        >
          <Image 
            src={slides[currentIndex].image}
            alt="Samalex Solutions Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Light Overlay to ensure text readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(240, 249, 237, 0.95) 0%, rgba(240, 249, 237, 0.8) 40%, rgba(240, 249, 237, 0.2) 100%)',
        zIndex: 1
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'var(--navbar-height)', paddingBottom: '4rem' }}>
        
        <div style={{ maxWidth: '650px' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--primary-green)' }}
          >
            <CheckCircle2 size={16} strokeWidth={2.5} />
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Certified Bio-Digester Experts
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'Sora', color: 'var(--text-dark)' }}>
                <span style={{ display: 'block' }}>
                  {slides[currentIndex].title1}
                </span>
                <span style={{ display: 'block' }}>
                  <span style={{ color: 'var(--primary-green)' }}>{slides[currentIndex].title2}</span>
                </span>
              </h1>

              <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', color: 'var(--button-green)', lineHeight: 1.6 }}>
                {slides[currentIndex].desc}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={slides[currentIndex].primaryBtnHref} className="btn-primary">{slides[currentIndex].primaryBtnText}</a>
                <a href={slides[currentIndex].secondaryBtnHref} className="btn-secondary">{slides[currentIndex].secondaryBtnText}</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
