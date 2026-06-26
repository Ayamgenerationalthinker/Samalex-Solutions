'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <p style={{ color: '#4b5563', fontSize: '1.125rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Ready to transform sanitation in your community? Contact us today to discuss partnerships, projects, or our ATOM program.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-green)' }}><MapPin size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Location</h4>
                  <p style={{ color: '#6b7280' }}>Presby Road, Pokuase, Ga North, Ghana</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-green)' }}><Phone size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Phone</h4>
                  <p style={{ color: '#6b7280' }}>0557952992</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-green)' }}><Mail size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Email</h4>
                  <p style={{ color: '#6b7280' }}>samalexsolution24@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{ backgroundColor: 'var(--white)' }}
          >
            <form action="https://formsubmit.co/samalexsolution24@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* FormSubmit Config */}
              <input type="hidden" name="_subject" value="New Partnership Inquiry - Samalex Solutions" />
              <input type="hidden" name="_autoresponse" value="Thank you for your interest in partnering with Samalex Solutions! We have received your inquiry and our team will review it and get back to you shortly. Together, we can make sustainable sanitation accessible to all." />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Name</label>
                  <input type="text" name="name" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Organization</label>
                  <input type="text" name="organization" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Email</label>
                  <input type="email" name="email" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Phone</label>
                  <input type="tel" name="phone" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Project Type</label>
                <select name="project_type" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', outline: 'none', backgroundColor: 'var(--white)' }}>
                  <option>Household Sanitation</option>
                  <option>School Sanitation</option>
                  <option>Community Sanitation</option>
                  <option>NGO / CSR Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Message</label>
                <textarea name="message" rows="4" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', outline: 'none', resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Send Message</button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
