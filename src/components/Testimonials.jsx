'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { quote: "Samalex Solutions completely transformed our school's sanitation. The new biodigester toilets are clean, odor-free, and save us water.", author: "School Headmaster", location: "Ga North Municipality" },
  { quote: "Through the ATOM program, I was finally able to afford a modern toilet for my family. It has restored our dignity.", author: "Community Member", location: "Pokuase" },
  { quote: "Their team was professional from inspection to handover. Highly recommended for any institutional projects.", author: "NGO Partner", location: "Accra" }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--button-green)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 className="section-title" style={{ color: 'var(--primary-green)' }}>What People Say</h2>
        
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="testimonials-slider"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '1.5rem',
            padding: '3rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <p className="testimonial-quote" style={{ color: 'var(--white)' }}>
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--primary-green)', fontWeight: 600 }}>{testimonials[currentIndex].author}</h4>
                <span style={{ color: 'var(--white)', fontSize: '0.875rem' }}>{testimonials[currentIndex].location}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: index === currentIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: index === currentIndex ? 'var(--primary-green)' : 'rgba(255,255,255,0.3)',
                border: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
