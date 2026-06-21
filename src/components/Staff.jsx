'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Mail } from 'lucide-react';

const staffMembers = [
  {
    name: 'Samuel Gyabah',
    role: 'Founder & CEO',
    image: '/images/CEO.jpg',
    bio: 'Pioneering social entrepreneur driving sanitation impact across Ghana with over a decade of experience.',
    linkedin: '#',
    email: 'samalexsolution24@gmail.com',
  },
  {
    name: 'Operations Lead',
    role: 'Field Operations Manager',
    image: '/images/1.jpg',
    bio: 'Coordinates on-ground project delivery, community engagement, and field team management.',
    linkedin: '#',
    email: 'samalexsolution24@gmail.com',
  },
  {
    name: 'Technical Expert',
    role: 'Biodigester Engineer',
    image: '/images/2.jpg',
    bio: 'Designs and installs our award-winning biodigester systems with precision and environmental care.',
    linkedin: '#',
    email: 'samalexsolution24@gmail.com',
  },
  {
    name: 'Community Officer',
    role: 'WASH Education Coordinator',
    image: '/images/3.jpg',
    bio: 'Leads hygiene education campaigns, empowering communities with life-changing WASH knowledge.',
    linkedin: '#',
    email: 'samalexsolution24@gmail.com',
  },
  {
    name: 'Finance Officer',
    role: 'Finance & Administration',
    image: '/images/4.jpg',
    bio: 'Manages financial planning, reporting, and administration to keep Samalex running smoothly.',
    linkedin: '#',
    email: 'samalexsolution24@gmail.com',
  },
  {
    name: 'Project Coordinator',
    role: 'Partnerships & Projects',
    image: '/images/5.jpg',
    bio: 'Bridges community needs with NGO partnerships, expanding Samalex\'s reach and impact.',
    linkedin: '#',
    email: 'samalexsolution24@gmail.com',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } },
};

export default function Staff() {
  return (
    <section id="team" className="section-padding" style={{ backgroundColor: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative elements */}
      <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(55, 179, 74, 0.08) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212, 244, 40, 0.06) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span style={{ color: 'var(--secondary-green)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.875rem', textTransform: 'uppercase' }}>
              The People Behind Our Mission
            </span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>Meet Our Team</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
              Passionate professionals dedicated to transforming sanitation across Ghana — one community at a time.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="staff-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {staffMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 28px 60px rgba(4, 57, 28, 0.15)' }}
              className="staff-card"
            >
              {/* Image */}
              <div className="staff-img-wrapper">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 90vw, (max-width: 992px) 45vw, 30vw"
                />
                {/* Green overlay on hover */}
                <div className="staff-img-overlay" />
              </div>

              {/* Info */}
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora', color: 'var(--primary-green)', marginBottom: '0.25rem' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--secondary-green)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1rem' }}>
                  {member.role}
                </p>
                <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {member.bio}
                </p>

                {/* Social Links */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    style={{
                      width: '38px', height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--primary-green)',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(4, 57, 28, 0.15)'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-green)'; e.currentTarget.style.color = 'var(--white)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-light)'; e.currentTarget.style.color = 'var(--primary-green)'; }}
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href={member.linkedin}
                    aria-label={`LinkedIn profile of ${member.name}`}
                    style={{
                      width: '38px', height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--primary-green)',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(4, 57, 28, 0.15)'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-green)'; e.currentTarget.style.color = 'var(--white)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-light)'; e.currentTarget.style.color = 'var(--primary-green)'; }}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
