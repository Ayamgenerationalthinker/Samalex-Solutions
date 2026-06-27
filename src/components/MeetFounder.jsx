'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function MeetFounder() {
  return (
    <section className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--white)', color: 'var(--text-dark)', overflow: 'hidden' }}>
      {/* Background ambient glows */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(130,195,65,0.1) 0%, rgba(27, 75, 53,0) 70%)', filter: 'blur(40px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(130,195,65,0.1) 0%, rgba(27, 75, 53,0) 70%)', filter: 'blur(40px)', zIndex: 0 }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* CEO Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="responsive-img-container"
            style={{ 
              position: 'relative', 
              borderRadius: '1.5rem', 
              overflow: 'hidden', 
              boxShadow: '0 25px 50px rgba(27, 75, 53,0.4)',
              aspectRatio: '3/4'
            }}
          >
            <Image 
              src="/images/Sammy.jpg" 
              alt="Samuel Gyabah - Founder & CEO" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          {/* Samuel Gyabah Profile (Glassy) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'var(--white)',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(27, 75, 53, 0.1)',
              boxShadow: '0 10px 30px rgba(27, 75, 53,0.05)'
            }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontFamily: 'Sora', color: 'var(--button-green)', marginBottom: '0.5rem' }}>Samuel Gyabah</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--button-green)', marginBottom: '2rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Founder & CEO</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--button-green)' }}>
              <p>
                Samuel Gyabah knew so well from being born and bred in Pokuase how lack of decent toilet facilities has led to poor sanitation practices and escalation in diseases such as cholera, typhoid, and diarrhoea in the Ga West Municipal Assembly. He knew too well how girls missed school while menstruating due to lack of decent toilets, because he sat in class with them.
              </p>
              
              <p>
                In 2013, he ditched his microfinance job and devoted full time to eradicating open defecation and promoting good sanitation practices among his people. He did this by building biodigester toilet facilities on subsidy for schools and individuals. His Sanitation armies set up in Junior High schools trained students to adopt good sanitation practices.
              </p>

              <Link href="/founder" passHref>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-block',
                    padding: '0.75rem 2rem',
                    marginTop: '1rem',
                    backgroundColor: 'var(--button-green)',
                    color: 'var(--white)',
                    fontWeight: 'bold',
                    borderRadius: '2rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: '0 4px 14px rgba(27, 75, 53, 0.2)'
                  }}
                >
                  Read More
                </motion.a>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
