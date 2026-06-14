'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const steps = [
  { id: '01', title: 'Registration', desc: 'Residents begin the process by registering for the Affordable Toilet Ownership Model.', images: ['/images/atom-registration.jpeg'] },
  { id: '02', title: 'Inspection', desc: 'Our team assesses the site and identifies the most suitable sanitation solution.', images: ['/images/atom-inspection.jpeg'] },
  { id: '03', title: 'Construction', desc: 'The sanitation facility is professionally constructed and installed.', images: [
    '/images/atom-construction.jpeg', 
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1541888087525-2bf54dea9b72?auto=format&fit=crop&w=800&q=80'
  ] },
  { id: '04', title: 'Education & Handover', desc: 'Users receive training on proper usage, hygiene practices, and maintenance.', images: ['/images/atom-handover.jpeg'] },
  { id: '05', title: 'Payment', desc: 'Flexible payment options support sustainable toilet ownership.', images: ['/images/atom-payment.jpeg'] },
  { id: '06', title: 'Joy In Toilet', desc: 'Families enjoy a clean, safe, and dignified sanitation experience.', images: ['/images/atom-success.jpeg'] }
];

const MultiImagePlayer = ({ images, isActive }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!isActive || images.length <= 1) return;
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isActive, images.length]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <Image 
          src={images[idx]} 
          alt="ATOM Story Step"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default function AtomStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const totalSteps = steps.length;

  return (
    <section ref={containerRef} style={{ backgroundColor: '#071013', color: 'var(--white)', position: 'relative' }}>
      <div style={{ height: `${totalSteps * 100 + 100}vh`, width: '100%' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          
          <div className="container" style={{ display: 'flex', width: '100%', height: '100%', position: 'relative', zIndex: 10 }}>
            
            {/* LEFT TEXT (Desktop) / TOP TEXT (Mobile) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '2rem', zIndex: 20 }}>
              {/* Intro Title */}
              <motion.div 
                style={{ 
                  position: 'absolute', top: '25%', left: '2rem', right: '50%',
                  opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]),
                  pointerEvents: 'none'
                }}
              >
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--accent-green)', fontFamily: 'Sora', lineHeight: 1.1 }}>How the Affordable Toilet Ownership Model Works</h2>
                <p style={{ fontSize: '1.125rem', color: '#8892b0', marginTop: '1rem' }}>A simple process designed to bring safe sanitation closer to every household.</p>
              </motion.div>

              <div style={{ position: 'relative', height: '50vh', width: '100%', display: 'flex', alignItems: 'center' }}>
                {steps.map((step, i) => {
                  const start = (i + 0.1) / (totalSteps + 1);
                  const peak = (i + 0.5) / (totalSteps + 1);
                  const end = (i + 0.9) / (totalSteps + 1);
                  const isActive = useTransform(scrollYProgress, [start, peak, end], [0, 1, 0]);
                  const yOffset = useTransform(scrollYProgress, [start, peak, end], [50, 0, -50]);

                  return (
                    <motion.div key={step.id} style={{ position: 'absolute', opacity: isActive, y: yOffset, width: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1rem', letterSpacing: '2px', color: 'var(--secondary-green)', fontWeight: 600 }}>STEP {step.id}</span>
                        <motion.div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', opacity: isActive }} />
                      </div>
                      <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', margin: '0 0 1rem 0', fontFamily: 'Sora', lineHeight: 1.1 }}>{step.title}</h3>
                      <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#CCD6F6', lineHeight: 1.6, maxWidth: '400px' }}>{step.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT IMAGE (Desktop) / BOTTOM IMAGE (Mobile) */}
            <div style={{ flex: 1.2, position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', height: '60vh', position: 'relative', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)' }}>
                {steps.map((step, i) => {
                  const start = i / (totalSteps + 1);
                  const peak = (i + 0.5) / (totalSteps + 1);
                  const end = (i + 1) / (totalSteps + 1);
                  const imageOpacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
                  const scale = useTransform(scrollYProgress, [start, end], [1.15, 1]);

                  return (
                    <motion.div key={`img-${step.id}`} style={{ position: 'absolute', inset: 0, opacity: imageOpacity, scale }}>
                      <MultiImagePlayer images={step.images} isActive={true} />
                      {step.id === '02' && <motion.div style={{ position: 'absolute', inset: '15%', border: '2px solid rgba(167,217,72,0.5)', borderRadius: '1rem', boxShadow: '0 0 20px rgba(167,217,72,0.3)' }} />}
                      {step.id === '06' && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(167,217,72,0.3) 0%, rgba(0,0,0,0) 70%)' }} />}
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* FINAL CTA SCREEN */}
          <motion.div 
            style={{ 
              position: 'absolute', inset: 0, zIndex: 50,
              backgroundColor: 'var(--primary-green)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              opacity: useTransform(scrollYProgress, [totalSteps / (totalSteps + 1), 1], [0, 1]),
              pointerEvents: useTransform(scrollYProgress, (val) => val > 0.95 ? 'auto' : 'none')
            }}
          >
            <motion.div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
              <Image src="/images/atom-success.jpeg" fill style={{ objectFit: 'cover' }} alt="Background" sizes="100vw" />
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--primary-green)', opacity: 0.7 }} />
            </motion.div>
            
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontFamily: 'Sora', marginBottom: '1rem' }}>Affordable Toilet<br/>Ownership Model</h2>
              <p style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', color: 'var(--accent-green)', marginBottom: '3rem' }}>Your Lasting Solution</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="#partner" className="btn-primary" style={{ backgroundColor: 'var(--accent-green)', color: 'var(--primary-green)' }}>Partner With Us</a>
              </div>
            </div>
          </motion.div>

          {/* PROGRESS LINE */}
          <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', height: '50vh', width: '4px', backgroundColor: 'rgba(255,255,255,0.1)', zIndex: 40, borderRadius: '2px' }}>
            <motion.div 
              style={{ width: '100%', height: '100%', backgroundColor: 'var(--accent-green)', scaleY: scrollYProgress, transformOrigin: 'top', borderRadius: '2px', boxShadow: '0 0 10px var(--accent-green)' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
