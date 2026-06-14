'use client';

import { motion } from 'framer-motion';

export default function ImpactStory() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Before Sanitation */}
      <div style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a', color: 'var(--white)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/atom-inspection.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) blur(2px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)' }} />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px', padding: '0 2rem' }}
        >
          <span style={{ color: '#6b7280', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>The Challenge</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontFamily: 'Sora', margin: '1rem 0' }}>Many communities still lack access to safe sanitation facilities.</h2>
          <p style={{ fontSize: '1.25rem', color: '#9ca3af' }}>This leads to health crises, environmental degradation, and a profound loss of dignity.</p>
        </motion.div>
      </div>

      {/* After Intervention */}
      <div style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--white)', color: 'var(--text-dark)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/atom-success.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 77, 47, 0.9), rgba(124, 194, 66, 0.4))' }} />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px', padding: '0 2rem', color: 'var(--white)' }}
        >
          <span style={{ color: 'var(--accent-green)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>The Intervention</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontFamily: 'Sora', margin: '1rem 0' }}>We restore dignity and health.</h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>By providing affordable biodigester toilets, we empower families and transform entire communities for generations.</p>
        </motion.div>
      </div>
    </section>
  );
}
