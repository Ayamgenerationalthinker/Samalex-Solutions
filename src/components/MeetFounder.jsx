'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MeetFounder() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--primary-green)', color: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Skeleton Placeholder for CEO Image */}
          <motion.div 
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            style={{ 
              position: 'relative', 
              borderRadius: '1rem', 
              overflow: 'hidden', 
              height: '500px', 
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '2px dashed rgba(255,255,255,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)' 
            }}
          >
            <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Sora', fontSize: '1.25rem', textAlign: 'center', padding: '2rem' }}>
              CEO Portrait<br/><span style={{ fontSize: '0.875rem' }}>(Awaiting Submission)</span>
            </div>
          </motion.div>

          {/* Samuel Gyabah Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Sora', color: 'var(--accent-green)', marginBottom: '0.5rem' }}>Samuel Gyabah</h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontWeight: 'bold' }}>Founder & CEO, Samalex Solutions</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
              <p>
                Samuel Gyabah is a pioneering social entrepreneur in Ghana’s sanitation sector. Under his leadership, Samalex Solutions has provided over 1,000+ toilets to schools and households, playing a critical role in curbing open defecation in communities like Pokuase, Katapor, and Dedeman.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-green)' }}>🏆</span>
                  <span><strong>Award-Winning Innovator:</strong> Winner of the Viasat1 "Game Changer" competition (2014) for his impactful work in school sanitation.</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-green)' }}>🌍</span>
                  <span><strong>Global Recognition:</strong> Trained in bio-digester technology and recognized by the World Bank/GPRBA for contributions to the Greater Accra Metropolitan Area (GAMA) Sanitation and Water Project.</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-green)' }}>💡</span>
                  <span><strong>Vision:</strong> A commitment to not just building infrastructure, but driving a behavioral and mental shift in how sanitation is viewed across Ghana.</span>
                </li>
              </ul>
            </div>
            
            <div style={{ marginTop: '3rem', position: 'relative', width: '150px', height: '50px' }}>
              <Image 
                src="/images/logo.jpg" 
                alt="Samalex Solutions Logo" 
                fill
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.8 }} 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
