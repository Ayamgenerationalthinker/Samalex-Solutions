import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Solutions from '@/components/Solutions';
import AtomStory from '@/components/AtomStory';
import TechInfographic from '@/components/TechInfographic';
import Gallery from '@/components/Gallery';
import WhyPartner from '@/components/WhyPartner';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Solutions />
      <AtomStory />
      <TechInfographic />
      <Gallery />
      <WhyPartner />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
