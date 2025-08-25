import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '/lovable-uploads/bd4582cc-ddef-4282-9a7b-0cc2ff3c0b12.png';

interface HeroSectionProps {
  onNavigateToMenu: () => void;
}

const HeroSection = ({ onNavigateToMenu }: HeroSectionProps) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="El Carajo Beach Bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-script text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg">
            El Carajo
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-2 drop-shadow-md">
            Tu bar de playa para cerveza fría y buenas tapas
          </p>
          
          <p className="text-sm md:text-base opacity-90 mb-8 font-light italic">
            El mar, los barcos y la buena compañía
          </p>

          <div className="flex justify-center">
            <Button 
              onClick={onNavigateToMenu}
              size="lg"
              className="bg-wood hover:bg-wood-dark text-white shadow-beer text-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
            >
              Ver Carta
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white opacity-70" size={24} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;