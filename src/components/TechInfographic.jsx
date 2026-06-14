'use client';

import { motion } from 'framer-motion';
import { Home, Droplets, FlaskConical, Recycle, Sprout, Globe } from 'lucide-react';

const steps = [
  { id: 1, title: 'Household Use', icon: Home, desc: 'Safe, private, and dignified usage within the home.' },
  { id: 2, title: 'Micro Flush System', icon: Droplets, desc: 'Uses minimal water (as little as a cup) to efficiently flush waste.' },
  { id: 3, title: 'Biodigester Treatment', icon: FlaskConical, desc: 'Rapid biological separation of solid and liquid waste.' },
  { id: 4, title: 'Waste Processing', icon: Recycle, desc: 'Natural bacterial decomposition without any offensive odor.' },
  { id: 5, title: 'Organic Manure', icon: Sprout, desc: 'Processed waste is safely converted into nutrient-rich compost.' },
  { id: 6, title: 'Cleaner Environment', icon: Globe, desc: 'Protection of groundwater and overall community health improvement.' },
];

export default function TechInfographic() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--text-dark)', color: 'var(--white)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="section-title" style={{ color: 'var(--accent-green)' }}>The Biodigester Technology</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
            A sustainable, closed-loop sanitation ecosystem.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Animated SVG Line */}
          <svg style={{ position: 'absolute', left: '2.5rem', top: 0, height: '100%', width: '4px', overflow: 'visible', zIndex: 0 }}>
            <motion.line
              x1="2" y1="0" x2="2" y2="100%"
              stroke="var(--accent-green)"
              strokeWidth="4"
              strokeDasharray="10 10"
              initial={{ strokeDashoffset: 1000 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', position: 'relative', zIndex: 1 }}
              >
                {/* Node */}
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-green)', color: 'var(--primary-green)' }}
                  style={{ 
                    width: '5rem', height: '5rem', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--primary-green)',
                    border: '4px solid var(--accent-green)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--white)',
                    boxShadow: '0 0 20px rgba(167, 217, 72, 0.3)',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <step.icon size={32} />
                </motion.div>

                {/* Content */}
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '1rem', flex: 1, border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'Sora', color: 'var(--accent-green)' }}>{step.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: '1.125rem' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
