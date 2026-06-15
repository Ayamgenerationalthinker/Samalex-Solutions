'use client';

import { motion } from 'framer-motion';
import { Home, School, Users, Leaf, BookOpen, Building } from 'lucide-react';

const solutions = [
  { title: 'Household Sanitation', icon: Home, desc: 'Safe and modern toilet facilities designed for residential comfort and dignity.' },
  { title: 'School Sanitation', icon: School, desc: 'Durable, hygienic, and scalable solutions tailored for educational institutions.' },
  { title: 'Community Sanitation', icon: Users, desc: 'Accessible public facilities built to serve high-density neighborhoods.' },
  { title: 'Biodigester Systems', icon: Leaf, desc: 'Eco-friendly, low-water waste treatment technology that generates organic manure.' },
  { title: 'Hygiene Education', icon: BookOpen, desc: 'Community programs promoting proper sanitation practices and health awareness.' },
  { title: 'Institutional Projects', icon: Building, desc: 'Large-scale sanitation partnerships with NGOs and government agencies.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function Solutions() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Comprehensive, sustainable, and scalable sanitation interventions tailored for every context.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}
        >
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              style={{
                backgroundColor: 'var(--bg-light)',
                padding: '3rem 2rem',
                borderRadius: '1rem',
                border: '1px solid rgba(0,0,0,0.03)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ 
                width: '64px', height: '64px', 
                borderRadius: '1rem', 
                backgroundColor: 'rgba(124, 194, 66, 0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--primary-green)'
              }}>
                <item.icon size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>{item.title}</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
