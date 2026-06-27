'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      
      {/* Animated Background Image */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <Image 
          src="/images/toilet.png"
          alt="Modern Eco-friendly Toilet Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Light Overlay to ensure text readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(240, 249, 237, 0.9) 0%, rgba(240, 249, 237, 0.7) 40%, rgba(240, 249, 237, 0.1) 100%)',
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

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'Sora', color: 'var(--text-dark)' }}>
            <motion.span 
              initial={{ y: '20px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: 'block' }}
            >
              Ghana's Leading
            </motion.span>
            <motion.span 
              initial={{ y: '20px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'block' }}
            >
              <span style={{ color: 'var(--primary-green)' }}>Bio-Digester</span> Experts
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontSize: '1.125rem', marginBottom: '2.5rem', color: '#374151', lineHeight: 1.6 }}
          >
            Professional toilet solutions that are eco-friendly and cost-effective. We engineer modern sanitation systems that eliminate odors and frequent dislodging.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#quote" className="btn-primary">Get a Free Quote</a>
            <a href="#promo" className="btn-secondary">View Promo Offers</a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
