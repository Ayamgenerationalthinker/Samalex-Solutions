'use client';

import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users } from 'lucide-react';

const partners = [
  { title: 'Social Impact', icon: Heart, desc: 'We deliver measurable improvements in public health, school attendance, and community dignity.' },
  { title: 'Environmental Sustainability', icon: ShieldCheck, desc: 'Our biodigester technology protects groundwater and reduces carbon footprints.' },
  { title: 'Community Development', icon: Users, desc: 'We train local artisans and empower beneficiaries through our unique ownership model.' }
];

export default function WhyPartner() {
  return (
    <section id="partner" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Why Partner With Samalex</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A trusted implementation partner for NGOs, Development Agencies, and CSR programs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {partners.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: 'var(--primary-green)',
                color: 'var(--white)',
                padding: '3rem 2rem',
                borderRadius: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(15, 77, 47, 0.2)'
              }}
            >
              {/* Background Glow */}
              <div style={{ 
                position: 'absolute', top: '-50px', right: '-50px', 
                width: '150px', height: '150px', 
                backgroundColor: 'var(--accent-green)', 
                borderRadius: '50%', filter: 'blur(50px)', opacity: 0.3 
              }} />

              <div style={{ marginBottom: '1.5rem', color: 'var(--accent-green)' }}>
                <item.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Sora' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
