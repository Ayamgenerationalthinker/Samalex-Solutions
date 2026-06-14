'use client';

import { motion } from 'framer-motion';

export default function FeaturedProject() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Featured Project</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real impact, driven by community partnership and innovative technology.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ color: 'var(--primary-green)', fontWeight: 600, letterSpacing: '1px', fontSize: '0.875rem', textTransform: 'uppercase' }}>Ga North Municipality</span>
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'Sora', margin: '1rem 0', color: 'var(--text-dark)' }}>School Sanitation Overhaul</h3>
            
            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
              <div style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-green)', marginBottom: '1rem', fontFamily: 'Sora' }}>The Challenge</h4>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>The local school lacked adequate, hygienic toilet facilities, leading to low attendance rates, especially among young girls, and increasing the risk of waterborne diseases.</p>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-green)', marginBottom: '1rem', fontFamily: 'Sora' }}>The Solution</h4>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>We constructed a 10-seater biodigester toilet block with handwashing stations, ensuring a low-maintenance, water-efficient system that requires no external sewage connection.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-green)', marginBottom: '1rem', fontFamily: 'Sora' }}>The Outcome</h4>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>Improved hygiene for over 500 students, a 20% increase in female attendance, and the creation of safe, nutrient-rich organic manure for the school garden.</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
