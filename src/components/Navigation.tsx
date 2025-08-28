import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import barInteriorImage from '@/assets/bar-interior.jpg';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'carta', label: 'Carta' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'ubicacion', label: 'Ubicación' },
  ];

  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-sand shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <img src={barInteriorImage} alt="Logo" className="w-10 h-10 rounded object-cover" />
            <span className="font-script text-2xl font-bold text-ocean hover:text-ocean-light transition-colors">El Carajo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-base md:text-lg font-semibold tracking-wide transition-colors hover:text-ocean relative",
                  currentSection === item.id 
                    ? "text-ocean after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-ocean" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Icons & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/elcarajo_mazagon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-ocean transition-colors"
            >
              <Instagram size={20} />
            </a>
            <Button 
              onClick={() => scrollToSection('carta')}
              className="bg-gradient-ocean hover:bg-ocean-dark text-white shadow-nautical"
            >
              Ver Carta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sand">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-left py-2 font-medium transition-colors",
                    currentSection === item.id ? "text-ocean" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-sand">
                <a 
                  href="https://www.instagram.com/elcarajo_mazagon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-ocean transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <Button 
                  onClick={() => scrollToSection('carta')}
                  className="bg-gradient-ocean hover:bg-ocean-dark text-white shadow-nautical"
                >
                  Ver Carta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;