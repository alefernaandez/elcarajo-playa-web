import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Beer, Utensils, AlertTriangle, ArrowRight } from 'lucide-react';
import coldBeerImage from '@/assets/cold-beer.jpg';
import tapasImage from '@/assets/spanish-tapas.jpg';
import { useNavigate } from 'react-router-dom';

const MenuSection = () => {
  const navigate = useNavigate();

  const popularItems = [
    'Jamón Ibérico',
    'Caña',
    'Patatas bravas',
    'Pulpo a la gallega'
  ];

  return (
    <section id="carta" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-4">
            Nuestra Carta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sabores auténticos del sur, con el mejor pescado fresco y cerveza bien fría
          </p>
        </div>

        {/* Featured Buttons */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden shadow-nautical">
            <CardContent className="p-0">
              <button 
                onClick={() => navigate('/carta/bebida')}
                className="relative w-full h-64 group"
                aria-label="Ver carta de bebidas"
              >
                <img 
                  src={'/Bebida.jpg'}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = coldBeerImage; }}
                  alt="Carta de bebidas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <Beer className="w-5 h-5" />
                    <h3 className="font-script text-2xl font-bold">Carta de Bebidas</h3>
                  </div>
                  <span className="inline-flex items-center text-sm opacity-90 group-hover:underline">
                    Ver bebidas <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-nautical">
            <CardContent className="p-0">
              <button 
                onClick={() => navigate('/carta/comida')}
                className="relative w-full h-64 group"
                aria-label="Ver carta de comida"
              >
                <img 
                  src={'/Comida.jpg'}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = tapasImage; }}
                  alt="Carta de comida"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <Utensils className="w-5 h-5" />
                    <h3 className="font-script text-2xl font-bold">Carta de Comida</h3>
                  </div>
                  <span className="inline-flex items-center text-sm opacity-90 group-hover:underline">
                    Ver platos <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </button>
            </CardContent>
          </Card>
        </div>

        {/* No category grid here; redirigimos a páginas específicas */}

        {/* Banner de alergias más original */}
        <div className="mt-12">
          <Card className="border-dashed border-2 border-sand bg-white/60">
            <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 text-ocean">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold">¿Alergias o preferencias?</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Dínoslo y te guiamos como buen capitán de mesa. ¡Sin sorpresas, solo disfrute!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;