'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const steps = [
  { 
    id: '01', 
    title: 'Registration', 
    desc: 'Residents begin the process by registering for the Affordable Toilet Ownership Model.', 
    images: ['/images/atom-registration.jpeg'] 
  },
  { 
    id: '02', 
    title: 'Inspection', 
    desc: 'Our team assesses the site and identifies the most suitable sanitation solution.', 
    images: ['/images/atom-inspection.jpeg'] 
  },
  { 
    id: '03', 
    title: 'Construction', 
    desc: 'The sanitation facility is professionally constructed and installed.', 
    images: [
      '/images/atom-construction.jpeg', 
      '/images/atom-inspection.jpeg'
    ] // Simulating multiple construction photos
  },
  { 
    id: '04', 
    title: 'Education & Handover', 
    desc: 'Users receive training on proper usage, hygiene practices, and maintenance.', 
    images: ['/images/atom-handover.jpeg'] 
  },
  { 
    id: '05', 
    title: 'Payment', 
    desc: 'Flexible payment options support sustainable toilet ownership.', 
    images: ['/images/atom-payment.jpeg'] 
  },
  { 
    id: '06', 
    title: 'Joy In Toilet', 
    desc: 'Families enjoy a clean, safe, and dignified sanitation experience.', 
    images: ['/images/atom-success.jpeg'] 
  }
];

