'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

// All cards are placeholders until staff info is ready
const PLACEHOLDER_COUNT = 6;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } },
};

export default function Staff() {
  return (
    <section id="team" className="section-padding" style={{ backgroundColor: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative blobs */}
      <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(55, 179, 74, 0.07) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212, 244, 40, 0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span style={{ color: 'var(--secondary-green)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.875rem', textTransform: 'uppercase' }}>
              The People Behind Our Mission
            </span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>Meet Our Team</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
              Passionate professionals dedicated to transforming sanitation across Ghana — one community at a time.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          className="staff-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
              /* ── Placeholder card ── */
              <motion.div key={index} variants={cardVariants} className="staff-card staff-placeholder">
                {/* Silhouette avatar */}
                <div className="staff-img-wrapper" style={{ background: 'linear-gradient(135deg, #e8f5e0 0%, #d0eccc 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{
                    width: '90px', height: '90px',
                    borderRadius: '50%',
                    background: 'rgba(4, 57, 28, 0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <User size={44} color="rgba(4, 57, 28, 0.3)" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Placeholder shimmer lines */}
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ height: '14px', borderRadius: '8px', background: 'rgba(4, 57, 28, 0.08)', marginBottom: '0.6rem', width: '60%' }} />
                  <div style={{ height: '10px', borderRadius: '8px', background: 'rgba(4, 57, 28, 0.05)', marginBottom: '1.25rem', width: '40%' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ height: '9px', borderRadius: '6px', background: 'rgba(4, 57, 28, 0.05)', width: '100%' }} />
                    <div style={{ height: '9px', borderRadius: '6px', background: 'rgba(4, 57, 28, 0.05)', width: '80%' }} />
                  </div>
                  <div style={{ marginTop: '1.25rem', display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px dashed rgba(4, 57, 28, 0.2)', fontSize: '0.75rem', color: 'rgba(4, 57, 28, 0.35)', fontStyle: 'italic' }}>
                    Coming Soon
                  </div>
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
