'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const steps = [
  { id: '01', title: 'Registration', desc: 'Residents begin the process by registering for the Affordable Toilet Ownership Model.', image: '/images/atom-construction.jpeg' },
  { id: '02', title: 'Inspection', desc: 'Our team assesses the site and identifies the most suitable sanitation solution.', image: '/images/atom-inspection.jpeg' },
  { id: '03', title: 'Construction', desc: 'The sanitation facility is professionally constructed and installed.', image: '/images/atom-registration.jpeg' },
  { id: '04', title: 'Education & Handover', desc: 'Users receive training on proper usage, hygiene practices, and maintenance.', image: '/images/atom-handover.jpeg' },
  { id: '05', title: 'Payment', desc: 'Flexible payment options support sustainable toilet ownership.', image: '/images/atom-payment.jpeg' },
  { id: '06', title: 'Joy In Toilet', desc: 'Families enjoy a clean, safe, and dignified sanitation experience.', image: '/images/atom-success.jpeg' }
];

export default function AtomStory() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-play the steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="solutions" className="section-padding" style={{ backgroundColor: '#071013', color: 'var(--white)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--accent-green)', fontFamily: 'Sora', marginBottom: '1rem' }}
          >
            How the Affordable Toilet Ownership Model Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.125rem', color: '#8892b0', maxWidth: '600px', margin: '0 auto' }}
          >
            A simple process designed to bring safe sanitation closer to every household.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Side: Steps List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                onClick={() => setActiveStep(index)}
                style={{ 
                  display: 'flex', gap: '1.5rem', cursor: 'pointer', 
                  opacity: activeStep === index ? 1 : 0.4,
                  transform: activeStep === index ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: activeStep === index ? 'rgba(167, 217, 66, 0.05)' : 'transparent',
                  borderLeft: activeStep === index ? '4px solid var(--accent-green)' : '4px solid transparent'
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-green)', fontFamily: 'Sora' }}>
                  {step.id}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora', marginBottom: '0.25rem' }}>{step.title}</h3>
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: 'auto' }} 
                        exit={{ opacity: 0, height: 0 }}
                        style={{ color: '#CCD6F6', fontSize: '0.95rem', lineHeight: 1.5 }}
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Animated Image */}
          <div style={{ position: 'relative', height: '500px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', backgroundColor: 'var(--primary-green)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              >
                <Image 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Visual Flourishes per step */}
                {activeStep === 1 && (
                  <motion.div 
                    animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.02, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ position: 'absolute', inset: '10%', border: '2px solid rgba(167,217,72,0.8)', borderRadius: '1rem', boxShadow: '0 0 30px rgba(167,217,72,0.5)' }} 
                  />
                )}
                
                {activeStep === 3 && (
                  <motion.div 
                    initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ duration: 0.8 }}
                    style={{ position: 'absolute', bottom: '10%', left: 0, padding: '1rem 2rem', backgroundColor: 'var(--primary-green)', color: 'var(--white)', borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem' }}
                  >
                    <span style={{ fontWeight: 'bold', color: 'var(--accent-green)' }}>WASH Education</span>
                  </motion.div>
                )}

                {activeStep === 4 && (
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', top: '15%', right: '10%', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: '1rem' }}
                  >
                    <div style={{ width: '40px', height: '40px', backgroundColor: '#7CC242', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>✓</div>
                    <div style={{ color: '#0F4D2F' }}>
                      <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>Payment Verified</div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 5 && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, rgba(167,217,72,0.4) 0%, rgba(0,0,0,0) 60%)', mixBlendMode: 'screen' }} />}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