// Helper to handle multiple images
const ImagePlayer = ({ images, isActive }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isActive || images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isActive, images.length]);

  if (images.length === 1) {
    return (
      <motion.img
        src={images[0]}
        alt="Step Visual"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        initial={{ scale: 1.15 }}
        animate={{ scale: isActive ? 1 : 1.15 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
    );
  }

  return (
    <AnimatePresence mode="popLayout">
      <motion.img
        key={index}
        src={images[index]}
        alt="Step Visual Multiple"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
      />
    </AnimatePresence>
  );
};

export default function AtomStory() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stepCount = steps.length + 1; // +1 for the final full screen moment

  return (
    <section 
      ref={containerRef} 
      style={{ backgroundColor: '#071013', color: 'var(--white)', position: 'relative' }}
      className="hidden-mobile-horizontal"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .desktop-scroll-story { display: none !important; }
          .mobile-horizontal-story { display: flex !important; overflow-x: auto; scroll-snap-type: x mandatory; gap: 2rem; padding: 2rem; }
          .mobile-horizontal-story > div { scroll-snap-align: center; flex: 0 0 85vw; }
        }
        @media (min-width: 769px) {
          .mobile-horizontal-story { display: none !important; }
        }
      `}} />

      {/* MOBILE HORIZONTAL EXPERIENCE */}
      <div className="mobile-horizontal-story" style={{ minHeight: '100vh', alignItems: 'center' }}>
        <div style={{ scrollSnapAlign: 'start', flex: '0 0 100vw', padding: '2rem' }}>
           <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-green)', fontFamily: 'Sora', marginBottom: '1rem' }}>How the ATOM Works</h2>
           <p style={{ fontSize: '1.25rem', color: '#8892b0' }}>A simple process designed to bring safe sanitation closer to every household.</p>
        </div>
        {steps.map((step) => (
          <div key={step.id} style={{ backgroundColor: '#112240', borderRadius: '1.5rem', overflow: 'hidden' }}>
            <div style={{ height: '300px', position: 'relative' }}>
              <img src={step.images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={step.title} />
            </div>
            <div style={{ padding: '2rem' }}>
              <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>STEP {step.id}</span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{step.title}</h3>
              <p style={{ color: '#CCD6F6' }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP ADVANCED SCROLL EXPERIENCE */}
      <div className="desktop-scroll-story" style={{ height: `${stepCount * 100}vh`, width: '100%' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          
          <div className="container" style={{ display: 'flex', width: '100%', height: '100%' }}>
            
            {/* LEFT TEXT CONTENT */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '4rem', zIndex: 10 }}>
              
              {/* Introduction Header that fades out */}
              <motion.div 
                style={{ 
                  marginBottom: '2rem',
                  opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]),
                  y: useTransform(scrollYProgress, [0, 0.05], [0, -50]),
                  position: 'absolute', top: '30%'
                }}
              >
                <h2 style={{ fontSize: '3.5rem', color: 'var(--accent-green)', fontFamily: 'Sora', lineHeight: 1.1 }}>How the Affordable Toilet Ownership Model Works</h2>
                <p style={{ fontSize: '1.25rem', color: '#8892b0', marginTop: '1rem', maxWidth: '500px' }}>A simple process designed to bring safe sanitation closer to every household.</p>
              </motion.div>

              <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center' }}>
                {steps.map((step, index) => {
                  const start = (index + 0.1) / stepCount;
                  const peak = (index + 0.5) / stepCount;
                  const end = (index + 0.9) / stepCount;
                  
                  const isActive = useTransform(scrollYProgress, [start, peak, end], [0, 1, 0]);
                  const yOffset = useTransform(scrollYProgress, [start, peak, end], [60, 0, -60]);

                  return (
                    <motion.div
                      key={step.id}
                      style={{
                        position: 'absolute',
                        opacity: isActive,
                        y: yOffset,
                        pointerEvents: 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.125rem', letterSpacing: '2px', color: 'var(--secondary-green)', fontWeight: 600 }}>STEP {step.id}</span>
                        <motion.div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', opacity: isActive }} />
                      </div>
                      <h3 style={{ fontSize: '3.5rem', margin: '0 0 1.5rem 0', fontFamily: 'Sora', lineHeight: 1.1 }}>{step.title}</h3>
                      <p style={{ fontSize: '1.5rem', color: '#CCD6F6', lineHeight: 1.6, maxWidth: '500px' }}>{step.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT IMAGE CONTENT */}
            <div style={{ flex: 1.2, position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', height: '75vh', position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
                {steps.map((step, index) => {
                  const start = index / stepCount;
                  const peak = (index + 0.5) / stepCount;
                  const end = (index + 1) / stepCount;
                  
                  const imageOpacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);

                  return (
                    <motion.div
                      key={`img-container-${step.id}`}
                      style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        opacity: imageOpacity,
                      }}
                    >
                      <ImagePlayer images={step.images} isActive={true} />
                      
                      {/* Step specific visual effects */}
                      {step.id === '02' && (
                        <motion.div style={{ position: 'absolute', inset: '10%', border: '2px dashed var(--accent-green)', borderRadius: '1rem', opacity: 0.5 }} />
                      )}
                      {step.id === '06' && (
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(167,217,72,0.3) 0%, rgba(0,0,0,0) 70%)' }} />
                      )}
                    </motion.div>
                  );
                })}
                <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px rgba(7, 16, 19, 0.9)' }} />
              </div>
            </div>

          </div>

          {/* FINAL MOMENT OVERLAY */}
          <motion.div 
            style={{ 
              position: 'absolute', inset: 0, zIndex: 50,
              backgroundColor: 'var(--primary-green)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              opacity: useTransform(scrollYProgress, [(stepCount - 1) / stepCount, 1], [0, 1]),
              pointerEvents: useTransform(scrollYProgress, (val) => val > 0.95 ? 'auto' : 'none')
            }}
          >
            <h2 style={{ fontSize: '4rem', fontFamily: 'Sora', marginBottom: '1rem', textAlign: 'center' }}>Affordable Toilet<br/>Ownership Model</h2>
            <p style={{ fontSize: '2rem', color: 'var(--accent-green)', marginBottom: '3rem' }}>Your Lasting Solution</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#partner" className="btn-primary" style={{ backgroundColor: 'var(--accent-green)', color: 'var(--primary-green)' }}>Partner With Us</a>
              <a href="#contact" className="btn-secondary" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>Request A Consultation</a>
            </div>
          </motion.div>

          {/* PROGRESS INDICATOR */}
          <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', height: '60vh', width: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', zIndex: 40 }}>
            <motion.div 
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--accent-green)',
                scaleY: scrollYProgress,
                transformOrigin: 'top',
                borderRadius: '2px',
                boxShadow: '0 0 10px var(--accent-green)'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
