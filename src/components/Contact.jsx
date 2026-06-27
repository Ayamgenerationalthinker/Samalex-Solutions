'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--button-green)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ color: 'var(--primary-green)' }}>Get In Touch</h2>
            <p style={{ color: 'var(--white)', fontSize: '1.125rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Ready to transform sanitation in your community? Contact us today to discuss partnerships, projects, or our ATOM program.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-green)' }}><MapPin size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--primary-green)', marginBottom: '0.25rem' }}>Location</h4>
                  <p style={{ color: 'var(--white)' }}>Presby Road, Pokuase, Ga North, Ghana</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-green)' }}><Phone size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--primary-green)', marginBottom: '0.25rem' }}>Phone</h4>
                  <p style={{ color: 'var(--white)' }}>0557952992</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-green)' }}><Mail size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--primary-green)', marginBottom: '0.25rem' }}>Email</h4>
                  <p style={{ color: 'var(--white)' }}>samalexsolution24@gmail.com</p>
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
            style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
          >
            <form action="https://formsubmit.co/samalexsolution24@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* FormSubmit Config */}
              <input type="hidden" name="_subject" value="New Partnership Inquiry - Samalex Solutions" />
              <input type="hidden" name="_autoresponse" value="Thank you for your interest in partnering with Samalex Solutions! We have received your inquiry and our team will review it and get back to you shortly. Together, we can make sustainable sanitation accessible to all." />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--button-green)' }}>Name</label>
                  <input type="text" name="name" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--primary-green)', outline: 'none', backgroundColor: 'var(--white)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--button-green)' }}>Organization</label>
                  <input type="text" name="organization" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--primary-green)', outline: 'none', backgroundColor: 'var(--white)' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--button-green)' }}>Email</label>
                  <input type="email" name="email" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--primary-green)', outline: 'none', backgroundColor: 'var(--white)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--button-green)' }}>Phone</label>
                  <input type="tel" name="phone" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--primary-green)', outline: 'none', backgroundColor: 'var(--white)' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--button-green)' }}>Project Type</label>
                <select name="project_type" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--primary-green)', outline: 'none', backgroundColor: 'var(--white)' }}>
                  <option>Household Sanitation</option>
                  <option>School Sanitation</option>
                  <option>Community Sanitation</option>
                  <option>NGO / CSR Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--button-green)' }}>Message</label>
                <textarea name="message" rows="4" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--primary-green)', outline: 'none', resize: 'vertical', backgroundColor: 'var(--white)' }}></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Send Message</button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
