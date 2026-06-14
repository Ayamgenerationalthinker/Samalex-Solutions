'use client';

import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
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

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', height: '500px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        >
          <img 
            src="/images/atom-inspection.jpeg" 
            alt="Samalex Solutions Team" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1rem' }} />
        </motion.div>

      </div>
    </section>
  );
}
