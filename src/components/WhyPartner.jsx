'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Map, Clock, Droplet, Leaf } from 'lucide-react';

const partners = [
  { title: 'Sustainable Technology', icon: ShieldCheck, desc: 'Our biodigester systems are rigorously tested, water-efficient, and engineered for long-term reliability in varying climates.' },
  { title: 'Community Ownership Model', icon: HeartHandshake, desc: 'We don\'t just give toilets away; our ATOM model ensures beneficiaries invest in and maintain their facilities.' },
  { title: 'Local Implementation Expertise', icon: Map, desc: 'Deep roots in Ghanaian communities allow us to navigate local nuances, secure permissions, and hire local artisans.' },
  { title: 'Long-Term Impact', icon: Clock, desc: 'Every project is tracked for longevity. We aim for generational change, not just short-term numbers.' },
  { title: 'Hygiene Education', icon: Droplet, desc: 'Infrastructure is paired with comprehensive WASH (Water, Sanitation, and Hygiene) education for maximum health outcomes.' },
  { title: 'Environmental Sustainability', icon: Leaf, desc: 'Our zero-odor systems safely convert waste to organic manure, protecting groundwater and reducing carbon footprints.' }
];

export default function WhyPartner() {
  return (
    <section id="partner" className="section-padding" style={{ backgroundColor: 'var(--button-green)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ color: 'var(--primary-green)' }}>Why NGOs & Institutions Partner With Samalex</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', color: 'var(--white)' }}>
            We bring local expertise, sustainable technology, and a proven implementation model.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
          {partners.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)' }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '3rem 2rem',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ 
                width: '64px', height: '64px', 
                borderRadius: '1rem', 
                backgroundColor: 'var(--primary-green)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--white)',
                marginBottom: '1.5rem'
              }}>
                <item.icon size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Sora', color: 'var(--primary-green)' }}>{item.title}</h3>
              <p style={{ color: 'var(--white)', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
