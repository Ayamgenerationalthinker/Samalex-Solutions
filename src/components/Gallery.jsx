'use client';

import { motion } from 'framer-motion';

const images = [
  '/images/atom-construction.jpeg',
  '/images/atom-success.jpeg',
  '/images/atom-inspection.jpeg',
  '/images/atom-payment.jpeg',
  '/images/atom-registration.jpeg',
  '/images/atom-handover.jpeg'
];

export default function Gallery() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Project Gallery</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A glimpse into our impact across homes, schools, and communities.
          </p>
        </div>

        <div style={{ 
          columnCount: 3, 
          columnGap: '1.5rem',
          '@media (max-width: 768px)': { columnCount: 2 },
          '@media (max-width: 480px)': { columnCount: 1 }
        }}>
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ marginBottom: '1.5rem', breakInside: 'avoid', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', cursor: 'pointer' }}
            >
              <img 
                src={src} 
                alt="Samalex Project" 
                style={{ width: '100%', display: 'block', borderRadius: '1rem', transition: 'transform 0.5s ease' }} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
