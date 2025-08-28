import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import AboutUsSection from '@/components/AboutUsSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('inicio');

  // Scrollspy con IntersectionObserver
  useEffect(() => {
    const sectionIds = ['inicio', 'carta', 'nosotros', 'ubicacion', 'contacto'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60% 0px',
        threshold: 0.4,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navigateToMenu = () => {
    setCurrentSection('carta');
    const element = document.getElementById('carta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      
      <main>
        <HeroSection onNavigateToMenu={navigateToMenu} />
        <MenuSection />
        <AboutUsSection />
        <LocationSection />
        
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
