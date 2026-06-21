import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import ImpactStory from '@/components/ImpactStory';
import Solutions from '@/components/Solutions';
import AtomStory from '@/components/AtomStory';
import TechInfographic from '@/components/TechInfographic';
import Gallery from '@/components/Gallery';
import WhyPartner from '@/components/WhyPartner';
import FeaturedProject from '@/components/FeaturedProject';
import Testimonials from '@/components/Testimonials';
import MeetFounder from '@/components/MeetFounder';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <ImpactStory />
      <Solutions />
      <AtomStory />
      <TechInfographic />
      <Gallery />
      <WhyPartner />
      <FeaturedProject />
      <Testimonials />
      <MeetFounder />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
