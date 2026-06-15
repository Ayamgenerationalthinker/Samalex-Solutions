'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

const categories = ['All', 'Construction', 'Schools', 'Communities'];

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1541888086225-eb43fbfa07cb?w=600&h=450&fit=crop', category: 'Construction', title: 'Team on Site', width: 600, height: 450 },
  { id: 2, src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=800&fit=crop', category: 'Communities', title: 'Community Outreach', width: 600, height: 800 },
  { id: 3, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=600&fit=crop', category: 'Schools', title: 'School Education', width: 600, height: 600 },
  { id: 4, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop', category: 'Construction', title: 'Installation', width: 600, height: 450 },
  { id: 5, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=800&fit=crop', category: 'Communities', title: 'Empowerment', width: 600, height: 800 },
  { id: 6, src: 'https://images.unsplash.com/photo-1427504494785-319ce515cd69?w=600&h=450&fit=crop', category: 'Schools', title: 'Sanitation Facilities', width: 600, height: 450 }
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
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'block', width: '100%' }}
                >
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    width={item.width}
                    height={item.height}
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '1rem' }}
                  />
                </motion.div>
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
              <Image 
                src={selectedImg.src} 
                alt={selectedImg.title}
                width={selectedImg.width}
                height={selectedImg.height}
                style={{ maxWidth: '100%', maxHeight: '90vh', width: 'auto', height: 'auto', borderRadius: '0.5rem', objectFit: 'contain' }}
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
