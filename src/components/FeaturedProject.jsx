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

        <div className="glass-panel" style={{ overflow: 'hidden', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', backgroundColor: 'var(--white)' }}>
          
          <div style={{ position: 'relative', minHeight: '400px' }}>
            <img src="/images/atom-handover.jpeg" alt="Featured Project" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
          </div>

          <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ color: 'var(--primary-green)', fontWeight: 600, letterSpacing: '1px', fontSize: '0.875rem', textTransform: 'uppercase' }}>Ga North Municipality</span>
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'Sora', margin: '1rem 0', color: 'var(--text-dark)' }}>School Sanitation Overhaul</h3>
            
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--primary-green)', marginBottom: '0.5rem' }}>The Challenge</h4>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>The local school lacked adequate, hygienic toilet facilities, leading to low attendance rates, especially among young girls, and increasing the risk of waterborne diseases.</p>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--primary-green)', marginBottom: '0.5rem' }}>The Solution</h4>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>We constructed a 10-seater biodigester toilet block with handwashing stations, ensuring a low-maintenance, water-efficient system that requires no external sewage connection.</p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--primary-green)', marginBottom: '0.5rem' }}>The Outcome</h4>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>Improved hygiene for over 500 students, a 20% increase in female attendance, and the creation of safe, nutrient-rich organic manure for the school garden.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
