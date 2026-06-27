'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--white)', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 2, background: 'rgba(27, 75, 53, 0.05)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(27, 75, 53, 0.1)', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
        >
          <h2 className="section-title">Who We Are</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-green)', marginBottom: '2rem', borderRadius: '2px' }} />
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--button-green)', marginBottom: '1.5rem' }}>
            Samalex Solutions is a sanitation-based NGO whose main aim is to provide bio-digester toilets and sanitation to households, schools and other institutions. The passion of Samalex Solutions is to provide affordable, convenient and odorless bio-digester toilets and also conduct sanitation and hygiene education in order to improve and sustain good sanitation and hygiene practices among communities in Ghana and beyond.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--button-green)', marginBottom: '1.5rem' }}>
            The organization is registered as a private voluntary Not-for-profit organization with registration number CG116342014 that meets all Ministry of Sanitation and Water Resources approved standards for bio-digesters.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--button-green)', marginBottom: '1.5rem' }}>
            Samalex solutions can boast of building over 11,000 toilets for schools and households and has impacted over 1,000,000 people through our sanitation and hygiene education programmes.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--button-green)' }}>
            In 2016 we joined the Gama project which provided subsidised toilets and built over 9,000 toilets. The project folded up in Accra about 3 years ago. After the GAMA, we saw an increase in the demand for toilet but the major challenge we noticed is the lack of funds by household to pay for the upfront cost to acquire a toilet facility.
          </p>
        </motion.div>

        {/* Image Content (Glassy Premium) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="responsive-img-container"
          style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px rgba(27, 75, 53,0.15)', border: '1px solid rgba(255,255,255,0.5)' }}
        >
          <Image 
            src="/images/who-we-are.jpeg" 
            alt="Samalex Solutions Team" 
            fill
            style={{ objectFit: 'cover' }} 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1.5rem', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top, rgba(27, 75, 53, 0.8), rgba(27, 75, 53,0))' }} />
        </motion.div>

      </div>
    </section>
  );
}
