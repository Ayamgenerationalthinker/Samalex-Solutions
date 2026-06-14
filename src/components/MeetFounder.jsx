'use client';

import { motion } from 'framer-motion';

export default function MeetFounder() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--primary-green)', color: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', height: '500px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
          >
            {/* Placeholder for Founder Portrait */}
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--secondary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.2)' }}>Portrait</span>
            </div>
            <img src="/images/atom-inspection.jpeg" alt="Founder" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', fontFamily: 'Sora', color: 'var(--accent-green)', marginBottom: '1rem' }}>Meet the Visionary</h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>Founder & CEO, Samalex Solutions</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)' }}>
              <p>
                "Sanitation is not a privilege; it is a fundamental human right. I started Samalex Solutions after witnessing firsthand how the lack of proper toilets strips away dignity and halts community progress."
              </p>
              <p>
                "Our vision was never just to build toilets. It was to create an ownership model that empowers families. By combining innovative biodigester technology with flexible financing, we are proving that sustainable sanitation can be accessible to everyone."
              </p>
              <p>
                "When you partner with Samalex, you aren't just funding infrastructure. You are investing in health, education, and the long-term dignity of the Ghanaian people."
              </p>
            </div>
            
            <img src="/images/logo.jpg" alt="Signature" style={{ width: '150px', marginTop: '3rem', opacity: 0.8, filter: 'brightness(0) invert(1)' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
