import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import TimelineSection from './components/TimelineSection';
import Testimonials from './components/Testimonials';
import TeamSection from './components/TeamSection';
import PrivacySection from './components/PrivacySection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-trae-green/30 selection:text-white">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <VideoSection />
          <TimelineSection />
          <Testimonials />
          <TeamSection />
          <PrivacySection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;