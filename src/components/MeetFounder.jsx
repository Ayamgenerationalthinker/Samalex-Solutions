'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MeetFounder() {
  return (
    <section className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--primary-green)', color: 'var(--white)', overflow: 'hidden' }}>
      {/* Background ambient glows */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(167,217,72,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(167,217,72,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 0 }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Skeleton Placeholder for CEO Image */}
          <motion.div 
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            className="responsive-img-container"
            style={{ 
              position: 'relative', 
              borderRadius: '1.5rem', 
              overflow: 'hidden', 
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '2px dashed rgba(255,255,255,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)' 
            }}
          >
            <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Sora', fontSize: '1.25rem', textAlign: 'center', padding: '2rem' }}>
              CEO Portrait<br/><span style={{ fontSize: '0.875rem' }}>(Awaiting Submission)</span>
            </div>
          </motion.div>

          {/* Samuel Gyabah Profile (Glassy) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontFamily: 'Sora', color: 'var(--accent-green)', marginBottom: '0.5rem' }}>Samuel Gyabah</h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Founder & CEO</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
              <p>
                Samuel Gyabah is a pioneering social entrepreneur in Ghana’s sanitation sector. Under his leadership, Samalex Solutions has provided over 1,000+ toilets to schools and households, playing a critical role in curbing open defecation in communities like Pokuase, Katapor, and Dedeman.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-green)', fontSize: '1.25rem' }}>🏆</span>
                  <span><strong>Award-Winning Innovator:</strong> Winner of the Viasat1 "Game Changer" competition (2014).</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-green)', fontSize: '1.25rem' }}>🌍</span>
                  <span><strong>Global Recognition:</strong> Recognized by the World Bank/GPRBA for contributions to the GAMA Sanitation Project.</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-green)', fontSize: '1.25rem' }}>💡</span>
                  <span><strong>Vision:</strong> Driving a behavioral and mental shift in how sanitation is viewed across Ghana.</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
