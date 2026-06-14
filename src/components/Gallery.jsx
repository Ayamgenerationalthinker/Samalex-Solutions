'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = ['All', 'Construction', 'Schools', 'Communities'];

const galleryItems = [
  { id: 1, src: '/images/atom-construction.jpeg', category: 'Construction', title: 'Biodigester Installation' },
  { id: 2, src: '/images/atom-inspection.jpeg', category: 'Communities', title: 'Site Inspection' },
  { id: 3, src: '/images/atom-handover.jpeg', category: 'Schools', title: 'Facility Handover' },
  { id: 4, src: '/images/atom-payment.jpeg', category: 'Communities', title: 'ATOM Registration' },
  { id: 5, src: '/images/atom-success.jpeg', category: 'Schools', title: 'Completed Project' }
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(i => i.category === filter);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">Our Impact Gallery</h2>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                backgroundColor: filter === cat ? 'var(--primary-green)' : '#f3f4f6',
                color: filter === cat ? 'var(--white)' : '#4b5563',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout style={{ columnCount: 3, columnGap: '1.5rem' }}>
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'relative', marginBottom: '1.5rem', breakInside: 'avoid', borderRadius: '1rem', overflow: 'hidden', cursor: 'zoom-in' }}
                onClick={() => setSelectedImg(item)}
                className="gallery-item"
              >
                <motion.img 
                  src={item.src} 
                  alt={item.title} 
                  style={{ width: '100%', display: 'block', borderRadius: '1rem' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Overlay */}
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 77, 47, 0.7)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} className="overlay">
                  <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>{item.category}</span>
                  <h4 style={{ color: 'var(--white)', fontSize: '1.25rem' }}>{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom CSS for overlay hover */}
        <style dangerouslySetInnerHTML={{__html: `
          .gallery-item:hover .overlay { opacity: 1 !important; }
        `}} />

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              >
                <X size={40} />
              </button>
              <motion.img 
                src={selectedImg.src} 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '0.5rem', objectFit: 'contain' }}
              />
              <div style={{ position: 'absolute', bottom: '2rem', color: 'white', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem' }}>{selectedImg.title}</h3>
                <p style={{ color: 'var(--accent-green)' }}>{selectedImg.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
