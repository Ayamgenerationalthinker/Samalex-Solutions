'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 100
      }}
    >
      <a 
        href="#contact"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          backgroundColor: 'var(--primary-green)',
          color: 'var(--white)',
          padding: '1rem 1.5rem',
          borderRadius: '50px',
          boxShadow: '0 10px 25px rgba(27, 75, 53, 0.4)',
          textDecoration: 'none',
          fontWeight: 600,
          fontFamily: 'Inter',
          border: '2px solid rgba(255,255,255,0.1)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 15px 30px rgba(27, 75, 53, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(27, 75, 53, 0.4)';
        }}
      >
        <MessageSquare size={20} />
        Partner With Us
      </a>
    </motion.div>
  );
}
