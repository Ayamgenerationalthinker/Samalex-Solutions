'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function MeetFounder() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--primary-green)', color: 'var(--white)', overflow: 'hidden' }}>
      {/* Background ambient glows */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(167,217,72,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(167,217,72,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 0 }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
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
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
              aspectRatio: '3/4',
              position: 'sticky',
              top: '100px'
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
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontFamily: 'Sora', color: 'var(--accent-green)', marginBottom: '0.5rem' }}>Samuel Gyabah</h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Founder & CEO</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
              <p>
                Samuel Gyabah knew so well from being born and bred in Pokuase how lack of decent toilet facilities has led to poor sanitation practices and escalation in diseases such as cholera, typhoid, and diarrhoea in the Ga West Municipal Assembly. He knew too well how girls missed school while menstruating due to lack of decent toilets, because he sat in class with them.
              </p>
              
              <p>
                In 2013, he ditched his microfinance job and devoted full time to eradicating open defecation and promoting good sanitation practices among his people. He did this by building biodigester toilet facilities on subsidy for schools and individuals. His Sanitation armies set up in Junior High schools trained students to adopt good sanitation practices.
              </p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                  >
                    <p>
                      In 2014, he was nominated for Ghana's Game Changers competition organized by Reach for Change and erstwhile Viasat 1 TV and emerged winner with GH₵50,000 cash prize that enabled him to properly set up an office and recruit staff. The following year in 2016, he was introduced to the Government of Ghana’s Greater Accra Municipal Assembly (GAMA) Water and Sanitation project—an initiative by the government to build toilets for deprived communities on subsidy.
                    </p>
                    <p>
                      Today through the GAMA project, he's built about 4,000 toilet facilities in Pokuase, Katapor, Dedeman, Okyerekomfo, Akramaman, Tsinto, Akyiato, Donkoman among others. He also has a staff strength of 50 made up of permanent staff and contractors. 'I realised that even with the government’s subsidy of 70 per cent, there were still people who can't afford although they needed it most so I decided to provide them with free toilets'. From manufacturing to installation, he builds free toilets for these people which included the aged and disabled.
                    </p>
                    <p>
                      'We had two toilets built in Dedeman by the World Vision in the 1980s with 3 towns depending on it all these years. In 2019, one of the toilets blasted because the pressure was heavy,' says Oblitey Commey, a resident. 'We had to depend on the one left which was also dilapidated. We are grateful for Samalex' intervention because it would have been tough for us in this Coronavirus era during the lockdown without a toilet.'
                    </p>
                    <p>
                      Assembly member of Dedeman Electoral area Beatrice Agbelenyo narrates a horrific incident where she was nearly bitten by a snake while using the only toilet in her community. Today, she's a proud owner of a biodigester toilet and is helping people in her Electoral area to obtain toilets through a partnership with Samalex Solutions. Open defecation has become a thing of the past and cases of cholera, typhoid, and malaria have subsided. Gyabah hopes to in the future introduce numerous technologies to reduce cost and improve productivity, and wants a complete behavioral and mental shift on how people relate to sanitation.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-green)',
                  fontWeight: 'bold',
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0,
                  display: 'inline-block',
                  width: 'fit-content',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px'
                }}
              >
                {isExpanded ? 'Read Less' : 'Read More...'}
              </button>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-green)', marginBottom: '1rem' }}>Published Features & Media</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li>
                    <a 
                      href="https://www.modernghana.com/news/565787/samuel-gyabah-wins-viasat-1-maiden-game-changer-challenge.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      🔗 Samuel Gyabah Wins Viasat-1 Maiden Game Changer Challenge
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.modernghana.com/lifestyle/10057/the-man-making-money-from-toilet-in-ghana.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      🔗 The Man Making Money From Toilet In Ghana
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
