import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Meet the Founder | Samalex Solutions',
  description: 'Read the full story of Samuel Gyabah, the founder of Samalex Solutions.',
};

export default function FounderPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <div style={{ paddingTop: '120px', flex: 1 }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ position: 'relative', width: '250px', height: '250px', margin: '0 auto 2rem auto', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/images/Sammy.jpg" 
                alt="Samuel Gyabah - Founder & CEO" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>Samuel Gyabah</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--primary-green)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Founder & CEO</p>
          </div>

          <div style={{ backgroundColor: 'var(--white)', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', fontSize: '1.125rem', lineHeight: 1.8, color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Samuel Gyabah knew so well from being born and bred in Pokuase how lack of decent toilet facilities has led to poor sanitation practices and escalation in diseases such as cholera, typhoid, and diarrhoea in the Ga West Municipal Assembly. He knew too well how girls missed school while menstruating due to lack of decent toilets, because he sat in class with them.
            </p>
            <p>
              As if planned, he met a man in 2012 who introduced and trained him on how to design and install biodigester toilets. At the time, he was working in a microfinance company and decided that he would use acquired skills to help his community, Pokuase and its surrounding towns such as Dedeman and Katapor. 'Each time I moved around in my area I see people in long queues waiting for their turn to use the only public toilet in the area,' he said. 'Due to this, open defecation was rampant and we recorded high cases of diseases as a result so I decided to do something about it,' Gyabah added.
            </p>
            <p>
              In 2013, he ditched his microfinance job and devoted full time to eradicating open defecation and promoting good sanitation practices among his people. He did this by building biodigester toilet facilities on subsidy for schools and individuals. His Sanitation armies set up in Junior High schools trained students to adopt good sanitation practices.
            </p>
            <p>
              In 2014, he was nominated for Ghana's Game Changers competition organized by Reach for Change and erstwhile Viasat 1 TV and emerged winner with GH₵50,000 cash prize that enabled him to properly set up an office and recruit staff. The following year in 2016, he was introduced to the Government of Ghana’s Greater Accra Municipal Assembly (GAMA) Water and Sanitation project—an initiative by the government to build toilets for deprived communities on subsidy.
            </p>
            <p>
              Today through the GAMA project, he's built about 4,000 toilet facilities in Pokuase, Katapor, Dedeman, Okyerekomfo, Akramaman, Tsinto, Akyiato, Donkoman among others. He also has a staff strength of 50 made up of permanent staff and contractors. Even with a subsidy of 70 percent from government, he identified more households that could not afford a toilet. The people of Pokuase and surrounding town are mostly petty traders. 'I realised that even with the government’s subsidy of 70 per cent, there were still people who can't afford although they needed it most so I decided to provide them with free toilets'.
            </p>
            <p>
              From manufacturing to installation, he builds free toilets for these people which included the aged and disabled.
            </p>
            <p>
              'We had two toilets built in Dedeman by the World Vision in the 1980s with 3 towns depending on it all these years. In 2019, one of the toilets blasted because the pressure was heavy,' says Oblitey Commey, a resident. 'We had to depend on the one left which was also dilapidated. We are grateful for Samalex' intervention because it would have been tough for us in this Coronavirus era during the lockdown without a toilet,' he added.
            </p>
            <p>
              Assembly member of Dedeman Electoral area (Part of Ga West Municipal Assembly) Beatrice Agbelenyo, a beneficiary narrates a horrific incident where she was nearly bitten by a snake while using the only toilet in her community. ‘When I tried to enter the toilet that day, I saw a huge snake lurking around. I run back in shock and vouch never to go there again so somehow I began practicing open defecation.' Today, she's a proud owner of a biodigester toilet and is helping people in her Electoral area to obtain a toilet through a partnership with Samalex Solutions. She explains that open defecation has become a thing of the past and cases of cholera, typhoid and malaria have subsided.
            </p>
            <p>
              Gyabah hopes to in the future introduce numerous technologies to reduce cost and improve productivity. Gyabah is not only working to render communities safe from diseases, he wants a complete behavioral and mental shift on how people relate to sanitation.
            </p>
            
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-green)', marginBottom: '1rem', fontWeight: 'bold' }}>Published Features & Media</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>
                  <a 
                    href="https://www.modernghana.com/news/565787/samuel-gyabah-wins-viasat-1-maiden-game-changer-challenge.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#4b5563', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}
                    onMouseOver={(e) => e.target.style.color = 'var(--primary-green)'}
                    onMouseOut={(e) => e.target.style.color = '#4b5563'}
                  >
                    🔗 Samuel Gyabah Wins Viasat-1 Maiden Game Changer Challenge
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.modernghana.com/lifestyle/10057/the-man-making-money-from-toilet-in-ghana.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#4b5563', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}
                    onMouseOver={(e) => e.target.style.color = 'var(--primary-green)'}
                    onMouseOut={(e) => e.target.style.color = '#4b5563'}
                  >
                    🔗 The Man Making Money From Toilet In Ghana
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
