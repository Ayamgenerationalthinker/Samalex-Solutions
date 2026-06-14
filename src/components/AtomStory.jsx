'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { id: '01', title: 'Registration', desc: 'Community member registers for the Affordable Toilet Ownership Model.', img: '/images/atom-registration.jpeg' },
  { id: '02', title: 'Inspection', desc: 'The site is assessed and sanitation needs are evaluated.', img: '/images/atom-inspection.jpeg' },
  { id: '03', title: 'Construction', desc: 'Professional installation and implementation begins.', img: '/images/atom-construction.jpeg' },
  { id: '04', title: 'Education & Handover', desc: 'Beneficiaries receive guidance on usage and maintenance.', img: '/images/atom-handover.jpeg' },
  { id: '05', title: 'Payment', desc: 'Flexible ownership and payment arrangements.', img: '/images/atom-payment.jpeg' },
  { id: '06', title: 'Joy In Toilet', desc: 'A clean, safe, and dignified sanitation experience.', img: '/images/atom-success.jpeg' }
];

export default function AtomStory() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which step is active based on scroll progress
  const stepCount = steps.length;
  // Create an array of thresholds: e.g., [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1]
  const stepThresholds = Array.from({ length: stepCount + 1 }, (_, i) => i / stepCount);

  return (
    <section ref={containerRef} style={{ backgroundColor: '#0A192F', color: 'var(--white)', position: 'relative' }}>
      <div style={{ height: `${stepCount * 100}vh`, width: '100%' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          
          {/* Left Side: Text Content */}
          <div className="container" style={{ display: 'flex', width: '100%', height: '100%' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '4rem', zIndex: 10 }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--accent-green)', fontFamily: 'Sora' }}>The ATOM Experience</h2>
                <p style={{ fontSize: '1.25rem', color: '#8892b0', marginTop: '1rem' }}>Affordable Toilet Ownership Model</p>
              </div>

              <div style={{ position: 'relative', height: '300px' }}>
                {steps.map((step, index) => {
                  const isActive = useTransform(
                    scrollYProgress,
                    [Math.max(0, (index - 0.5) / stepCount), index / stepCount, Math.min(1, (index + 0.5) / stepCount)],
                    [0, 1, 0]
                  );
                  const yOffset = useTransform(
                    scrollYProgress,
                    [Math.max(0, (index - 0.5) / stepCount), index / stepCount, Math.min(1, (index + 0.5) / stepCount)],
                    [40, 0, -40]
                  );

                  return (
                    <motion.div
                      key={step.id}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: isActive,
                        y: yOffset,
                        pointerEvents: 'none'
                      }}
                    >
                      <span style={{ fontSize: '1rem', letterSpacing: '2px', color: 'var(--secondary-green)', fontWeight: 600 }}>STEP {step.id}</span>
                      <h3 style={{ fontSize: '3rem', margin: '1rem 0', fontFamily: 'Sora' }}>{step.title}</h3>
                      <p style={{ fontSize: '1.5rem', color: '#CCD6F6', lineHeight: 1.6, maxWidth: '500px' }}>{step.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Image Crossfade */}
            <div style={{ flex: 1, position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', height: '70vh', position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
                {steps.map((step, index) => {
                  const imageOpacity = useTransform(
                    scrollYProgress,
                    [Math.max(0, (index - 0.5) / stepCount), index / stepCount, Math.min(1, (index + 0.5) / stepCount)],
                    [0, 1, 0]
                  );
                  const imageScale = useTransform(
                    scrollYProgress,
                    [Math.max(0, (index - 0.5) / stepCount), Math.min(1, (index + 0.5) / stepCount)],
                    [1, 1.15]
                  );

                  return (
                    <motion.img
                      key={`img-${step.id}`}
                      src={step.img}
                      alt={step.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: imageOpacity,
                        scale: imageScale,
                      }}
                    />
                  );
                })}
                <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px rgba(10, 25, 47, 0.8)' }} />
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', height: '50vh', width: '2px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <motion.div 
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--accent-green)',
                scaleY: scrollYProgress,
                transformOrigin: 'top'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
