'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--bg-light)', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <h2 className="section-title">Who We Are</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-green)', marginBottom: '2rem', borderRadius: '2px' }} />
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#4b5563', marginBottom: '1.5rem' }}>
            Samalex Solutions is a Ghanaian sanitation enterprise dedicated to improving access to safe and sustainable sanitation through innovative toilet ownership programs, biodigester technology, community engagement, and hygiene education.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#4b5563' }}>
            We bridge the gap between affordable housing and modern sanitation, ensuring dignity, health, and environmental sustainability for every community we serve.
          </p>
        </motion.div>

        {/* Image Content (Glassy Premium) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="responsive-img-container"
          style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.5)' }}
        >
          <Image 
            src="/images/sama.jpg" 
            alt="Samalex Solutions Team" 
            fill
            style={{ objectFit: 'cover' }} 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1.5rem', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top, rgba(15, 77, 47, 0.8), rgba(0,0,0,0))' }} />
        </motion.div>

      </div>
    </section>
  );
}
