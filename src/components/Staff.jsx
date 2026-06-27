'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const teamMembers = [
  { name: 'Dr. Kwame Ansah', role: 'Head of Operations', bio: 'Oversees nationwide biodigester installations and ensures operational excellence.' },
  { name: 'Abena Osei', role: 'Community Outreach Lead', bio: 'Drives our WASH education programs and builds strong community relationships.' },
  { name: 'Kofi Mensah', role: 'Lead Engineer', bio: 'Designs and scales sustainable sanitation infrastructure tailored for Ghanaian communities.' },
  { name: 'Akua Nsiah', role: 'Finance Director', bio: 'Manages the financial strategy to keep the ATOM program affordable for households.' },
  { name: 'Yaw Frimpong', role: 'Project Manager', bio: 'Coordinates NGO and institutional partnerships for large-scale school sanitation projects.' },
  { name: 'Ama Serwaa', role: 'Quality Assurance', bio: 'Conducts rigorous post-installation inspections and ensures long-term system reliability.' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } },
};

export default function Staff() {
  return (
    <section id="team" className="section-padding" style={{ backgroundColor: 'var(--bg-light-green)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative blobs */}
      <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(130, 195, 65, 0.07) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(130, 195, 65, 0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span style={{ color: 'var(--primary-green)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.875rem', textTransform: 'uppercase' }}>
              The People Behind Our Mission
            </span>
            <h2 className="section-title" style={{ marginTop: '0.75rem', color: 'var(--button-green)' }}>Meet Our Team</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0', color: 'var(--button-green)' }}>
              Passionate professionals dedicated to transforming sanitation across Ghana — one community at a time.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          className="staff-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {teamMembers.map((member, index) => (
              <motion.div key={index} variants={cardVariants} className="staff-card">
                <div className="staff-img-wrapper" style={{ background: 'linear-gradient(135deg, rgba(130,195,65,0.2) 0%, rgba(27,75,53,0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{
                    width: '90px', height: '90px',
                    borderRadius: '50%',
                    background: 'var(--white)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <User size={44} color="var(--primary-green)" strokeWidth={1.5} />
                  </div>
                </div>

                <div style={{ padding: '1.75rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora', color: 'var(--button-green)', marginBottom: '0.25rem' }}>{member.name}</h3>
                  <p style={{ color: 'var(--primary-green)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
                  <p style={{ color: 'var(--button-green)', fontSize: '0.95rem', lineHeight: 1.6 }}>{member.bio}</p>
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
