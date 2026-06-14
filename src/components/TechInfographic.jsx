'use client';

import { motion } from 'framer-motion';
import { Home, Droplets, FlaskConical, Recycle, Sprout, Globe } from 'lucide-react';

const steps = [
  { id: 1, title: 'Household Use', icon: Home, desc: 'Safe and private usage within the home.' },
  { id: 2, title: 'Micro Flush System', icon: Droplets, desc: 'Uses minimal water (as little as a cup) to flush waste.' },
  { id: 3, title: 'Biodigester Treatment', icon: FlaskConical, desc: 'Rapid separation of solid and liquid waste.' },
  { id: 4, title: 'Waste Processing', icon: Recycle, desc: 'Natural biological decomposition without odor.' },
  { id: 5, title: 'Organic Manure Generation', icon: Sprout, desc: 'Processed waste is safely converted into nutrient-rich compost.' },
  { id: 6, title: 'Environmental Benefits', icon: Globe, desc: 'Protection of groundwater and improved community health.' },
];

export default function TechInfographic() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">How The Technology Works</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our innovative biodigester technology is simple, sustainable, and highly effective.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Animated Line */}
          <div style={{ position: 'absolute', left: '2rem', top: '0', bottom: '0', width: '4px', backgroundColor: 'rgba(15, 77, 47, 0.1)', transform: 'translateX(-50%)' }}>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ width: '100%', backgroundColor: 'var(--primary-green)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', position: 'relative' }}
              >
                {/* Node */}
                <div style={{ 
                  width: '4rem', height: '4rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--white)',
                  border: '4px solid var(--primary-green)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary-green)',
                  zIndex: 2,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  flexShrink: 0
                }}>
                  <step.icon size={24} />
                </div>

                {/* Content */}
                <div style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: '1rem', flex: 1, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{step.title}</h3>
                  <p style={{ color: '#6b7280', lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
